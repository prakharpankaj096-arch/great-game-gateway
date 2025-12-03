import { motion } from "framer-motion";

const BrandMarquee = () => {
  const brands = [
    { name: "Google", logo: "/brands/google.png" },
    { name: "Microsoft", logo: "/brands/microsoft.png" },
    { name: "Amazon", logo: "/brands/amazon.png" },
    { name: "Apple", logo: "/brands/apple.png" },
    { name: "Meta", logo: "/brands/meta.png" },
    { name: "Netflix", logo: "/brands/netflix.png" },
    { name: "Spotify", logo: "/brands/spotify.png" },
    { name: "Airbnb", logo: "/brands/airbnb.png" },
  ];

  return (
    <div className="w-full overflow-hidden bg-gradient-to-r from-background via-card to-background py-12 border-y border-primary/20">
      <div className="relative flex">
        <motion.div
          className="flex gap-16 pr-16"
          animate={{
            x: [0, -1920],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
        >
          {[...brands, ...brands, ...brands].map((brand, index) => (
            <div
              key={index}
              className="flex items-center justify-center min-w-[140px] h-20 px-6 rounded-xl bg-card/50 border border-primary/10 backdrop-blur-sm grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300 ease-out"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-10 w-auto object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default BrandMarquee;
