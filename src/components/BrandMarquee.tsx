import { motion } from "framer-motion";

const BrandMarquee = () => {
  // Sample brand names - replace with actual logos
  const brands = [
    "Stripe", "Shopify", "Netflix", "Spotify", "Adobe", 
    "Airbnb", "Uber", "Meta", "Google", "Amazon",
    "Microsoft", "Apple", "Tesla", "Nike", "Slack"
  ];

  return (
    <div className="w-full overflow-hidden bg-gradient-to-r from-background via-card to-background py-12 border-y border-primary/20">
      <div className="relative flex">
        <motion.div
          className="flex gap-12 pr-12"
          animate={{
            x: [0, -1920],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {[...brands, ...brands, ...brands].map((brand, index) => (
            <div
              key={index}
              className="flex items-center justify-center min-w-[180px] h-20 px-8 rounded-xl bg-card/50 border border-primary/10 backdrop-blur-sm"
            >
              <span className="text-xl font-semibold text-foreground/80 whitespace-nowrap">
                {brand}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default BrandMarquee;
