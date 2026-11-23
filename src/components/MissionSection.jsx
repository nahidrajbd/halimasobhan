import React from 'react';
import { HeartHandshake, Sparkles, BookOpen, ShieldCheck } from 'lucide-react';

export default function MissionSection() {
  return (
    <section className="py-20 sm:py-24 relative bg-gray-900 text-white overflow-hidden">
      {/* Background image with one calm scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/community.jpg"
          alt="কমিউনিটির মানুষের সমাবেশের একটি দৃশ্য"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gray-950/85" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-brand-200 mb-4">
            আমাদের উদ্দেশ্য ও মূল্যবোধ
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-8">
            আমাদের লক্ষ্য
          </h2>
          <span className="block w-10 h-px bg-brand-400 mx-auto mb-8" aria-hidden="true" />
          <p className="text-xl sm:text-2xl text-cream-100 font-medium leading-relaxed">
            “অসহায় ও সুবিধাবঞ্চিত মানুষের পাশে দাঁড়ানো, স্বাস্থ্যসেবা সহজলভ্য করা, শিক্ষায় সহায়তা করা এবং মানুষের জীবনমান উন্নয়নে কার্যকর ভূমিকা রাখা।”
          </p>
        </div>

        {/* 4 Core Principles / Pillars of Mission (No fake numbers, purely qualitative & sincere) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <div className="w-12 h-12 rounded-lg bg-brand-50 text-brand-800 flex items-center justify-center mb-4">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">সমবেদনা ও সেবা</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              জাতি, ধর্ম, বর্ণ নির্বিশেষে প্রতিটি অসহায় মানুষের সেবায় আন্তরিক ও নিঃস্বার্থ মনোভাব নিয়ে কাজ করা।
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <div className="w-12 h-12 rounded-lg bg-brand-50 text-brand-800 flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">স্বাস্থ্য সুরক্ষা</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              অর্থের অভাবে যেন কোনো মানুষ চিকিৎসা ও জরুরি অক্সিজেন সেবা থেকে বঞ্চিত না হয় তা নিশ্চিত করা।
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <div className="w-12 h-12 rounded-lg bg-brand-50 text-brand-800 flex items-center justify-center mb-4">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">শিক্ষা ও স্বাবলম্বিতা</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              মেধাবী শিক্ষার্থীদের সহায়তা এবং বৃত্তিমূলক প্রশিক্ষণের মাধ্যমে বেকারত্ব দূরীকরণ ও পরিবারকে স্বাবলম্বী করা।
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <div className="w-12 h-12 rounded-lg bg-brand-50 text-brand-800 flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">স্বচ্ছতা ও দায়বদ্ধতা</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              প্রতিটি কার্যক্রম সততা ও স্বচ্ছতার সাথে পরিচালনা করে সমাজের প্রকৃত কল্যাণ সাধন করা।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
