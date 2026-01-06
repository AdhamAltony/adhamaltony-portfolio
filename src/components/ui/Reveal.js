'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '../../lib/utils';

export default function Reveal({
  as: Component = 'div',
  children,
  className,
  delay = 0,
  direction = 'up',
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <Component
      ref={ref}
      className={cn(
        'reveal',
        `reveal-${direction}`,
        isVisible && 'reveal-visible',
        className
      )}
      style={{ '--reveal-delay': `${delay}ms` }}
    >
      {children}
    </Component>
  );
}
