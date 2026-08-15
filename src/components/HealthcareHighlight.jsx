import React from 'react';
import { Wind, Ambulance, Stethoscope, Activity, PhoneCall, AlertCircle, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../data/siteData';

const iconMap = {
  Wind: Wind,
  Ambulance: Ambulance,
  Stethoscope: Stethoscope,
  Activity: Activity,
};

export default function HealthcareHighlight() {
  return (
    <section id="healthcare" className="py-20 sm:py-28 bg-[#FCFBF7] relative overflow-hidden">
      {/* Background Decorative Pattern */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-100 border border-brand-300 text-brand-900 text-sm font-semibold mb-4">
            <Activity className="w-4 h-4 text-brand-800" />
            <span>জরুরি ও প্রাথমিক স্বাস্থ্যসেবা</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            স্বাস্থ্যসেবা মানুষের দোরগোড়ায়
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            রোগীর জীবন রক্ষায় সময়মতো চিকিৎসা ও অক্সিজেন প্রাপ্তি অত্যন্ত গুরুত্বপূর্ণ। অসুস্থ ও অসচ্ছল মানুষের জন্য হালিমা সোবহান ফাউন্ডেশনের বিশেষ স্বাস্থ্য উদ্যোগ।
          </p>
        </div>

        {/* 4 Featured Healthcare Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {siteConfig.healthcareHighlights.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Activity;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-7 border border-gray-200/90 shadow-soft hover:shadow-card hover:border-brand-500 transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-brand-50 text-brand-800 flex items-center justify-center group-hover:bg-brand-800 group-hover:text-white transition-colors duration-300 shadow-sm">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-800 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center text-xs font-semibold text-gray-500 group-hover:text-brand-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-1.5 shrink-0" />
                  <span>উপযুক্ত যাচাইকরণ সাপেক্ষে</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Healthcare Doctor & Clinic Visual Feature Card */}
        <div className="bg-white rounded-3xl border border-gray-200 shadow-card overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-6 relative h-64 sm:h-80 lg:h-full min-h-[320px]">
              <img
                src="/images/healthcare.jpg"
                alt="হালিমা সোবহান ফাউন্ডেশন চিকিৎসা সেবা"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
              <div className="absolute bottom-4 left-4 right-4 text-white lg:hidden">
                <span className="inline-block px-3 py-1 bg-brand-800/90 text-xs font-semibold rounded-lg">
                  নিয়মিত ফ্রি মেডিকেল পরামর্শ
                </span>
              </div>
            </div>

            <div className="lg:col-span-6 p-8 sm:p-12 lg:p-14 flex flex-col justify-center">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-800 mb-2">
                সহায়তা নির্দেশিকা
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                চিকিৎসা সহায়তা প্রয়োজন? যোগাযোগ করুন
              </h3>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                যেকোনো মুমূর্ষু রোগীর অক্সিজেন সিলিন্ডার, জরুরি অ্যাম্বুলেন্স অথবা অসচ্ছল রোগীর চিকিৎসার আর্থিক সহায়তার জন্য সরাসরি আমাদের সাথে যোগাযোগ করুন। ফাউন্ডেশনের স্বেচ্ছাসেবক দল সাধ্যমতো দ্রুত সহায়তা পৌঁছে দিতে তৎপর।
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    ✓
                  </div>
                  <span>মুমূর্ষু রোগীদের অগ্রাধিকার ভিত্তিতে জরুরি অক্সিজেন সেবা</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    ✓
                  </div>
                  <span>হাসপাতালে স্থানান্তরের জন্য অ্যাম্বুলেন্স সহায়তা সমন্বয়</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-800 hover:bg-brand-900 text-white font-bold text-base shadow-md transition-all text-center"
                >
                  <PhoneCall className="w-5 h-5" />
                  <span>জরুরি যোগাযোগ করুন</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
