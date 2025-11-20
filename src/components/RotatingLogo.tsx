"use client";

import { motion } from "framer-motion";

type RotatingLogoProps = {
  /** Tailwind size classes for the square logo container */
  size?: string;
};

const RotatingLogo = ({ size = "w-24 h-24 md:w-28 md:h-28" }: RotatingLogoProps) => {
  return (
    <div className="flex items-center gap-4">
      {/* Icon tile */}
      <div
        className={`
          relative flex items-center justify-center
          rounded-[32px]
          bg-[#050514]
          shadow-[0_0_40px_rgba(88,101,242,0.6)]
          ${size}
        `}
      >
        {/* Glow / gradient overlay */}
        <div
          className="
            pointer-events-none absolute inset-0 rounded-[32px]
            bg-[radial-gradient(circle_at_30%_0%,rgba(96,165,250,0.6),transparent),radial-gradient(circle_at_70%_100%,rgba(192,132,252,0.6),transparent)]
            opacity-70
          "
        />

        {/* Only the infinity symbol rotates */}
        <motion.span
          className="
            relative text-4xl md:text-5xl font-semibold
            text-white
          "
          animate={{ rotate: 360 }}
          transition={{
            duration: 12,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          ∞
        </motion.span>
      </div>

      {/* Wordmark */}
      <span className="text-3xl md:text-4xl font-semibold gradient-text tracking-tight">
        g8g
      </span>
    </div>
  );
};

export default RotatingLogo;
