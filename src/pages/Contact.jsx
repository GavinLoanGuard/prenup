import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Section } from '../components/ui/Section';
import { CustomButton } from '../components/ui/CustomButton';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { 
  Mail, 
  MessageSquare, 
  Building2,
  CheckCircle,
  Loader2
} from 'lucide-react';

const contactOptions = [
  {
    icon: MessageSquare,
    title: "General Questions",
    description: "Questions about prenups, postnups, or how we work",
    email: "hello@clarita.legal"
  },
  {
    icon: Building2,
    title: "For Attorneys",
    description: "Interested in joining our network?",
    email: "partners@clarita.legal"
  },
  {
    icon: Mail,
    title: "Press & Media",
    description: "Media inquiries and interview requests",
    email: "press@clarita.legal"
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Contact Us | PrenupAttorney.us";
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FAFAF8] via-white to-[#F5F5F5]" />
        
        <div className="relative max-w-7xl mx-auto px-5 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-[#7C6A4F] mb-4">
              Contact
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] leading-[1.1] mb-6">
              Get in touch
            </h1>
            <p className="text-xl text-[#666666] leading-relaxed max-w-2xl mx-auto">
              Have questions? We're here to help. Choose the best way to reach us below.
            </p>
          </motion.div>
        </div>
      </section>

      <Section background="white">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Options */}
          <div>
            <h2 className="font-serif text-2xl text-[#1A1A1A] mb-8">Reach out directly</h2>
            <div className="space-y-4">
              {contactOptions.map((option, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4 p-6 bg-[#FAFAF8] rounded-xl"
                >
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0">
                    <option.icon className="w-6 h-6 text-[#7C6A4F]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#1A1A1A] mb-1">{option.title}</h3>
                    <p className="text-sm text-[#666666] mb-2">{option.description}</p>
                    <a 
                      href={`mailto:${option.email}`}
                      className="text-sm text-[#7C6A4F] hover:underline"
                    >
                      {option.email}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 p-6 border border-[#E5E5E5] rounded-xl">
              <h3 className="font-medium text-[#1A1A1A] mb-2">Looking for a consultation?</h3>
              <p className="text-sm text-[#666666] mb-4">
                If you're looking to connect with a prenup or postnup attorney, please use our consultation form instead.
              </p>
              <a href="/Consultation" className="text-sm text-[#7C6A4F] hover:underline">
                Go to Consultation Form →
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="font-serif text-2xl text-[#1A1A1A] mb-8">Send us a message</h2>
            
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 bg-[#FAFAF8] rounded-2xl"
              >
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-serif text-2xl text-[#1A1A1A] mb-3">
                  Message sent!
                </h3>
                <p className="text-[#666666]">
                  We'll get back to you within 1-2 business days.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Your name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Full name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="topic">Topic</Label>
                  <Select
                    value={formData.topic}
                    onValueChange={(value) => setFormData({ ...formData, topic: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a topic" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Question</SelectItem>
                      <SelectItem value="partnership">Attorney Partnership</SelectItem>
                      <SelectItem value="press">Press / Media</SelectItem>
                      <SelectItem value="feedback">Feedback</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How can we help?"
                    rows={5}
                    required
                  />
                </div>

                <CustomButton
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </CustomButton>
              </form>
            )}
          </div>
        </div>
      </Section>
    </>
  );
}