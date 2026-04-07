import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Breadcrumb from '../../components/ui/Breadcrumb';
import QuoteRequestCTA from '../../components/ui/QuoteRequestCTA';
import ProgressIndicator from './components/ProgressIndicator';
import ProductSelectionStep from './components/ProductSelectionStep';
import SpecificationsStep from './components/SpecificationsStep';
import ContactDetailsStep from './components/ContactDetailsStep';
import ReviewStep from './components/ReviewStep';
import QuoteSummary from './components/QuoteSummary';
import SuccessModal from './components/SuccessModal';
import Icon from '../../components/AppIcon';

const QuoteRequest = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    products: [],
    steelGrade: '',
    certifications: [],
    surfaceTreatment: '',
    deliveryOption: '',
    deliveryAddress: '',
    specialInstructions: '',
    uploadedFiles: [],
    contactName: '',
    email: '',
    phone: '',
    alternativePhone: '',
    companyName: '',
    companyType: '',
    jobTitle: '',
    website: '',
    projectName: '',
    projectTimeline: '',
    budgetRange: '',
    projectLocation: '',
    communicationPreference: '',
    bestTimeToContact: '',
    additionalInfo: '',
    marketingConsent: false,
    productUpdates: false,
    informationAccuracy: false
  });
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [quoteReference, setQuoteReference] = useState('');

  const steps = [
    {
      id: 'products',
      title: 'Product Selection',
      subtitle: 'Choose products',
      icon: 'Package'
    },
    {
      id: 'specifications',
      title: 'Specifications',
      subtitle: 'Technical details',
      icon: 'Settings'
    },
    {
      id: 'contact',
      title: 'Contact Details',
      subtitle: 'Your information',
      icon: 'User'
    },
    {
      id: 'review',
      title: 'Review',
      subtitle: 'Confirm & submit',
      icon: 'CheckCircle'
    }
  ];

  // Auto-save functionality
  useEffect(() => {
    const savedData = localStorage.getItem('quoteFormData');
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        setFormData(parsed);
      } catch (error) {
        console.error('Error loading saved form data:', error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('quoteFormData', JSON.stringify(formData));
  }, [formData]);

  const updateFormData = (updates) => {
    setFormData(prev => ({ ...prev, ...updates }));
  };

  const handleStepClick = (stepIndex) => {
    if (stepIndex < currentStep) {
      setCurrentStep(stepIndex);
    }
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    // Generate quote reference
    const reference = `QR-${Date.now().toString().slice(-6)}-${Math.random().toString(36).substr(2, 4).toUpperCase()}`;
    setQuoteReference(reference);

    // Clear saved form data
    localStorage.removeItem('quoteFormData');

    // Show success modal
    setShowSuccessModal(true);
  };

  const handleModalClose = () => {
    setShowSuccessModal(false);
    // Reset form
    setFormData({
      products: [],
      steelGrade: '',
      certifications: [],
      surfaceTreatment: '',
      deliveryOption: '',
      deliveryAddress: '',
      specialInstructions: '',
      uploadedFiles: [],
      contactName: '',
      email: '',
      phone: '',
      alternativePhone: '',
      companyName: '',
      companyType: '',
      jobTitle: '',
      website: '',
      projectName: '',
      projectTimeline: '',
      budgetRange: '',
      projectLocation: '',
      communicationPreference: '',
      bestTimeToContact: '',
      additionalInfo: '',
      marketingConsent: false,
      productUpdates: false,
      informationAccuracy: false
    });
    setCurrentStep(0);
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <ProductSelectionStep
            formData={formData}
            updateFormData={updateFormData}
            onNext={handleNext}
          />
        );
      case 1:
        return (
          <SpecificationsStep
            formData={formData}
            updateFormData={updateFormData}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        );
      case 2:
        return (
          <ContactDetailsStep
            formData={formData}
            updateFormData={updateFormData}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        );
      case 3:
        return (
          <ReviewStep
            formData={formData}
            onPrevious={handlePrevious}
            onSubmit={handleSubmit}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Helmet>
        <title>Request Quote - Ferrum Logic Steel Supply</title>
        <meta name="description" content="Request a detailed quote for steel products. Get competitive pricing for structural steel, reinforcement bars, plates, and custom fabrication." />
        <meta name="keywords" content="steel quote, steel pricing, steel supply quote, construction materials quote" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-16">
          <div className="max-w-9xl mx-auto px-6 py-8">
            <Breadcrumb />

            {/* Page Header */}
            <div className="mb-8">
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                  <Icon name="Calculator" size={24} className="text-primary" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-foreground">Request Quote</h1>
                  <p className="text-muted-foreground">
                    Get competitive pricing for your steel requirements
                  </p>
                </div>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <Icon name="Info" size={20} className="text-primary mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1">
                      Quick Response Guarantee
                    </p>
                    <p className="text-sm text-muted-foreground">
                      We'll review your request and send you a detailed quote within 24-48 hours.
                      For urgent requirements, call us at +1 (234) 567-8900.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress Indicator */}
            <ProgressIndicator
              currentStep={currentStep}
              totalSteps={steps.length}
              steps={steps}
              onStepClick={handleStepClick}
            />

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Form Section */}
              <div className="lg:col-span-8">
                {renderCurrentStep()}
              </div>

              {/* Summary Section */}
              <div className="lg:col-span-4">
                <QuoteSummary formData={formData} />
              </div>
            </div>
          </div>
        </main>

        {/* Success Modal */}
        <SuccessModal
          isOpen={showSuccessModal}
          onClose={handleModalClose}
          quoteReference={quoteReference}
        />

        {/* Quote Request CTA - Hidden on this page */}
        <div style={{ display: 'none' }}>
          <QuoteRequestCTA />
        </div>
      </div>
    </>
  );
};

export default QuoteRequest;