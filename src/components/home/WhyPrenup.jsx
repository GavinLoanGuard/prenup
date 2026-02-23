import React from 'react';
import { motion } from 'framer-motion';
import { Section, SectionHeader } from '../ui/Section';
import { TrendingUp, Home, Users, Briefcase, Heart, Scale } from 'lucide-react';

const reasons = [
  {
    icon: TrendingUp,
    title: "Protect Future Earnings",
    description: "Safeguard income growth, stock options, and bonuses earned during marriage."
  },
  {
    icon: Home,
    title: "Preserve Property Rights",
    description: "Clearly define ownership of real estate, investments, and inherited assets."
  },
  {
    icon: Users,
    title: "Protect Children's Interests",
    description: "Ensure assets from prior marriages go to your children as intended."
  },
  {
    icon: Briefcase,
    title: "Shield Business Assets",
    description: "Keep your business separate and avoid disputes over company ownership."
  },
  {
    icon: Heart,
    title: "Reduce Financial Conflict",
    description: "Start marriage with clear expectations and open financial communication."
  },
  {
    icon: Scale,
    title: "Simplify Difficult Times",
    description: "Make potential separations clearer and less contentious for both parties."
  }
];

export default function WhyPrenup() {
  return (
    <Section background="cream">
      <SectionHeader
        eyebrow="Why It Matters"
        title="A prenup isn't about distrust. It's about clarity."
        description="Modern couples use prenuptial agreements to have honest conversations about finances—before they become problems."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative bg-white rounded-2xl p-6 md:p-8 border border-[#E5E5E5] hover:border-[#7C6A4F]/30 hover:shadow-lg transition-all duration-300"
          >
            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-[#FAFAF8] group-hover:bg-[#7C6A4F]/10 flex items-center justify-center mb-5 transition-colors">
              <reason.icon className="w-6 h-6 text-[#7C6A4F]" />
            </div>

            {/* Content */}
            <h3 className="font-serif text-xl text-[#1A1A1A] mb-2">
              {reason.title}
            </h3>
            <p className="text-[#666666] leading-relaxed">
              {reason.description}
            </p>

            {/* Hover accent */}
            <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-[#7C6A4F] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}