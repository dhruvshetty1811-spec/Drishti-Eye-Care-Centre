import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Dr. Shetty', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 py-8",
      scrolled ? "py-4 bg-dark-bg/80 backdrop-blur-lg border-b border-white/5" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-4"
        >
          <div className="w-10 h-10 bg-premium-teal rounded-full flex items-center justify-center font-display font-bold text-white text-xl">D</div>
          <div className="flex flex-col">
            <span className="font-display text-xl tracking-tighter font-semibold leading-tight">DRISHTI</span>
            <span className="text-[10px] tracking-[0.3em] uppercase opacity-60 leading-none">Eye Care Center</span>
          </div>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {navItems.map((item) => (
            <a 
              key={item.name}
              href={item.href}
              className="text-xs uppercase tracking-[0.2em] font-medium hover:text-premium-teal transition-colors"
            >
              {item.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-6 py-2 border border-white/20 rounded-full text-xs uppercase tracking-widest hover:bg-white hover:text-dark-bg transition-all duration-300"
          >
            Booking
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-dark-bg border-b border-white/5 px-6 py-12 flex flex-col gap-8 md:hidden"
          >
            {navItems.map((item) => (
              <a 
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-display font-light tracking-tight hover:text-premium-teal"
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
