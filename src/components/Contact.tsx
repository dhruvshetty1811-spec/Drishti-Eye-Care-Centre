import { motion } from 'motion/react';
import { Phone, MapPin, Mail, Calendar, ExternalLink, Settings, Globe } from 'lucide-react';
import { InlineWidget } from 'react-calendly';

export default function Contact() {
  const calendlyUrl = import.meta.env.VITE_CALENDLY_URL || '';

  return (
    <section id="contact" className="py-32 px-6 bg-dark-bg text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-display uppercase tracking-widest text-premium-teal font-semibold text-sm">Get in Touch</span>
            <h2 className="font-display text-5xl md:text-7xl font-light mt-4 mb-12 tracking-tighter">
              Begin your <br />
              <span className="font-serif italic font-normal text-white/60 text-4xl md:text-6xl">journey to clarity.</span>
            </h2>

            <div className="space-y-12 mb-16">
              <div className="flex gap-6 items-start">
                <div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                  <MapPin size={20} className="text-premium-teal" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-display text-lg mb-2">Location</h4>
                  <p className="text-white/40 font-light leading-relaxed">
                    Drishti Eye Care center, 1st floor, No 8,<br />
                    8th cross, Malleswaram, Bengaluru
                  </p>
                  <a 
                    href="https://maps.google.com/?q=Drishti+Eye+Care+center+1st+floor+No+8+8th+cross+Malleswaram+Bengaluru" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-premium-teal text-sm mt-4 hover:underline"
                  >
                    Get Directions <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                  <Phone size={20} className="text-premium-teal" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-display text-lg mb-2">Contact</h4>
                  <p className="text-white/40 font-light leading-relaxed">
                    <a href="tel:+918867623301" className="hover:text-premium-teal transition-colors">+91 8867623301</a>
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                  <Mail size={20} className="text-premium-teal" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-display text-lg mb-2">Email</h4>
                  <p className="text-white/40 font-light leading-relaxed">
                    <a href="mailto:drishtieyeclinic@gmail.com" className="hover:text-premium-teal transition-colors">drishtieyeclinic@gmail.com</a>
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                  <Globe size={20} className="text-premium-teal" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-display text-lg mb-2">Practo Profile</h4>
                  <p className="text-white/40 font-light leading-relaxed">
                    <a 
                      href="https://www.practo.com/bangalore/doctor/dr-sharath-shetty-ophthalmologist-1" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-premium-teal transition-colors flex items-center gap-2"
                    >
                      View Dr. Sharath Shetty on Practo <ExternalLink size={14} />
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 md:p-12 rounded-3xl"
          >
            <div className="flex items-center gap-3 mb-8">
              <Calendar className="text-premium-teal" size={24} />
              <h3 className="font-display text-2xl font-light tracking-tight">Book an Appointment</h3>
            </div>
            
            <p className="text-white/50 mb-10 font-light leading-relaxed">
              Schedule your consultation with Dr. Sharath Shetty. Select a convenient time for a comprehensive eye evaluation.
            </p>

            {calendlyUrl ? (
              <div className="bg-white rounded-2xl overflow-hidden min-h-[600px]">
                <InlineWidget 
                  url={calendlyUrl} 
                  styles={{
                    height: '600px'
                  }}
                  pageSettings={{
                    backgroundColor: 'ffffff',
                    hideEventTypeDetails: false,
                    hideLandingPageDetails: false,
                    primaryColor: '008080',
                    textColor: '1a1a1a'
                  }}
                />
              </div>
            ) : (
              <div className="bg-white/5 border border-white/10 rounded-2xl aspect-[4/5] flex flex-col items-center justify-center p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-premium-teal/20 flex items-center justify-center mb-6">
                  <Settings className="text-premium-teal" size={32} />
                </div>
                <h4 className="font-display text-xl mb-4">Connect Your Scheduler</h4>
                <p className="text-white/30 text-sm mb-8 leading-relaxed">
                  To enable direct patient booking, please add your Calendly URL to the <code className="bg-white/10 px-1 rounded text-white">VITE_CALENDLY_URL</code> variable in your workspace environment settings.
                </p>
                <button 
                  className="w-full py-4 bg-white text-dark-bg font-display rounded-full text-sm tracking-widest uppercase font-semibold hover:bg-premium-teal hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                  onClick={() => window.open('https://calendly.com/', '_blank')}
                >
                  Visit Calendly <ExternalLink size={16} />
                </button>
              </div>
            )}
            
            <div className="mt-8 p-4 bg-premium-teal/10 rounded-xl border border-premium-teal/20">
               <p className="text-xs text-premium-teal text-center font-medium tracking-wide">
                 Note: For clinical inquiries, please reach out via email or phone.
               </p>
            </div>
          </motion.div>

        </div>

        <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-white/30 text-xs tracking-widest uppercase">
          <p>© 2026 Drishti Eye Care Center. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </section>
  );
}
