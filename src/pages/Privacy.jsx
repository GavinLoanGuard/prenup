import React, { useEffect } from 'react';
import { Section } from '../components/ui/Section';

export default function Privacy() {
  useEffect(() => {
    document.title = "Privacy Policy | PrenupAttorney.us";
  }, []);

  return (
    <>
      <section className="pt-32 pb-8 md:pt-40 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <h1 className="font-serif text-4xl md:text-5xl text-[#1A1A1A] mb-4">Privacy Policy</h1>
          <p className="text-[#666666]">Last updated: February 2026</p>
        </div>
      </section>

      <Section background="white">
        <div className="max-w-3xl mx-auto prose prose-lg prose-gray">
          <h2>1. Information We Collect</h2>
          <p>
            We collect information you provide directly, including name, email address, phone number, 
            state of residence, and details about your legal needs when you submit a consultation request.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Match you with appropriate attorneys in our network</li>
            <li>Communicate with you about your consultation request</li>
            <li>Improve our services and user experience</li>
            <li>Send relevant updates with your consent</li>
          </ul>

          <h2>3. Information Sharing</h2>
          <p>
            We share your information only with attorneys in our vetted network who may be able to assist 
            with your legal needs. We do not sell your personal information to third parties.
          </p>

          <h2>4. Data Security</h2>
          <p>
            We implement industry-standard security measures to protect your personal information, 
            including encryption in transit and at rest. However, no method of transmission over the 
            Internet is 100% secure.
          </p>

          <h2>5. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt out of marketing communications</li>
          </ul>

          <h2>6. Cookies and Tracking</h2>
          <p>
            We use cookies and similar technologies to analyze website usage and improve your experience. 
            You can control cookie preferences through your browser settings.
          </p>

          <h2>7. Third-Party Services</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for the privacy 
            practices of these external sites.
          </p>

          <h2>8. Children's Privacy</h2>
          <p>
            Our services are not intended for individuals under 18 years of age. We do not knowingly 
            collect information from children.
          </p>

          <h2>9. Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. We will notify you of significant 
            changes by posting the new policy on this page.
          </p>

          <h2>10. Contact Us</h2>
          <p>
            If you have questions about this privacy policy, please contact us at{' '}
            <a href="mailto:privacy@clarita.legal" className="text-[#7C6A4F]">privacy@clarita.legal</a>.
          </p>
        </div>
      </Section>
    </>
  );
}