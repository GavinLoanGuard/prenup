import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowRight, Home, Search } from 'lucide-react';

export default function PageNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FAFAF8] via-white to-[#F5F5F5] px-5">
      <div className="text-center max-w-xl">
        {/* Visual */}
        <div className="mb-8">
          <span className="font-serif text-8xl md:text-9xl text-[#E5E5E5]">404</span>
        </div>

        {/* Content */}
        <h1 className="font-serif text-3xl md:text-4xl text-[#1A1A1A] mb-4">
          Page not found
        </h1>
        <p className="text-lg text-[#666666] mb-8">
          The page you're looking for doesn't exist or has been moved. 
          Let's get you back on track.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            to={createPageUrl("Home")}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1A1A1A] text-white rounded-full hover:bg-[#333333] transition-colors"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <Link 
            to={createPageUrl("Consultation")}
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#E5E5E5] text-[#1A1A1A] rounded-full hover:bg-[#FAFAF8] transition-colors"
          >
            Find an Attorney
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="mt-12 pt-8 border-t border-[#E5E5E5]">
          <p className="text-sm text-[#999999] mb-4">Popular pages:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link to={createPageUrl("PrenupAttorney")} className="text-[#7C6A4F] hover:underline">
              Prenup Attorneys
            </Link>
            <Link to={createPageUrl("PostnuptialAgreement")} className="text-[#7C6A4F] hover:underline">
              Postnup Attorneys
            </Link>
            <Link to={createPageUrl("HowItWorks")} className="text-[#7C6A4F] hover:underline">
              How It Works
            </Link>
            <Link to={createPageUrl("Resources")} className="text-[#7C6A4F] hover:underline">
              Resources
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}