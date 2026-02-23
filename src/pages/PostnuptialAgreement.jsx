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
  { title: "Never got a prenup", description: "It's not too late. A postnup creates the same protections after you're already married." },
  { title: "Circumstances have changed", description: "New inheritance, business success, or career changes? Update your financial arrangement." },
  { title: "Rebuild after conflict", description: "Some couples use postnups to formalize reconciliation agreements and move forward." },
  { title: "Clarify mixed finances", description: "Untangle commingled assets and establish clear ownership going forward." },
  { title: "Protect a new business", description: "Starting a venture during marriage? A postnup can keep it separate." },
  { title: "Estate planning alignment", description: "Ensure your marital agreement aligns with your estate plans and wishes." },
];

const process = [
  { title: "Initial discussion", description: "Both spouses discuss goals openly. Understanding each other's concerns is the foundation of a fair agreement." },
  { title: "Full financial disclosure", description: "Complete transparency about assets, debts, and income is required for an enforceable postnup." },
  { title: "Attorney consultation", description: "Each spouse ideally has their own attorney to ensure both parties' interests are represented." },
  { title: "Drafting & negotiation", description: "Your attorneys draft the agreement, incorporating your discussions and state-specific requirements." },
  { title: "Review & execution", description: "After thorough review and any revisions, the agreement is signed, witnessed, and notarized." },
];

const faqs = [
  { question: "Is a postnup as enforceable as a prenup?", answer: "Yes, when properly executed. Postnups are recognized in all 50 states, though requirements vary. The same factors that make prenups enforceable apply: full disclosure, independent counsel, and fair terms." },
  { question: "Why would we get a postnup instead of a prenup?", answer: "Many couples don't think about financial planning until after marriage. Others experience significant changes—inheritance, business growth, or family dynamics—that warrant a formal agreement." },
  { question: "Can a postnup help if we're having marital issues?", answer: "Sometimes. Postnups can formalize reconciliation agreements or address financial disagreements that contribute to conflict. However, they're not a substitute for counseling if the issues are deeper." },
  { question: "How long does a postnup take?", answer: "Typically 4-8 weeks, though this varies based on complexity and how quickly both parties can reach agreement on terms." },
  { question: "What's different about postnup requirements vs prenup?", answer: "Some states require additional considerations for postnups, such as evidence that the agreement was entered into voluntarily and without coercion from a spouse with more power in the relationship." },
];

const relatedServices = [
  { id: "prenup", href: "PrenupAttorney", title: "Prenuptial Agreements", description: "For engaged couples who want to plan before marriage." },
  { id: "house", href: "PrenupForHouse", title: "Prenup for Home Purchase", description: "Protect your real estate investment when buying property together." },
  { id: "second", href: "PrenupSecondMarriage", title: "Second Marriage Prenups", description: "Special considerations for remarriage and blended families." },
];

export default function PostnuptialAgreement() {
  useEffect(() => {
    document.title = "Postnuptial Agreement Attorneys | Postnup Lawyer Near You | PrenupAttorney.us";
  }, []);

  return (
    <>
      <ServiceHero
        eyebrow="Postnuptial Agreements"
        title={<>It's not too late to <span className="italic text-[#7C6A4F]">protect</span> what matters</>}
        description="Didn't get a prenup? Circumstances changed? A postnuptial agreement gives married couples the same protections and clarity. It's never too late to align your financial future."
        ctaText="Find a Postnup Attorney"
        ctaService="postnup"
        image="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6998913a9d6bb43a2d91fd59/f96d52540_ChatGPTImageFeb20202608_59_29AM.png"
      />

      <ServiceBenefits 
        title="Why couples choose postnups"
        benefits={benefits}
      />

      <ServiceProcess steps={process} />

      <ServiceFAQ faqs={faqs} />

      <RelatedServices current="postnup" services={relatedServices} />

      <ServiceCTA
        title="Ready to get the protection you deserve?"
        description="Connect with a postnup attorney in your state. Free consultation, no obligation."
        ctaText="Get Your Free Consultation"
        ctaService="postnup"
      />
    </>
  );
}