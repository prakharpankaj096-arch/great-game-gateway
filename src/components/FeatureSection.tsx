import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard";
import { LucideIcon } from "lucide-react";

interface Feature {
    title: string;
    description: string;
    icon?: LucideIcon;
}

interface FeatureSectionProps {
    title: string;
    description: string;
    features: Feature[];
    gradient?: string;
    align?: "left" | "right" | "center";
}

const FeatureSection = ({
    title,
    description,
    features,
    gradient = "from-white to-white",
    align = "left"
}: FeatureSectionProps) => {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/2 to-transparent" />
            <div className="container-custom mx-auto px-4 relative z-10">
                <div className={`max-w-3xl mb-16 ${align === "center" ? "mx-auto text-center" : ""}`}>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
                    >
                        {title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-muted-foreground leading-relaxed"
                    >
                        {description}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            {...feature}
                            delay={index * 0.05}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureSection;
