import { useEffect, useState } from "react";

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), 200);
    const removeTimer = setTimeout(() => setVisible(false), 500);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="se-pre-con"
      style={{ transition: "opacity 0.3s ease", opacity: fading ? 0 : 1, pointerEvents: "none" }}
    />
  );
}
