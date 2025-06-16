import type { ReactNode } from 'react';

export interface LinkProps {
  children: ReactNode;
  href: string;
  external?: boolean;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

export default function Link({
  children,
  href,
  external = true,
  className,
  onClick,
}: LinkProps) {
  const externalProps = external
    ? {
        target: '_blank',
        rel: 'noopener noreferrer',
      }
    : {};

  const defaultClassName =
    'block text-green-400 hover:text-gray-300 transition-colors underline underline-offset-4';

  return (
    <a
      href={href}
      {...externalProps}
      className={className || defaultClassName}
      onClick={onClick}
    >
      {children}
    </a>
  );
}
