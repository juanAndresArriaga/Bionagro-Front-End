import { useEffect, useRef, useState } from "react";

interface CounterProps {
  to: number;
  suffix?: string;
  duration?: number;
}

export default function Counter({ to, suffix = "", duration = 1500 }: CounterProps) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const progress = Math.min((now - start) / duration, 1);
              setValue(Math.round(progress * to));
              if (progress < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [to, duration]);

  return (
    <div className="timer" ref={ref}>
      {value}
      {suffix}
    </div>
  );
}
