import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const SuccessModal = ({ isOpen, onClose, quoteReference }) => {
    if (!isOpen) return null;

    const handleDownloadPDF = () => {
        // Mock PDF download
        const link = document.createElement('a');
        link.href = '#';
        link.download = `quote-request-${quoteReference}.pdf`;
        link.click();
    };

    const handleEmailCopy = () => {
        navigator.clipboard.writeText('quotes@ferrumlogic.com');
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

            <div className="relative bg-white rounded-lg shadow-industrial-lg max-w-md w-full mx-4 p-6">
                <div className="text-center">
                    {/* Success Icon */}
                    <div className="flex items-center justify-center w-16 h-16 bg-success/10 rounded-full mx-auto mb-4">
                        <Icon name="CheckCircle" size={32} className="text-success" />
                    </div>

                    {/* Success Message */}
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                        Quote Request Submitted!
                    </h3>
                    <p className="text-muted-foreground mb-6">
                        Your quote request has been successfully submitted. We'll review your requirements and send you a detailed quote within 24-48 hours.
                    </p>

                    {/* Reference Number */}
                    <div className="bg-muted/30 rounded-lg p-4 mb-6">
                        <div className="flex items-center justify-center space-x-2 mb-2">
                            <Icon name="Hash" size={16} className="text-primary" />
                            <span className="text-sm font-medium text-foreground">Reference Number</span>
                        </div>
                        <div className="font-mono text-lg font-semibold text-primary">
                            {quoteReference}
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                            Save this reference number for future communication
                        </p>
                    </div>

                    {/* Next Steps */}
                    <div className="text-left mb-6">
                        <h4 className="font-medium text-foreground mb-3">What happens next?</h4>
                        <div className="space-y-3">
                            <div className="flex items-start space-x-3">
                                <div className="flex items-center justify-center w-6 h-6 bg-primary/10 rounded-full mt-0.5">
                                    <span className="text-xs font-semibold text-primary">1</span>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-foreground">Review & Analysis</p>
                                    <p className="text-xs text-muted-foreground">Our team will review your requirements and specifications</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3">
                                <div className="flex items-center justify-center w-6 h-6 bg-primary/10 rounded-full mt-0.5">
                                    <span className="text-xs font-semibold text-primary">2</span>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-foreground">Quote Preparation</p>
                                    <p className="text-xs text-muted-foreground">We'll prepare a detailed quote with pricing and delivery terms</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3">
                                <div className="flex items-center justify-center w-6 h-6 bg-primary/10 rounded-full mt-0.5">
                                    <span className="text-xs font-semibold text-primary">3</span>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-foreground">Quote Delivery</p>
                                    <p className="text-xs text-muted-foreground">You'll receive the quote via email within 24-48 hours</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-6">
                        <div className="flex items-center space-x-2 mb-2">
                            <Icon name="Headphones" size={16} className="text-primary" />
                            <span className="text-sm font-medium text-foreground">Need immediate assistance?</span>
                        </div>
                        <div className="space-y-2 text-sm">
                            <div className="flex items-center justify-between">
                                <span className="text-muted-foreground">Phone:</span>
                                <a href="tel:+1234567890" className="text-primary hover:underline">
                                    +1 (234) 567-8900
                                </a>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-muted-foreground">Email:</span>
                                <button
                                    onClick={handleEmailCopy}
                                    className="text-primary hover:underline"
                                >
                                    quotes@ferrumlogic.com
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3">
                        <Button
                            variant="default"
                            fullWidth
                            iconName="Download"
                            iconPosition="left"
                            onClick={handleDownloadPDF}
                        >
                            Download Request Summary
                        </Button>

                        <div className="grid grid-cols-2 gap-3">
                            <Button
                                variant="outline"
                                size="sm"
                                iconName="Home"
                                iconPosition="left"
                                onClick={() => window.location.href = '/homepage'}
                            >
                                Go Home
                            </Button>
                            <Button
                                variant="outline"
                                size="sm"
                                iconName="Package"
                                iconPosition="left"
                                onClick={() => window.location.href = '/product-catalog'}
                            >
                                View Products
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 flex items-center justify-center w-8 h-8 text-muted-foreground hover:text-foreground rounded-full hover:bg-muted transition-industrial"
                >
                    <Icon name="X" size={16} />
                </button>
            </div>
        </div>
    );
};

export default SuccessModal;