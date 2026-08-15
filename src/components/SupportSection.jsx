import React from 'react';
import { Heart, HandHeart, MessageSquare, Shield, Sparkles, Building2, Smartphone } from 'lucide-react';
import { siteConfig } from '../data/siteData';

export default function SupportSection({ onOpenDonation }) {
  return (
    <section id="support" className="py-20 sm:py-28 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA Card */}
        <div className="bg-gradient-to-br from-brand-900 via-brand-800 to-brand-950 rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-lift relative overflow-hidden">
          {/* Subtle decorative circles */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 rounded-full bg-white/5 blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-80 h-80 rounded-full bg-brand-600/20 blur-2xl pointer-events-none" />

          <div className="max-w-3xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-brand-100 text-sm font-semibold mb-6 backdrop-blur-md">
              <Heart className="w-4 h-4 fill-white" />
              <span>মানবকল্যাণে অংশীদার হোন</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 tracking-tight leading-tight">
              মানুষের পাশে দাঁড়াতে আপনিও সহযোগিতা করুন
            </h2>

            <p className="text-lg sm:text-xl text-brand-100 font-normal leading-relaxed mb-10 max-w-2xl mx-auto">
              আপনার ছোট একটি সহযোগিতা একজন অসহায় মানুষের জন্য বড় সহায়তা হতে পারে। একজন মুমূর্ষু রোগীর অক্সিজেন, একজন মেধাবীর শিক্ষা অথবা একটি পরিবারের স্বাবলম্বিতায় হাত বাড়িয়ে দিন।
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-12">
              <button
                onClick={onOpenDonation}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-brand-900 hover:bg-cream-100 font-bold text-base shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Heart className="w-5 h-5 fill-brand-900" />
                <span>সহযোগিতা করুন</span>
              </button>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-brand-700/80 hover:bg-brand-700 text-white font-bold text-base border border-white/20 hover:border-white/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageSquare className="w-5 h-5" />
                <span>যোগাযোগ করুন</span>
              </a>
            </div>

            {/* Support Pillars / Options Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8 border-t border-white/15 text-left">
              <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                <div className="flex items-center gap-2 text-white font-bold text-sm mb-1">
                  <HandHeart className="w-4 h-4 text-emerald-400" />
                  <span>সরাসরি সেবা সহায়তা</span>
                </div>
                <p className="text-xs text-gray-300">
                  অক্সিজেন রিফিল, ওষুধ বা অ্যাম্বুলেন্স খরচে সরাসরি অংশগ্রহণ করতে পারেন।
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                <div className="flex items-center gap-2 text-white font-bold text-sm mb-1">
                  <Building2 className="w-4 h-4 text-blue-400" />
                  <span>ব্যাংক ও মোবাইল ব্যাংকিং</span>
                </div>
                <p className="text-xs text-gray-300">
                  অফিশিয়াল অ্যাকাউন্ট নম্বর অনুমোদনের পর স্বচ্ছভাবে পরিচালিত হবে।
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                <div className="flex items-center gap-2 text-white font-bold text-sm mb-1">
                  <Shield className="w-4 h-4 text-amber-400" />
                  <span>স্বেচ্ছাসেবক হিসেবে যুক্ত</span>
                </div>
                <p className="text-xs text-gray-300">
                  মেডিকেল ক্যাম্প বা ত্রাণ বিতরণ কার্যক্রমে শারীরিক উপস্থিতির মাধ্যমে শ্রম দিতে পারেন।
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
