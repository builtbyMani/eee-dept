"use client";

import React, { useEffect, useRef, useSyncExternalStore } from "react";

function subscribeReducedMotion(callback: () => void) {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
    return () => {};
  }
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (mq?.addEventListener) {
    mq.addEventListener("change", callback);
    return () => mq.removeEventListener("change", callback);
  }
  return () => {};
}

function getReducedMotionSnapshot() {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
    return false;
  }
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

interface ArcSegment {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  alpha: number;
  width: number;
}

interface Spark {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  color: string;
}

interface ElementalLightningProps {
  children?: React.ReactNode;
  className?: string;
  glowColor?: string;
  sparkColor?: string;
  coreColor?: string;
}

export default function ElementalLightning({
  children,
  className = "",
  glowColor = "rgba(127, 1, 31, 0.7)",
  sparkColor = "#FF4D6D",
  coreColor = "#FFF5F7",
}: ElementalLightningProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );

  useEffect(() => {
    if (reducedMotion) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let animId = 0;
    let activeArcs: ArcSegment[] = [];
    let sparks: Spark[] = [];
    let mousePos = { x: -1000, y: -1000, active: false };

    const resize = () => {
      width = container.offsetWidth;
      height = container.offsetHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    const ro = new ResizeObserver(resize);
    ro.observe(container);
    resize();

    // Generate procedural jagged lightning path
    const createBranch = (
      x1: number,
      y1: number,
      x2: number,
      y2: number,
      depth: number = 0
    ) => {
      if (depth > 4) {
        activeArcs.push({ x1, y1, x2, y2, alpha: 1, width: Math.max(1, 3.2 - depth * 0.5) });
        return;
      }

      const dx = x2 - x1;
      const dy = y2 - y1;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 12) {
        activeArcs.push({ x1, y1, x2, y2, alpha: 1, width: Math.max(1, 3.2 - depth * 0.5) });
        return;
      }

      const midX = (x1 + x2) / 2;
      const midY = (y1 + y2) / 2;
      const normalX = -dy / dist;
      const normalY = dx / dist;
      const displacement = (Math.random() - 0.5) * dist * 0.45;

      const newMidX = midX + normalX * displacement;
      const newMidY = midY + normalY * displacement;

      createBranch(x1, y1, newMidX, newMidY, depth + 1);
      createBranch(newMidX, newMidY, x2, y2, depth + 1);

      // Sub-branch fork
      if (Math.random() < 0.28 && depth < 3) {
        const forkAngle = (Math.random() - 0.5) * 0.8;
        const forkLen = dist * (0.3 + Math.random() * 0.4);
        const cos = Math.cos(forkAngle);
        const sin = Math.sin(forkAngle);
        const dirX = (dx / dist) * cos - (dy / dist) * sin;
        const dirY = (dx / dist) * sin + (dy / dist) * cos;
        const endX = newMidX + dirX * forkLen;
        const endY = newMidY + dirY * forkLen;
        createBranch(newMidX, newMidY, endX, endY, depth + 2);
      }
    };

    const triggerStrike = (startX?: number, startY?: number, endX?: number, endY?: number) => {
      if (width <= 0 || height <= 0) return;

      const x1 = startX ?? Math.random() * width * 0.25;
      const y1 = startY ?? Math.random() * height * 0.3 + height * 0.1;
      const x2 = endX ?? Math.random() * width * 0.5 + width * 0.45;
      const y2 = endY ?? Math.random() * height * 0.6 + height * 0.3;

      createBranch(x1, y1, x2, y2);

      // Spawn burst sparks at strike node
      const sparkCount = 14 + Math.floor(Math.random() * 12);
      for (let i = 0; i < sparkCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 1.2 + Math.random() * 4.5;
        sparks.push({
          x: x2,
          y: y2,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 1,
          maxLife: 20 + Math.random() * 25,
          size: 1.5 + Math.random() * 2,
          color: Math.random() > 0.4 ? "#FF4D6D" : "#FFF5F7",
        });
      }
    };

    let lastStrike = Date.now();
    let nextStrikeInterval = 1800 + Math.random() * 1500;

    const onPointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      mousePos = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true,
      };

      if (Math.random() < 0.15) {
        triggerStrike(
          Math.random() * width * 0.3,
          height * 0.2,
          mousePos.x,
          mousePos.y
        );
      }
    };

    const onPointerLeave = () => {
      mousePos.active = false;
    };

    container.addEventListener("pointermove", onPointerMove);
    container.addEventListener("pointerdown", onPointerMove);
    container.addEventListener("pointerleave", onPointerLeave);

    const render = () => {
      animId = requestAnimationFrame(render);
      const now = Date.now();

      // Clear with slight trailing fade
      ctx.clearRect(0, 0, width, height);

      // Periodic natural strike
      if (now - lastStrike > nextStrikeInterval) {
        lastStrike = now;
        nextStrikeInterval = 2000 + Math.random() * 2200;
        triggerStrike();
      }

      // Draw arcs
      if (activeArcs.length > 0) {
        // Outer Wine Red Glow pass
        ctx.save();
        ctx.shadowColor = "#7F011F";
        ctx.shadowBlur = 18;
        ctx.strokeStyle = glowColor;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";

        for (const arc of activeArcs) {
          ctx.beginPath();
          ctx.lineWidth = arc.width * 2.8;
          ctx.moveTo(arc.x1, arc.y1);
          ctx.lineTo(arc.x2, arc.y2);
          ctx.stroke();
        }
        ctx.restore();

        // Crimson secondary glow
        ctx.save();
        ctx.strokeStyle = sparkColor;
        ctx.shadowColor = "#FF4D6D";
        ctx.shadowBlur = 8;
        ctx.lineCap = "round";

        for (const arc of activeArcs) {
          ctx.beginPath();
          ctx.lineWidth = arc.width * 1.4;
          ctx.moveTo(arc.x1, arc.y1);
          ctx.lineTo(arc.x2, arc.y2);
          ctx.stroke();
        }
        ctx.restore();

        // Intense White Core Breakdown pass
        ctx.save();
        ctx.strokeStyle = coreColor;
        ctx.lineCap = "round";
        for (const arc of activeArcs) {
          ctx.beginPath();
          ctx.lineWidth = Math.max(0.8, arc.width * 0.5);
          ctx.moveTo(arc.x1, arc.y1);
          ctx.lineTo(arc.x2, arc.y2);
          ctx.stroke();
        }
        ctx.restore();

        // Fade arcs quickly like real ionization discharge
        activeArcs = activeArcs
          .map((arc) => ({ ...arc, alpha: arc.alpha - 0.12 }))
          .filter((arc) => arc.alpha > 0);
      }

      // Draw and update sparks
      if (sparks.length > 0) {
        ctx.save();
        for (const spark of sparks) {
          spark.x += spark.vx;
          spark.y += spark.vy;
          spark.vy += 0.08; // subtle gravity
          spark.life -= 1 / spark.maxLife;

          if (spark.life > 0) {
            ctx.fillStyle = spark.color;
            ctx.shadowColor = spark.color;
            ctx.shadowBlur = 6;
            ctx.beginPath();
            ctx.arc(spark.x, spark.y, spark.size * spark.life, 0, Math.PI * 2);
            ctx.fill();
          }
        }
        ctx.restore();
        sparks = sparks.filter((s) => s.life > 0);
      }
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
      container.removeEventListener("pointermove", onPointerMove);
      container.removeEventListener("pointerdown", onPointerMove);
      container.removeEventListener("pointerleave", onPointerLeave);
    };
  }, [reducedMotion, glowColor, sparkColor, coreColor]);

  return (
    <div
      ref={containerRef}
      className={`relative inline-block w-full ${className}`}
    >
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 z-20 w-full h-full mix-blend-screen"
        aria-hidden="true"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
