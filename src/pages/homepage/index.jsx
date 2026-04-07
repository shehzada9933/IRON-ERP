import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import ProductShowcase from './components/ProductShowcase';
import CredentialsSection from './components/CredentialsSection';
import QuoteRequestCTA from '../../components/ui/QuoteRequestCTA';

const Homepage = () => {
  return (
    <>
      <Helmet>
        <title>Ferrum Logic - Your Trusted Partner in Quality Steel Supply</title>
        <meta
          name="description"
          content="Premium steel supplier offering TMT bars, I-beams, steel sheets, and custom fabrication. ISO certified with 28+ years experience. Pan-India delivery available."
        />
        <meta
          name="keywords"
          content="steel supplier, TMT bars, steel beams, steel sheets, construction steel, industrial steel, custom fabrication"
        />
        <meta property="og:title" content="Ferrum Logic - Quality Steel Supply" />
        <meta property="og:description" content="Premium steel products for construction and industrial applications. Trusted by 2500+ clients nationwide." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/homepage" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main>
          <HeroSection />
          <StatsSection />
          <ProductShowcase />
          <CredentialsSection />
        </main>

        <QuoteRequestCTA />
      </div>
    </>
  );
};

export default Homepage;