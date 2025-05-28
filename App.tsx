import { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustSection from './components/TrustSection';
import FeatureSection from './components/FeatureSection';
import ScreenshotSection from './components/ScreenshotSection';
import TestimonialSection from './components/TestimonialSection';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import PricingSection from './components/PricingSection';
import VideoSection from './components/VideoSection';
import SecuritySection from './components/SecuritySection';
import HowItWorksSection from './components/HowItWorksSection';
import ComparisonSection from './components/ComparisonSection';
import ContactSection from './components/ContactSection';
import FloatingButton from './components/FloatingButton';
import { initializeTheme } from './lib/theme';

function App() {
  useEffect(() => {
    // Inicializar tema com base na preferência salva
    initializeTheme();
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <TrustSection />
        <FeatureSection />
        <HowItWorksSection />
        <ScreenshotSection />
        <VideoSection />
        <PricingSection />
        <ComparisonSection />
        <SecuritySection />
        <TestimonialSection />
        <FAQSection />
        <ContactSection />
        <CTASection />
      </main>
      <Footer />
      <FloatingButton />
    </div>
  );
}

export default App;
