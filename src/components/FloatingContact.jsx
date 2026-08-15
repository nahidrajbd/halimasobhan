import React, { useState } from 'react';
import { Phone, MessageCircle, Heart, X } from 'lucide-react';
import { siteConfig } from '../data/siteData';

export default function FloatingContact({ onOpenDonation }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-40 lg:hidden flex flex-col items-end gap-3">
      {/* Quick Action Options when expanded */}
      {expanded && (
        <div className="flex flex-col gap-2 animate-in slide-in-from-bottom-3 duration-200">
          <a
            href={siteConfig.contact.whatsapp.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setExpanded(false)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-lg"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>হোয়াটসঅ্যাপ মেসেজ</span>
          </a>

          <a
            href={`tel:${siteConfig.contact.phone.raw}`}
            onClick={() => setExpanded(false)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-brand-800 hover:bg-brand-900 text-white text-xs font-bold shadow-lg"
          >
            <Phone className="w-4 h-4" />
            <span>সরাসরি কল করুন</span>
          </a>

          <button
            onClick={() => {
              setExpanded(false);
              onOpenDonation();
            }}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold shadow-lg"
          >
            <Heart className="w-4 h-4 fill-white" />
            <span>সহযোগিতা করুন</span>
          </button>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-xl shadow-emerald-900/30 active:scale-95 transition-transform"
        aria-label="জরুরি যোগাযোগ বাটন"
      >
        {expanded ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6 animate-pulse" />}
      </button>
    </div>
  );
}
