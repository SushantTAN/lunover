"use client"

"use client"

import { useOnScreen } from '@/utils/hooks/useOnScreen';
import React, { useRef, useState, useEffect, CSSProperties } from 'react';

interface FadeInOnViewProps {
  children: React.ReactNode;
  rootMargin?: string;
  threshold?: number;
  duration?: number;
  delay?: number;
  style?: CSSProperties;
  once?: boolean;
  throttleMs?: number;
}

const FadeInOnView: React.FC<FadeInOnViewProps> = ({
  children,
  rootMargin = '0px',
  threshold = 0.1,
  duration = 500,
  delay = 0,
  style = {},
  once = true,
  throttleMs = 0,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref, { rootMargin, threshold }, throttleMs);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setHasBeenVisible(true);
    }
  }, [isVisible]);

  const shouldShow = once ? hasBeenVisible : isVisible;
  const combined: CSSProperties = {
    opacity: shouldShow ? 1 : 0,
    transition: `opacity ${duration}ms ease-in-out ${delay}ms`,
    willChange: 'opacity',
    ...style,
  };

  return (
    <div ref={ref} style={combined}>
      {children}
    </div>
  );
};

export default FadeInOnView;