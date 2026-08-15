import React from 'react';
import { Phone, FileText, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import { siteConfig } from '../data/siteData';

export default function HowItWorks() {
  const stepIcons = [Phone, FileText, CheckCircle2];

  return (
    <section className="py-20 sm:py-28 bg-[#FCFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-800 text-sm font-semibold mb-4">
            <span>সহজ ও সুশৃঙ্খল প্রক্রিয়া</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            সহায়তা গ্রহণের নিয়মাবলী
          </h2>
          <p className="text-lg text-gray-600">
            জরুরি চিকিৎসা, আর্থিক বা সামাজিক সহায়তার জন্য নিচের ৩টি সহজ ধাপে আমাদের সাথে যুক্ত হতে পারেন।
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative mb-12">
          {siteConfig.howItWorksSteps.map((stepItem, index) => {
            const IconComp = stepIcons[index] || CheckCircle2;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-200/90 shadow-soft hover:shadow-card transition-all duration-300 relative flex flex-col justify-between group"
              >
                <div>
                  {/* Step Number Bubble */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-brand-800 text-white font-bold text-xl flex items-center justify-center shadow-md shadow-brand-900/20">
                      {stepItem.step}
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-800 transition-colors">
                    {stepItem.title}
                  </h3>

                  <p className="text-gray-600 text-base leading-relaxed">
                    {stepItem.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-gray-100 flex items-center text-xs font-semibold text-gray-400 group-hover:text-brand-800">
                  <span>ধাপ {stepItem.step} এর বিবরণ</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Capacity Assessment Notice */}
        <div className="max-w-3xl mx-auto bg-amber-50/80 border border-amber-200 rounded-2xl p-5 flex items-start gap-4 text-amber-900">
          <AlertCircle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
          <div className="text-sm leading-relaxed">
            <span className="font-bold">বিশেষ জ্ঞাতব্য: </span>
            সেবা বা আর্থিক সহায়তা প্রদানের বিষয়টি আবেদনকারীর প্রকৃত প্রয়োজনীয়তা, তথ্যের সত্যতা এবং ফাউন্ডেশনের তৎকালীন সামর্থ্য ও যাচাইকরণ প্রক্রিয়ার ওপর নির্ভরশীল।
          </div>
        </div>
      </div>
    </section>
  );
}
