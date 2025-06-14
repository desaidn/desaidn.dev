import { existsSync, readFileSync, writeFileSync } from 'fs';
import { createHash } from 'node:crypto';
import { resolve } from 'path';
import type { Plugin } from 'vite';

/**
 * CSP Plugin: Automatically generates and injects Content Security Policy
 * directly into the HTML after React Router generates it
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
          const scriptContent = match[1].trim();
          if (scriptContent) {
            const hash = createHash('sha256')
              .update(scriptContent, 'utf8')
              .digest('base64');
            scriptHashes.push(`'sha256-${hash}'`);
          }
        }

        const cspDirectives = [
          "default-src 'none'",
          `script-src 'self' ${scriptHashes.join(' ')}`,
          "style-src 'self' https://fonts.googleapis.com",
          "img-src 'self' data: https:",
          "font-src 'self' https://fonts.gstatic.com",
          "connect-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com",
          "form-action 'self'",
          "base-uri 'self'",
          "object-src 'none'",
          'upgrade-insecure-requests',
          'block-all-mixed-content',
        ];

        const cspPolicy = cspDirectives.join('; ');

        // Inject CSP meta tag (minified format)
        const cspMeta = `<meta http-equiv="Content-Security-Policy" content="${cspPolicy}"/>`;

        // Insert after charset meta tag (handles minified HTML)
        const updatedHtml = html.replace(
          /<meta\s+charSet="utf-8"\s*\/?>/,
          match => `${match}${cspMeta}`
        );

        writeFileSync(htmlPath, updatedHtml);

        console.log(
          `🔒 Auto-CSP: Generated policy with ${scriptHashes.length} script hashes`
        );
        console.log(`🔒 Auto-CSP: Injected CSP into ${htmlPath}`);
      } catch (error) {
        console.error('🔒 Auto-CSP: Error processing HTML:', error);
      }
    },
  };
}
