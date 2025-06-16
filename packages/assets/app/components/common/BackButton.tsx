import type { ReactElement } from 'react';
import { useNavigate } from 'react-router';

interface BackButtonProps {
  to: string;
  label?: string;
  ariaLabel?: string;
}

export default function BackButton({
  to,
  label = 'Back',
  ariaLabel,
}: BackButtonProps): ReactElement {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => void navigate(to)}
      className="group flex items-start gap-2 text-gray-400 hover:text-green-400 transition-all duration-200 ease-out hover:translate-x-[-2px] active:scale-95 focus:outline-none focus:ring-2 focus:ring-gray-700/50 focus:ring-offset-2 focus:ring-offset-transparent rounded-lg cursor-pointer"
      aria-label={ariaLabel ?? `Go back to ${to === '/' ? 'home page' : to}`}
    >
      <svg
        className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-[-2px]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
      <span className="text-sm">{label}</span>
    </button>
  );
}
