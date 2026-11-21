"use client";

import { useEffect, useRef, useState } from "react";

export default function Reveal({
  children,
  className = "",
  delay = 0,
  as: Element = "div",
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return undefined;
    }

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.14, rootMargin: "0px 0px -36px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const animationClasses = isVisible
    ? "translate-y-0 opacity-100"
    : "translate-y-6 opacity-0";

  return (
    <Element
      ref={ref}
      className={`transition-all duration-700 ease-out motion-reduce:transform-none motion-reduce:opacity-100 motion-reduce:transition-none ${animationClasses} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Element>
  );
}
