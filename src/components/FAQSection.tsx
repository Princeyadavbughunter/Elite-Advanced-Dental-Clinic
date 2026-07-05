'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Sparkles } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  benefit: string;
}

const faqs: FAQItem[] = [
  {
    question: "What are dental implants and are they permanent?",
    answer:
      "Dental implants are titanium posts that act as permanent roots for replacement teeth. They fuse with your jawbone, making them the most stable, natural-looking and lifelong solution for missing teeth.",
    benefit: "Regain your natural smile and bite for a lifetime.",
  },
  {
    question: "What is immediate loading — 'fixed teeth in 3 days'?",
    answer:
      "Immediate-loading implants let us place your implants and fit functional fixed teeth within a few days, instead of waiting several months. With CBCT-guided planning, suitable patients can walk in with missing teeth and walk out with a confident, fixed smile.",
    benefit: "Get fixed teeth in as little as 3 days, not months.",
  },
  {
    question: "Is the dental implant procedure painful?",
    answer:
      "No. Treatment is carried out under local anaesthesia, and for anxious patients we offer sedation dentistry so the entire procedure is calm and completely painless. Most patients find it more comfortable than a simple extraction.",
    benefit: "Painless, sedation-assisted treatment from start to finish.",
  },
  {
    question: "Why does in-house CBCT matter for implants?",
    answer:
      "A CBCT scan gives a precise 3D view of your bone and nerves, so every implant is planned digitally before surgery. Having it in-house means faster, safer, more accurate placement — no referrals or delays.",
    benefit: "Precision planning for predictable, long-lasting results.",
  },
  {
    question: "Am I a candidate for dental implants?",
    answer:
      "Most adults with one or more missing teeth are candidates. Even patients told they have insufficient bone can often be treated thanks to advanced grafting and full-arch techniques. A quick CBCT assessment confirms the right plan for you.",
    benefit: "Personalised, specialist-led treatment planning.",
  },
  {
    question: "How long does the full implant process take?",
    answer:
      "Immediate-loading cases can deliver fixed teeth in a few days. Conventional implants typically take 3 to 6 months to allow the implant to fuse with the bone (osseointegration) before the final custom crown is fitted.",
    benefit: "A rock-solid foundation for teeth that feel like your own.",
  },
  {
    question: "What does an implant consultation include?",
    answer:
      "Your consultation covers a full oral examination, a CBCT-guided implant assessment and a transparent, personalised treatment plan — so you understand exactly what's involved before deciding.",
    benefit: "Clear answers and a tailored plan, with no pressure.",
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-16 md:py-24 px-4 md:px-8 overflow-hidden" id="faq">
      {/* decorative blob */}
      <div aria-hidden className="pointer-events-none absolute -top-10 right-0 w-80 h-80 rounded-full blur-3xl opacity-20"
           style={{ background: 'radial-gradient(circle, var(--accent-pink) 0%, transparent 70%)' }} />
      <div aria-hidden className="pointer-events-none absolute bottom-0 -left-10 w-96 h-96 rounded-full blur-3xl opacity-20"
           style={{ background: 'radial-gradient(circle, var(--brand-teal) 0%, transparent 70%)' }} />

      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 badge-pink px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-4"
          >
            <Sparkles size={12} />
            <span>Got Questions? We Have Answers</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-gray-900 leading-tight">
            Common <span className="text-gradient-logo">Questions</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base md:text-lg font-light">
            Empowering your decision with transparent information and clinical insights.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`group transition-all duration-300 rounded-2xl border bg-white/90 backdrop-blur-sm ${
                openIndex === index
                ? 'border-[var(--accent-pink)]/20 depth-stack'
                : 'border-gray-100 hover:border-[var(--brand-teal)]/30 shadow-sm'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                className="w-full p-5 md:p-6 text-left flex justify-between items-center focus:outline-none"
              >
                <span className={`text-lg md:text-xl font-bold tracking-tight transition-colors duration-300 ${
                  openIndex === index ? 'text-[var(--brand-teal-deep)]' : 'text-gray-800'
                }`}>
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 ml-4 w-9 h-9 rounded-xl border flex items-center justify-center transition-all duration-300 ${
                  openIndex === index
                  ? 'bg-gradient-to-br from-[var(--accent-pink)] to-[var(--brand-teal)] border-transparent text-white rotate-90 shadow-md'
                  : 'bg-gray-50 border-gray-100 text-gray-400 group-hover:border-[var(--brand-teal)]/30 group-hover:text-[var(--brand-teal-deep)]'
                }`}>
                  {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-5 pb-6 md:px-6 md:pb-8 pt-0">
                      <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--brand-teal)]/30 to-transparent mb-6" />

                      <div className="space-y-4">
                        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                          {faq.answer}
                        </p>
                        <p className="text-[var(--brand-teal-deep)] text-base font-medium leading-relaxed italic border-l-2 border-[var(--accent-pink)] pl-4">
                          &quot;{faq.benefit}&quot;
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 text-xs">
            Still have questions? <a href="tel:9922018080" className="text-[var(--accent-pink)] font-bold underline hover:text-[var(--accent-pink-dark)] transition-colors">Contact our specialists</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
