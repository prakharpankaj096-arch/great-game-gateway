import { motion } from "framer-motion";
import infinityLogo from "@/assets/infinity-logo.png";

const RotatingLogo = ({ size = "w-24 h-24" }: { size?: string }) => {
  return (
    <div className="flex items-center justify-center space-x-4">
      <span className="text-7xl font-bold gradient-text">g8g</span>
      <motion.img
        src={infinityLogo}
        alt="Infinity Logo"
        className={size}
        animate={{ rotate: 360 }}
        transition={{
          duration: 12,
          ease: "linear",
          repeat: Infinity,
        }}
      />
    </div>
  );
};

export default RotatingLogo;
