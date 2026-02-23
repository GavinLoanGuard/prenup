import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { base44 } from '@/api/base44Client';
import { CustomButton } from '../ui/CustomButton';
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
import { Checkbox } from "@/components/ui/checkbox";
import { 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle, 
  Shield, 
  Lock, 
  Loader2 
} from 'lucide-react';

const US_STATES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", 
  "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", 
  "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", 
  "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", 
  "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", 
  "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", 
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", 
  "Wisconsin", "Wyoming", "District of Columbia"
];

const SERVICE_TYPES = [
  { value: "prenup", label: "Prenuptial Agreement", description: "Before marriage" },
  { value: "postnup", label: "Postnuptial Agreement", description: "Already married" },
  { value: "prenup_house", label: "Prenup for Home Purchase", description: "Buying property together" },
  { value: "prenup_second_marriage", label: "Second Marriage Prenup", description: "Remarriage or blended family" },
];

const TIMELINES = [
  { value: "urgent", label: "Urgent (within 30 days)" },
  { value: "1_3_months", label: "1-3 months" },
  { value: "3_6_months", label: "3-6 months" },
  { value: "exploring", label: "Just exploring options" },
];

const ASSET_RANGES = [
  { value: "under_100k", label: "Under $100,000" },
  { value: "100k_500k", label: "$100,000 - $500,000" },
  { value: "500k_1m", label: "$500,000 - $1 million" },
  { value: "1m_5m", label: "$1 million - $5 million" },
  { value: "5m_plus", label: "Over $5 million" },
  { value: "prefer_not_say", label: "Prefer not to say" },
];

const STEPS = [
  { id: 1, title: "Service", description: "What do you need?" },
  { id: 2, title: "Details", description: "Tell us more" },
  { id: 3, title: "Contact", description: "How to reach you" },
];

