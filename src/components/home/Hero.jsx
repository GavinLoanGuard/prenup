import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { CustomButton } from '../ui/CustomButton';
import { ArrowRight, Shield, Clock, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const trustBadges = [
  { icon: Shield, text: "Vetted Attorneys" },
  { icon: Clock, text: "Quick Matching" },
  { icon: CheckCircle, text: "No Obligation" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FAFAF8] via-white to-[#F5F5F5]" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#F0EDE8] to-transparent opacity-50" />
      
      {/* Subtle pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Eyebrow */}
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7C6A4F]/10 text-[#7C6A4F] text-sm font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7C6A4F]" />
              Trusted by 10,000+ couples nationwide
            </span>

            {/* Headline */}
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] leading-[1.1] mb-6">
              Protect What
              <br />
              <span className="italic text-[#7C6A4F]">Matters Most</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-[#666666] leading-relaxed max-w-xl mb-8">
              Connect with experienced family law attorneys who specialize in prenuptial and postnuptial agreements. 
              Get clarity, not confusion.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link to={createPageUrl("Consultation")}>
                <CustomButton variant="primary" size="lg" className="w-full sm:w-auto group">
                  Find Your Attorney
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </CustomButton>
              </Link>
              <Link to={createPageUrl("HowItWorks")}>
                <CustomButton variant="outline" size="lg" className="w-full sm:w-auto">
                  How It Works
                </CustomButton>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6">
              {trustBadges.map((badge, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-[#666666]">
                  <badge.icon className="w-4 h-4 text-[#7C6A4F]" />
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative lg:pl-8"
          >
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/10">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6998913a9d6bb43a2d91fd59/44df45406_ChatGPTImageFeb20202609_00_15AM.png"
                alt="Couple meeting with attorney"
                className="w-full h-[480px] object-cover object-center"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -left-4 lg:-left-12 bottom-8 bg-white rounded-2xl shadow-xl shadow-black/5 p-5 border border-[#E5E5E5]"
            >
              <p className="text-2xl font-serif text-[#1A1A1A]">98%</p>
              <p className="text-xs text-[#666666]">Client Satisfaction</p>
            </motion.div>

            {/* Floating Review Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -right-4 top-8 bg-white rounded-2xl shadow-xl shadow-black/5 p-4 border border-[#E5E5E5]"
            >
              <div className="flex items-center gap-1 mb-1">
                {[1,2,3,4,5].map((i) => (
                  <svg key={i} className="w-3 h-3 text-[#7C6A4F]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-xs text-[#666666]">500+ verified reviews</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}