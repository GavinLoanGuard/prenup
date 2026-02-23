import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section, SectionHeader } from '../ui/Section';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "We were nervous to have the prenup conversation, but our attorney made it feel like a healthy part of wedding planning. The whole process was smoother than we expected.",
    author: "Sarah & Michael",
    location: "San Francisco, CA",
    service: "Prenuptial Agreement",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6998913a9d6bb43a2d91fd59/135ad0d71_ChatGPTImageFeb19202611_13_38PM.png"
  },
  {
    quote: "After my divorce, I knew I wanted a prenup for my second marriage. PrenupAttorney matched me with an attorney who truly understood blended family dynamics.",
    author: "Jennifer R.",
    location: "Austin, TX",
    service: "Second Marriage Prenup",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6998913a9d6bb43a2d91fd59/986cbee98_ChatGPTImageFeb19202611_13_54PM.png"
  },
  {
    quote: "We bought a house before getting married and needed to protect both of our investments. The attorney explained everything clearly and without judgment.",
    author: "David & Priya",
    location: "New York, NY",
    service: "Prenup for Home Purchase",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6998913a9d6bb43a2d91fd59/135ad0d71_ChatGPTImageFeb19202611_13_38PM.png"
  },
  {
    quote: "Five years into our marriage, we realized we should have gotten a prenup. Our postnup gave us the clarity we needed to move forward confidently.",
    author: "Mark & Lisa",
    location: "Chicago, IL",
    service: "Postnuptial Agreement",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6998913a9d6bb43a2d91fd59/986cbee98_ChatGPTImageFeb19202611_13_54PM.png"
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <Section background="cream">
      <SectionHeader
        eyebrow="Real Stories"
        title="From couples who took the first step"
        description="Hear from people who found clarity through our network of family law attorneys."
      />

      <div className="relative max-w-4xl mx-auto">
        {/* Quote Icon */}
        <div className="absolute -top-4 left-0 md:left-8">
          <Quote className="w-12 h-12 text-[#7C6A4F]/20" />
        </div>

        {/* Testimonial Slider */}
        <div className="relative overflow-hidden min-h-[280px] md:min-h-[240px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="text-center px-4 md:px-16"
            >
              <blockquote className="font-serif text-xl md:text-2xl lg:text-3xl text-[#1A1A1A] leading-relaxed mb-8">
                "{testimonials[current].quote}"
              </blockquote>
              
              <div className="flex flex-col items-center gap-3">
                {testimonials[current].image && (
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#E5E5E5]">
                    <img 
                      src={testimonials[current].image} 
                      alt={testimonials[current].author}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                )}
                <p className="font-medium text-[#1A1A1A]">
                  {testimonials[current].author}
                </p>
                <p className="text-sm text-[#666666]">
                  {testimonials[current].location}
                </p>
                <span className="inline-block px-3 py-1 rounded-full bg-[#7C6A4F]/10 text-xs font-medium text-[#7C6A4F]">
                  {testimonials[current].service}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-[#E5E5E5] hover:border-[#7C6A4F] flex items-center justify-center transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-[#666666]" />
          </button>
          
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === current 
                    ? 'w-6 bg-[#7C6A4F]' 
                    : 'bg-[#E5E5E5] hover:bg-[#CCCCCC]'
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-[#E5E5E5] hover:border-[#7C6A4F] flex items-center justify-center transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-[#666666]" />
          </button>
        </div>
      </div>
    </Section>
  );
}