export default function ConsultationForm({ defaultService = null, onComplete }) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  
  const [formData, setFormData] = useState({
    service_type: defaultService || "",
    state: "",
    timeline: "",
    asset_range: "",
    has_business: false,
    has_children: false,
    specific_concerns: "",
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    consent: false,
  });

  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async () => {
    if (!formData.consent) return;
    
    setIsSubmitting(true);
    
    try {
      // Calculate lead score
      let leadScore = 50;
      if (formData.timeline === "urgent") leadScore += 20;
      else if (formData.timeline === "1_3_months") leadScore += 15;
      if (formData.has_business) leadScore += 10;
      if (formData.asset_range === "1m_5m" || formData.asset_range === "5m_plus") leadScore += 15;
      
      await base44.entities.Lead.create({
        ...formData,
        lead_score: leadScore,
        status: "new",
        landing_page: window.location.pathname,
        utm_source: new URLSearchParams(window.location.search).get("utm_source") || "",
        utm_medium: new URLSearchParams(window.location.search).get("utm_medium") || "",
        utm_campaign: new URLSearchParams(window.location.search).get("utm_campaign") || "",
      });
      
      // Track conversion
      base44.analytics.track({
        eventName: "lead_form_submitted",
        properties: {
          service_type: formData.service_type,
          state: formData.state,
          timeline: formData.timeline,
        }
      });
      
      setIsComplete(true);
      if (onComplete) onComplete();
      
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.service_type && formData.state;
      case 2:
        return formData.timeline;
      case 3:
        return formData.first_name && formData.email && formData.consent;
      default:
        return false;
    }
  };

  if (isComplete) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="font-serif text-2xl text-[#1A1A1A] mb-3">
          Thank you, {formData.first_name}!
        </h3>
        <p className="text-[#666666] max-w-md mx-auto mb-6">
          We've received your information and will match you with a qualified attorney in {formData.state} within 24 hours.
        </p>
        <p className="text-sm text-[#999999]">
          Check your email at <strong>{formData.email}</strong> for next steps.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-[#E5E5E5] overflow-hidden">
      {/* Progress Header */}
      <div className="px-6 py-4 bg-[#FAFAF8] border-b border-[#E5E5E5]">
        <div className="flex items-center justify-between">
          {STEPS.map((s, index) => (
            <React.Fragment key={s.id}>
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                  step >= s.id 
                    ? 'bg-[#7C6A4F] text-white' 
                    : 'bg-[#E5E5E5] text-[#999999]'
                }`}>
                  {step > s.id ? <CheckCircle className="w-4 h-4" /> : s.id}
                </div>
                <div className="hidden sm:block">
                  <p className={`text-sm font-medium ${step >= s.id ? 'text-[#1A1A1A]' : 'text-[#999999]'}`}>
                    {s.title}
                  </p>
                </div>
              </div>
              {index < STEPS.length - 1 && (
                <div className={`flex-1 h-px mx-4 ${step > s.id ? 'bg-[#7C6A4F]' : 'bg-[#E5E5E5]'}`} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Form Content */}
      <div className="p-6 md:p-8">
        <AnimatePresence mode="wait">
          {/* Step 1: Service Selection */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div>
                <h3 className="font-serif text-xl text-[#1A1A1A] mb-1">
                  What type of agreement do you need?
                </h3>
                <p className="text-sm text-[#666666]">
                  Select the option that best describes your situation.
                </p>
              </div>

              <div className="grid gap-3">
                {SERVICE_TYPES.map((service) => (
                  <button
                    key={service.value}
                    onClick={() => updateField('service_type', service.value)}
                    className={`p-4 rounded-xl border-2 text-left transition-all ${
                      formData.service_type === service.value
                        ? 'border-[#7C6A4F] bg-[#7C6A4F]/5'
                        : 'border-[#E5E5E5] hover:border-[#CCCCCC]'
                    }`}
                  >
                    <p className="font-medium text-[#1A1A1A]">{service.label}</p>
                    <p className="text-sm text-[#666666]">{service.description}</p>
                  </button>
                ))}
              </div>

              <div className="space-y-2">
                <Label>What state do you live in?</Label>
                <Select
                  value={formData.state}
                  onValueChange={(value) => updateField('state', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select your state" />
                  </SelectTrigger>
                  <SelectContent>
                    {US_STATES.map((state) => (
                      <SelectItem key={state} value={state}>{state}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </motion.div>
          )}

          {/* Step 2: Details */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div>
                <h3 className="font-serif text-xl text-[#1A1A1A] mb-1">
                  Tell us a bit more
                </h3>
                <p className="text-sm text-[#666666]">
                  This helps us match you with the right attorney.
                </p>
              </div>

              <div className="space-y-2">
                <Label>How soon do you need this?</Label>
                <Select
                  value={formData.timeline}
                  onValueChange={(value) => updateField('timeline', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select timeline" />
                  </SelectTrigger>
                  <SelectContent>
                    {TIMELINES.map((t) => (
                      <SelectItem key={t.value} value={t.value}>{t.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Combined asset range (optional)</Label>
                <Select
                  value={formData.asset_range}
                  onValueChange={(value) => updateField('asset_range', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select range" />
                  </SelectTrigger>
                  <SelectContent>
                    {ASSET_RANGES.map((a) => (
                      <SelectItem key={a.value} value={a.value}>{a.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <p className="text-xs text-[#999999]">Helps determine complexity</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Checkbox
                    id="business"
                    checked={formData.has_business}
                    onCheckedChange={(checked) => updateField('has_business', checked)}
                  />
                  <Label htmlFor="business" className="text-sm cursor-pointer">
                    One or both of us owns a business
                  </Label>
                </div>
                <div className="flex items-center gap-3">
                  <Checkbox
                    id="children"
                    checked={formData.has_children}
                    onCheckedChange={(checked) => updateField('has_children', checked)}
                  />
                  <Label htmlFor="children" className="text-sm cursor-pointer">
                    One or both of us has children from a prior relationship
                  </Label>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="concerns">Anything specific you'd like to address? (optional)</Label>
                <Textarea
                  id="concerns"
                  value={formData.specific_concerns}
                  onChange={(e) => updateField('specific_concerns', e.target.value)}
                  placeholder="E.g., inheritance protection, business ownership, debt separation..."
                  rows={3}
                />
              </div>
            </motion.div>
          )}

          {/* Step 3: Contact */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div>
                <h3 className="font-serif text-xl text-[#1A1A1A] mb-1">
                  How can we reach you?
                </h3>
                <p className="text-sm text-[#666666]">
                  We'll connect you with a matched attorney within 24 hours.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First name *</Label>
                  <Input
                    id="firstName"
                    value={formData.first_name}
                    onChange={(e) => updateField('first_name', e.target.value)}
                    placeholder="First name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last name</Label>
                  <Input
                    id="lastName"
                    value={formData.last_name}
                    onChange={(e) => updateField('last_name', e.target.value)}
                    placeholder="Last name"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  placeholder="you@example.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone number (optional)</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => updateField('phone', e.target.value)}
                  placeholder="(555) 123-4567"
                />
                <p className="text-xs text-[#999999]">For faster follow-up</p>
              </div>

              <div className="flex items-start gap-3 p-4 bg-[#FAFAF8] rounded-xl">
                <Checkbox
                  id="consent"
                  checked={formData.consent}
                  onCheckedChange={(checked) => updateField('consent', checked)}
                />
                <Label htmlFor="consent" className="text-sm text-[#666666] cursor-pointer leading-relaxed">
                  I consent to be contacted by a partner attorney about my legal needs. 
                  I understand this is a free service with no obligation. 
                  <a href="#" className="text-[#7C6A4F] hover:underline ml-1">Privacy Policy</a>
                </Label>
              </div>

              {/* Trust indicators */}
              <div className="flex items-center gap-4 text-xs text-[#999999]">
                <div className="flex items-center gap-1">
                  <Lock className="w-3 h-3" />
                  <span>256-bit encryption</span>
                </div>
                <div className="flex items-center gap-1">
                  <Shield className="w-3 h-3" />
                  <span>HIPAA compliant</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer Navigation */}
      <div className="px-6 py-4 bg-[#FAFAF8] border-t border-[#E5E5E5] flex items-center justify-between">
        {step > 1 ? (
          <button
            onClick={prevStep}
            className="flex items-center gap-2 text-sm text-[#666666] hover:text-[#1A1A1A] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
        ) : (
          <div />
        )}

        {step < 3 ? (
          <CustomButton
            onClick={nextStep}
            disabled={!canProceed()}
            variant="primary"
            className="group"
          >
            Continue
            <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
          </CustomButton>
        ) : (
          <CustomButton
            onClick={handleSubmit}
            disabled={!canProceed() || isSubmitting}
            variant="accent"
            className="min-w-[160px]"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin mr-2" />
                Submitting...
              </>
            ) : (
              'Submit Request'
            )}
          </CustomButton>
        )}
      </div>
    </div>
  );
}