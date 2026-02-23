import React from 'react';
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export function CustomButton({ 
  children, 
  variant = "primary", 
  size = "default",
  showArrow = false,
  className,
  ...props 
}) {
  const variants = {
    primary: "bg-[#1A1A1A] text-white hover:bg-[#333333] border-transparent",
    secondary: "bg-white text-[#1A1A1A] hover:bg-[#F5F5F5] border-[#E5E5E5]",
    outline: "bg-transparent text-[#1A1A1A] hover:bg-[#FAFAF8] border-[#1A1A1A]",
    ghost: "bg-transparent text-[#1A1A1A] hover:text-[#7C6A4F] border-transparent",
    accent: "bg-[#7C6A4F] text-white hover:bg-[#6B5A40] border-transparent"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    xl: "px-10 py-5 text-lg"
  };

  return (
    <button 
      className={cn(
        "inline-flex items-center justify-center gap-2 font-medium rounded-full border transition-all duration-300 ease-out",
        "focus:outline-none focus:ring-2 focus:ring-[#7C6A4F] focus:ring-offset-2",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
      {showArrow && (
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      )}
    </button>
  );
}