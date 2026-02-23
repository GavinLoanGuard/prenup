import React, { useEffect } from 'react';
import { Section } from '../components/ui/Section';

export default function Terms() {
  useEffect(() => {
    document.title = "Terms of Service | PrenupAttorney.us";
  }, []);

  return (
    <>
      <section className="pt-32 pb-8 md:pt-40 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <h1 className="font-serif text-4xl md:text-5xl text-[#1A1A1A] mb-4">Terms of Service</h1>
          <p className="text-[#666666]">Last updated: February 2026</p>
        </div>
      </section>

      <Section background="white">
        <div className="max-w-3xl mx-auto prose prose-lg prose-gray">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using the Clarita website and services, you agree to be bound by these 
            Terms of Service. If you do not agree to these terms, please do not use our services.
          </p>

          <h2>2. Description of Service</h2>
          <p>
            PrenupAttorney.us is a matching service that connects individuals seeking prenuptial or postnuptial 
            agreements with attorneys in our network. We do not provide legal advice or legal services directly.
          </p>

          <h2>3. Not a Law Firm</h2>
          <p>
            <strong>PrenupAttorney.us is not a law firm and does not provide legal advice.</strong> The information 
            on our website is for general informational purposes only and should not be construed as 
            legal advice. You should consult with a licensed attorney for advice specific to your situation.
          </p>

          <h2>4. Attorney Relationships</h2>
          <p>
            Attorneys in our network are independent practitioners. PrenupAttorney.us does not control, supervise, 
            or direct their work. Any attorney-client relationship is solely between you and the attorney 
            you choose to work with.
          </p>

          <h2>5. User Responsibilities</h2>
          <p>You agree to:</p>
          <ul>
            <li>Provide accurate and complete information</li>
            <li>Use our services only for lawful purposes</li>
            <li>Not misrepresent your identity or affiliation</li>
            <li>Respect the confidentiality of communications</li>
          </ul>

          <h2>6. Fees and Payments</h2>
          <p>
            Clarita's matching service is free for individuals seeking attorneys. Any fees for legal 
            services are determined by and paid directly to the attorney you engage.
          </p>

          <h2>7. No Guarantees</h2>
          <p>
            We do not guarantee that you will be matched with an attorney, that any attorney will 
            accept your case, or any particular outcome of your legal matter.
          </p>

          <h2>8. Limitation of Liability</h2>
          <p>
            PrenupAttorney.us shall not be liable for any damages arising from your use of our services, 
            including but not limited to direct, indirect, incidental, or consequential damages.
          </p>

          <h2>9. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless PrenupAttorney.us from any claims, damages, or expenses 
            arising from your use of our services or violation of these terms.
          </p>

          <h2>10. Modifications</h2>
          <p>
            We reserve the right to modify these terms at any time. Continued use of our services 
            after changes constitutes acceptance of the modified terms.
          </p>

          <h2>11. Governing Law</h2>
          <p>
            These terms shall be governed by the laws of the State of Delaware, without regard to 
            conflict of law principles.
          </p>

          <h2>12. Contact</h2>
          <p>
            For questions about these terms, please contact us at{' '}
            <a href="mailto:legal@clarita.legal" className="text-[#7C6A4F]">legal@clarita.legal</a>.
          </p>
        </div>
      </Section>
    </>
  );
}