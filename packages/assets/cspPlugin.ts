import { existsSync, readFileSync, writeFileSync } from 'fs';
import { createHash } from 'node:crypto';
import { resolve } from 'path';
import type { Plugin } from 'vite';

/**
 * CSP Plugin: Automatically generates and injects Content Security Policy
 * directly into the HTML after React Router generates it. SPA mode only.
 */
export default function cspPlugin(): Plugin {
  return {
    name: 'auto-csp',
    apply: 'build' as const,
    closeBundle() {
      const htmlPath = resolve('build/client/index.html');

      try {
        if (!existsSync(htmlPath)) {
          return;
        }

        const html = readFileSync(htmlPath, 'utf8');

        const scriptHashes: string[] = [];

        const inlineScriptRegex =
          /<script(?![^>]*src=)[^>]*>([\s\S]*?)<\/script>/gi;
        let match;

        while ((match = inlineScriptRegex.exec(html)) !== null) {
          if (match.length > 1 && match[1]) {
            const scriptContent = match[1].trim();
            if (scriptContent) {
              const hash = createHash('sha256')
                .update(scriptContent, 'utf8')
                .digest('base64');
              scriptHashes.push(`'sha256-${hash}'`);
            }
          }
        }

        const cspDirectives = [
          "default-src 'none'",
          `script-src 'self' 'unsafe-eval' ${scriptHashes.join(' ')}`,
          "style-src 'self'",
          "img-src 'self' data: https:",
          "font-src 'self'",
          "connect-src 'self'",
          "form-action 'self'",
          "base-uri 'self'",
          "object-src 'none'",
          'upgrade-insecure-requests',
          'block-all-mixed-content',
        ];

        const cspPolicy = cspDirectives.join('; ');

        const cspMeta = `<meta http-equiv="Content-Security-Policy" content="${cspPolicy}"/>`;

        const updatedHtml = html.replace(
          /<meta\s+charSet="utf-8"\s*\/?>/,
          match => `${match}${cspMeta}`
        );

        writeFileSync(htmlPath, updatedHtml);

        console.info(
          `CSP: Generated policy with ${scriptHashes.length} script hashes`
        );
        console.info(`CSP: Injected CSP into ${htmlPath}`);
      } catch (error) {
        console.error('CSP: Error processing HTML:', error);
      }
    },
  };
}
