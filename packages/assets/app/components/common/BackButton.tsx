import { memo, type ReactElement } from 'react';
import { useNavigate } from 'react-router';
import useMobileAnimation from '../../hooks/useMobileAnimation';

interface BackButtonProps {
  to: string;
  label?: string;
  ariaLabel?: string;
}

const BackButton = memo(
  ({ to, label = 'Back', ariaLabel }: BackButtonProps): ReactElement => {
    const navigate = useNavigate();
    const { isActive, handleClick } = useMobileAnimation({
      animationDuration: 200,
    });

    return (
      <button
        onClick={e => handleClick(e, () => void navigate(to))}
        className={`group flex items-start gap-2 transition-all duration-200 ease-out active:scale-95 focus:outline-none focus:ring-2 focus:ring-gray-700/50 focus:ring-offset-2 focus:ring-offset-transparent rounded-lg cursor-pointer ${
          isActive
            ? 'text-green-400 translate-x-[-2px]'
            : 'text-gray-400 hover:text-green-400 hover:translate-x-[-2px]'
        }`}
        aria-label={ariaLabel ?? `Go back to ${to === '/' ? 'home page' : to}`}
      >
        <svg
          className={`w-5 h-5 transition-transform duration-200 ${
            isActive ? 'translate-x-[-2px]' : 'group-hover:translate-x-[-2px]'
          }`}
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
);

export default BackButton;
