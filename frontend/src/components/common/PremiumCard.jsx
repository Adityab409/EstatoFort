import { motion } from "framer-motion";
import React from "react";

/**
 * PremiumCard – a minimal, premium‑looking card component.
 * It provides an ultra‑thin border, subtle rounded corners and a gentle lift on hover.
 * All styling uses the CSS variables defined in theme.css for easy theming.
 */
export default function PremiumCard({ children, className = "", variant = "default" }) {
  const baseClasses = "bg-white dark:bg-slate-900 rounded-md border border-[var(--color-border)] overflow-hidden transition-shadow duration-200";
  const variantClasses = {
    default: "shadow-sm hover:shadow-md",
    elevated: "shadow-md hover:shadow-lg",
  };

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      className={`${baseClasses} ${variantClasses[variant] || ""} ${className}`}
    >
      {children}
    </motion.div>
  );
}
