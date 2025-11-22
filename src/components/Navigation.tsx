import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, useScroll } from "framer-motion";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
    return () => unsubscribe();
  }, [scrollY]);

  const links = [
    { path: "/services", label: "Services" },
    { path: "/process", label: "Process" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/pricing", label: "Pricing" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="fixed top-0 w-full z-50 flex justify-center pt-6 px-4">
      <motion.nav
        initial={{ padding: "1rem 2rem", borderRadius: "2rem", maxWidth: "72rem" }}
        animate={{
          padding: isScrolled ? "0.75rem 1.5rem" : "1rem 2rem",
          borderRadius: isScrolled ? "1.5rem" : "2rem",
          maxWidth: isScrolled ? "60rem" : "72rem",
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="backdrop-blur-xl bg-black/20 border border-white/10 shadow-[0_8px_32px_rgba(168,85,247,0.15)] w-full"
      >
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <motion.span
              className="text-3xl"
              animate={{ rotate: 360 }}
              transition={{ duration: 12, ease: "linear", repeat: Infinity }}
            >
              ♾
            </motion.span>
            <span className="text-2xl font-bold text-white">g8g</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-all duration-200 ${isActive(link.path)
                    ? "text-white"
                    : "text-white/70 hover:text-white"
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              variant="outline"
              className="border border-white/20 hover:border-white/40 text-white hover:bg-white/5 rounded-full px-6"
            >
              <Link to="/contact">Start Project</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-white/10 mt-4">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block text-sm font-medium transition-colors ${isActive(link.path) ? "text-white" : "text-white/70 hover:text-white"
                  }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild variant="outline" className="w-full border-white/20 text-white">
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                Start Project
              </Link>
            </Button>
          </div>
        )}
      </motion.nav>
    </div>
  );
};

export default Navigation;
