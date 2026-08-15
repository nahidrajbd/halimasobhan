import React from 'react';
import { 
  HeartPulse, 
  GraduationCap, 
  HandHeart, 
  Briefcase, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

export default function ActivitiesSection() {
  const activitiesList = [
    {
      id: 'healthcare',
      title: '১. জরুরি স্বাস্থ্য ও চিকিৎসা সেবা',
      icon: HeartPulse,
      iconColor: 'text-rose-600 bg-rose-50',
      paragraph: 'মুমূর্ষু ও সংকটাপন্ন রোগীদের জীবন রক্ষায় সার্বক্ষণিক বিনামূল্যে অক্সিজেন সিলিন্ডার সরবরাহ এবং দ্রুত হাসপাতালে স্থানান্তরের জন্য ডেডিকেটেড অ্যাম্বুলেন্স সেবা। অসচ্ছল রোগীদের বিনামূল্যে চিকিৎসা ও ওষুধ সহায়তা, বিশেষজ্ঞ চিকিৎসকের মাধ্যমে নিয়মিত ফ্রি মেডিকেল ক্যাম্প এবং সাশ্রয়ী মূল্যে ফিজিওথেরাপি সেবা প্রদান করা হয়।'
    },
    {
      id: 'education',
      title: '২. শিক্ষা সহায়তা ও মেধা বৃত্তি',
      icon: GraduationCap,
      iconColor: 'text-blue-600 bg-blue-50',
      paragraph: 'অভাবের কারণে যাতে কোনো মেধাবী শিক্ষার্থীর লেখাপড়া থমকে না যায়, সেজন্য দরিদ্র ও কৃতি শিক্ষার্থীদের নিয়মিত শিক্ষা উপবৃত্তি প্রদান করা হয়। পাশাপাশি অস্বচ্ছল পরিবারের শিক্ষার্থীদের বিভিন্ন পাবলিক পরীক্ষা ও ভর্তি কার্যক্রমে ৩০% থেকে ৫০% পর্যন্ত আর্থিক অনুদান ও ছাড়ের ব্যবস্থা রয়েছে।'
    },
    {
      id: 'social',
      title: '৩. সামাজিক কল্যাণ ও অবকাঠামো সংস্কার',
      icon: HandHeart,
      iconColor: 'text-amber-600 bg-amber-50',
      paragraph: 'দ্রব্যমূল্যের ঊর্ধ্বগতিতে সাধারণ ও দরিদ্র পরিবারের জন্য নিত্যপ্রয়োজনীয় ভোগ্যপণ্য সুলভ ও সাশ্রয়ী মূল্যে বিতরণ করা হয়। এছাড়া দুর্গম ও ক্ষতিগ্রস্ত গ্রামীণ রাস্তাঘাট, সাঁকো ও খেয়াঘাট সংস্কারের মাধ্যমে জনসাধারণের দৈনন্দিন যাতায়াত ও চলাচল সুগম করতে স্বেচ্ছাশ্রম ও সহায়তা প্রদান করা হয়।'
    },
    {
      id: 'skills',
      title: '৪. আত্মকর্মসংস্থান ও দক্ষতা উন্নয়ন',
      icon: Briefcase,
      iconColor: 'text-emerald-600 bg-emerald-50',
      paragraph: 'সুবিধাবঞ্চিত নারীদের স্বাবলম্বী করে গড়ে তুলতে আধুনিক ব্যবহারিক সেলাই প্রশিক্ষণ, গ্রামীন তরুণদের আত্মকর্মসংস্থানে আধুনিক গবাদি পশু পালন কৌশল, ডিজিটাল যুগে কম্পিউটার প্রশিক্ষণসহ স্থানীয় চাহিদার ভিত্তিতে বিভিন্ন কারিগরি ও বৃত্তিমূলক প্রশিক্ষণ প্রদান করা হয়।'
    }
  ];

  return (
    <section id="activities" className="py-16 sm:py-24 bg-white border-y border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-800 text-sm font-semibold mb-3">
            <Sparkles className="w-4 h-4 text-brand-800" />
            <span>জনকল্যাণমূলক সেবাসমূহ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            আমাদের কার্যক্রম
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            সমাজের প্রতিটি স্তরের অসহায় ও সুবিধাবঞ্চিত মানুষের বাস্তব প্রয়োজন বিবেচনায় রেখে হালিমা সোবহান ফাউন্ডেশন বিভিন্ন মানবিক কর্মসূচি আন্তরিকতার সাথে বাস্তবায়ন করছে।
          </p>
        </div>

        {/* Minimized Paragraph-Style Content */}
        <div className="space-y-6 bg-[#FCFBF7] rounded-3xl p-6 sm:p-10 border border-gray-200/90 shadow-sm">
          {activitiesList.map((item) => {
            const IconComp = item.icon;
            return (
              <div 
                key={item.id} 
                className="p-5 sm:p-6 rounded-2xl bg-white border border-gray-200/70 hover:border-brand-300 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${item.iconColor}`}>
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {item.paragraph}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Quick Action Footer */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left border-t border-gray-200/60">
            <p className="text-xs sm:text-sm text-gray-500 font-medium">
              জরুরি স্বাস্থ্যসেবা, অ্যাম্বুলেন্স ও অক্সিজেন সহায়তার জন্য সরাসরি যোগাযোগ করুন।
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-800 hover:text-brand-900 transition-colors group"
            >
              <span>যোগাযোগ ও সহায়তা গ্রহণ</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
