import { motion } from "framer-motion";
import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

interface ProcessCardProps {
  number: string;
  icon: ReactNode;
  title: string;
  subtitle: string;
  description: string;
  activities: string[];
  duration: string;
  isActive: boolean;
  opacity: number;
  scale: number;
}

const ProcessCard = ({
  number,
  icon,
  title,
  subtitle,
  description,
  activities,
  duration,
  isActive,
  opacity,
  scale,
}: ProcessCardProps) => {
  return (
    <motion.div
      style={{
        opacity,
        scale,
      }}
      className={`
        relative rounded-2xl overflow-hidden
        transition-all duration-500
        ${
          isActive
            ? "shadow-[0_0_60px_hsl(var(--primary)/0.6)]"
            : "shadow-[0_0_20px_hsl(var(--primary)/0.2)]"
        }
      `}
    >
      {/* Card Border Glow */}
      <div
        className={`
          absolute inset-0 rounded-2xl
          transition-all duration-500
          ${
            isActive
              ? "border-2 border-primary/60"
              : "border border-primary/20"
          }
        `}
      />

      {/* Background Gradient */}
      <div
        className={`
          absolute inset-0 rounded-2xl
          bg-gradient-to-br from-card/80 via-card/60 to-card/80
          backdrop-blur-sm
          transition-all duration-500
          ${
            isActive
              ? "from-primary/20 via-card/80 to-primary-glow/20"
              : ""
          }
        `}
      />

      {/* Radial Glow Effect */}
      {isActive && (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/0.3),transparent_60%)] pointer-events-none" />
      )}

      {/* Content */}
      <div className="relative z-10 p-8 md:p-10">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Side - Step Info */}
          <div className="flex flex-col justify-center">
            <motion.div
              className="text-7xl md:text-8xl font-bold text-primary/20 mb-4"
              animate={{ opacity: isActive ? 0.3 : 0.15 }}
              transition={{ duration: 0.5 }}
            >
              {number}
            </motion.div>

            <motion.div
              className="mb-6"
              animate={{ scale: isActive ? 1.1 : 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {icon}
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-3 text-foreground">
              {title}
            </h2>

            <p
              className={`
              text-lg md:text-xl font-semibold mb-4
              transition-colors duration-500
              ${isActive ? "text-primary" : "text-primary/70"}
            `}
            >
              {subtitle}
            </p>

            <p className="text-muted-foreground mb-6 text-base md:text-lg leading-relaxed">
              {description}
            </p>

            <div
              className={`
              inline-flex items-center text-sm font-semibold
              transition-all duration-500
              ${isActive ? "text-primary" : "text-primary/60"}
            `}
            >
              <span>Duration: {duration}</span>
            </div>
          </div>

          {/* Right Side - Activities */}
          <div className="flex flex-col justify-center">
            <h3 className="font-semibold mb-6 text-lg text-foreground">
              What Happens:
            </h3>
            <div className="space-y-4">
              {activities.map((activity, i) => (
                <motion.div
                  key={i}
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{
                    opacity: isActive ? 1 : 0.6,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: isActive ? i * 0.05 : 0,
                    ease: "easeOut",
                  }}
                >
                  <ArrowRight
                    className={`
                      h-5 w-5 flex-shrink-0 mt-0.5
                      transition-colors duration-500
                      ${isActive ? "text-primary" : "text-primary/50"}
                    `}
                  />
                  <span className="text-muted-foreground text-sm md:text-base">
                    {activity}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProcessCard;
