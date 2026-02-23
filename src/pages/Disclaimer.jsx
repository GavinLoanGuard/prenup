import React, { useEffect } from 'react';
import { Section } from '../components/ui/Section';

export default function Disclaimer() {
  useEffect(() => {
    document.title = "Attorney Advertising Disclaimer | PrenupAttorney.us";
  }, []);

  return (
    <>
      <section className="pt-32 pb-8 md:pt-40 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <h1 className="font-serif text-4xl md:text-5xl text-[#1A1A1A] mb-4">Attorney Advertising Disclaimer</h1>
          <p className="text-[#666666]">Important legal notices</p>
        </div>
      </section>

      <Section background="white">
        <div className="max-w-3xl mx-auto prose prose-lg prose-gray">
          <h2>Not Legal Advice</h2>
          <p>
            The information provided on this website is for general informational purposes only and 
            does not constitute legal advice. The information is not intended to create, and receipt 
            or viewing does not constitute, an attorney-client relationship.
          </p>

          <h2>No Attorney-Client Relationship</h2>
          <p>
            Submitting a consultation request through this website does not create an attorney-client 
            relationship. An attorney-client relationship is only formed when you have signed an 
            engagement agreement with a specific attorney.
          </p>

          <h2>Attorney Advertising</h2>
          <p>
            Portions of this website may constitute attorney advertising under the rules of some 
            jurisdictions. Prior results do not guarantee a similar outcome. The outcome of any 
            legal matter depends on many factors, including the specific facts of your case.
          </p>

          <h2>State-Specific Rules</h2>
          <p>
            Laws governing prenuptial and postnuptial agreements vary significantly by state. 
            Information on this website may not apply to your jurisdiction. Always consult with 
            an attorney licensed in your state for advice specific to your situation.
          </p>

          <h2>No Guarantee of Results</h2>
          <p>
            We make no guarantees about the outcome of any legal matter, the quality of any 
            attorney's work, or the enforceability of any agreement. Each legal situation is 
            unique and should be evaluated by a qualified attorney.
          </p>

          <h2>Independent Attorneys</h2>
          <p>
            Attorneys in our network are independent legal practitioners. PrenupAttorney.us does not 
            employ these attorneys and has no control over their legal work, fees, or availability. 
            The listing of an attorney on our platform does not constitute an endorsement.
          </p>

          <h2>Accuracy of Information</h2>
          <p>
            While we strive to provide accurate and up-to-date information, laws change frequently. 
            We make no representations about the accuracy, completeness, or currency of information 
            on this website.
          </p>

          <h2>Contact Information</h2>
          <p>
            For questions about this disclaimer or our services, please contact us at{' '}
            <a href="mailto:legal@clarita.legal" className="text-[#7C6A4F]">legal@clarita.legal</a>.
          </p>

          <div className="mt-12 p-6 bg-[#FAFAF8] rounded-xl">
            <p className="text-sm text-[#666666] m-0">
              <strong>Responsible Attorney:</strong> This website is maintained by PrenupAttorney.us. 
              For attorney advertising inquiries, contact legal@prenupattorney.us.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}