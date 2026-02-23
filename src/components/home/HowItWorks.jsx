import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Section, SectionHeader } from '../ui/Section';
import { CustomButton } from '../ui/CustomButton';
import { FileText, Users, MessageSquare, CheckCircle, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: "01",
    icon: FileText,
    title: "Share Your Situation",
    description: "Answer a few simple questions about your needs, timeline, and location. Takes under 3 minutes."
  },
  {
    number: "02",
    icon: Users,
    title: "Get Matched",
    description: "We connect you with vetted family law attorneys in your state who specialize in marital agreements."
  },
  {
    number: "03",
    icon: MessageSquare,
    title: "Free Consultation",
    description: "Speak directly with your matched attorney. No obligation, no pressure—just honest advice."
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Move Forward",
    description: "If it's a fit, work with your attorney to draft and finalize your agreement."
  }
];

export default function HowItWorks() {
  return (
    <Section background="white">
      <SectionHeader
        eyebrow="Simple Process"
        title="From questions to clarity in four steps"
        description="We've simplified the process of finding the right attorney for your prenuptial or postnuptial agreement."
      />

      {/* Steps Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Connector Line (desktop) */}
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-10 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-gradient-to-r from-[#E5E5E5] to-[#E5E5E5]/50" />
            )}

            <div className="text-center">
              {/* Step Number */}
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#FAFAF8] to-[#F0EDE8] border border-[#E5E5E5] mb-6">
                <span className="text-2xl font-serif text-[#7C6A4F]">{step.number}</span>
              </div>

              {/* Icon */}
              <div className="flex justify-center mb-4">
                <step.icon className="w-6 h-6 text-[#1A1A1A]" />
              </div>

              {/* Content */}
              <h3 className="font-serif text-xl text-[#1A1A1A] mb-2">
                {step.title}
              </h3>
              <p className="text-[#666666] leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <Link to={createPageUrl("Consultation")}>
          <CustomButton variant="primary" size="lg" className="group">
            Start Your Free Consultation
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </CustomButton>
        </Link>
        <p className="text-sm text-[#666666] mt-4">
          No credit card required • Takes less than 3 minutes
        </p>
      </motion.div>
    </Section>
  );
}