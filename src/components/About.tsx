import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-32 px-6 lg:px-24 bg-white text-dark-bg min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative order-2 lg:order-1"
        >
          <div className="aspect-[4/5] overflow-hidden rounded-2xl transition-all duration-700 shadow-2xl">
            <img 
              src="/src/assets/images/7.jpg" 
              alt="Dr. Sharath Shetty" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-premium-teal text-white p-6 rounded-xl shadow-xl hidden md:block">
            <p className="font-display font-bold text-3xl">28+</p>
            <p className="text-[10px] uppercase tracking-widest opacity-80">Years of Surgery</p>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1, delay: 0.2 }}
           className="order-1 lg:order-2"
        >
          <span className="font-display uppercase tracking-widest text-premium-teal font-semibold text-sm">The Surgeon</span>
          <h2 className="font-display text-6xl md:text-8xl font-light mt-4 mb-12 tracking-tight leading-[0.9]">
            Dr. Sharath <br />
            <span className="font-serif italic font-normal">Shetty</span>
          </h2>
          
          <div className="space-y-8 text-lg md:text-xl text-black/70 leading-relaxed font-light">
            <div className="font-medium text-dark-bg border-l-4 border-premium-teal pl-6 py-2">
              <p className="text-2xl md:text-3xl">MBBS, MS - Ophthalmology</p>
              <p className="text-lg md:text-xl text-black/50 mt-1">Fellowship in Pediatric Ophthalmology, Squint and Glaucoma</p>
            </div>
            
            <p>
              Ranked among Bengaluru's elite eye specialists, Dr. Sharath Shetty brings over 28 years of surgical and clinical mastery to Drishti Eye Care Centre. His minimalist, precision-first approach ensures optimal outcomes for complex vision disorders.
            </p>
            
            <p>
              Previously associated with prestigious institutions like Sankara Nethralaya, he specializes in pediatric ophthalmology, advanced cataract microsurgery, and intricate squint corrections.
            </p>
            
            <div className="pt-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-sm uppercase tracking-[0.2em] font-bold border-t border-black/10 mt-12">
               <div>
                  <span className="block text-premium-teal mb-2 italic">Clinical Specialty</span>
                  <span className="text-dark-bg text-xl">Pediatric & Squint</span>
               </div>
               <div>
                  <span className="block text-premium-teal mb-2 italic">Global Recognition</span>
                  <span className="text-dark-bg text-xl">Sankara Nethralaya Fellow</span>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
