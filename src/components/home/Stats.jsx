import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../ui/Section';

const stats = [
  { value: "10,000+", label: "Couples Matched", description: "Across all 50 states" },
  { value: "500+", label: "Vetted Attorneys", description: "Family law specialists" },
  { value: "98%", label: "Satisfaction Rate", description: "Based on post-consultation surveys" },
  { value: "4.9/5", label: "Average Rating", description: "From verified client reviews" },
];

export default function Stats() {
  return (
    <Section background="dark">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <p className="font-serif text-4xl md:text-5xl text-white mb-2">
              {stat.value}
            </p>
            <p className="text-lg font-medium text-white/90 mb-1">
              {stat.label}
            </p>
            <p className="text-sm text-white/50">
              {stat.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}