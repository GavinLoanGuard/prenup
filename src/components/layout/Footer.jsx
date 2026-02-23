import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const footerLinks = {
  services: [
    { label: "Prenuptial Agreements", href: "PrenupAttorney" },
    { label: "Postnuptial Agreements", href: "PostnuptialAgreement" },
    { label: "Prenup for Home Buyers", href: "PrenupForHouse" },
    { label: "Second Marriage Prenups", href: "PrenupSecondMarriage" },
  ],
  resources: [
    { label: "How It Works", href: "HowItWorks" },
    { label: "FAQs", href: "Resources" },
    { label: "State Laws", href: "Resources" },
    { label: "Blog", href: "Resources" },
  ],
  company: [
    { label: "About Us", href: "About" },
    { label: "For Attorneys", href: "ForAttorneys" },
    { label: "Contact", href: "Contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "Privacy" },
    { label: "Terms of Service", href: "Terms" },
    { label: "Attorney Advertising", href: "Disclaimer" },
  ]
};

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20">
        {/* Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-4 lg:mb-0">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
                <span className="text-[#1A1A1A] font-serif text-lg">P</span>
              </div>
              <span className="font-serif text-xl">PrenupAttorney</span>
            </div>
            <p className="text-[#999999] text-sm leading-relaxed max-w-xs">
              Connecting couples with experienced family law attorneys for prenuptial and postnuptial agreements nationwide.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-medium tracking-wider uppercase text-[#666666] mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link 
                    to={createPageUrl(link.href)}
                    className="text-sm text-[#CCCCCC] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-medium tracking-wider uppercase text-[#666666] mb-4">
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={createPageUrl(link.href)}
                    className="text-sm text-[#CCCCCC] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-medium tracking-wider uppercase text-[#666666] mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link 
                    to={createPageUrl(link.href)}
                    className="text-sm text-[#CCCCCC] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-medium tracking-wider uppercase text-[#666666] mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={createPageUrl(link.href)}
                    className="text-sm text-[#CCCCCC] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-[#333333]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-[#666666]">
              © {new Date().getFullYear()} PrenupAttorney.us. All rights reserved.
            </p>
            <p className="text-xs text-[#666666] text-center md:text-right max-w-xl">
              This website is for informational purposes only. It is not legal advice. 
              Consult a licensed attorney in your state for legal guidance.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}