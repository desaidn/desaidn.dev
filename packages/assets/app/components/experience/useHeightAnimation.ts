import { useEffect, useRef, useState } from "react";

export function useHeightAnimation(isOpen: boolean, duration: number = 300) {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | "auto">(0);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    const updateHeight = () => {
      if (isOpen) {
        // First, set height to current height to enable transition
        const currentHeight = element.offsetHeight;
        setHeight(currentHeight);

        // Force browser reflow
        element.offsetHeight;

        // Then animate to full height
        requestAnimationFrame(() => {
          const scrollHeight = element.scrollHeight;
          setHeight(scrollHeight);

          // After animation completes, set to auto for responsive behavior
          setTimeout(() => {
            if (isOpen) {
              setHeight("auto");
            }
          }, duration);
        });
      } else {
        // For closing, first set to current height, then to 0
        const currentHeight = element.scrollHeight;
        setHeight(currentHeight);

        // Force browser reflow
        element.offsetHeight;

        requestAnimationFrame(() => {
          setHeight(0);
        });
      }
    };

    updateHeight();
  }, [isOpen, duration]);

  return {
    ref,
    style: {
      height,
      overflow: "hidden",
      transition: `height ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
    },
  };
}
