import { useEffect, useRef, useState } from "react";

interface UseRevealOptions {
  once?: boolean;
  rootMargin?: string;
  threshold?: number;
}

/**
 * Small, dependency-free viewport reveal primitive.
 *
 * It intentionally only stores a boolean. Once an element has entered the
 * viewport it stops observing by default, which avoids keeping observers alive
 * for the rest of the page lifetime.
 */
export function useReveal<T extends Element = HTMLElement>({
  once = true,
  rootMargin = "0px",
  threshold = 0.15,
}: UseRevealOptions = {}) {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(
    () => typeof IntersectionObserver === "undefined",
  );

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    if (typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;

        if (entry.isIntersecting) {
          setIsVisible(true);

          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { rootMargin, threshold },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [once, rootMargin, threshold]);

  return { ref, isVisible };
}
