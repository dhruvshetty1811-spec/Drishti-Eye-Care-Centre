import { motion } from 'motion/react';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { cn } from '../lib/utils';

const faqs = [
  {
    question: "What should I expect during a laser eye surgery consultation?",
    answer: "A comprehensive assessment including corneal topography, pupil measurement, and thorough ocular health examination. We'll discuss your specific goals and determine the safest path to clear vision."
  },
  {
    question: "Is cataract surgery painful?",
    answer: "The procedure is performed under local anesthesia, often with relaxing sedation. Most patients feel only slight pressure and no pain. Recovery is typically fast with minimal discomfort."
  },
  {
    question: "How long does the recovery from LASIK take?",
    answer: "Most patients notice a significant improvement in vision within 24 hours. Full stabilization can take a few weeks, during which you'll use prescribed eye drops and follow specific care instructions."
  },
  {
    question: "When should children have their first eye exam?",
    answer: "We recommend a comprehensive eye exam at age 3 and again before starting school, unless symptoms suggest earlier intervention is needed."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 px-6 bg-white text-dark-bg min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-24"
        >
          <span className="font-display uppercase tracking-widest text-premium-teal font-semibold text-sm">Common Inquiries</span>
          <h2 className="font-display text-5xl md:text-7xl font-light mt-4 tracking-tighter">
            Knowledge is <br />
            <span className="font-serif italic font-normal">Clarity.</span>
          </h2>
        </motion.div>

        <div className="space-y-px bg-black/10">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white border-b border-black/5">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-8 flex justify-between items-center text-left group"
              >
                <span className={cn(
                  "font-display text-xl transition-all duration-300",
                  openIndex === index ? "text-premium-teal" : "text-dark-bg/80"
                )}>
                  {faq.question}
                </span>
                <div className="p-2 rounded-full group-hover:bg-black/5 transition-colors">
                  {openIndex === index ? <Minus size={20} strokeWidth={1} /> : <Plus size={20} strokeWidth={1} />}
                </div>
              </button>
              <motion.div
                initial={false}
                animate={{ 
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                className="overflow-hidden"
              >
                <div className="pb-8 pr-12 text-black/50 font-light leading-relaxed text-lg">
                  {faq.answer}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
