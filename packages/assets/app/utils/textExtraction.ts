import type { ReactNode } from 'react';

/**
 * Extracts plain text from a React node for use in contexts that don't support JSX.
 * Handles strings, numbers, and nested React elements by recursively extracting text content.
 */
export function extractTextFromReactNode(node: ReactNode): string {
  if (node === null || node === undefined || typeof node === 'boolean') {
    return '';
  }

  if (typeof node === 'string' || typeof node === 'number') {
    return String(node);
  }

  if (Array.isArray(node)) {
    return node.map(extractTextFromReactNode).join('');
  }

  if (typeof node === 'object' && 'props' in node) {
    const element = node as { props?: { children?: ReactNode } };
    return extractTextFromReactNode(element.props?.children);
  }

  return '';
}
