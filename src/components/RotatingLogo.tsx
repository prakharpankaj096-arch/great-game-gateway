"use client";

import { motion } from "framer-motion";

type RotatingLogoProps = {
  variant?: "default" | "hero";
};

const RotatingLogo = ({ variant = "default" }: RotatingLogoProps) => {
  const isHero = variant === "hero";

  return (
    <div
      className={`
        flex
        ${isHero ? "flex-col items-center gap-12" : "items-center gap-4"}
      `}
    >
      {/* Infinity Card */}
      <motion.div
        className={`
          relative flex items-center justify-center
          ${isHero ? "w-[260px] h-[260px]" : "w-[180px] h-[180px]"}
          rounded-[60px]
        `}
        style={{
          background: "linear-gradient(135deg, #1a1a2e 0%, #0f0f1e 50%, #16213e 100%)",
          border: "5px solid rgba(45, 71, 217, 0.4)",
          boxShadow: `
            0 0 40px rgba(100, 120, 255, 0.6),
            0 0 80px rgba(100, 120, 255, 0.4),
            0 20px 40px rgba(0, 0, 0, 0.7),
            inset 0 0 60px rgba(100, 120, 255, 0.1)
          `,
        }}
        whileHover={{
          scale: 1.05,
          boxShadow: `
            0 0 50px rgba(100, 120, 255, 0.8),
            0 0 100px rgba(100, 120, 255, 0.5),
            0 20px 50px rgba(0, 0, 0, 0.8),
            inset 0 0 80px rgba(100, 120, 255, 0.15)
          `,
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Infinity Symbol */}
        <motion.svg

          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 100"
          width={isHero ? "400px" : "150px"}
          height={isHero ? "240px" : "150px"}
          style={{
            filter:
              "drop-shadow(0 0 50px rgba(26, 7, 72, 0.8)) drop-shadow(0 0 50px rgba(84, 20, 119, 0.9))",
          }}
        >
          <motion.path
            d="
      M 40 50
      C 40 20, 90 20, 100 50
      C 110 80, 160 80, 160 50
      C 160 20, 110 20, 100 50
      C 90 80, 40 80, 40 50
    "
            fill="none"
            stroke="url(#grad)"
            strokeWidth="14"
            strokeLinecap="round"
            initial={{ pathLength: 0, pathOffset: 1 }}
            whileInView={{
              pathLength: 1,
              pathOffset: 0,
            }}
            viewport={{ once: false }}
            transition={{
              duration: 3,
              ease: "linear",
            }}
          />

          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#dff1ff" />
              <stop offset="100%" stopColor="#caa9ff" />
            </linearGradient>
          </defs>


        </motion.svg>
      </motion.div>


    </div >
  );
};

export default RotatingLogo;
