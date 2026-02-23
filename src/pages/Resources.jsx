import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Section, SectionHeader } from '../components/ui/Section';
import { CustomButton } from '../components/ui/CustomButton';
import { ArrowRight, BookOpen, Scale, MapPin, Calculator, Clock, FileText } from 'lucide-react';

const categories = [
  { id: "all", label: "All Resources" },
  { id: "guides", label: "Guides" },
  { id: "state-laws", label: "State Laws" },
  { id: "faqs", label: "FAQs" },
];

const resources = [
  {
    category: "guides",
    icon: BookOpen,
    title: "The Complete Guide to Prenuptial Agreements",
    description: "Everything you need to know about prenups: what they cover, how they work, and why they matter for modern couples.",
    readTime: "12 min read",
    href: "#"
  },
  {
    category: "guides",
    icon: FileText,
    title: "What Can (and Can't) Be in a Prenup",
    description: "A clear breakdown of what provisions are enforceable and what courts typically reject.",
    readTime: "8 min read",
    href: "#"
  },
  {
    category: "guides",
    icon: Calculator,
    title: "How Much Does a Prenup Really Cost?",
    description: "Understand prenup costs by state, complexity, and what factors affect the final price.",
    readTime: "6 min read",
    href: "#"
  },
  {
    category: "guides",
    icon: Clock,
    title: "Prenup Timeline: When to Start",
    description: "A month-by-month guide to ensure your prenup is ready before your wedding day.",
    readTime: "5 min read",
    href: "#"
  },
  {
    category: "state-laws",
    icon: MapPin,
    title: "California Prenup Laws",
    description: "California is a community property state. Learn what that means for your prenuptial agreement.",
    readTime: "7 min read",
    href: "#"
  },
  {
    category: "state-laws",
    icon: MapPin,
    title: "New York Prenup Requirements",
    description: "New York follows equitable distribution. Here's what you need to know.",
    readTime: "7 min read",
    href: "#"
  },
  {
    category: "state-laws",
    icon: MapPin,
    title: "Texas Prenup Laws",
    description: "Another community property state with unique considerations for prenups.",
    readTime: "7 min read",
    href: "#"
  },
  {
    category: "faqs",
    icon: Scale,
    title: "Will a Prenup Hold Up in Court?",
    description: "Factors that affect enforceability and how to maximize your agreement's strength.",
    readTime: "9 min read",
    href: "#"
  },
  {
    category: "faqs",
    icon: Scale,
    title: "Do Both Parties Need Their Own Lawyer?",
    description: "Independent legal counsel isn't always required, but it's almost always recommended.",
    readTime: "5 min read",
    href: "#"
  }
];

export default function Resources() {
  const [activeCategory, setActiveCategory] = useState("all");
  
  useEffect(() => {
    document.title = "Prenup Resources & Guides | State Laws & FAQs | PrenupAttorney.us";
  }, []);
  
  const filteredResources = activeCategory === "all" 
    ? resources 
    : resources.filter(r => r.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FAFAF8] via-white to-[#F5F5F5]" />
        
        <div className="relative max-w-7xl mx-auto px-5 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-[#7C6A4F] mb-4">
              Resources
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] leading-[1.1] mb-6 max-w-4xl mx-auto">
              Learn before you leap
            </h1>
            <p className="text-xl text-[#666666] leading-relaxed max-w-2xl mx-auto">
              Comprehensive guides, state-specific laws, and answers to common questions about prenuptial and postnuptial agreements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Resources Grid */}
      <Section background="white">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-12 justify-center">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#1A1A1A] text-white'
                  : 'bg-[#F5F5F5] text-[#666666] hover:bg-[#E5E5E5]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <a href={resource.href} className="group block h-full">
                <div className="bg-white rounded-2xl p-6 border border-[#E5E5E5] hover:border-[#7C6A4F]/30 hover:shadow-lg transition-all h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#FAFAF8] flex items-center justify-center">
                      <resource.icon className="w-5 h-5 text-[#7C6A4F]" />
                    </div>
                    <span className="text-xs text-[#999999]">{resource.readTime}</span>
                  </div>
                  
                  <h3 className="font-serif text-lg text-[#1A1A1A] group-hover:text-[#7C6A4F] transition-colors mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-[#666666] leading-relaxed flex-grow">
                    {resource.description}
                  </p>
                  
                  <div className="mt-4 pt-4 border-t border-[#E5E5E5]">
                    <span className="text-sm text-[#7C6A4F] flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read more <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </a>
            </motion.article>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-[#1A1A1A]">
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            Ready for personalized guidance?
          </h2>
          <p className="text-lg text-white/60 mb-8">
            Connect with an attorney who can answer your specific questions. Free consultation.
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