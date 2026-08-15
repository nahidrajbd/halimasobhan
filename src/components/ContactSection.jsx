import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  Facebook,
  Send,
  CheckCircle2,
  AlertCircle,
  Clock,
  ExternalLink
} from 'lucide-react';
import { siteConfig } from '../data/siteData';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: 'জরুরি স্বাস্থ্যসেবা (অক্সিজেন/অ্যাম্বুলেন্স)',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'অনুগ্রহ করে আপনার নাম লিখুন';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'অনুগ্রহ করে একটি সচল মোবাইল নম্বর দিন';
    } else if (!/^01[3-9]\d{8}$/.test(formData.phone.trim().replace(/-/g, ''))) {
      newErrors.phone = 'সঠিক ১১ ডিজিটের মোবাইল নম্বর প্রদান করুন (যেমন: 01XXXXXXXXX)';
    }
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'সঠিক ইমেইল ঠিকানা প্রদান করুন';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'অনুগ্রহ করে আপনার বার্তা বা সমস্যার বিবরণ লিখুন';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate reliable frontend submission feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedSuccess(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        serviceType: 'জরুরি স্বাস্থ্যসেবা (অক্সিজেন/অ্যাম্বুলেন্স)',
        message: ''
      });
    }, 900);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#FCFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-800 text-sm font-semibold mb-4">
            <Phone className="w-4 h-4" />
            <span>যোগাযোগ ও সহায়তা কেন্দ্র</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            যোগাযোগ করুন
          </h2>
          <p className="text-lg text-gray-600">
            যেকোনো সেবা, তথ্য, পরামর্শ অথবা সহায়তার জন্য সরাসরি আমাদের সাথে যোগাযোগ করুন।
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Address Card */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-soft hover:shadow-card transition-all flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-800 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-base mb-1">
                  {siteConfig.contact.address.label}
                </h4>
                <p className="text-sm text-gray-600 leading-snug">
                  {siteConfig.contact.address.value}
                </p>
                <span className="inline-block mt-2 text-xs font-semibold text-brand-800">
                  {siteConfig.contact.address.note}
                </span>
              </div>
            </div>

            {/* Phone & WhatsApp Card */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-soft hover:shadow-card transition-all flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-gray-900 text-base mb-1">
                  {siteConfig.contact.phone.label}
                </h4>
                <div className="flex flex-wrap items-center gap-2">
                  <a
                    href={`tel:${siteConfig.contact.phone.raw}`}
                    className="text-base font-bold text-brand-900 hover:text-brand-700 font-sans"
                  >
                    {siteConfig.contact.phone.value}
                  </a>
                  <span className="text-xs bg-gray-100 text-gray-700 font-semibold px-2 py-0.5 rounded">
                    ({siteConfig.contact.phone.bn})
                  </span>
                </div>
                <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
                  <a
                    href={siteConfig.contact.whatsapp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-sm transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>হোয়াটসঅ্যাপ চ্যাট করুন</span>
                  </a>
                  <a
                    href={`tel:${siteConfig.contact.phone.raw}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-brand-800 hover:underline"
                  >
                    <span>কল করুন</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-soft hover:shadow-card transition-all flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-800 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-base mb-1">
                  {siteConfig.contact.email.label}
                </h4>
                <p className="text-sm text-gray-600 font-sans">
                  {siteConfig.contact.email.value}
                </p>
                <span className="inline-block mt-1 text-xs text-gray-400">
                  {siteConfig.contact.email.note}
                </span>
              </div>
            </div>

            {/* Facebook Page Card */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-soft hover:shadow-card transition-all flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                <Facebook className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-base mb-1">
                  {siteConfig.contact.facebook.label}
                </h4>
                <p className="text-sm text-gray-600 font-sans">
                  {siteConfig.contact.facebook.value}
                </p>
                <span className="inline-block mt-1 text-xs text-blue-600 font-semibold">
                  {siteConfig.contact.facebook.note}
                </span>
              </div>
            </div>

            {/* Operating Hours Box */}
            <div className="p-5 rounded-2xl bg-cream-100 border border-cream-300/80 flex items-center gap-3 text-sm text-gray-800">
              <Clock className="w-5 h-5 text-brand-800 shrink-0" />
              <div>
                <span className="font-bold">সময়সূচি: </span>
                <span>{siteConfig.contact.workingHours}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Service Request Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200 shadow-card relative">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                বার্তা বা সেবার আবেদন পাঠান
              </h3>
              <p className="text-gray-600 text-sm mb-6">
                আপনার নাম ও যোগাযোগের নম্বর প্রদান করে বার্তা পাঠান। আমাদের টিম দ্রুত আপনার সাথে যোগাযোগ করবে।
              </p>

              {/* Success Notification */}
              {submittedSuccess && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-900 flex items-start gap-3 animate-in fade-in duration-300">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-sm">আপনার বার্তা সফলভাবে গৃহীত হয়েছে!</h5>
                    <p className="text-xs text-emerald-800 mt-1">
                      হালিমা সোবহান ফাউন্ডেশনের প্রতিনিধি শীঘ্রই আপনার সাথে যোগাযোগ করবেন।
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1.5">
                    নাম <span className="text-brand-800">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: null });
                    }}
                    placeholder="আপনার পূর্ণ নাম"
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.name ? 'border-red-500 bg-red-50/30' : 'border-gray-300'
                    } focus:outline-none focus:ring-2 focus:ring-brand-800 focus:border-transparent text-sm transition-all`}
                  />
                  {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
                </div>

                {/* Grid: Phone & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone Field */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1.5">
                      মোবাইল নম্বর <span className="text-brand-800">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: null });
                      }}
                      placeholder="01XXXXXXXXX"
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.phone ? 'border-red-500 bg-red-50/30' : 'border-gray-300'
                      } focus:outline-none focus:ring-2 focus:ring-brand-800 focus:border-transparent text-sm transition-all`}
                    />
                    {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">
                      ইমেইল (ঐচ্ছিক)
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: null });
                      }}
                      placeholder="example@mail.com"
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.email ? 'border-red-500 bg-red-50/30' : 'border-gray-300'
                      } focus:outline-none focus:ring-2 focus:ring-brand-800 focus:border-transparent text-sm transition-all`}
                    />
                    {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Service / Inquiry Type */}
                <div>
                  <label htmlFor="serviceType" className="block text-sm font-semibold text-gray-700 mb-1.5">
                    সেবা বা বিষয়ের ধরন
                  </label>
                  <select
                    id="serviceType"
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-800 focus:border-transparent text-sm bg-white transition-all"
                  >
                    <option value="জরুরি স্বাস্থ্যসেবা (অক্সিজেন/অ্যাম্বুলেন্স)">জরুরি স্বাস্থ্যসেবা (অক্সিজেন / অ্যাম্বুলেন্স)</option>
                    <option value="দরিদ্র রোগীর চিকিৎসা ও আর্থিক সহায়তা">দরিদ্র রোগীর চিকিৎসা ও আর্থিক সহায়তা</option>
                    <option value="শিক্ষা ও মেধা বৃত্তি সহায়তা">শিক্ষা ও মেধা বৃত্তি সহায়তা</option>
                    <option value="দক্ষতা উন্নয়ন প্রশিক্ষণ">দক্ষতা উন্নয়ন প্রশিক্ষণ (সেলাই/কম্পিউটার/গবাদিপশু)</option>
                    <option value="ফাউন্ডেশনে আর্থিক/উপকরণ সহযোগিতা প্রদান">ফাউন্ডেশনে আর্থিক/উপকরণ সহযোগিতা প্রদান</option>
                    <option value="সাধারণ তথ্য বা অনুসন্ধান">সাধারণ তথ্য বা অনুসন্ধান</option>
                  </select>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1.5">
                    বার্তা বা বিস্তারিত বিবরণ <span className="text-brand-800">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: null });
                    }}
                    placeholder="আপনার সমস্যা, প্রয়োজনীয়তা বা বক্তব্য বিস্তারিত লিখুন..."
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.message ? 'border-red-500 bg-red-50/30' : 'border-gray-300'
                    } focus:outline-none focus:ring-2 focus:ring-brand-800 focus:border-transparent text-sm transition-all resize-y`}
                  ></textarea>
                  {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-xl bg-brand-800 hover:bg-brand-900 text-white font-bold text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-75 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span className="inline-flex items-center gap-2">
                      <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      <span>পাঠানো হচ্ছে...</span>
                    </span>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>পাঠিয়ে দিন</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
