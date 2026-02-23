import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Section, SectionHeader } from '../components/ui/Section';
import { CustomButton } from '../components/ui/CustomButton';
import { ArrowRight, Target, Eye, Heart } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: "Clarity Over Complexity",
    description: "Legal services shouldn't be confusing. We simplify the process of finding the right attorney for your specific needs."
  },
  {
    icon: Eye,
    title: "Transparency First",
    description: "No hidden agendas. We're upfront about how we work, how attorneys are selected, and what to expect."
  },
  {
    icon: Heart,
    title: "Couples, Not Cases",
    description: "We understand that behind every prenup is a real relationship. We treat you as people, not transactions."
  }
];

const stats = [
  { value: "10,000+", label: "Couples matched" },
  { value: "500+", label: "Vetted attorneys" },
  { value: "50", label: "States covered" },
  { value: "98%", label: "Satisfaction rate" }
];

export default function About() {
  useEffect(() => {
    document.title = "About PrenupAttorney.us | Our Mission | Prenup & Postnup Attorney Network";
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FAFAF8] via-white to-[#F5F5F5]" />
        
        <div className="relative max-w-7xl mx-auto px-5 md:px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-[#7C6A4F] mb-4">
                About PrenupAttorney.us
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] leading-[1.1] mb-6">
                Making marital agreements accessible to everyone
              </h1>
              <p className="text-xl text-[#666666] leading-relaxed">
                We believe that every couple deserves access to quality legal guidance for their prenuptial or postnuptial agreement—without confusion, judgment, or unnecessary expense.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <Section background="white">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-[#7C6A4F] mb-4">
              Our Mission
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#1A1A1A] leading-[1.15] mb-6">
              Bringing clarity to one of life's most important decisions
            </h2>
            <div className="space-y-4 text-[#666666] leading-relaxed">
              <p>
                Prenuptial and postnuptial agreements are misunderstood. They're not about expecting divorce—they're about having honest conversations about money, goals, and expectations before they become problems.
              </p>
              <p>
                But finding the right attorney shouldn't be hard. That's why we built PrenupAttorney.us: a platform that connects couples with experienced family law attorneys who specialize in marital agreements.
              </p>
              <p>
                We vet every attorney in our network, match you based on your specific needs, and make the consultation process simple and pressure-free.
              </p>
            </div>
          </div>
          
          <div className="bg-[#FAFAF8] rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div key={index}>
                  <p className="font-serif text-4xl text-[#1A1A1A] mb-1">{stat.value}</p>
                  <p className="text-sm text-[#666666]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section background="cream">
        <SectionHeader
          eyebrow="Our Values"
          title="What we stand for"
        />
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 border border-[#E5E5E5]"
            >
              <div className="w-12 h-12 rounded-xl bg-[#7C6A4F]/10 flex items-center justify-center mb-6">
                <value.icon className="w-6 h-6 text-[#7C6A4F]" />
              </div>
              <h3 className="font-serif text-xl text-[#1A1A1A] mb-3">{value.title}</h3>
              <p className="text-[#666666] leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* How We're Different */}
      <Section background="white">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-[#7C6A4F] mb-4">
            Why Clarita?
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#1A1A1A] leading-[1.15] mb-6">
            We're not a law firm. We're your guide.
          </h2>
          <p className="text-lg text-[#666666] leading-relaxed mb-8">
            Think of PrenupAttorney.us as your trusted advisor in navigating prenuptial and postnuptial agreements. We don't provide legal advice—we connect you with attorneys who do. Our job is to make the search simple, informed, and pressure-free.
          </p>
          <Link to={createPageUrl("Consultation")}>
            <CustomButton variant="primary" size="lg" className="group">
              Find Your Attorney
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </CustomButton>
          </Link>
        </div>
      </Section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-[#1A1A1A]">
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-lg text-white/60 mb-8">
            Connect with a vetted family law attorney in your state. Free consultation, no obligation.
          </p>
          <Link to={createPageUrl("Consultation")}>
            <CustomButton variant="accent" size="lg" className="group">
              Get Your Free Consultation
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </CustomButton>
          </Link>
        </div>
      </section>
    </>
  );
}