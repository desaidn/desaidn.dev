import { useState } from 'react';

interface UseMobileAnimationOptions {
  animationDuration?: number;
}

interface UseMobileAnimationReturn {
  isActive: boolean;
  handleClick: (event: React.MouseEvent, onNavigate: () => void) => void;
}

interface UseMobileAnimationWithIdOptions {
  animationDuration?: number;
}

interface UseMobileAnimationWithIdReturn {
  activeId: string | null;
  handleClick: (
    event: React.MouseEvent,
    id: string,
    onNavigate: () => void
  ) => void;
}

export function useMobileAnimationWithId(
  options: UseMobileAnimationWithIdOptions = {}
): UseMobileAnimationWithIdReturn {
  const { animationDuration = 300 } = options;
  const [activeId, setActiveId] = useState<string | null>(null);

  const handleClick = (
    event: React.MouseEvent,
    id: string,
    onNavigate: () => void
  ) => {
    // Check if it's a touch device (mobile)
    const isTouchDevice =
      'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (isTouchDevice) {
      // Mobile behavior: show animation then navigate
      event.preventDefault();
      setActiveId(id);

      // Navigate after animation completes
      setTimeout(() => {
        onNavigate();
      }, animationDuration);
    } else {
      // Desktop behavior: navigate immediately
      onNavigate();
    }
  };

  return {
    activeId,
    handleClick,
  };
}

export default function useMobileAnimation(
  options: UseMobileAnimationOptions = {}
): UseMobileAnimationReturn {
  const { animationDuration = 300 } = options;
  const [isActive, setIsActive] = useState(false);

  const handleClick = (event: React.MouseEvent, onNavigate: () => void) => {
    // Check if it's a touch device (mobile)
    const isTouchDevice =
      'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (isTouchDevice) {
      // Mobile behavior: show animation then navigate
      event.preventDefault();
      setIsActive(true);

      // Navigate after animation completes
      setTimeout(() => {
        onNavigate();
      }, animationDuration);
    } else {
      // Desktop behavior: navigate immediately
      onNavigate();
    }
  };

  return {
    isActive,
    handleClick,
  };
}
