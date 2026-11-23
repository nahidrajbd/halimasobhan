import React from 'react';
import { Wind, Ambulance, Stethoscope, Activity, PhoneCall, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../data/siteData';

const iconMap = {
  Wind: Wind,
  Ambulance: Ambulance,
  Stethoscope: Stethoscope,
  Activity: Activity,
};

export default function HealthcareHighlight() {
  return (
    <section id="healthcare" className="py-20 sm:py-24 bg-[#FCFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-brand-800 mb-4">
            জরুরি ও প্রাথমিক স্বাস্থ্যসেবা
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">
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
                className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-soft flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-brand-50 text-brand-800 flex items-center justify-center mb-5">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center text-xs font-semibold text-gray-500">
                  <CheckCircle2 className="w-4 h-4 text-brand-800 mr-1.5 shrink-0" />
                  <span>উপযুক্ত যাচাইকরণ সাপেক্ষে</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature: full-width photo, steps beside it like a clinic notice board */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-soft overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-7 relative min-h-[320px]">
              <img
                src="/images/healthcare.jpg"
                alt="একটি স্বাস্থ্যসেবা কক্ষে রোগীর সেবার দৃশ্য"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-center">
              <p className="text-sm font-semibold text-brand-800 mb-2">
                সহায়তা নির্দেশিকা
              </p>
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4 leading-tight">
                চিকিৎসা সহায়তা প্রয়োজন? যোগাযোগ করুন
              </h3>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                যেকোনো মুমূর্ষু রোগীর অক্সিজেন সিলিন্ডার, জরুরি অ্যাম্বুলেন্স অথবা অসচ্ছল রোগীর চিকিৎসার আর্থিক সহায়তার জন্য সরাসরি আমাদের সাথে যোগাযোগ করুন। ফাউন্ডেশনের স্বেচ্ছাসেবক দল সাধ্যমতো দ্রুত সহায়তা পৌঁছে দিতে তৎপর।
              </p>

              {/* The three steps, set like a clinic notice board */}
              <ol>
                {siteConfig.howItWorksSteps.map((stepItem, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-4 py-4 border-t border-gray-200 first:border-t-0 first:pt-0 last:pb-0"
                  >
                    <span className="w-9 h-9 rounded-lg bg-brand-800 text-white font-semibold text-base flex items-center justify-center shrink-0">
                      {stepItem.step}
                    </span>
                    <div>
                      <h4 className="text-base font-semibold text-gray-900">
                        {stepItem.title}
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {stepItem.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Signboard band: emergency help, deep red with cream text */}
          <div className="bg-brand-800 text-cream-50 px-6 py-5 sm:px-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <p className="text-base font-medium">
              জরুরি অক্সিজেন ও অ্যাম্বুলেন্স সহায়তা
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <a
                href={`tel:${siteConfig.contact.phone.raw}`}
                className="inline-flex items-center gap-2 text-white hover:text-cream-100 transition-colors"
              >
                <PhoneCall className="w-5 h-5 shrink-0" />
                <span className="text-xl sm:text-2xl font-semibold leading-none">{siteConfig.contact.phone.bn}</span>
              </a>
              <a
                href={siteConfig.contact.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-cream-100 underline underline-offset-4 hover:text-white transition-colors"
              >
                হোয়াটসঅ্যাপে যোগাযোগ
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
