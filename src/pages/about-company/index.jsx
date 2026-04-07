import React from 'react';
import Header from '../../components/ui/Header';
import Breadcrumb from '../../components/ui/Breadcrumb';
import QuoteRequestCTA from '../../components/ui/QuoteRequestCTA';
import CompanyHero from './components/CompanyHero';
import CompanyTimeline from './components/CompanyTimeline';
import MissionVisionValues from './components/MissionVisionValues';
import CertificationsSection from './components/CertificationsSection';
import VideoShowcase from './components/VideoShowcase';
import LeadershipTeam from './components/LeadershipTeam';
import CompanyStatistics from './components/CompanyStatistics';
import ClientTestimonials from './components/ClientTestimonials';

const AboutCompany = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-16">
        {/* Hero Section */}
        <CompanyHero />

        {/* Breadcrumb Navigation */}
        <div className="max-w-7xl mx-auto px-6 py-6">
          <Breadcrumb />
        </div>

        {/* Company Statistics */}
        <CompanyStatistics />

        {/* Company Timeline */}
        <CompanyTimeline />

        {/* Mission, Vision & Values */}
        <MissionVisionValues />

        {/* Certifications & Standards */}
        <CertificationsSection />

        {/* Video Showcase */}
        <VideoShowcase />

        {/* Leadership Team */}
        <LeadershipTeam />

        {/* Client Testimonials */}
        <ClientTestimonials />
      </main>

      {/* Quote Request CTA */}
      <QuoteRequestCTA />
    </div>
  );
};

export default AboutCompany;