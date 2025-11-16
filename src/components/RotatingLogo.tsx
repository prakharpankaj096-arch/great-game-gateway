import { motion } from "framer-motion";

const RotatingLogo = ({ size = "text-7xl" }: { size?: string }) => {
  return (
    <div className="flex items-center justify-center space-x-3">
      <span className={`${size} font-bold gradient-text`}>g8g</span>
      <motion.span
        className={size}
        animate={{ rotate: 360 }}
        transition={{
          duration: 12,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        ♾
      </motion.span>
    </div>
  );
};

export default RotatingLogo;
