import React from 'react';
import { X, Heart, Building2, Smartphone, AlertCircle, Phone, Check, Copy } from 'lucide-react';
import { siteConfig } from '../data/siteData';

export default function DonationModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-card border border-gray-200 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition-colors"
          aria-label="বন্ধ করুন"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-lg bg-brand-50 text-brand-800 flex items-center justify-center mx-auto mb-3">
            <Heart className="w-6 h-6 fill-brand-800" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-1">
            সহযোগিতার তথ্য
          </h3>
          <p className="text-sm text-gray-600">
            অসহায় ও অসুস্থ মানুষের পাশে দাঁড়াতে আপনার আন্তরিক অংশগ্রহণ
          </p>
        </div>

        {/* Notice Box */}
        <div className="bg-brand-50 border border-brand-200 rounded-xl p-4 mb-6 text-brand-950 text-sm flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-brand-800 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold">{siteConfig.donationInfo.bankNotice}</p>
            <p className="text-xs text-brand-800 mt-1">
              যেকোনো আর্থিক অনুদান বা সামগ্রী সহায়তার পূর্বে সরাসরি আমাদের প্রতিনিধির সাথে কথা বলে নিশ্চিত হোন।
            </p>
          </div>
        </div>

        {/* Placeholder Channels */}
        <div className="space-y-4 mb-6">
          {/* Bank Option Placeholder */}
          <div className="border border-gray-200 rounded-xl p-4 bg-gray-50/50">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-brand-50 text-brand-800 flex items-center justify-center">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-sm">ব্যাংক হিসাবের তথ্য</h4>
                <p className="text-xs text-gray-500">অফিশিয়াল ব্যাংক অ্যাকাউন্ট (শীঘ্রই আপডেট হবে)</p>
              </div>
            </div>
            <div className="text-xs text-gray-600 bg-white p-3 rounded-lg border border-gray-200">
              <div className="flex justify-between py-1 border-b border-gray-100">
                <span>হিসাবের নাম:</span>
                <span className="font-semibold text-gray-900">Halima Sobhan Foundation</span>
              </div>
              <div className="flex justify-between py-1">
                <span>অ্যাকাউন্ট ও ব্রাঞ্চ:</span>
                <span className="text-gray-500 italic">প্রক্রিয়াধীন</span>
              </div>
            </div>
          </div>

          {/* Mobile Banking Placeholder */}
          <div className="border border-gray-200 rounded-xl p-4 bg-gray-50/50">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-brand-50 text-brand-800 flex items-center justify-center">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-sm">বিকাশ / নগদ (মার্চেন্ট / পার্সোনাল)</h4>
                <p className="text-xs text-gray-500">মোবাইল ব্যাংকিং অ্যাকাউন্ট (শীঘ্রই আপডেট হবে)</p>
              </div>
            </div>
            <div className="text-xs text-gray-600 bg-white p-3 rounded-lg border border-gray-200 text-center text-gray-500 italic">
              অফিশিয়াল নম্বর শীঘ্রই যুক্ত করা হবে
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="#contact"
            onClick={onClose}
            className="flex-1 py-3 px-4 rounded-lg bg-brand-800 hover:bg-brand-900 text-white font-semibold text-center text-sm transition-colors"
          >
            যোগাযোগ ফর্মে যান
          </a>
          <button
            onClick={onClose}
            className="px-5 py-3 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold text-sm transition-colors"
          >
            বন্ধ করুন
          </button>
        </div>
      </div>
    </div>
  );
}
