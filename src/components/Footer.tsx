import { Link } from "react-router-dom";
import { Mail, Phone, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const footerLinks = {
    company: [
      { label: "Terms & Conditions", path: "/terms" },
      { label: "Privacy Policy", path: "/privacy" },
    ],
    product: [
      { label: "Integrations", path: "/integrations" },
      { label: "Plans & Pricing", path: "/pricing" },
      { label: "AI Agent for Support", path: "/support-agent" },
      { label: "AI Agent for Revenue", path: "/revenue-agent" },
      { label: "Help Center", path: "/help" },
    ],
    resources: [
      { label: "Blog", path: "/blog" },
      { label: "Integrations", path: "/integrations" },
      { label: "Case Studies", path: "/case-studies" },

    ],
    partnerships: [
      { label: "Partners Program", path: "/partners" },
      { label: "Referral Program", path: "/referral" },
    ],
  };

  return (
    <footer className="bg-[#0a0a0f] text-white pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-4">
        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white/40 uppercase tracking-wider mb-6">
              Company
            </h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-white/40 uppercase tracking-wider mb-6">
              Product
            </h3>
            <ul className="space-y-4">
              {footerLinks.product.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-white/40 uppercase tracking-wider mb-6">
              Resources
            </h3>
            <ul className="space-y-4">
              {footerLinks.resources.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Partnerships */}
          <div>
            <h3 className="text-sm font-semibold text-white/40 uppercase tracking-wider mb-6">
              Partnerships
            </h3>
            <ul className="space-y-4">
              {footerLinks.partnerships.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-16">
          <motion.a
            href="#"
            whileHover={{ scale: 1.1 }}
            className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white transition-colors"
          >
            <Linkedin size={20} />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.1 }}
            className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white transition-colors"
          >
            <Phone size={20} />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.1 }}
            className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white transition-colors"
          >
            <Mail size={20} />
          </motion.a>
        </div>

        {/* Large Logo */}
        <div className="text-center mb-20">
          <h1 className="text-[120px] md:text-[180px] font-bold leading-none tracking-tighter opacity-20 bg-clip-text text-transparent bg-gradient-to-b from-white to-transparent select-none">
            g8g
          </h1>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-white/40">
          <p>© 2025 g8g. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/sitemap" className="hover:text-white transition-colors">
              Sitemap
            </Link>
            <Link to="/signup" className="hover:text-white transition-colors">
              Sign Up
            </Link>
            <Link to="/contact" className="hover:text-white transition-colors">
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;