import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";
import { CustomButton } from '../ui/CustomButton';

const navLinks = [
  { 
    label: "Services",
    children: [
      { label: "Prenuptial Agreements", href: "PrenupAttorney", description: "Protect your future before marriage" },
      { label: "Postnuptial Agreements", href: "PostnuptialAgreement", description: "Agreements for married couples" },
      { label: "Prenup for Home Buyers", href: "PrenupForHouse", description: "Protect your property investment" },
      { label: "Second Marriage Prenups", href: "PrenupSecondMarriage", description: "Protect blended families" },
    ]
  },
  { label: "How It Works", href: "HowItWorks" },
  { label: "Resources", href: "Resources" },
  { label: "About", href: "About" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3" 
          : "bg-transparent py-5"
      )}
    >
      <nav className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to={createPageUrl("Home")} className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#1A1A1A] flex items-center justify-center">
            <span className="text-white font-serif text-lg">P</span>
          </div>
          <span className="font-serif text-xl text-[#1A1A1A]">PrenupAttorney</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.label} className="relative">
              {link.children ? (
                <button
                  className="flex items-center gap-1 text-[15px] text-[#333333] hover:text-[#1A1A1A] transition-colors"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {link.label}
                  <ChevronDown className="w-4 h-4" />
                </button>
              ) : (
                <Link 
                  to={createPageUrl(link.href)}
                  className="text-[15px] text-[#333333] hover:text-[#1A1A1A] transition-colors"
                >
                  {link.label}
                </Link>
              )}
              
              {link.children && openDropdown === link.label && (
                <div 
                  className="absolute top-full left-0 pt-3"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <div className="bg-white rounded-2xl shadow-xl border border-[#E5E5E5] p-2 min-w-[280px]">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        to={createPageUrl(child.href)}
                        className="block p-3 rounded-xl hover:bg-[#FAFAF8] transition-colors"
                      >
                        <span className="block text-[15px] font-medium text-[#1A1A1A]">
                          {child.label}
                        </span>
                        <span className="block text-sm text-[#666666] mt-0.5">
                          {child.description}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Link to={createPageUrl("Consultation")}>
            <CustomButton variant="primary" size="default">
              Get Started
            </CustomButton>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden p-2"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-white z-40">
          <div className="p-5 space-y-4">
            {navLinks.map((link) => (
              <div key={link.label}>
                {link.children ? (
                  <div className="space-y-2">
                    <span className="block text-xs font-medium tracking-wider uppercase text-[#666666] px-2">
                      {link.label}
                    </span>
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        to={createPageUrl(child.href)}
                        className="block p-3 rounded-xl hover:bg-[#FAFAF8] transition-colors"
                        onClick={() => setIsMobileOpen(false)}
                      >
                        <span className="block text-[15px] font-medium text-[#1A1A1A]">
                          {child.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link 
                    to={createPageUrl(link.href)}
                    className="block p-3 text-lg text-[#1A1A1A]"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-[#E5E5E5]">
              <Link to={createPageUrl("Consultation")} onClick={() => setIsMobileOpen(false)}>
                <CustomButton variant="primary" size="lg" className="w-full">
                  Get Started
                </CustomButton>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}