import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Section, SectionHeader } from '../components/ui/Section';
import { CustomButton } from '../components/ui/CustomButton';
import { 
  ArrowRight, 
  FileText, 
  Users, 
  MessageSquare, 
  CheckCircle,
  Shield,
  Clock,
  Award,
  Star
} from 'lucide-react';

const steps = [
  {
    number: "01",
    icon: FileText,
    title: "Tell Us About Your Needs",
    description: "Complete a brief questionnaire about your situation, timeline, and what you want to protect. It takes less than 3 minutes and helps us understand your specific needs.",
    details: [
      "Service type (prenup, postnup, etc.)",
      "Your state of residence",
      "Timeline and urgency",
      "Specific concerns or assets"
    ]
  },
  {
    number: "02",
    icon: Users,
    title: "Get Matched With Qualified Attorneys",
    description: "We analyze your needs and match you with experienced family law attorneys in your state who specialize in the type of agreement you need.",
    details: [
      "Attorneys vetted for experience",
      "State-specific expertise",
      "Specialization matching",
      "Availability confirmed"
    ]
  },
  {
    number: "03",
    icon: MessageSquare,
    title: "Schedule Your Free Consultation",
    description: "Speak directly with your matched attorney at no cost. Ask questions, discuss your situation, and understand your options—with zero obligation to proceed.",
    details: [
      "15-30 minute conversation",
      "Clear fee estimates",
      "Process explanation",
      "No pressure to commit"
    ]
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Move Forward With Confidence",
    description: "If you decide to work with the attorney, they'll guide you through the entire process—from initial draft to final execution.",
    details: [
      "Transparent pricing",
      "Milestone-based process",
      "Direct attorney access",
      "Satisfaction guarantee"
    ]
  }
];

const values = [
  {
    icon: Shield,
    title: "Vetted Network",
    description: "Every attorney in our network is carefully screened for experience, client satisfaction, and ethical standing."
  },
  {
    icon: Clock,
    title: "Fast Response",
    description: "We respond to every consultation request within 24 hours—often much sooner."
  },
  {
    icon: Award,
    title: "Quality First",
    description: "We match you based on fit, not who pays us the most. Your needs come first."
  }
];

export default function HowItWorks() {
  useEffect(() => {
    document.title = "How It Works | Find a Prenup Attorney | PrenupAttorney.us";
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FAFAF8] via-white to-[#F5F5F5]" />
        
        <div className="relative max-w-7xl mx-auto px-5 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-[#7C6A4F] mb-4">
              How It Works
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] leading-[1.1] mb-6 max-w-4xl mx-auto">
              From questions to clarity in four simple steps
            </h1>
            <p className="text-xl text-[#666666] leading-relaxed max-w-2xl mx-auto">
              We've made finding the right prenup or postnup attorney as straightforward as possible. No confusion, no pressure, no hidden fees.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <Section background="white">
        <div className="space-y-16 md:space-y-24">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
            >
              {/* Content - alternates sides */}
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm font-medium text-[#7C6A4F]">{step.number}</span>
                  <div className="flex-1 h-px bg-[#E5E5E5]" />
                </div>
                <h2 className="font-serif text-3xl md:text-4xl text-[#1A1A1A] mb-4">
                  {step.title}
                </h2>
                <p className="text-lg text-[#666666] leading-relaxed mb-6">
                  {step.description}
                </p>
                <ul className="space-y-3">
                  {step.details.map((detail, i) => (
                    <li key={i} className="flex items-center gap-3 text-[#666666]">
                      <CheckCircle className="w-5 h-5 text-[#7C6A4F] flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} flex justify-center`}>
                <div className="relative">
                  <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-[#FAFAF8] to-[#F0EDE8] flex items-center justify-center">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white shadow-xl flex items-center justify-center">
                      <step.icon className="w-12 h-12 md:w-16 md:h-16 text-[#7C6A4F]" />
                    </div>
                  </div>
                  {/* Decorative */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#7C6A4F]/10 rounded-full blur-xl" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Values */}
      <Section background="cream">
        <SectionHeader
          eyebrow="Our Commitment"
          title="Why couples trust Clarita"
        />
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center mx-auto mb-5">
                <value.icon className="w-8 h-8 text-[#7C6A4F]" />
              </div>
              <h3 className="font-serif text-xl text-[#1A1A1A] mb-2">{value.title}</h3>
              <p className="text-[#666666]">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-[#1A1A1A]">
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-lg text-white/60 mb-8">
            Take the first step toward protecting your future. It's free, fast, and confidential.
          </p>
          <Link to={createPageUrl("Consultation")}>
            <CustomButton variant="accent" size="lg" className="group">
              Find Your Attorney
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </CustomButton>
          </Link>
        </div>
      </section>
    </>
  );
}