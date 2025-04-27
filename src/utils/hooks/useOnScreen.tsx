"use client"

import { useState, useEffect } from 'react';

function throttle<T extends unknown[]>(fn: (...args: T) => void, wait: number) {
  let last = 0;
  return (...args: T) => {
    const now = Date.now();
    if (now - last >= wait) {
      fn(...args);
      last = now;
    }
  };
}

export function useOnScreen(
  ref: React.RefObject<Element | null>,
  options: IntersectionObserverInit = {},
  throttleMs: number = 0
): boolean {

  const [isVisible, setIsVisible] = useState(false);
  const optionsString = JSON.stringify(options);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      const entry = entries[0];
      if (throttleMs > 0) {
        throttled(entry);
      } else {
        setIsVisible(entry.isIntersecting);
      }
    };

    const throttled = throttle((entry: IntersectionObserverEntry) => {
      setIsVisible(entry.isIntersecting);
    }, throttleMs);


    const observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(element);
    return () => observer.disconnect();
  }, [ref, optionsString, throttleMs]);

  return isVisible;
}