"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
  id?: string;
  duration?: number;
};

export function FadeIn({
  children,
  className,
  delay = 0,
  distance = 24,
  id,
  duration = 0.42,
}: FadeInProps) {
  const reduceMotion = useReducedMotion();
  const [isMobileViewport, setIsMobileViewport] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const syncViewport = () => setIsMobileViewport(mediaQuery.matches);

    syncViewport();
    mediaQuery.addEventListener("change", syncViewport);

    return () => mediaQuery.removeEventListener("change", syncViewport);
  }, []);

  const useTransformMotion = !reduceMotion && !isMobileViewport;
  const resolvedDelay = Math.min(delay, 0.16);

  return (
    <motion.div
      id={id}
      className={className}
      initial={reduceMotion ? false : useTransformMotion ? { opacity: 0, y: distance } : { opacity: 0 }}
      whileInView={reduceMotion ? undefined : useTransformMotion ? { opacity: 1, y: 0 } : { opacity: 1 }}
      viewport={reduceMotion ? undefined : { once: true, amount: 0.08, margin: "0px 0px 12% 0px" }}
      transition={{ duration, ease: [0.16, 1, 0.3, 1], delay: resolvedDelay }}
      style={{
        backfaceVisibility: "hidden",
        transform: "translateZ(0)",
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerGroup({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : "hidden"}
      animate={reduceMotion ? undefined : "visible"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.05,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={
        reduceMotion
          ? undefined
          : {
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
              },
            }
      }
    >
      {children}
    </motion.div>
  );
}
