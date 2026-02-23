import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section, SectionHeader } from '../ui/Section';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What is a prenuptial agreement?",
    answer: "A prenuptial agreement (or \"prenup\") is a legal contract signed before marriage that outlines how assets, debts, and financial matters will be handled during the marriage and in the event of divorce or death. It's a planning tool, not a prediction of divorce."
  },
  {
    question: "How much does a prenup cost?",
    answer: "Prenup costs vary by state, complexity, and attorney experience. Simple prenups typically range from $1,500 to $3,000, while complex agreements involving businesses or significant assets may cost $5,000 to $10,000 or more. We help you find attorneys who are transparent about fees upfront."
  },
  {
    question: "How long does the process take?",
    answer: "Most prenups take 2-6 weeks from start to finish, though this varies. Many states require the agreement be signed at least 7-30 days before the wedding to ensure both parties had time to review. Starting 3-6 months before your wedding is ideal."
  },
  {
    question: "Do both parties need their own attorney?",
    answer: "While not legally required in most states, it's highly recommended that each party has independent legal counsel. This strengthens the agreement's enforceability and ensures both parties fully understand what they're signing."
  },
  {
    question: "Can a prenup be challenged or overturned?",
    answer: "Yes, prenups can be challenged on grounds like lack of disclosure, coercion, unconscionability, or procedural issues. Working with experienced attorneys and ensuring both parties have adequate time and independent counsel significantly reduces these risks."
  },
  {
    question: "What's the difference between a prenup and postnup?",
    answer: "A prenup is signed before marriage; a postnup is signed after you're already married. Both serve similar purposes—defining financial rights and responsibilities—but may have different legal requirements depending on your state."
  }
];

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border-b border-[#E5E5E5] last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full py-6 flex items-start justify-between text-left gap-4"
      >
        <span className="font-serif text-lg md:text-xl text-[#1A1A1A]">
          {faq.question}
        </span>
        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FAFAF8] flex items-center justify-center">
          {isOpen ? (
            <Minus className="w-4 h-4 text-[#7C6A4F]" />
          ) : (
            <Plus className="w-4 h-4 text-[#666666]" />
          )}
        </span>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-[#666666] leading-relaxed max-w-3xl">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <Section background="white">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Left Column - Header */}
        <div className="lg:sticky lg:top-32 lg:self-start">
          <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-[#7C6A4F] mb-4">
            Common Questions
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1A1A1A] leading-[1.15] mb-4">
            Everything you need to know
          </h2>
          <p className="text-lg text-[#666666] leading-relaxed mb-6">
            Get answers to the most frequently asked questions about prenuptial and postnuptial agreements.
          </p>
          <p className="text-sm text-[#999999]">
            Have more questions?{" "}
            <a href="#contact" className="text-[#7C6A4F] hover:underline">
              Contact us
            </a>
          </p>
        </div>

        {/* Right Column - FAQ Items */}
        <div className="bg-white rounded-2xl">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>


    </Section>
  );
}