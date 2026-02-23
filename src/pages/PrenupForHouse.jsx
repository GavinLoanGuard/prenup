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
  { title: "Define ownership shares", description: "Clarify who owns what percentage of the property, especially with unequal down payments." },
  { title: "Protect your down payment", description: "Ensure the money you contributed to the purchase is protected in case of divorce." },
  { title: "Establish equity division", description: "Determine how appreciation and equity will be split if the marriage ends." },
  { title: "Address mortgage responsibility", description: "Clarify who's responsible for payments, maintenance, and improvements." },
  { title: "Plan for various scenarios", description: "What if one person wants to sell? What if one person can't pay? A prenup addresses these." },
  { title: "Protect family contributions", description: "If parents helped with the down payment, ensure their contribution is documented and protected." },
];

const process = [
  { title: "Pre-purchase planning", description: "Ideally, discuss the prenup before making an offer. This gives time to align on ownership and protection terms." },
  { title: "Document contributions", description: "Create a clear record of each person's financial contribution: down payment, closing costs, and ongoing expenses." },
  { title: "Draft property provisions", description: "Your attorney drafts specific clauses addressing the home purchase within your broader prenup." },
  { title: "Coordinate with real estate", description: "Ensure your prenup aligns with how the property will be titled (joint tenancy, tenants in common, etc.)." },
  { title: "Execute before closing", description: "Sign your prenup before closing on the house to ensure all protections are in place." },
];

const faqs = [
  { question: "Can we buy a house without a prenup?", answer: "Yes, but without an agreement, state laws determine property division—which may not reflect your intentions or contributions. If one person contributed more to the down payment, this could be particularly unfair." },
  { question: "What if we're already engaged and closing soon?", answer: "It's still possible to get a prenup quickly, though starting 3-6 months ahead is ideal. Be upfront with your attorney about timelines so they can prioritize." },
  { question: "How is home equity typically divided without a prenup?", answer: "It varies by state. In community property states, the home may be split 50/50 regardless of contributions. In equitable distribution states, courts divide 'fairly' but not necessarily equally." },
  { question: "What about home improvements we make together?", answer: "Your prenup can address how improvements affect equity and ownership percentages. This is especially important if one person does more work or contributes more money." },
  { question: "Should we title the house differently based on our prenup?", answer: "Possibly. Your attorney can advise on whether to hold title as joint tenants, tenants in common, or another arrangement that aligns with your agreement." },
];

const relatedServices = [
  { id: "prenup", href: "PrenupAttorney", title: "Prenuptial Agreements", description: "Full prenup services beyond just home protection." },
  { id: "postnup", href: "PostnuptialAgreement", title: "Postnuptial Agreements", description: "Already bought the house? A postnup can still help." },
  { id: "second", href: "PrenupSecondMarriage", title: "Second Marriage Prenups", description: "Additional considerations for blended families." },
];

export default function PrenupForHouse() {
  useEffect(() => {
    document.title = "Prenup for House Purchase | Protect Your Home Investment | PrenupAttorney.us";
  }, []);

  return (
    <>
      <ServiceHero
        eyebrow="Prenup for Home Purchase"
        title={<>Buying a home together? <span className="italic text-[#7C6A4F]">Protect</span> your investment</>}
        description="Real estate is often a couple's largest asset. Whether you're contributing unequally to the down payment or want clear ownership rules, a prenup protects both parties."
        ctaText="Speak With an Attorney"
        ctaService="prenup_house"
        image="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6998913a9d6bb43a2d91fd59/b59dd4e08_ChatGPTImageFeb20202609_01_13AM.png"
      />

      <ServiceBenefits 
        title="Why you need a prenup when buying a home"
        benefits={benefits}
      />

      <ServiceProcess steps={process} />

      <ServiceFAQ faqs={faqs} />

      <RelatedServices current="house" services={relatedServices} />

      <ServiceCTA
        title="Protect your home investment"
        description="Connect with an attorney who understands both prenups and real estate. Free consultation."
        ctaText="Get Your Free Consultation"
        ctaService="prenup_house"
      />
    </>
  );
}