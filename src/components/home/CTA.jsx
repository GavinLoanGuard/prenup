import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { CustomButton } from '../ui/CustomButton';
import { ArrowRight, Shield, Clock, CreditCard } from 'lucide-react';

const benefits = [
  { icon: Shield, text: "100% confidential" },
  { icon: Clock, text: "Response within 24 hours" },
  { icon: CreditCard, text: "No payment required" },
];

export default function CTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] via-[#2D2D2D] to-[#1A1A1A]" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#7C6A4F]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#7C6A4F]/5 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-5 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-[#7C6A4F] mb-6">
            Ready to Start?
          </span>
          
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-[1.15] mb-6">
            Your future deserves protection.
            <br />
            <span className="text-white/70">Start the conversation today.</span>
          </h2>
          
          <p className="text-lg text-white/60 leading-relaxed max-w-2xl mx-auto mb-10">
            Connect with a vetted family law attorney in your state. 
            Free consultation, no pressure, no obligation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link to={createPageUrl("Consultation")}>
              <CustomButton variant="accent" size="xl" className="group">
                Get Your Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </CustomButton>
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-white/50">
                <benefit.icon className="w-4 h-4" />
                <span>{benefit.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}