// src/components/ComputerIcon.js
import { motion } from "framer-motion";

export default function ComputerIcon({ className = "" }) {
  return (
    <motion.svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Computer Body */}
      <rect x="6" y="10" width="36" height="24" rx="4" fill="#374151" />
      {/* Screen */}
      <motion.rect
        x="10"
        y="14"
        width="28"
        height="16"
        rx="2"
        animate={{
          fill: [
            "#111827", // off
            "#1b8c31", // on
            "#111827"  // off
          ]
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.5, 1],
        }}
      />
      {/* Stand */}
      <rect x="20" y="36" width="8" height="3" rx="1.5" fill="#9CA3AF" />
      <rect x="16" y="40" width="16" height="2" rx="1" fill="#6B7280" />
    </motion.svg>
  );
}
