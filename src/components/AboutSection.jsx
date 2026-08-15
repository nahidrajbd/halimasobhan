import React from 'react';
import { 
  HeartHandshake, 
  Activity, 
  Users, 
  CheckCircle2, 
  User, 
  ShieldCheck, 
  Sparkles,
  Award
} from 'lucide-react';
import { siteConfig } from '../data/siteData';

export default function AboutSection() {
  const iconMap = {
    HeartHandshake,
    Activity,
    Users,
  };

  const keyPersons = siteConfig.teamMembers.filter(m => m.isKey);
  const generalMembers = siteConfig.teamMembers.filter(m => !m.isKey);

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#FCFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-800 text-sm font-semibold mb-4 shadow-sm">
            <Sparkles className="w-4 h-4 text-brand-800" />
            <span>আমাদের পরিচয় ও লক্ষ্য</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            হালিমা সোবহান ফাউন্ডেশন সম্পর্কে
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            হালিমা সোবহান ফাউন্ডেশন একটি অরাজনৈতিক ও অলাভজনক মানবিক সেবামূলক প্রতিষ্ঠান। সমাজের অসহায়, হতদরিদ্র, অসুস্থ ও সুবিধাবঞ্চিত মানুষের দুঃখ-কষ্ট লাঘব করা এবং তাদের পাশে দাঁড়িয়ে মৌলিক প্রয়োজন ও জীবনমান উন্নয়নে প্রত্যক্ষ সহায়তা করাই আমাদের মূল লক্ষ্য।
          </p>
        </div>

        {/* 3 Core Highlights / Identity Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {siteConfig.aboutHighlights.map((highlight) => {
            const IconComponent = iconMap[highlight.icon] || HeartHandshake;
            return (
              <div
                key={highlight.id}
                className="bg-white rounded-2xl p-7 lg:p-8 border border-gray-200/80 shadow-soft hover:shadow-card transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-50 text-brand-800 flex items-center justify-center mb-6 group-hover:bg-brand-800 group-hover:text-white transition-colors duration-300 shadow-sm">
                  <IconComponent className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-800 transition-colors">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {highlight.description}
                </p>
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center text-xs font-semibold text-brand-800">
                  <span className="inline-block w-2 h-2 rounded-full bg-brand-800 mr-2"></span>
                  নিবেদিত সেবা কার্যক্রম
                </div>
              </div>
            );
          })}
        </div>

        {/* Team & Leadership Section */}
        <div className="mt-12 pt-12 border-t border-gray-200/70">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>পরিচালনা পরিষদ ও নেতৃত্ব</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              আমাদের পরিচালনা পরিষদ
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              স্বচ্ছতা, জবাবদিহিতা ও মানবিক দায়বদ্ধতার সাথে ফাউন্ডেশনের লক্ষ্য বাস্তবায়নে নিবেদিত টিম।
            </p>
          </div>

          {/* 1. Key Leadership (2 Persons) - Large Photo + Name + Designation + Short Bio Summary */}
          <div className="mb-14">
            <div className="flex items-center gap-2 mb-6">
              <Award className="w-5 h-5 text-brand-800" />
              <h4 className="text-lg sm:text-xl font-bold text-gray-900">প্রধান নেতৃত্ব</h4>
              <span className="text-xs bg-brand-100 text-brand-900 font-semibold px-2.5 py-0.5 rounded-full">
                ২ জন
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {keyPersons.map((person) => (
                <div
                  key={person.id}
                  className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-brand-200/80 shadow-card hover:border-brand-500 hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row gap-6 items-center sm:items-start group"
                >
                  {/* Large Prominent Portrait Photo */}
                  <div className="w-44 sm:w-48 aspect-[3/4] shrink-0 rounded-2xl overflow-hidden bg-gradient-to-br from-brand-50 via-cream-100 to-amber-50 border-2 border-dashed border-brand-300/80 flex flex-col items-center justify-center text-brand-800 group-hover:border-brand-400 group-hover:scale-[1.02] transition-all shadow-sm">
                    {person.image ? (
                      <img
                        src={person.image}
                        alt={person.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center p-4 text-center">
                        <div className="w-16 h-16 rounded-full bg-white/90 shadow-sm flex items-center justify-center mb-2 text-brand-800">
                          <User className="w-9 h-9 opacity-80" />
                        </div>
                        <span className="text-xs font-bold text-brand-900 bg-white/90 px-2.5 py-1 rounded-full border border-brand-200 shadow-xs">
                          ছবি যুক্ত হবে
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Info: Name, Designation, Short Summary */}
                  <div className="flex-1 text-center sm:text-left flex flex-col justify-between h-full py-1">
                    <div>
                      <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-brand-800 text-white mb-2">
                        <ShieldCheck className="w-3 h-3" />
                        <span>মূল দায়িত্বপ্রাপ্ত</span>
                      </div>

                      {/* Name */}
                      <h5 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 group-hover:text-brand-800 transition-colors">
                        {person.name}
                      </h5>

                      {/* Designation */}
                      <p className="text-base font-bold text-brand-800 mb-0.5">
                        {person.role}
                      </p>
                      <p className="text-xs text-gray-500 font-medium mb-3">
                        {person.designation}
                      </p>

                      {/* Short Bio Summary */}
                      <p className="text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3">
                        {person.bio}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Executive Members (4 Persons) - Large Photo + Name + Designation */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Users className="w-5 h-5 text-gray-700" />
              <h4 className="text-lg sm:text-xl font-bold text-gray-900">কার্যনির্বাহী পরিষদ</h4>
              <span className="text-xs bg-gray-100 text-gray-700 font-semibold px-2.5 py-0.5 rounded-full">
                ৪ জন সদস্য
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {generalMembers.map((person) => (
                <div
                  key={person.id}
                  className="bg-white rounded-3xl p-5 border border-gray-200 shadow-soft hover:shadow-card hover:border-brand-300 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group"
                >
                  {/* Large Photo Placeholder */}
                  <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 via-gray-100 to-cream-50 border-2 border-dashed border-gray-300 flex flex-col items-center justify-center text-gray-500 group-hover:border-brand-300 group-hover:text-brand-800 transition-all mb-4 shadow-sm">
                    {person.image ? (
                      <img
                        src={person.image}
                        alt={person.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center p-3">
                        <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center mb-2 text-gray-400 group-hover:text-brand-800 transition-colors">
                          <User className="w-8 h-8 opacity-70" />
                        </div>
                        <span className="text-xs font-semibold text-gray-600 bg-white/90 px-2 py-0.5 rounded border border-gray-200">
                          ছবি যুক্ত হবে
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Name */}
                  <h5 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-brand-800 transition-colors">
                    {person.name}
                  </h5>

                  {/* Role / Designation */}
                  <p className="text-sm font-bold text-brand-800 mb-0.5">
                    {person.role}
                  </p>
                  <p className="text-xs text-gray-500 font-medium">
                    {person.designation}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Commitment Banner */}
        <div className="mt-16 bg-gradient-to-r from-cream-100 via-white to-cream-50 rounded-2xl p-8 sm:p-10 border border-cream-200/80 shadow-sm">
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
