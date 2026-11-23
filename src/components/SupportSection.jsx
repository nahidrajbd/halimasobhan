import React from 'react';
import { Heart, HandHeart, MessageSquare, Shield, Building2 } from 'lucide-react';
import { siteConfig } from '../data/siteData';

export default function SupportSection({ onOpenDonation }) {
  return (
    <section id="support" className="py-20 sm:py-24 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA Card */}
        <div className="bg-brand-900 rounded-2xl p-6 sm:p-12 text-white shadow-soft">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold text-brand-200 mb-6">
              মানবকল্যাণে অংশীদার হোন
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 leading-tight">
              মানুষের পাশে দাঁড়াতে আপনিও সহযোগিতা করুন
            </h2>

            <p className="text-lg sm:text-xl text-brand-100 font-normal leading-relaxed mb-10 max-w-2xl mx-auto">
              আপনার ছোট একটি সহযোগিতা একজন অসহায় মানুষের জন্য বড় সহায়তা হতে পারে। একজন মুমূর্ষু রোগীর অক্সিজেন, একজন মেধাবীর শিক্ষা অথবা একটি পরিবারের স্বাবলম্বিতায় হাত বাড়িয়ে দিন।
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <button
                onClick={onOpenDonation}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-white text-brand-900 hover:bg-cream-100 font-semibold text-base transition-colors"
              >
                <Heart className="w-5 h-5 fill-brand-900" />
                <span>সহযোগিতা করুন</span>
              </button>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-transparent hover:bg-white/10 text-white font-semibold text-base border border-white/40 transition-colors"
              >
                <MessageSquare className="w-5 h-5" />
                <span>যোগাযোগ করুন</span>
              </a>
            </div>

            {/* Support Pillars / Options Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-white/15 text-left">
              <div>
                <div className="flex items-center gap-2 text-white font-semibold text-sm mb-1">
                  <HandHeart className="w-5 h-5 text-brand-200" />
                  <span>সরাসরি সেবা সহায়তা</span>
                </div>
                <p className="text-xs text-gray-300">
                  অক্সিজেন রিফিল, ওষুধ বা অ্যাম্বুলেন্স খরচে সরাসরি অংশগ্রহণ করতে পারেন।
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 text-white font-semibold text-sm mb-1">
                  <Building2 className="w-5 h-5 text-brand-200" />
                  <span>ব্যাংক ও মোবাইল ব্যাংকিং</span>
                </div>
                <p className="text-xs text-gray-300">
                  অফিশিয়াল অ্যাকাউন্ট নম্বর অনুমোদনের পর স্বচ্ছভাবে পরিচালিত হবে।
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 text-white font-semibold text-sm mb-1">
                  <Shield className="w-5 h-5 text-brand-200" />
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
