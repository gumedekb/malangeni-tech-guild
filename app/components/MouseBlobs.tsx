"use client";

import { useEffect, useRef } from "react";

// Large blurred gradient circles that drift slowly toward the cursor.
// Purely decorative: skipped on touch devices and for reduced-motion users.
export default function MouseBlobs() {
  const refA = useRef<HTMLDivElement>(null);
  const refB = useRef<HTMLDivElement>(null);
  const refC = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 3;

    const blobs = [
      { el: refA.current, x: targetX, y: targetY, speed: 0.05, offsetX: -180, offsetY: -140 },
      { el: refB.current, x: targetX, y: targetY, speed: 0.028, offsetX: 160, offsetY: 40 },
      { el: refC.current, x: targetX, y: targetY, speed: 0.015, offsetX: -60, offsetY: 200 },
    ].filter((b) => b.el !== null);

    const onMove = (e: PointerEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    let raf = 0;
    const tick = () => {
      for (const blob of blobs) {
        blob.x += (targetX + blob.offsetX - blob.x) * blob.speed;
        blob.y += (targetY + blob.offsetY - blob.y) * blob.speed;
        blob.el!.style.transform = `translate3d(${blob.x}px, ${blob.y}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        ref={refA}
        className="absolute left-0 top-0 h-[28rem] w-[28rem] rounded-full bg-emerald-500/10 blur-3xl will-change-transform dark:bg-emerald-500/15"
      />
      <div
        ref={refB}
        className="absolute left-0 top-0 h-[22rem] w-[22rem] rounded-full bg-cyan-500/10 blur-3xl will-change-transform dark:bg-cyan-500/12"
      />
      <div
        ref={refC}
        className="absolute left-0 top-0 h-[18rem] w-[18rem] rounded-full bg-teal-500/8 blur-3xl will-change-transform dark:bg-teal-500/10"
      />
    </div>
  );
}
