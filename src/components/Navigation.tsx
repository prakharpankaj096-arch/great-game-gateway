import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, useScroll } from "framer-motion";

import SparkleButton from "./SparkleButton";

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
        className="backdrop-blur-xl bg-background/80 border border-border/50 shadow-sm w-full"
      >
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-1 group">
            <motion.span
              className="text-3xl font-bold tracking-tight text-foreground"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              g<span className="text-primary">8</span>g
            </motion.span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-all duration-200 ${isActive(link.path)
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <SparkleButton to="/contact" className="!py-2 !px-5 text-sm">Start Project</SparkleButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div >

        {/* Mobile Navigation */}
        {
          isOpen && (
            <div className="md:hidden py-4 space-y-4 border-t border-white/10 mt-4">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block text-sm font-medium transition-colors ${isActive(link.path) ? "text-foreground" : "text-muted-foreground hover:text-foreground"
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
          )
        }
      </motion.nav >
    </div >
  );
};

export default Navigation;
