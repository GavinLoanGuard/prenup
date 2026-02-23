import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Section, SectionHeader } from '../components/ui/Section';
import { CustomButton } from '../components/ui/CustomButton';
import { 
  ArrowRight, 
  Users, 
  Target, 
  Shield, 
  TrendingUp, 
  CheckCircle,
  DollarSign,
  Clock,
  Award
} from 'lucide-react';

const benefits = [
  {
    icon: Target,
    title: "Pre-Qualified Leads",
    description: "Every lead is vetted and matched based on service type, location, and timeline. No cold outreach required."
  },
  {
    icon: Shield,
    title: "Quality Control",
    description: "We collect detailed information upfront so you know exactly what each prospective client needs before your first call."
  },
  {
    icon: DollarSign,
    title: "Pay Per Lead",
    description: "No monthly fees or subscriptions. You only pay for qualified leads that match your practice criteria."
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    description: "Leads are delivered in real-time directly to your inbox. Respond quickly to maximize conversion."
  }
];

const howItWorks = [
  { step: "01", title: "Apply to Join", description: "Complete our application with your practice details, coverage areas, and lead preferences." },
  { step: "02", title: "Get Vetted", description: "We verify your credentials, experience, and standing with the state bar." },
  { step: "03", title: "Set Preferences", description: "Define your lead criteria: service types, geographic coverage, and monthly capacity." },
  { step: "04", title: "Receive Matches", description: "Get qualified leads delivered directly to you based on your preferences." },
];

const stats = [
  { value: "10,000+", label: "Couples matched annually" },
  { value: "85%", label: "Lead-to-consultation rate" },
  { value: "50", label: "States covered" },
];

export default function ForAttorneys() {
  useEffect(() => {
    document.title = "For Attorneys | Join Our Prenup & Postnup Lead Network | PrenupAttorney.us";
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FAFAF8] via-white to-[#F5F5F5]" />
        
        <div className="relative max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-[#7C6A4F] mb-4">
                For Attorneys
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] leading-[1.1] mb-6">
                Grow your prenup practice with qualified leads
              </h1>
              <p className="text-xl text-[#666666] leading-relaxed mb-8">
                Join a network of family law attorneys receiving pre-vetted prenup and postnup leads. No cold outreach. No monthly fees. Just qualified clients in your state.
              </p>
              <a href="mailto:partners@clarita.legal">
                <CustomButton variant="primary" size="lg" className="group">
                  Apply to Join
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </CustomButton>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl p-8 border border-[#E5E5E5]"
            >
              <div className="space-y-6">
                {stats.map((stat, index) => (
                  <div key={index} className="flex items-center justify-between pb-4 border-b border-[#E5E5E5] last:border-0 last:pb-0">
                    <span className="text-[#666666]">{stat.label}</span>
                    <span className="font-serif text-2xl text-[#1A1A1A]">{stat.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <Section background="white">
        <SectionHeader
          eyebrow="Why Partner With Us"
          title="Built for busy family law practices"
          description="We handle client acquisition so you can focus on what you do best—providing excellent legal counsel."
        />
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-5"
            >
              <div className="w-12 h-12 rounded-xl bg-[#7C6A4F]/10 flex items-center justify-center flex-shrink-0">
                <benefit.icon className="w-6 h-6 text-[#7C6A4F]" />
              </div>
              <div>
                <h3 className="font-serif text-xl text-[#1A1A1A] mb-2">{benefit.title}</h3>
                <p className="text-[#666666] leading-relaxed">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* How It Works */}
      <Section background="cream">
        <SectionHeader
          eyebrow="How It Works"
          title="Simple process, quality results"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {howItWorks.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <span className="inline-block text-sm font-medium text-[#7C6A4F] mb-4">
                {item.step}
              </span>
              <h3 className="font-serif text-lg text-[#1A1A1A] mb-2">{item.title}</h3>
              <p className="text-sm text-[#666666]">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Requirements */}
      <Section background="white">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            eyebrow="Requirements"
            title="What we look for in partners"
            align="center"
          />
          <div className="space-y-4">
            {[
              "Active license in good standing with your state bar",
              "Minimum 3 years of family law experience",
              "Demonstrated experience with prenuptial/postnuptial agreements",
              "Ability to respond to leads within 24 hours",
              "Commitment to transparent, client-first service"
            ].map((req, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-[#FAFAF8] rounded-xl">
                <CheckCircle className="w-5 h-5 text-[#7C6A4F] flex-shrink-0" />
                <span className="text-[#1A1A1A]">{req}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-[#1A1A1A]">
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            Ready to grow your practice?
          </h2>
          <p className="text-lg text-white/60 mb-8">
            Apply to join our network and start receiving qualified prenup and postnup leads.
          </p>
          <a href="mailto:partners@clarita.legal">
            <CustomButton variant="accent" size="lg" className="group">
              Apply Now
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </CustomButton>
          </a>
          <p className="text-sm text-white/40 mt-4">
            Or email us at partners@clarita.legal
          </p>
        </div>
      </section>
    </>
  );
}