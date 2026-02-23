import React from 'react';
import { motion } from 'framer-motion';
import ConsultationForm from '../components/forms/ConsultationForm';
import { Shield, Clock, CheckCircle, Star } from 'lucide-react';

const benefits = [
  { icon: Shield, title: "100% Confidential", description: "Your information is protected and never shared without consent." },
  { icon: Clock, title: "Fast Matching", description: "We'll connect you with a qualified attorney within 24 hours." },
  { icon: CheckCircle, title: "No Obligation", description: "Free consultation with no pressure to proceed." },
];

const testimonial = {
  quote: "The process was so simple. Within a day, I was speaking with an attorney who understood exactly what we needed.",
  author: "Rachel M.",
  location: "Denver, CO",
  rating: 5
};

export default function Consultation() {
  // Check for service type in URL params
  const urlParams = new URLSearchParams(window.location.search);
  const serviceType = urlParams.get('service');

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAFAF8] to-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-32"
          >
            <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-[#7C6A4F] mb-4">
              Free Consultation
            </span>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1A1A1A] leading-[1.15] mb-6">
              Get matched with the right attorney for your needs
            </h1>
            <p className="text-lg text-[#666666] leading-relaxed mb-10">
              Answer a few questions and we'll connect you with a vetted family law attorney in your state who specializes in prenuptial and postnuptial agreements.
            </p>

            {/* Benefits */}
            <div className="space-y-6 mb-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#7C6A4F]/10 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 text-[#7C6A4F]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#1A1A1A] mb-1">{benefit.title}</h3>
                    <p className="text-sm text-[#666666]">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Testimonial */}
            <div className="bg-white rounded-2xl p-6 border border-[#E5E5E5]">
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-[#7C6A4F] fill-current" />
                ))}
              </div>
              <p className="text-[#1A1A1A] mb-4 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E5E5E5] to-[#CCCCCC]" />
                <div>
                  <p className="font-medium text-[#1A1A1A] text-sm">{testimonial.author}</p>
                  <p className="text-xs text-[#666666]">{testimonial.location}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ConsultationForm defaultService={serviceType} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}