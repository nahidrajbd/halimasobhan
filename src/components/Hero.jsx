import React from 'react';
import { ArrowRight, Heart, Activity, Users, Award, PhoneCall } from 'lucide-react';
import { siteConfig } from '../data/siteData';

export default function Hero({ onOpenDonation }) {
  return (
    <>
      <section id="home" className="relative flex items-center bg-gray-900 text-white overflow-hidden">
        {/* Background image with one calm scrim for legibility */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero.jpg"
            alt="স্বেচ্ছাসেবকদের মানবিক সেবা কার্যক্রমের একটি দৃশ্য"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-950/70 to-gray-950/35" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 w-full animate-fade-rise">
          <div className="max-w-3xl">
            {/* Trust statement, set quietly above the headline */}
            <p className="flex items-center gap-3 text-sm sm:text-base text-cream-100 font-medium mb-6">
              <span className="inline-block w-10 h-px bg-brand-400 shrink-0" aria-hidden="true" />
              <span>{siteConfig.trustStatement}</span>
            </p>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-[1.25] mb-6">
              {siteConfig.tagline}
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed font-normal mb-10 max-w-2xl">
              {siteConfig.heroDescription}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-14">
              <a
                href="#activities"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-lg bg-white text-brand-900 hover:bg-cream-100 font-semibold text-base transition-colors text-center"
              >
                <span>আমাদের কার্যক্রম দেখুন</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <button
                onClick={onOpenDonation}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-lg bg-transparent border border-white/50 hover:bg-white/10 text-white font-semibold text-base transition-colors text-center"
              >
                <Heart className="w-5 h-5 fill-white" />
                <span>সহযোগিতা করুন</span>
              </button>
            </div>

            {/* Quick Pillars Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-white/15">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-cream-100 shrink-0">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">জরুরি স্বাস্থ্যসেবা</h4>
                  <p className="text-xs text-gray-300">ফ্রি অক্সিজেন ও অ্যাম্বুলেন্স</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-cream-100 shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">শিক্ষা ও মেধা সহায়তা</h4>
                  <p className="text-xs text-gray-300">দরিদ্র মেধাবীদের উপবৃত্তি</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-cream-100 shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">দক্ষতা ও স্বাবলম্বিতা</h4>
                  <p className="text-xs text-gray-300">সেলাই ও কম্পিউটার প্রশিক্ষণ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency hotline strip: the number set large in signboard red on cream */}
      <div className="bg-[#FCFBF7] border-b border-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-base sm:text-lg font-medium text-gray-800">
            জরুরি অক্সিজেন ও অ্যাম্বুলেন্স সহায়তার জন্য কল করুন
          </p>
          <a
            href={`tel:${siteConfig.contact.phone.raw}`}
            className="inline-flex items-center gap-3 text-brand-800 hover:text-brand-900 transition-colors"
          >
            <PhoneCall className="w-7 h-7 shrink-0" />
            <span className="text-3xl sm:text-4xl font-semibold leading-none">{siteConfig.contact.phone.bn}</span>
          </a>
        </div>
      </div>
    </>
  );
}
