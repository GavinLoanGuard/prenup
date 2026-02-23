import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: "10,000+", label: "Couples Matched" },
  { value: "500+", label: "Vetted Attorneys" },
  { value: "50", label: "States Covered" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "24hrs", label: "Avg. Match Time" },
];

export default function TrustBar() {
  return (
    <section className="py-12 border-y border-[#E5E5E5] bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="font-serif text-2xl md:text-3xl text-[#1A1A1A] font-medium">{stat.value}</p>
              <p className="text-xs text-[#999999] mt-1 tracking-wide uppercase">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}