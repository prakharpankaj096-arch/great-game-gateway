import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FlipCard from "@/components/FlipCard";
import ProductDesignStickyScroll from "@/components/ProductDesignStickyScroll";

const problems = [
  {
    title: "Building Products Nobody Wants",
    pain: "Building on assumptions wastes budget on features users don't need.",
    impact: "42% of startups fail due to no market need. Don't build beautiful but unusable products.",
    gradient: "from-red-500/10 via-orange-500/5 to-transparent",
  },
  {
    title: "Disconnect Between Design & Development",
    pain: "Siloed teams lead to broken user experiences and doubled timelines.",
    impact: "Products launch with bugs and poor performance, causing budget overruns.",
    gradient: "from-yellow-500/10 via-amber-500/5 to-transparent",
  },
  {
    title: "The MVP Trap",
    pain: "Struggling to balance viable and minimal leads to embarrassing launches.",
    impact: "Poor scoping causes immediate user bounce. 87% of launches fail to gain traction.",
    gradient: "from-white/5 via-white/5 to-transparent",
  },
];

const ProblemCard = ({ problem, index }: { problem: typeof problems[0]; index: number }) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.6, 0]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 5]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -20]);

  return (
    <div
      ref={container}
      style={{
        position: "sticky",
        top: "100px",
        marginBottom: "5vh",
        willChange: "transform",
      }}
    >
      <motion.div
        style={{
          scale,
          opacity,
          rotateX,
          y,
          willChange: "transform, opacity"
        }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.4,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      >
        {/* Card Container */}
        <div
          className="relative w-full rounded-3xl overflow-hidden border border-white/10"
          style={{
            zIndex: 10 + index,
            transform: "translateZ(0)",
          }}
        >
          {/* Solid Opaque Background */}
          <div
            className="absolute inset-0 rounded-3xl"
            style={{
              background: `hsl(var(--card))`,
              zIndex: 0,
            }}
          />

          {/* Gradient Overlay */}
          <div
            className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${problem.gradient} opacity-40`}
            style={{
              zIndex: 1,
            }}
          />

          {/* Additional opacity layer */}
          <div
            className="absolute inset-0 rounded-3xl"
            style={{
              background: `hsl(var(--card) / 0.7)`,
              zIndex: 2,
            }}
          />

          {/* Card Content */}
          <div className="relative p-12 md:p-16 lg:p-20 z-10">
            {/* Title */}
            <div className="mb-8">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-foreground">
                {problem.title}
              </h3>
            </div>

            {/* Pain */}
            <div className="mb-8">
              <h4 className="text-xl md:text-2xl font-bold text-foreground mb-3">The Pain:</h4>
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                {problem.pain}
              </p>
            </div>

            {/* Impact */}
            <div>
              <h4 className="text-xl md:text-2xl font-bold text-foreground mb-3">Client Impact:</h4>
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                {problem.impact}
              </p>
            </div>

            {/* Problem Number */}
            <div className="absolute top-8 right-8 md:top-12 md:right-12">
              <div className="text-9xl md:text-[12rem] font-bold text-foreground/5 select-none">
                {String(index + 1).padStart(2, "0")}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-foreground font-sans">
      <Navigation />

      {/* Hero Section - Full Page */}
      {/* Hero Section - Full Page */}
      {/* Hero Content moved to ProductDesignStickyScroll */}

      {/* Product Design Section - Full Bleed */}
      <section className="bg-background">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Product Design Section Content */}
            <div className="min-h-[600px] mb-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="space-y-12 pt-0 w-full">
                  {/* Sticky Scroll Section */}
                  <div className="w-full">
                    <ProductDesignStickyScroll />
                  </div>

                  {/* What You Get */}
                  <div className="border-t border-border pt-8">
                    <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground text-center">What You Get</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4 text-center max-w-3xl mx-auto">
                      Complete Figma files, interactive prototypes, scalable design system, and accessibility compliance. Everything you need to build with confidence.
                    </p>

                    {/* Video: Client Success & Process */}

                  </div>

                  {/* Investment */}
                  <div className="w-full">
                    <div className="bg-surface p-8 rounded-2xl border border-border/50 max-w-5xl mx-auto">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wider">Investment</p>
                          <p className="text-2xl font-bold text-foreground">$10,000-$85,000</p>
                          <p className="text-sm text-muted-foreground mt-1">depending on scope</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wider">Timeline</p>
                          <p className="text-2xl font-bold text-foreground">6-16 weeks</p>
                          <p className="text-sm text-muted-foreground mt-1">from start to handoff</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wider">Result</p>
                          <p className="text-2xl font-bold text-foreground">Products users love</p>
                          <p className="text-sm text-muted-foreground mt-1">and businesses scale</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Product Development Section Content */}
            <div className="min-h-[600px]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="max-w-4xl mx-auto text-center">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-foreground mb-4">
                    Product Development That Launches Fast
                  </h2>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                    We build scalable web apps and SaaS platforms that perform flawlessly from day one.
                  </p>

                  {/* VIDEO 2 PLACEHOLDER */}
                  <div className="w-full max-w-3xl mx-auto aspect-video bg-surface rounded-xl border border-border flex items-center justify-center overflow-hidden mb-12">
                    <span className="text-muted-foreground font-mono text-sm uppercase tracking-widest">
                      [Video: Development Tech & Speed]
                    </span>
                  </div>
                </div>

                <div className="space-y-12 pt-12 max-w-7xl mx-auto px-6">
                  {/* Our Development Process */}
                  <div className="w-full">
                    <h3 className="text-2xl md:text-3xl font-bold mb-8 text-foreground text-center">Our Development Process</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
                      <FlipCard
                        delay={0}
                        frontContent={
                          <div className="text-center">
                            <h4 className="text-2xl font-bold text-foreground mb-3">Modern Tech Stack</h4>
                            <p className="text-muted-foreground text-sm">
                              Hover to learn more
                            </p>
                          </div>
                        }
                        backContent={
                          <div className="text-center">
                            <h4 className="text-xl font-bold mb-4 text-foreground">Modern Tech Stack</h4>
                            <p className="text-muted-foreground leading-relaxed text-base">
                              We use cutting-edge frameworks like Next.js, React, and Node.js—battle-tested technologies with massive community support. You get modern performance without experimental risk.
                            </p>
                          </div>
                        }
                      />

                      <FlipCard
                        delay={0.1}
                        frontContent={
                          <div className="text-center">
                            <h4 className="text-2xl font-bold text-foreground mb-3">Strategic MVP Approach</h4>
                            <p className="text-muted-foreground text-sm">
                              Hover to learn more
                            </p>
                          </div>
                        }
                        backContent={
                          <div className="text-center">
                            <h4 className="text-xl font-bold mb-4 text-foreground">Strategic MVP Approach</h4>
                            <p className="text-muted-foreground leading-relaxed text-base">
                              We identify the "just right" feature set—enough to validate your idea, impressive enough to convert users. Launch in 8-16 weeks instead of 6-12 months.
                            </p>
                          </div>
                        }
                      />

                      <FlipCard
                        delay={0.2}
                        frontContent={
                          <div className="text-center">
                            <h4 className="text-2xl font-bold text-foreground mb-3">Built to Scale from Day One</h4>
                            <p className="text-muted-foreground text-sm">
                              Hover to learn more
                            </p>
                          </div>
                        }
                        backContent={
                          <div className="text-center">
                            <h4 className="text-xl font-bold mb-4 text-foreground">Built to Scale from Day One</h4>
                            <p className="text-muted-foreground leading-relaxed text-base">
                              Even MVPs get clean architecture, proper database design, and scalable infrastructure. Add features post-launch without rebuilding your foundation.
                            </p>
                          </div>
                        }
                      />

                      <FlipCard
                        delay={0.3}
                        frontContent={
                          <div className="text-center">
                            <h4 className="text-2xl font-bold text-foreground mb-3">Quality Non-Negotiable</h4>
                            <p className="text-muted-foreground text-sm">
                              Hover to learn more
                            </p>
                          </div>
                        }
                        backContent={
                          <div className="text-center">
                            <h4 className="text-xl font-bold mb-4 text-foreground">Quality Non-Negotiable</h4>
                            <p className="text-muted-foreground leading-relaxed text-base">
                              Code reviews before every merge, comprehensive testing, sub-3-second load times, mobile-responsive design, and security best practices—standard on every project.
                            </p>
                          </div>
                        }
                      />
                    </div>
                  </div>

                  {/* What You Get */}
                  <div className="border-t border-border pt-8">
                    <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground text-center">What You Get</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4 text-center max-w-3xl mx-auto">
                      Complete frontend and backend development, API integrations, database architecture, cloud deployment (Vercel/AWS), comprehensive documentation, and post-launch support.
                    </p>
                  </div>



                  {/* Investment */}
                  <div className="w-full">
                    <div className="bg-surface p-8 rounded-2xl border border-border/50 max-w-5xl mx-auto">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wider">Investment</p>
                          <p className="text-2xl font-bold text-foreground">$30,000-$200,000</p>
                          <p className="text-sm text-muted-foreground mt-1">depending on complexity</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wider">Timeline</p>
                          <p className="text-2xl font-bold text-foreground">8-32 weeks</p>
                          <p className="text-sm text-muted-foreground mt-1">8-16 weeks for MVP</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wider">Guarantee</p>
                          <p className="text-2xl font-bold text-foreground">90%+ On-Time</p>
                          <p className="text-sm text-muted-foreground mt-1">fixed-scope agreements</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section >

      {/* Two-Column Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left Column - Sticky Video */}
        <div className="relative hidden lg:flex h-screen sticky top-0 bg-background overflow-hidden border-r border-border items-center justify-center">
          <video
            className="w-full max-w-md aspect-square object-cover rounded-2xl cursor-pointer shadow-2xl"
            autoPlay
            loop
            muted
            playsInline
            onClick={(e) => {
              const video = e.currentTarget;
              if (video.muted) {
                video.muted = false;
              } else {
                if (video.paused) {
                  video.play();
                } else {
                  video.pause();
                }
              }
            }}
          >
            <source src="/demo-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Right Column - Scrollable Content */}
        <div className="flex flex-col px-6 py-24 md:px-12 lg:px-20 lg:py-32 bg-background">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl mx-auto lg:mx-0"
          >
            {/* Right-Side Text Content */}
            <div className="space-y-20">

              {/* Intro */}
              <div>
                <h2 className="text-2xl font-semibold mb-6 text-foreground">Transforming Ideas Into Reality</h2>
                <p className="text-lg text-muted-foreground leading-relaxed font-normal">
                  We turn ambitious visions into market-ready digital solutions with enterprise quality and agency agility.
                </p>
              </div>

              {/* Core Services */}
              <div>
                <h2 className="text-2xl font-semibold mb-8 text-foreground border-b border-border pb-4">Our Core Services:</h2>
                <div className="space-y-12">
                  <div className="group">
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-foreground transition-colors">UI/UX Design</h3>
                    <p className="text-muted-foreground leading-relaxed font-normal">
                      Intuitive, conversion-focused interfaces backed by comprehensive user research.
                    </p>
                  </div>
                  <div className="group">
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-foreground transition-colors">Product Development</h3>
                    <p className="text-muted-foreground leading-relaxed font-light">
                      End-to-end build from MVP to full-scale launch, validated and scalable.
                    </p>
                  </div>
                  <div className="group">
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-foreground transition-colors">Web Development</h3>
                    <p className="text-muted-foreground leading-relaxed font-normal">
                      Fast, responsive web apps using Next.js and React, built for performance.
                    </p>
                  </div>
                </div>
              </div>

              {/* Differentiator */}
              <div className="bg-surface p-8 -mx-8 rounded-2xl border border-border/50">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">What Makes Us Different:</h2>
                <p className="text-lg text-muted-foreground leading-relaxed font-normal">
                  Direct access to senior devs, AI-assisted speed, and transparent pricing—typically 30% below agency rates.
                </p>
              </div>

            </div>
          </motion.div>
        </div>
      </div>

      {/* Problems Section - Scrolling Cards */}
      <section className="relative py-32 px-4 bg-gradient-to-b from-background via-background-light to-background">
        <div className="container-custom mx-auto relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20 max-w-4xl"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              The Problems You'll Face Without the Right Product Team
            </h2>
          </motion.div>

          {/* Cards Container */}
          <div className="relative" style={{ paddingTop: "20vh", paddingBottom: "20vh" }}>
            {problems.map((problem, index) => (
              <ProblemCard key={index} problem={problem} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Proven Solutions Section */}
      <section className="relative py-32 bg-background">

        {/* Section Title - Outside Container for Left Alignment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-left pl-6"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Solutions for Your Business
          </h2>
        </motion.div>

        <div className="container-custom mx-auto max-w-5xl">

          {/* Solution Cards Container - Sticky Scroll */}
          <div className="relative" style={{ paddingTop: "10vh", paddingBottom: "10vh" }}>

            {/* Solution 1 */}
            <div style={{ position: "sticky", top: "100px", marginBottom: "5vh", zIndex: 11 }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-surface rounded-3xl p-8 md:p-12 border border-border"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                  "Building Products Nobody Wants"
                </h3>
                <div className="space-y-4">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We validate your idea through in-depth user research, data-driven personas, and prototype testing to ensure market fit before development.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Solution 1 */}
            <div style={{ position: "sticky", top: "100px", marginBottom: "5vh", zIndex: 11 }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-surface rounded-3xl p-8 md:p-12 border border-border"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                  "Building Products Nobody Wants"
                </h3>
                <div className="space-y-4">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We validate your idea through research and prototypes to ensure market fit before writing a single line of code.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Solution 2 */}
            <div style={{ position: "sticky", top: "100px", marginBottom: "5vh", zIndex: 12 }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-surface rounded-3xl p-8 md:p-12 border border-border"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                  "Disconnect Between Design & Development"
                </h3>
                <div className="space-y-4">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Unified design and dev teams working in parallel from day one to deliver pixel-perfect products 40% faster.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Solution 3 */}
            <div style={{ position: "sticky", top: "100px", marginBottom: "5vh", zIndex: 13 }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-surface rounded-3xl p-8 md:p-12 border border-border"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                  "The MVP Trap"
                </h3>
                <div className="space-y-4">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We build scalable MVPs with the optimal feature set—balancing speed, quality, and user value.
                  </p>
                </div>
              </motion.div>
            </div>

          </div>

          {/* The Advantage of Working With Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20 text-left"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              The Advantage of Working With Us
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {/* Speed Meets Strategy */}
              <div className="bg-surface rounded-2xl p-6 border border-border hover:border-primary/50 transition-colors">
                <h3 className="text-xl font-bold text-foreground mb-3">Speed Meets Strategy</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Modern tech stack and AI-assisted workflows make us <strong className="text-foreground">30% faster</strong> than traditional agencies.
                </p>
              </div>

              {/* Transparency You Can Trust */}
              <div className="bg-surface rounded-2xl p-6 border border-border hover:border-primary/50 transition-colors">
                <h3 className="text-xl font-bold text-foreground mb-3">Transparency You Can Trust</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Fixed-price packages and weekly demos. No hidden fees, just results.
                </p>
              </div>

              {/* Strategic Partners */}
              <div className="bg-surface rounded-2xl p-6 border border-border hover:border-primary/50 transition-colors">
                <h3 className="text-xl font-bold text-foreground mb-3">Strategic Partners</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Every decision is backed by <strong className="text-foreground">user research and data</strong>, not guesswork.
                </p>
              </div>

              {/* Built to Scale */}
              <div className="bg-surface rounded-2xl p-6 border border-border hover:border-primary/50 transition-colors">
                <h3 className="text-xl font-bold text-foreground mb-3">Built to Scale</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Mobile-first design and clean architecture standard on every project.
                </p>
              </div>

              {/* Results That Matter */}
              <div className="bg-surface rounded-2xl p-6 border border-border hover:border-primary/50 transition-colors">
                <h3 className="text-xl font-bold text-foreground mb-3">Results That Matter</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We measure success by your growth. <strong className="text-foreground">70% client retention rate</strong>.
                </p>
              </div>

              {/* Enterprise Quality */}
              <div className="bg-surface rounded-2xl p-6 border border-border hover:border-primary/50 transition-colors">
                <h3 className="text-xl font-bold text-foreground mb-3">Enterprise Quality</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Senior-level expertise at <strong className="text-foreground">20-30% below traditional rates</strong>. Same-day responses and decisions in hours.
                </p>
              </div>
            </div>

            {/* The Real Difference */}
            <div className="bg-surface rounded-2xl p-8 border border-border text-center max-w-3xl mx-auto">
              <p className="text-lg text-foreground font-bold mb-3">The Real Difference?</p>
              <p className="text-muted-foreground mb-6">
                We don't just build websites and apps—we solve problems, validate ideas, and launch products that users actually want.
              </p>
              <p className="text-lg text-foreground font-bold mb-4">Ready to move fast without breaking things?</p>
              <button className="px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-colors">
                Start With a Free Strategy Call
              </button>
            </div>
          </motion.div>

        </div>
      </section >

      <Footer />
    </div >
  );
};

export default Services;
