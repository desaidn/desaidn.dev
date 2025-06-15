import { useEffect, useRef, useState } from 'react';

export default function useHeightAnimation(
  isOpen: boolean,
  duration: number = 300
) {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | 'auto'>(0);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    const updateHeight = () => {
      if (isOpen) {
        const currentHeight = element.offsetHeight;
        setHeight(currentHeight);

        requestAnimationFrame(() => {
          const scrollHeight = element.scrollHeight;
          setHeight(scrollHeight);

          setTimeout(() => {
            if (isOpen) {
              setHeight('auto');
            }
          }, duration);
        });
      } else {
        const currentHeight = element.scrollHeight;
        setHeight(currentHeight);

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
      overflow: 'hidden',
      transition: `height ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
    },
  };
}
