import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Section, SectionHeader } from '../ui/Section';
import { CustomButton } from '../ui/CustomButton';
import { ArrowRight, CheckCircle, ChevronRight } from 'lucide-react';

export function ServiceHero({ 
  eyebrow, 
  title, 
  description, 
  ctaText = "Get Started",
  ctaLink = "Consultation",
  ctaService = null,
  image = null 
}) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#FAFAF8] via-white to-[#F5F5F5]" />
      
      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <div className={`grid ${image ? 'lg:grid-cols-2 gap-12 lg:gap-16 items-center' : ''}`}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={image ? '' : 'max-w-3xl'}
          >
            <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-[#7C6A4F] mb-4">
              {eyebrow}
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] leading-[1.1] mb-6">
              {title}
            </h1>
            <p className="text-xl text-[#666666] leading-relaxed mb-8">
              {description}
            </p>
            <Link to={createPageUrl(ctaLink) + (ctaService ? `?service=${ctaService}` : '')}>
              <CustomButton variant="primary" size="lg" className="group">
                {ctaText}
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </CustomButton>
            </Link>
          </motion.div>

          {image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden shadow-xl shadow-black/10"
            >
              <img src={image} alt={title} className="w-full h-[420px] object-cover" />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

export function ServiceBenefits({ title, benefits }) {
  return (
    <Section background="white">
      <SectionHeader
        title={title}
        align="left"
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            <CheckCircle className="w-6 h-6 text-[#7C6A4F] flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-medium text-[#1A1A1A] mb-1">{benefit.title}</h3>
              <p className="text-[#666666] text-sm leading-relaxed">{benefit.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

export function ServiceProcess({ steps }) {
  return (
    <Section background="cream">
      <SectionHeader
        eyebrow="The Process"
        title="What to expect"
        description="A clear path from questions to answers."
      />
      <div className="max-w-3xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative pl-12 pb-12 last:pb-0"
          >
            {/* Connector line */}
            {index < steps.length - 1 && (
              <div className="absolute left-[18px] top-10 w-px h-[calc(100%-24px)] bg-[#E5E5E5]" />
            )}
            
            {/* Step number */}
            <div className="absolute left-0 top-0 w-9 h-9 rounded-full bg-[#7C6A4F] flex items-center justify-center text-white text-sm font-medium">
              {index + 1}
            </div>
            
            <h3 className="font-serif text-xl text-[#1A1A1A] mb-2">{step.title}</h3>
            <p className="text-[#666666] leading-relaxed">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

export function ServiceFAQ({ faqs }) {
  const [openIndex, setOpenIndex] = React.useState(0);

  return (
    <Section background="white">
      <SectionHeader
        eyebrow="FAQ"
        title="Common questions"
      />
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-[#E5E5E5] last:border-b-0">
            <button
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              className="w-full py-5 flex items-center justify-between text-left"
            >
              <span className="font-medium text-[#1A1A1A] pr-4">{faq.question}</span>
              <ChevronRight className={`w-5 h-5 text-[#999999] transition-transform ${openIndex === index ? 'rotate-90' : ''}`} />
            </button>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                className="pb-5"
              >
                <p className="text-[#666666] leading-relaxed">{faq.answer}</p>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}

export function ServiceCTA({ title, description, ctaText = "Get Started", ctaLink = "Consultation", ctaService = null }) {
  return (
    <section className="py-20 md:py-28 bg-[#1A1A1A]">
      <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">{title}</h2>
        <p className="text-lg text-white/60 mb-8">{description}</p>
        <Link to={createPageUrl(ctaLink) + (ctaService ? `?service=${ctaService}` : '')}>
          <CustomButton variant="accent" size="lg" className="group">
            {ctaText}
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </CustomButton>
        </Link>
      </div>
    </section>
  );
}

export function RelatedServices({ current, services }) {
  const filtered = services.filter(s => s.id !== current);
  
  return (
    <Section background="gradient">
      <SectionHeader
        eyebrow="Related Services"
        title="Other ways we can help"
        align="left"
      />
      <div className="grid md:grid-cols-3 gap-6">
        {filtered.map((service, index) => (
          <Link key={service.id} to={createPageUrl(service.href)}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-xl p-6 border border-[#E5E5E5] hover:border-[#7C6A4F]/30 hover:shadow-lg transition-all"
            >
              <h3 className="font-serif text-lg text-[#1A1A1A] group-hover:text-[#7C6A4F] transition-colors mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-[#666666] mb-4">{service.description}</p>
              <span className="text-sm text-[#7C6A4F] flex items-center gap-1">
                Learn more <ArrowRight className="w-3 h-3" />
              </span>
            </motion.div>
          </Link>
        ))}
      </div>
    </Section>
  );
}