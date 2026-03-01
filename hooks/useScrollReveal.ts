"use client";

import { useEffect, useRef } from "react";

export function useScrollReveal(
  selector: string,
  options?: IntersectionObserverInit
) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.setAttribute("data-visible", "true");
          observer.unobserve(entry.target);
        }
      });
    }, options);

    container.querySelectorAll(selector).forEach((el) => observer.observe(el));

    return () => observer.disconnect();
    // options is passed by value at call site — no need to add to deps
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selector]);

  return containerRef;
}
