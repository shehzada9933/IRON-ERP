import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';
import Icon from '../../../components/AppIcon';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        inquiryType: '',
        message: '',
        newsletter: false
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const inquiryTypes = [
        { value: 'product-inquiry', label: 'Product Inquiry' },
        { value: 'bulk-order', label: 'Bulk Order Request' },
        { value: 'technical-support', label: 'Technical Support' },
        { value: 'partnership', label: 'Partnership Opportunity' },
        { value: 'complaint', label: 'Complaint/Issue' },
        { value: 'general', label: 'General Inquiry' }
    ];

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Full name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email address is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!/^\+?[\d\s\-\(\)]{10,}$/.test(formData.phone)) {
            newErrors.phone = 'Please enter a valid phone number';
        }

        if (!formData.company.trim()) {
            newErrors.company = 'Company name is required';
        }

        if (!formData.inquiryType) {
            newErrors.inquiryType = 'Please select an inquiry type';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters long';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));

        // Clear error when user starts typing
        if (errors[field]) {
            setErrors(prev => ({
                ...prev,
                [field]: ''
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        // Simulate API call
        try {
            await new Promise(resolve => setTimeout(resolve, 2000));

            // Mock successful submission
            setIsSubmitted(true);
            setFormData({
                name: '',
                email: '',
                phone: '',
                company: '',
                inquiryType: '',
                message: '',
                newsletter: false
            });
        } catch (error) {
            console.error('Form submission error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSubmitted) {
        return (
            <div className="bg-white rounded-lg border border-border p-8 text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-success/10 rounded-full mx-auto mb-4">
                    <Icon name="CheckCircle" size={32} className="text-success" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                    Thank You for Your Inquiry!
                </h3>
                <p className="text-muted-foreground mb-6">
                    We've received your message and will respond within 24 hours. For urgent matters, please call us directly.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button
                        variant="outline"
                        onClick={() => setIsSubmitted(false)}
                        iconName="Plus"
                        iconPosition="left"
                    >
                        Send Another Message
                    </Button>
                    <Button
                        variant="default"
                        onClick={() => window.location.href = '/quote-request'}
                        iconName="Calculator"
                        iconPosition="left"
                    >
                        Request Quote
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-lg border border-border p-6 lg:p-8">
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                    Send Us a Message
                </h2>
                <p className="text-muted-foreground">
                    Get in touch with our team for any inquiries about our steel products and services.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                        label="Full Name"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        error={errors.name}
                        required
                    />

                    <Input
                        label="Email Address"
                        type="email"
                        placeholder="your.email@company.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        error={errors.email}
                        required
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                        label="Phone Number"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        error={errors.phone}
                        required
                    />

                    <Input
                        label="Company Name"
                        type="text"
                        placeholder="Your company name"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        error={errors.company}
                        required
                    />
                </div>

                <Select
                    label="Inquiry Type"
                    placeholder="Select inquiry type"
                    options={inquiryTypes}
                    value={formData.inquiryType}
                    onChange={(value) => handleInputChange('inquiryType', value)}
                    error={errors.inquiryType}
                    required
                />

                <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                        Message <span className="text-error">*</span>
                    </label>
                    <textarea
                        placeholder="Tell us about your steel requirements, project details, or any questions you have..."
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        rows={5}
                        className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-industrial resize-none"
                    />
                    <div className="flex justify-between items-center mt-1">
                        <span className={`text-xs ${errors.message ? 'text-error' : 'text-muted-foreground'}`}>
                            {errors.message || `${formData.message.length}/500 characters`}
                        </span>
                    </div>
                </div>

                <Checkbox
                    label="Subscribe to our newsletter for steel industry updates and product announcements"
                    checked={formData.newsletter}
                    onChange={(e) => handleInputChange('newsletter', e.target.checked)}
                />

                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <Button
                        type="submit"
                        variant="default"
                        loading={isSubmitting}
                        iconName="Send"
                        iconPosition="left"
                        className="flex-1"
                    >
                        {isSubmitting ? 'Sending Message...' : 'Send Message'}
                    </Button>

                    <Button
                        type="button"
                        variant="outline"
                        onClick={() => {
                            setFormData({
                                name: '',
                                email: '',
                                phone: '',
                                company: '',
                                inquiryType: '',
                                message: '',
                                newsletter: false
                            });
                            setErrors({});
                        }}
                        iconName="RotateCcw"
                        iconPosition="left"
                    >
                        Reset Form
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;