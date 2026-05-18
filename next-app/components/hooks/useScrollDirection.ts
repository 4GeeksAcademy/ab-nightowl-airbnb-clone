"use client";

import { useEffect, useRef, useState } from "react";

export default function useScrollDirection(threshold = 12) {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastY.current;

      if (Math.abs(delta) > threshold) {
        setIsScrollingDown(delta > 0 && currentY > 20);
        lastY.current = currentY;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return isScrollingDown;
}
