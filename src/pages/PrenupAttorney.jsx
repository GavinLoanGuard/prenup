import React, { useEffect } from 'react';
import { 
  ServiceHero, 
  ServiceBenefits, 
  ServiceProcess, 
  ServiceFAQ, 
  ServiceCTA,
  RelatedServices 
} from '../components/services/ServicePageTemplate';

const benefits = [
  { title: "Protect premarital assets", description: "Keep property, investments, and savings you brought into the marriage separate." },
  { title: "Define property division", description: "Establish clear rules for how assets acquired during marriage will be divided." },
  { title: "Shield future earnings", description: "Protect income growth, bonuses, stock options, and retirement accounts." },
  { title: "Protect business interests", description: "Keep your business separate and prevent disputes over ownership stakes." },
  { title: "Clarify debt responsibility", description: "Determine who's responsible for premarital debts and future obligations." },
  { title: "Reduce conflict", description: "Start your marriage with clear financial expectations and communication." },
];

const process = [
  { title: "Initial conversation", description: "Share your situation and what you want to protect. Your attorney will explain what's possible under your state's laws." },
  { title: "Financial disclosure", description: "Both parties provide a complete picture of assets, debts, and income. Full transparency is essential for enforceability." },
  { title: "Negotiation & drafting", description: "Your attorney drafts the agreement based on your discussions. Both parties review and negotiate terms." },
  { title: "Independent review", description: "Each party should have the agreement reviewed by their own attorney to ensure fairness and understanding." },
  { title: "Signing & execution", description: "Once both parties agree, the prenup is signed, witnessed, and notarized as required by your state." },
];

const faqs = [
  { question: "When should we start the prenup process?", answer: "Ideally, start 3-6 months before your wedding. Many states require the agreement be signed at least 7-30 days before marriage to avoid claims of coercion. Starting early allows time for thoughtful discussion." },
  { question: "Does getting a prenup mean we don't trust each other?", answer: "Not at all. A prenup is a planning tool, similar to life insurance or estate planning. It encourages honest conversations about finances and expectations—conversations that strengthen relationships." },
  { question: "What can't be included in a prenup?", answer: "Prenups cannot include child custody or child support terms, encourage divorce, or contain illegal provisions. They also can't include terms that are considered unconscionable by the court." },
  { question: "Will my prenup hold up in court?", answer: "Enforceability depends on several factors: full financial disclosure, independent legal counsel for both parties, no evidence of coercion, and reasonable terms. Working with experienced attorneys significantly increases enforceability." },
  { question: "What if our circumstances change after marriage?", answer: "Prenups can include provisions for how they may be modified. Alternatively, you can create a postnuptial agreement later to address changed circumstances." },
];

const relatedServices = [
  { id: "postnup", href: "PostnuptialAgreement", title: "Postnuptial Agreements", description: "For couples who want to create an agreement after marriage." },
  { id: "house", href: "PrenupForHouse", title: "Prenup for Home Purchase", description: "Protect your real estate investment when buying property together." },
  { id: "second", href: "PrenupSecondMarriage", title: "Second Marriage Prenups", description: "Special considerations for remarriage and blended families." },
];

export default function PrenupAttorney() {
  useEffect(() => {
    document.title = "Prenuptial Agreement Attorneys | Find a Prenup Lawyer Near You | PrenupAttorney.us";
  }, []);

  return (
    <>
      <ServiceHero
        eyebrow="Prenuptial Agreements"
        title={<>Protect your future <span className="italic text-[#7C6A4F]">before</span> you say "I do"</>}
        description="A prenuptial agreement isn't about planning for divorce—it's about starting your marriage with clarity, honesty, and financial alignment. Connect with experienced prenup attorneys who understand."
        ctaText="Find a Prenup Attorney"
        ctaService="prenup"
        image="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6998913a9d6bb43a2d91fd59/d858b6a21_ChatGPTImageFeb19202611_15_06PM.png"
      />

      <ServiceBenefits 
        title="What a prenup can do for you"
        benefits={benefits}
      />

      <ServiceProcess steps={process} />

      <ServiceFAQ faqs={faqs} />

      <RelatedServices current="prenup" services={relatedServices} />

      <ServiceCTA
        title="Ready to protect your future?"
        description="Connect with a prenup attorney in your state. Free consultation, no obligation."
        ctaText="Get Your Free Consultation"
        ctaService="prenup"
      />
    </>
  );
}