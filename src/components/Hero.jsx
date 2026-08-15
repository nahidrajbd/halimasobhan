import React from 'react';
import { ArrowRight, Heart, ShieldCheck, Activity, Users, Award } from 'lucide-react';
import { siteConfig } from '../data/siteData';

export default function Hero({ onOpenDonation }) {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center bg-gray-900 text-white overflow-hidden">
      {/* Background Image with Dark & Warm Red Gradients for legibility */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.jpg"
          alt="হালিমা সোবহান ফাউন্ডেশন মানবিক কার্যক্রম"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-pulse-subtle"
          loading="eager"
        />
        {/* Multilayer gradient for perfect contrast and warm atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 via-gray-900/85 to-brand-950/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-80" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
        <div className="max-w-3xl">
          {/* Trust Statement Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-900/80 border border-brand-500/40 text-brand-100 text-sm font-medium mb-6 shadow-lg backdrop-blur-md">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{siteConfig.trustStatement}</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.25] mb-6">
            {siteConfig.tagline}
          </h1>

          {/* Supporting Text */}
          <p className="text-lg sm:text-xl text-gray-200 leading-relaxed font-normal mb-10 max-w-2xl">
            {siteConfig.heroDescription}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 mb-14">
            <a
              href="#activities"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white text-brand-900 hover:bg-cream-100 font-bold text-base shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-center"
            >
              <span>আমাদের কার্যক্রম দেখুন</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <button
              onClick={onOpenDonation}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-brand-700 hover:bg-brand-600 text-white font-bold text-base shadow-lg border border-brand-500/30 hover:border-brand-400 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-center"
            >
              <Heart className="w-5 h-5 fill-white" />
              <span>সহযোগিতা করুন</span>
            </button>
          </div>

          {/* Quick Pillars Overview */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-white/15">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-red-400 shrink-0">
                <Activity className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">জরুরি স্বাস্থ্যসেবা</h4>
                <p className="text-xs text-gray-300">ফ্রি অক্সিজেন ও অ্যাম্বুলেন্স</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-emerald-400 shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">শিক্ষা ও মেধা সহায়তা</h4>
                <p className="text-xs text-gray-300">দরিদ্র মেধাবীদের উপবৃত্তি</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-amber-400 shrink-0">
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
  );
}
