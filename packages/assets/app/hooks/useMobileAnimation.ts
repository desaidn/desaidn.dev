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

/**
 * Hook for multiple interactive elements. Tracks which item is active by ID.
 * Desktop: immediate navigation. Mobile: animate then navigate.
 * @example
 * const { activeId, handleClick } = useMobileAnimationWithId();
 * <button onClick={e => handleClick(e, item.id, () => navigate(item.path))}>
 */
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
    const isTouchDevice =
      'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (isTouchDevice) {
      event.preventDefault();
      setActiveId(id);
      setTimeout(() => {
        onNavigate();
      }, animationDuration);
    } else {
      onNavigate();
    }
  };

  return {
    activeId,
    handleClick,
  };
}

/**
 * Hook for single interactive element. Tracks boolean active state.
 * Desktop: immediate navigation. Mobile: animate then navigate.
 * @example
 * const { isActive, handleClick } = useMobileAnimation();
 * <button onClick={e => handleClick(e, () => navigate('/back'))}>
 */
export default function useMobileAnimation(
  options: UseMobileAnimationOptions = {}
): UseMobileAnimationReturn {
  const { animationDuration = 300 } = options;
  const [isActive, setIsActive] = useState(false);

  const handleClick = (event: React.MouseEvent, onNavigate: () => void) => {
    const isTouchDevice =
      'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (isTouchDevice) {
      event.preventDefault();
      setIsActive(true);
      setTimeout(() => {
        onNavigate();
      }, animationDuration);
    } else {
      onNavigate();
    }
  };

  return {
    isActive,
    handleClick,
  };
}
