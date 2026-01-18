import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const navLinks = [
  { name: "About", href: "about" },
  { name: "Resources", href: "resources" },
  { name: "Community", href: "community" },
  { name: "FAQ", href: "faq" },
  { name: "Blog", href: "/blog" }
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (href) => {
    if (href.startsWith("/")) {
      // Navigation ke page lain
      navigate(href);
    } else {
      // Anchor navigation
      if (location.pathname !== "/") {
        // Jika tidak di home, navigate ke home dulu
        navigate("/");
        // Tunggu page load, then scroll
        setTimeout(() => {
          const element = document.getElementById(href);
          element?.scrollIntoView({ behavior: "smooth" });
        }, 500);
      } else {
        // Sudah di home, langsung scroll
        const element = document.getElementById(href);
        element?.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 md:w-20 md:h-20 rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm md:text-base">
                <img src="/logo.png" alt="gits" />
              </span>
            </div>
            <span className="font-bold text-lg md:text-xl text-foreground"></span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium cursor-pointer bg-transparent border-none"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
              <a href="https://forms.gle/6bL8AmJW2Mj7LBdz5" target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="lg">
                Register now
            </Button>
              </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium py-2 text-left bg-transparent border-none cursor-pointer"
                >
                  {link.name}
                </button>
              ))}
              <Button variant="hero" className="mt-2">
                Register now
              </Button>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
