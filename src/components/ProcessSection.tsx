import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Lightbulb, Code, Rocket } from "lucide-react";
import ProcessCard from "./ProcessCard";
import SectionHeader from "./SectionHeader";

const ProcessSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress through the section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Process steps data
  const steps = [
    {
      number: "01",
      icon: <Lightbulb className="h-14 w-14 text-primary" />,
      title: "Plan",
      subtitle: "Understanding & Strategy",
      description:
        "We start by deeply understanding your vision, goals, and target users. Together, we define the core features, create user stories, and map out a clear product roadmap.",
      activities: [
        "Discovery call & requirement gathering",
        "Market research & competitor analysis",
        "Feature prioritization & MVP scope",
        "User experience design & wireframes",
        "Technical architecture planning",
        "Timeline & milestone definition",
      ],
      duration: "3-5 days",
    },
    {
      number: "02",
      icon: <Code className="h-14 w-14 text-primary" />,
      title: "Build",
      subtitle: "Development & Testing",
      description:
        "Our expert developers bring your product to life with clean, scalable code. We follow agile methodologies with regular check-ins to ensure we're building exactly what you need.",
      activities: [
        "Frontend & backend development",
        "Database setup & configuration",
        "API development & integration",
        "UI/UX implementation",
        "Quality assurance & testing",
        "Security & performance optimization",
      ],
      duration: "10-14 days",
    },
    {
      number: "03",
      icon: <Rocket className="h-14 w-14 text-primary" />,
      title: "Launch",
      subtitle: "Deployment & Growth",
      description:
        "We deploy your product to production, ensure everything runs smoothly, and provide support as you start acquiring users. Your success is our success.",
      activities: [
        "Production deployment",
        "Domain & hosting setup",
        "Final testing & quality checks",
        "User documentation & training",
        "Launch support & monitoring",
        "Post-launch iterations & improvements",
      ],
      duration: "2-3 days",
    },
  ];

  // Calculate which card is active based on scroll position
  // Divide scroll progress into thirds for 3 cards
  const activeIndex = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [0, 1, 2, 2]);

  // Create opacity and scale transforms for each card
  const getCardAnimations = (index: number) => {
    // Card becomes active when scroll reaches its section
    const start = index / 3;
    const middle = (index + 0.5) / 3;
    const end = (index + 1) / 3;

    const opacity = useTransform(
      scrollYProgress,
      [start, middle, end],
      [0.4, 1, 0.4]
    );

    const scale = useTransform(
      scrollYProgress,
      [start, middle, end],
      [0.92, 1.05, 0.92]
    );

    return { opacity, scale };
  };

  return (
    <section ref={containerRef} className="py-32 md:py-40 relative min-h-[300vh]">
      {/* Background Glow */}
      <div className="absolute inset-0 radial-glow pointer-events-none" />

      {/* Sticky Container for Cards */}
      <div className="sticky top-32 py-12">
        <div className="container-custom mx-auto px-4">
          {/* Section Header */}
          <SectionHeader
            title="How We Build Products"
            subtitle="A simple, transparent 3-step process that brings your vision to life"
            centered
          />

          {/* Cards Stack - All cards overlay each other */}
          <div className="relative max-w-6xl mx-auto">
            {steps.map((step, index) => {
              const { opacity, scale } = getCardAnimations(index);
              
              // Determine if this card is currently "most active"
              // We'll use the raw scrollYProgress to calculate this
              const progress = scrollYProgress.get();
              const cardStart = index / 3;
              const cardEnd = (index + 1) / 3;
              const isActive = progress >= cardStart && progress < cardEnd;

              return (
                <div
                  key={index}
                  className="absolute inset-0 w-full"
                  style={{
                    // Stack cards with slight offset
                    transform: `translateY(${index * 20}px)`,
                  }}
                >
                  <ProcessCard
                    {...step}
                    isActive={isActive}
                    opacity={opacity.get()}
                    scale={scale.get()}
                  />
                </div>
              );
            })}

            {/* Spacer to maintain height */}
            <div className="opacity-0 pointer-events-none">
              <ProcessCard
                {...steps[0]}
                isActive={false}
                opacity={0}
                scale={1}
              />
            </div>
          </div>

          {/* Progress Indicator */}
          <motion.div className="flex justify-center items-center gap-4 mt-16">
            {steps.map((_, index) => {
              const progress = scrollYProgress.get();
              const cardStart = index / 3;
              const cardEnd = (index + 1) / 3;
              const isActive = progress >= cardStart && progress < cardEnd;

              return (
                <motion.div
                  key={index}
                  className={`
                    h-2 rounded-full transition-all duration-500
                    ${isActive ? "w-12 bg-primary" : "w-8 bg-primary/30"}
                  `}
                  animate={{
                    scale: isActive ? 1.2 : 1,
                  }}
                />
              );
            })}
          </motion.div>

          {/* Step Labels */}
          <div className="grid grid-cols-3 gap-4 mt-8 max-w-3xl mx-auto">
            {steps.map((step, index) => {
              const progress = scrollYProgress.get();
              const cardStart = index / 3;
              const cardEnd = (index + 1) / 3;
              const isActive = progress >= cardStart && progress < cardEnd;

              return (
                <div key={index} className="text-center">
                  <p
                    className={`
                      text-sm md:text-base font-semibold transition-all duration-500
                      ${isActive ? "text-primary scale-110" : "text-muted-foreground"}
                    `}
                  >
                    {step.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
