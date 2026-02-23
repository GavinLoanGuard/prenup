import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Section, SectionHeader } from '../ui/Section';
import { ArrowUpRight, FileText, RefreshCw, Home, Heart } from 'lucide-react';

const services = [
  {
    icon: FileText,
    title: "Prenuptial Agreements",
    description: "Protect assets, define expectations, and start your marriage with financial clarity.",
    href: "PrenupAttorney",
    stats: "Most requested",
    color: "from-[#7C6A4F] to-[#9B8B6E]"
  },
  {
    icon: RefreshCw,
    title: "Postnuptial Agreements",
    description: "Already married? It's not too late to create a formal agreement between spouses.",
    href: "PostnuptialAgreement",
    stats: "Growing 40% YoY",
    color: "from-[#4A5568] to-[#718096]"
  },
  {
    icon: Home,
    title: "Prenup for Home Purchase",
    description: "Buying a home together? Define ownership and protect your real estate investment.",
    href: "PrenupForHouse",
    stats: "Fastest growing",
    color: "from-[#2D3748] to-[#4A5568]"
  },
  {
    icon: Heart,
    title: "Second Marriage Prenups",
    description: "Blending families requires extra planning. Protect children and prior assets.",
    href: "PrenupSecondMarriage",
    stats: "High complexity",
    color: "from-[#553C9A] to-[#805AD5]"
  }
];

export default function Services() {
  return (
    <Section background="gradient">
      <SectionHeader
        eyebrow="Our Services"
        title="Expert guidance for every situation"
        description="Whether you're engaged, recently married, or planning for the future, we connect you with attorneys who understand your specific needs."
        align="left"
      />

      <div className="grid md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Link to={createPageUrl(service.href)} className="group block">
              <div className="relative bg-white rounded-2xl p-8 border border-[#E5E5E5] hover:border-transparent hover:shadow-2xl hover:shadow-black/5 transition-all duration-500 overflow-hidden">
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />
                
                <div className="relative">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-[#999999] group-hover:text-[#1A1A1A] transition-colors" />
                  </div>

                  {/* Content */}
                  <h3 className="font-serif text-2xl text-[#1A1A1A] mb-3 group-hover:text-[#7C6A4F] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[#666666] leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Stats tag */}
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAFAF8] text-xs font-medium text-[#666666]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7C6A4F]" />
                    {service.stats}
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}