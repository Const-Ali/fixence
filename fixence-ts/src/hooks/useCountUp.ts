// src/hooks/useCountUp.ts
import { useEffect, useState } from "react";

export function useCountUp(
  target: number,
  start: boolean,
  duration = 2000,
): number {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    let rafId = 0;
    let cancelled = false;

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const step = (timestamp: number) => {
      if (cancelled) return;

      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const nextValue =
        progress === 1 ? target : Math.round(easeOutCubic(progress) * target);

      setValue((current) => (current === nextValue ? current : nextValue));

      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      }
    };

    rafId = requestAnimationFrame(step);

    return () => {
      cancelled = true;
      cancelAnimationFrame(rafId);
    };
  }, [start, target, duration]);

  return value;
}
