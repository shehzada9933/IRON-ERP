import React from 'react';
import Header from '../../components/ui/Header';
import Breadcrumb from '../../components/ui/breadcrumb';
import QuoteRequestCTA from '../../components/ui/QuoteRequestCTA';
import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';
import LocationMap from './components/LocationMap';
import SocialConnect from './components/SocialConnect';
import Icon from '../../components/AppIcon';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-steel-gradient text-white py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Get in Touch with Ferrum Logic
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Ready to discuss your steel requirements? Our expert team is here to provide personalized solutions for your construction and manufacturing needs.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-lg">
                    <Icon name="Clock" size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">24/7</p>
                    <p className="text-white/80 text-sm">Emergency Support</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-lg">
                    <Icon name="Users" size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">500+</p>
                    <p className="text-white/80 text-sm">Happy Clients</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-lg">
                    <Icon name="MapPin" size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">3</p>
                    <p className="text-white/80 text-sm">Office Locations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <Breadcrumb />

            {/* Main Contact Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {/* Left Column - Contact Form */}
              <div>
                <ContactForm />
              </div>

              {/* Right Column - Contact Information */}
              <div>
                <ContactInfo />
              </div>
            </div>

            {/* Location Map Section */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Visit Our Facilities
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  We have strategically located facilities across the country to serve you better. Schedule a visit to see our state-of-the-art steel processing and quality control operations.
                </p>
              </div>
              <LocationMap />
            </div>

            {/* Social Connect Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <SocialConnect />
              </div>

              {/* Additional Contact Options */}
              <div className="space-y-6">
                {/* Live Chat */}
                <div className="bg-white rounded-lg border border-border p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-success/10 rounded-lg">
                      <Icon name="MessageCircle" size={20} className="text-success" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Live Chat</h3>
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-success rounded-full"></div>
                        <span className="text-sm text-success">Online now</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get instant answers to your steel product questions from our technical experts.
                  </p>
                  <button className="w-full bg-success text-white py-2 px-4 rounded-md hover:bg-success/90 transition-industrial flex items-center justify-center space-x-2">
                    <Icon name="MessageCircle" size={16} />
                    <span>Start Live Chat</span>
                  </button>
                </div>

                {/* Video Call */}
                <div className="bg-white rounded-lg border border-border p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg">
                      <Icon name="Video" size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Video Consultation</h3>
                      <span className="text-sm text-muted-foreground">Schedule a call</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Book a video consultation with our steel specialists for detailed project discussions.
                  </p>
                  <button className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition-industrial flex items-center justify-center space-x-2">
                    <Icon name="Calendar" size={16} />
                    <span>Schedule Call</span>
                  </button>
                </div>

                {/* Support Ticket */}
                <div className="bg-white rounded-lg border border-border p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-warning/10 rounded-lg">
                      <Icon name="Ticket" size={20} className="text-warning" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Support Ticket</h3>
                      <span className="text-sm text-muted-foreground">Technical issues</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Submit a detailed support ticket for technical issues or complex inquiries.
                  </p>
                  <button className="w-full bg-warning text-white py-2 px-4 rounded-md hover:bg-warning/90 transition-industrial flex items-center justify-center space-x-2">
                    <Icon name="Plus" size={16} />
                    <span>Create Ticket</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <QuoteRequestCTA />
    </div>
  );
};

export default ContactPage;