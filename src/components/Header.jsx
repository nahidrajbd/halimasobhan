import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, Phone, ChevronRight } from 'lucide-react';
import { siteConfig } from '../data/siteData';

export default function Header({ onOpenDonation }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'activities', 'healthcare', 'support', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top emergency / trust announcement bar */}
      <div className="bg-brand-800 text-cream-50 text-xs sm:text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-white">
              জরুরি তথ্য:
            </span>
            <span className="text-cream-100">
              মুমূর্ষু রোগীদের জন্য বিনামূল্যে অক্সিজেন ও অ্যাম্বুলেন্স সহায়তা
            </span>
          </div>
          <div className="flex items-center gap-4 text-cream-200">
            <a href="#contact" className="hover:text-white transition-colors flex items-center gap-1">
              <Phone className="w-4 h-4" />
              <span>সহায়তা ডেস্ক</span>
            </a>
            <span className="text-brand-300">|</span>
            <span className="text-cream-100 font-medium">{siteConfig.domain}</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header
        className={`sticky top-0 z-40 bg-white transition-[padding,box-shadow] duration-200 ease-out ${
          isScrolled
            ? 'shadow-soft py-3 border-b border-gray-200'
            : 'py-4 border-b border-gray-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Organization Title */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-brand-800 flex items-center justify-center text-white shrink-0">
              <Heart className="w-6 h-6 fill-white stroke-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-lg sm:text-xl text-gray-900 leading-tight group-hover:text-brand-800 transition-colors">
                {siteConfig.name.bn}
              </span>
              <span className="text-[11px] sm:text-xs text-gray-500 font-medium">
                {siteConfig.name.en}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {siteConfig.navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-brand-800 bg-brand-50 font-semibold'
                      : 'text-gray-700 hover:text-brand-800 hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Header Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenDonation}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brand-800 hover:bg-brand-900 text-white text-sm font-semibold transition-colors active:scale-[0.98]"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>সহযোগিতা করুন</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenDonation}
              className="sm:hidden px-3 py-1.5 rounded-lg bg-brand-800 text-white text-xs font-semibold"
            >
              সহযোগিতা
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-800 transition-colors"
              aria-label="মেনু খুলুন"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-full bg-white border-b border-gray-200 shadow-card px-4 pt-3 pb-6 space-y-2">
            {siteConfig.navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-brand-50 text-brand-800 font-semibold'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </a>
              );
            })}
            <div className="pt-3 border-t border-gray-100">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDonation();
                }}
                className="w-full py-3 px-4 rounded-lg bg-brand-800 hover:bg-brand-900 text-white text-center font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <Heart className="w-5 h-5 fill-white" />
                <span>সহযোগিতা করুন</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
