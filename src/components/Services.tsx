import { motion } from 'motion/react';
import { Eye, Zap, Activity, Baby, Crosshair, Search } from 'lucide-react';

const services = [
  {
    title: "Pediatric Ophthalmology",
    description: "Specialized, gentle care tailored for infants and children, ensuring robust early vision development and addressing childhood disorders.",
    icon: Baby,
  },
  {
    title: "Squint Correction",
    description: "Advanced surgical alignment techniques restoring perfect binocular vision and cosmetic appearance for all age groups.",
    icon: Crosshair,
  },
  {
    title: "Glaucoma Management",
    description: "State-of-the-art diagnostic testing and therapeutic management to control intraocular pressure and protect optic nerve health.",
    icon: Activity,
  },
  {
    title: "Cataract Surgery",
    description: "Micro-incision, stitch-less phacoemulsification with premium intraocular lenses (IOLs) for rapid, crystal-clear recovery.",
    icon: Eye,
  },
  {
    title: "Refractive Solutions",
    description: "Comprehensive evaluations for LASIK and customized vision correction, freeing you from dependency on glasses.",
    icon: Zap,
  },
  {
    title: "Comprehensive Care",
    description: "Computerized vision testing, retinal health screenings, and preventive eye care mapping for lasting visual acuity.",
    icon: Search,
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 px-6 bg-dark-bg text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-display uppercase tracking-widest text-premium-teal font-semibold text-sm">Specialist Expertise</span>
            <h2 className="font-display text-5xl md:text-7xl font-light mt-4 tracking-tighter">
              Clinical <span className="font-serif italic font-normal text-white/60">Specialties.</span>
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-md text-white/50 font-light text-lg leading-relaxed md:text-right"
          >
            Utilizing 28 years of clinical mastery to provide the highest standard of ocular care for patients across Bangalore and beyond.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-dark-bg p-10 group hover:bg-white transition-colors duration-500"
            >
              <service.icon className="text-premium-teal mb-8 group-hover:text-dark-bg transition-colors" size={40} strokeWidth={1} />
              <h3 className="font-display text-2xl font-normal mb-4 group-hover:text-dark-bg transition-colors">{service.title}</h3>
              <p className="text-white/40 font-light leading-relaxed group-hover:text-dark-bg/60 transition-colors">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 h-[50vh] w-full rounded-2xl overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-1000">
          <img 
            src="/src/assets/images/premium_medical_tech_1779000013169.png" 
            alt="Medical Technology" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent" />
          <div className="absolute bottom-12 left-12">
            <span className="font-display text-sm tracking-[0.4em] uppercase opacity-60">Precision Hardware</span>
          </div>
        </div>
      </div>
    </section>
  );
}
