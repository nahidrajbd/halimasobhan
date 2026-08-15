import React from 'react';
import { HeartHandshake, Activity, Users, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../data/siteData';

export default function AboutSection() {
  const iconMap = {
    HeartHandshake: HeartHandshake,
    Activity: Activity,
    Users: Users,
  };

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#FCFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-800 text-sm font-semibold mb-4">
            <span>আমাদের পরিচয় ও লক্ষ্য</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            হালিমা সোবহান ফাউন্ডেশন সম্পর্কে
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            হালিমা সোবহান ফাউন্ডেশন একটি অরাজনৈতিক ও অলাভজনক সামাজিক সেবামূলক প্রতিষ্ঠান। সমাজের অসহায়, হতদরিদ্র, অসুস্থ ও সুবিধাবঞ্চিত মানুষের দুঃখ-কষ্ট লাঘব করা এবং তাদের পাশে দাঁড়িয়ে মৌলিক প্রয়োজন ও জীবনমান উন্নয়নে সহায়তা করাই আমাদের মূল লক্ষ্য।
          </p>
        </div>

        {/* 3 Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {siteConfig.aboutHighlights.map((highlight, index) => {
            const IconComponent = iconMap[highlight.icon] || HeartHandshake;
            return (
              <div
                key={highlight.id}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-soft hover:shadow-card transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group"
              >
                <div className="w-14 h-14 rounded-xl bg-brand-50 text-brand-800 flex items-center justify-center mb-6 group-hover:bg-brand-800 group-hover:text-white transition-colors duration-300">
                  <IconComponent className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-800 transition-colors">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  {highlight.description}
                </p>
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center text-sm font-semibold text-brand-800">
                  <span className="inline-block w-2 h-2 rounded-full bg-brand-800 mr-2"></span>
                  নিবেদিত সেবা কার্যক্রম
                </div>
              </div>
            );
          })}
        </div>

        {/* Genuine Statement & Principles Banner */}
        <div className="bg-gradient-to-r from-cream-100 via-white to-cream-50 rounded-2xl p-8 sm:p-10 border border-cream-200/80 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                মানবতার কল্যাণে সততা ও সেবার অঙ্গীকার
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                আমরা বিশ্বাস করি প্রতিটি মানুষের উপযুক্ত চিকিৎসা, শিক্ষা ও মর্যাদার সাথে বাঁচার অধিকার রয়েছে। কোনো প্রকার বাণিজ্যিক বা ব্যক্তিস্বার্থ ছাড়া শুধুমাত্র মানবকল্যাণের উদ্দেশ্যেই আমাদের প্রতিটি উদ্যোগ পরিচালিত হয়।
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-3">
              <div className="flex items-center gap-3 text-sm font-medium text-gray-700 bg-white px-4 py-2.5 rounded-xl border border-gray-200 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>স্বচ্ছ ও সুশৃঙ্খল সেবা বিতরণ</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-medium text-gray-700 bg-white px-4 py-2.5 rounded-xl border border-gray-200 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>প্রকৃত সুবিধাবঞ্চিতদের অগ্রাধিকার</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
