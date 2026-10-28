import { Transition, Variants } from "motion/react";

// Apple WWDC Designing Fluid Interfaces: Critically Damped Baseline (no bounce)
export const settleSpring: Transition = {
  type: "spring",
  stiffness: 160,
  damping: 24,
  mass: 0.8,
};

// Tactile Gesture Response: Subtle natural give on pointerdown / active release
export const tactileSpring: Transition = {
  type: "spring",
  stiffness: 240,
  damping: 18,
  mass: 0.5,
};

// Gentle Ambient Floating for Watermark Backgrounds
export const ambientFloat: Transition = {
  type: "spring",
  stiffness: 40,
  damping: 15,
  mass: 1.2,
};

// Staggered Container for Lists, Cards, and Roster Chips
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.08,
    },
  },
};

// Fade up item variant using spring physics
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: settleSpring,
  },
};
