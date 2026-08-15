import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ActivitiesSection from './components/ActivitiesSection';
import HealthcareHighlight from './components/HealthcareHighlight';
import MissionSection from './components/MissionSection';
import HowItWorks from './components/HowItWorks';
import SupportSection from './components/SupportSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';
import DonationModal from './components/DonationModal';

export default function App() {
  const [donationModalOpen, setDonationModalOpen] = useState(false);

  const handleOpenDonation = () => {
    setDonationModalOpen(true);
  };

  const handleCloseDonation = () => {
    setDonationModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FCFBF7] text-gray-800 flex flex-col selection:bg-brand-100 selection:text-brand-900">
      {/* Sticky Header */}
      <Header onOpenDonation={handleOpenDonation} />

      {/* Main Content Area */}
      <main className="flex-grow">
        <Hero onOpenDonation={handleOpenDonation} />
        <AboutSection />
        <ActivitiesSection />
        <HealthcareHighlight />
        <MissionSection />
        <HowItWorks />
        <SupportSection onOpenDonation={handleOpenDonation} />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Floating Action Button */}
      <FloatingContact onOpenDonation={handleOpenDonation} />

      {/* Support / Donation Details Modal */}
      <DonationModal
        isOpen={donationModalOpen}
        onClose={handleCloseDonation}
      />
    </div>
  );
}
