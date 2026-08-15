import React, { useState } from 'react';
import {
  HeartPulse,
  GraduationCap,
  HandHeart,
  Briefcase,
  Wind,
  Ambulance,
  Stethoscope,
  Coins,
  UserCheck,
  Sparkles,
  Award,
  Percent,
  ShoppingBag,
  ShieldAlert,
  Scissors,
  BadgeCheck,
  Laptop,
  Wrench,
  CheckCircle,
  ArrowUpRight
} from 'lucide-react';
import { siteConfig } from '../data/siteData';

// Map string icon names to Lucide icons
const iconMap = {
  HeartPulse,
  GraduationCap,
  HandHeart,
  Briefcase,
  Wind,
  Ambulance,
  Stethoscope,
  Coins,
  UserCheck,
  Sparkles,
  Award,
  Percent,
  ShoppingBag,
  ShieldAlert,
  Scissors,
  BadgeCheck,
  Laptop,
  Wrench,
};

export default function ActivitiesSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', title: 'সকল কার্যক্রম', icon: Sparkles },
    ...siteConfig.activityCategories.map(cat => ({
      id: cat.id,
      title: cat.title,
      icon: iconMap[cat.icon] || Sparkles
    }))
  ];

  const filteredCategories = selectedCategory === 'all'
    ? siteConfig.activityCategories
    : siteConfig.activityCategories.filter(cat => cat.id === selectedCategory);

  return (
    <section id="activities" className="py-20 sm:py-28 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-800 text-sm font-semibold mb-4">
            <span>জনকল্যাণমূলক সেবাসমূহ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            আমাদের কার্যক্রম
          </h2>
          <p className="text-lg text-gray-600">
            সমাজের প্রতিটি স্তরের অসহায় মানুষের বাস্তব প্রয়োজন বিবেচনায় রেখে হালিমা সোবহান ফাউন্ডেশনের বিভিন্ন মানবিক কর্মসূচি।
          </p>
        </div>

        {/* Category Tabs Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
          {categories.map((cat) => {
            const IconComp = cat.icon;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-sm sm:text-base font-semibold transition-all duration-200 ${
                  isSelected
                    ? 'bg-brand-800 text-white shadow-md shadow-brand-900/20'
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100 hover:text-gray-900 border border-gray-200/70'
                }`}
              >
                <IconComp className="w-4 h-4" />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Category Groups and Cards */}
        <div className="space-y-16">
          {filteredCategories.map((category) => {
            const CategoryIcon = iconMap[category.icon] || HeartPulse;
            return (
              <div key={category.id} className="space-y-6">
                {/* Category Section Header */}
                <div className="flex items-center gap-3 pb-3 border-b-2 border-brand-100">
                  <div className="w-10 h-10 rounded-lg bg-brand-800 text-white flex items-center justify-center">
                    <CategoryIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {category.title}
                    </h3>
                    <p className="text-sm text-gray-500 font-medium">
                      {category.subtitle}
                    </p>
                  </div>
                </div>

                {/* Grid of Activity Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, idx) => {
                    const ItemIcon = iconMap[item.icon] || CheckCircle;
                    return (
                      <div
                        key={idx}
                        className="bg-[#FCFBF7] rounded-2xl p-6 border border-gray-200/80 shadow-soft hover:shadow-card hover:border-brand-300 transition-all duration-300 flex flex-col justify-between group"
                      >
                        <div>
                          {/* Card Top: Icon & Badge */}
                          <div className="flex items-start justify-between gap-3 mb-4">
                            <div className="w-12 h-12 rounded-xl bg-white text-brand-800 border border-gray-100 shadow-sm flex items-center justify-center group-hover:scale-105 group-hover:bg-brand-800 group-hover:text-white transition-all">
                              <ItemIcon className="w-6 h-6" />
                            </div>
                            <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold bg-brand-100/70 text-brand-900 border border-brand-200">
                              {item.badge}
                            </span>
                          </div>

                          {/* Card Title & Desc */}
                          <h4 className="text-lg font-bold text-gray-900 mb-2.5 leading-snug group-hover:text-brand-800 transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-gray-600 text-sm leading-relaxed mb-4">
                            {item.desc}
                          </p>
                        </div>

                        {/* Card Bottom CTA Link */}
                        <div className="pt-3 border-t border-gray-200/60 flex items-center justify-between text-xs font-semibold text-brand-800">
                          <a href="#contact" className="hover:underline flex items-center gap-1">
                            <span>সেবার জন্য যোগাযোগ করুন</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
