import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

// 1. IMPORT THE IMAGE HERE
// Assuming this file is at src/components/Hero.tsx, we go up one level (../) to reach assets
import heroImage from '../assets/images/eye.png';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* 2. USE THE IMPORTED VARIABLE HERE */}
        <img 
          src={heroImage} 
          alt="Precision Vision" 
          className="h-full w-full object-cover opacity-60 scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/20 via-transparent to-dark-bg" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-premium-teal font-display tracking-[0.3em] uppercase text-sm mb-6"
        >
          Excellence in Ophthalmology
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="font-display font-light text-6xl md:text-8xl lg:text-9xl tracking-tighter leading-none mb-8"
        >
          Vision <br />
          <span className="font-serif italic font-normal text-white/90">Refined.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12"
        >
          <a 
            href="#contact" 
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-white text-dark-bg font-display text-sm uppercase tracking-[0.2em] font-semibold rounded-full overflow-hidden transition-all duration-500 hover:pr-12"
          >
            <span className="relative z-10">Book a Consultation</span>
            <ChevronDown className="absolute right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 -rotate-90 scale-75" size={20} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mt-16"
        >
          <div className="flex flex-col items-center md:items-start text-xs tracking-widest uppercase opacity-60">
            <span>Clinical Precision</span>
            <span>Unmatched Care</span>
          </div>
          <div className="h-px w-12 bg-white/20 hidden md:block" />
          <div className="flex flex-col items-center md:items-end text-xs tracking-widest uppercase opacity-60">
            <span>Dr. Sharath Shetty</span>
            <span>Malleshwaram | Bangalore</span>
          </div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-12 z-10 opacity-30"
      >
        <ChevronDown size={32} strokeWidth={1} />
      </motion.div>
    </section>
  );
}
