import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface ServiceCardProps {
    title: string;
    subtitle: string;
    pricing: string;
    description: string;
    features: string[];
    delay?: number;
}

const ServiceCard = ({
    title,
    subtitle,
    pricing,
    description,
    features,
    delay = 0,
}: ServiceCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay }}
            whileHover={{
                y: -8,
                scale: 1.01,
                transition: { duration: 0.3, ease: "easeOut" },
            }}
            className="group relative rounded-3xl bg-card/50 backdrop-blur-sm border border-border/40 p-8 md:p-10 transition-all duration-300 hover:border-white/20 hover:shadow-2xl hover:bg-black hover:text-white cursor-pointer overflow-hidden"
        >
            {/* Animated gradient background on hover */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Glow effect */}
            <div className="absolute -inset-1 rounded-3xl bg-white/5 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />

            <div className="relative z-10">
                {/* Header */}
                <div className="mb-6">
                    <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                            <h3 className="text-3xl md:text-4xl font-bold text-foreground group-hover:text-white transition-colors duration-300 mb-2">
                                {title}
                            </h3>
                            <p className="text-lg md:text-xl text-muted-foreground group-hover:text-secondary-foreground/80 transition-colors">
                                {subtitle}
                            </p>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                            <div className="text-right">
                                <div className="text-2xl md:text-3xl font-bold text-foreground bg-secondary px-4 py-2 rounded-xl border border-border group-hover:bg-white/10 group-hover:text-white transition-colors">
                                    {pricing}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Description */}
                <p className="text-base md:text-lg text-muted-foreground group-hover:text-secondary-foreground/70 transition-colors leading-relaxed mb-6">
                    {description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-6">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: delay + i * 0.05 }}
                            className="flex items-start gap-3"
                        >
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                            <span className="text-sm md:text-base text-foreground/80 group-hover:text-secondary-foreground">
                                {feature}
                            </span>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Arrow */}
                <div className="flex items-center justify-end">
                    <div className="flex items-center gap-2 text-foreground font-semibold opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-white transition-all duration-300">
                        <span className="text-sm md:text-base">Learn More</span>
                        <ArrowRight className="h-5 w-5" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ServiceCard;
