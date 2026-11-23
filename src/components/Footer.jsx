import React from 'react';
import { Heart, Facebook, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { siteConfig } from '../data/siteData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-950 text-gray-300 pb-12">
      {/* Signboard band: emergency help, deep red with cream text */}
      <div className="bg-brand-800 text-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="text-base font-medium">
            জরুরি অক্সিজেন ও অ্যাম্বুলেন্স সহায়তা
          </p>
          <a
            href={`tel:${siteConfig.contact.phone.raw}`}
            className="inline-flex items-center gap-2 text-white hover:text-cream-100 transition-colors"
          >
            <Phone className="w-5 h-5 shrink-0" />
            <span className="text-xl sm:text-2xl font-semibold leading-none">{siteConfig.contact.phone.bn}</span>
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-gray-800/80">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-brand-800 flex items-center justify-center text-white">
                <Heart className="w-5 h-5 fill-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white leading-tight">
                  {siteConfig.name.bn}
                </h3>
                <p className="text-xs text-gray-400 font-sans">
                  {siteConfig.name.en}
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed max-w-md">
              {siteConfig.tagline} — অসহায়, দরিদ্র ও অসুস্থ মানুষের জরুরি স্বাস্থ্যসেবা, শিক্ষা সহায়তা ও স্বাবলম্বিতায় নিবেদিত সামাজিক কল্যাণমূলক প্রতিষ্ঠান।
            </p>

            <div className="pt-2 flex items-center gap-3 text-sm text-gray-400">
              <span className="text-brand-400 font-semibold">{siteConfig.domain}</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-base font-semibold text-white">
              গুরুত্বপূর্ণ লিঙ্ক
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  আমাদের সম্পর্কে
                </a>
              </li>
              <li>
                <a href="#activities" className="hover:text-white transition-colors">
                  কার্যক্রম
                </a>
              </li>
              <li>
                <a href="#healthcare" className="hover:text-white transition-colors">
                  সেবাসমূহ
                </a>
              </li>
              <li>
                <a href="#support" className="hover:text-white transition-colors">
                  সহযোগিতা
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  যোগাযোগ
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Help / Services */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-base font-semibold text-white">
              জরুরি স্বাস্থ্য ও সমাজকল্যাণ
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span>
                <span>বিনামূল্যে অক্সিজেন সিলিন্ডার সহায়তা</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span>
                <span>মুমূর্ষু রোগীর অ্যাম্বুলেন্স সেবা</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span>
                <span>দরিদ্র মেধাবী শিক্ষার্থীদের উপবৃত্তি</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span>
                <span>মহিলা ও যুব প্রশিক্ষণ কর্মসূচি</span>
              </li>
            </ul>

            <div className="pt-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-900/80 hover:bg-brand-900 text-brand-100 text-xs font-semibold border border-brand-800 transition-colors"
              >
                <span>জরুরি যোগাযোগের জন্য লিখুন</span>
              </a>
            </div>
          </div>
        </div>

        {/* Arshi Group Sister Concerns */}
        <div className="pb-10">
          <h4 className="text-base font-semibold text-white">
            আরশি গ্রুপের অন্যান্য প্রতিষ্ঠান
          </h4>
          <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <li>
              <a href="https://arshimedicalbazar.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Arshi Medical Supply
              </a>
            </li>
            <li>
              <a href="https://arshicar.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Arshi Automobile &amp; Car Hub
              </a>
            </li>
            <li>
              <a href="https://arshicity.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Arshi Platinum City
              </a>
            </li>
            <li>
              <a href="https://arshimeditex.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Arshi Textile (Arshi MediTex)
              </a>
            </li>
            <li>
              <a href="https://arshiglobalcare.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Arshi Global Care
              </a>
            </li>
            <li className="text-gray-500">Arshi Engineering and Technology</li>
            <li className="text-gray-500">Arshi Hajj Kafela</li>
          </ul>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © 2026 {siteConfig.name.en}. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span>ওয়েবসাইট: <a href={`https://${siteConfig.domain}`} className="text-gray-400 hover:text-white underline">{siteConfig.domain}</a></span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-gray-900 hover:bg-gray-800 text-gray-400 hover:text-white transition-colors"
              title="উপরে যান"
              aria-label="উপরে যান"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
