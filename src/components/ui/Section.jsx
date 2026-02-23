import React from 'react';
import { cn } from "@/lib/utils";

export function Section({ 
  children, 
  className, 
  size = "default",
  background = "white",
  ...props 
}) {
  const sizes = {
    tight: "py-12 md:py-16",
    default: "py-16 md:py-24",
    large: "py-20 md:py-32",
    hero: "py-24 md:py-40"
  };

  const backgrounds = {
    white: "bg-white",
    cream: "bg-[#FAFAF8]",
    dark: "bg-[#1A1A1A] text-white",
    gradient: "bg-gradient-to-b from-[#FAFAF8] to-white"
  };

  return (
    <section 
      className={cn(sizes[size], backgrounds[background], className)} 
      {...props}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {children}
      </div>
    </section>
  );
}

export function SectionHeader({ 
  eyebrow, 
  title, 
  description, 
  align = "center",
  className 
}) {
  const alignments = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto"
  };

  return (
    <div className={cn("max-w-3xl mb-12 md:mb-16", alignments[align], className)}>
      {eyebrow && (
        <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-[#7C6A4F] mb-4">
          {eyebrow}
        </span>
      )}
      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1A1A1A] leading-[1.15] mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-[#666666] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}