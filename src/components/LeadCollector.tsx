import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, CheckCircle2, MessageSquare, Loader2 } from 'lucide-react';

interface FormData {
  name: string;
  company: string;
  email: string;
  country: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const LeadCollector: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    country: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your work email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please tell us what you are trying to bring into focus';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate swift network dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      company: '',
      email: '',
      country: '',
      message: ''
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      {/* Outer soft mint rounded container halo */}
      <div className="p-2 sm:p-3 rounded-[36px] sm:rounded-[42px] bg-[#e6f7e8]/90 border border-[#c4eecb] shadow-xl shadow-emerald-900/5">
        {/* Inner white form container */}
        <div className="bg-white rounded-[28px] sm:rounded-[34px] p-6 sm:p-9 border border-emerald-50/80 shadow-xs">
          
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                key="submitted-state"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="py-8 sm:py-12 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#e3f4e3] text-[#2d6a4f] flex items-center justify-center mb-5 shadow-xs">
                  <CheckCircle2 className="w-9 h-9 stroke-[2.2] text-[#2b8a3e]" />
                </div>
                <span className="text-xs font-bold tracking-[0.2em] text-[#16a34a] uppercase mb-2">
                  REQUEST RECEIVED
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-3 tracking-tight">
                  Note sent successfully!
                </h3>
                <p className="text-slate-600 text-base max-w-md mx-auto leading-relaxed mb-8">
                  Thank you, <span className="font-semibold text-slate-900">{formData.name}</span>. A Data Bench specialist will get back to you at <span className="font-semibold text-slate-900">{formData.email}</span> shortly.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-semibold transition-colors"
                >
                  Send another note
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="form-state"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Header row */}
                <div className="flex items-start justify-between gap-4 mb-6 sm:mb-8">
                  <div>
                    <span className="text-xs font-bold tracking-[0.18em] text-[#15803d] uppercase block mb-1">
                      REQUEST A WALKTHROUGH
                    </span>
                    <h3 className="text-2xl sm:text-3xl md:text-[34px] font-display font-bold text-slate-900 tracking-tight leading-tight">
                      How can we help?
                    </h3>
                  </div>

                  {/* Top-right chat icon badge */}
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#e3f4e3] flex items-center justify-center text-[#23583b] shrink-0 mt-0.5">
                    <svg 
                      className="w-5 h-5 sm:w-6 sm:h-6" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      <line x1="8" y1="8" x2="16" y2="8" />
                      <line x1="8" y1="12" x2="13" y2="12" />
                    </svg>
                  </div>
                </div>

                {/* Form fields */}
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5" noValidate>
                  {/* Row 1: Name & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Name <span className="text-[#16a34a]">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: undefined });
                        }}
                        className={`w-full rounded-2xl border ${
                          errors.name ? 'border-red-400 bg-red-50/20' : 'border-slate-200'
                        } bg-white px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#76e053] focus:border-transparent text-[15px] transition-all`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-500 font-medium">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Company
                      </label>
                      <input
                        type="text"
                        placeholder="Your company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#76e053] focus:border-transparent text-[15px] transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 2: Work email & Country */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Work email <span className="text-[#16a34a]">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        className={`w-full rounded-2xl border ${
                          errors.email ? 'border-red-400 bg-red-50/20' : 'border-slate-200'
                        } bg-white px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#76e053] focus:border-transparent text-[15px] transition-all`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-500 font-medium">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Country <span className="text-slate-400 font-normal">(optional)</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Where are you based"
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#76e053] focus:border-transparent text-[15px] transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 3: Tell us more */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Tell us more <span className="text-[#16a34a]">*</span>
                    </label>
                    <textarea
                      rows={4}
                      placeholder="What are you trying to bring into focus?"
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: undefined });
                      }}
                      className={`w-full rounded-2xl border ${
                        errors.message ? 'border-red-400 bg-red-50/20' : 'border-slate-200'
                      } bg-white px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#76e053] focus:border-transparent text-[15px] resize-none transition-all`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-500 font-medium">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#76e053] hover:bg-[#68d844] text-slate-900 font-bold text-base sm:text-[17px] py-4 px-6 rounded-full flex items-center justify-center gap-2 transition-all duration-200 shadow-sm hover:shadow active:scale-[0.99] disabled:opacity-75 cursor-pointer group"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin text-slate-900" />
                          <span>Sending note...</span>
                        </>
                      ) : (
                        <>
                          <span>Send the note</span>
                          <ArrowUpRight className="w-5 h-5 stroke-[2.5] text-slate-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </div>
  );
};
