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
  { title: "Protect children from prior marriage", description: "Ensure assets you've earmarked for your children go to them, regardless of what happens in your new marriage." },
  { title: "Preserve family inheritances", description: "Keep heirlooms, family properties, and inherited wealth within your bloodline." },
  { title: "Clarify blended family finances", description: "Define how expenses for stepchildren and shared children will be handled." },
  { title: "Protect retirement assets", description: "You've spent years building retirement savings—a prenup keeps them separate." },
  { title: "Learn from past experience", description: "If you went through a difficult divorce before, a prenup provides certainty this time." },
  { title: "Maintain financial independence", description: "Preserve the autonomy you've built since your first marriage ended." },
];

const process = [
  { title: "Family assessment", description: "Map out your family structure: children, prior obligations, existing trusts, and estate plans." },
  { title: "Define priorities", description: "What matters most? Children's inheritance? Retirement protection? Your attorney helps prioritize." },
  { title: "Coordinate with estate planning", description: "Ensure your prenup aligns with wills, trusts, and beneficiary designations." },
  { title: "Address prior obligations", description: "Account for alimony, child support, or other commitments from your previous marriage." },
  { title: "Execute comprehensively", description: "A second marriage prenup may be more detailed—take time to get it right." },
];

const faqs = [
  { question: "Is a prenup more important for second marriages?", answer: "Often, yes. Second marriages typically involve more assets, prior obligations (alimony, child support), children from previous relationships, and lessons learned from past divorces." },
  { question: "How do I protect my children's inheritance?", answer: "Your prenup can explicitly state that certain assets are separate property intended for your children. This should coordinate with your estate plan, including trusts and beneficiary designations." },
  { question: "What about alimony from my previous marriage?", answer: "Your prenup should address how existing alimony payments (giving or receiving) interact with your new marriage's finances. This protects both you and your new spouse." },
  { question: "Can a prenup affect my stepchildren?", answer: "A prenup can define financial responsibilities toward stepchildren during the marriage. However, it cannot override a parent's legal obligations to their biological children." },
  { question: "My first marriage didn't have a prenup—was that a mistake?", answer: "Not necessarily, but circumstances change. If your first divorce taught you the value of clear financial agreements, that's a lesson worth applying to your second marriage." },
];

const relatedServices = [
  { id: "prenup", href: "PrenupAttorney", title: "Prenuptial Agreements", description: "General prenup information and services." },
  { id: "postnup", href: "PostnuptialAgreement", title: "Postnuptial Agreements", description: "Already remarried? A postnup can still help." },
  { id: "house", href: "PrenupForHouse", title: "Prenup for Home Purchase", description: "Protect real estate investments in your new marriage." },
];

export default function PrenupSecondMarriage() {
  useEffect(() => {
    document.title = "Second Marriage Prenup | Protect Blended Family Assets | PrenupAttorney.us";
  }, []);

  return (
    <>
      <ServiceHero
        eyebrow="Second Marriage Prenups"
        title={<>Protect your <span className="italic text-[#7C6A4F]">family</span> and your future</>}
        description="Second marriages come with unique considerations: children from prior relationships, established assets, and hard-won wisdom about financial planning. A prenup ensures everyone is protected."
        ctaText="Find the Right Attorney"
        ctaService="prenup_second_marriage"
        image="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6998913a9d6bb43a2d91fd59/3a135a6f8_ChatGPTImageFeb19202611_16_51PM.png"
      />

      <ServiceBenefits 
        title="Why second marriages need extra protection"
        benefits={benefits}
      />

      <ServiceProcess steps={process} />

      <ServiceFAQ faqs={faqs} />

      <RelatedServices current="second" services={relatedServices} />

      <ServiceCTA
        title="Start your new chapter with confidence"
        description="Connect with an attorney who understands blended family dynamics. Free consultation."
        ctaText="Get Your Free Consultation"
        ctaService="prenup_second_marriage"
      />
    </>
  );
}