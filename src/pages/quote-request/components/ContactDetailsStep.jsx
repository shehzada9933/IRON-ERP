import React from 'react';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';
import { Checkbox } from '../../../components/ui/Checkbox';

const ContactDetailsStep = ({ formData, updateFormData, onNext, onPrevious }) => {
    const companyTypes = [
        { value: 'construction', label: 'Construction Company' },
        { value: 'manufacturing', label: 'Manufacturing' },
        { value: 'fabrication', label: 'Steel Fabrication' },
        { value: 'engineering', label: 'Engineering Firm' },
        { value: 'contractor', label: 'General Contractor' },
        { value: 'developer', label: 'Real Estate Developer' },
        { value: 'other', label: 'Other' }
    ];

    const projectTimelines = [
        { value: 'immediate', label: 'Immediate (Within 1 week)' },
        { value: 'short', label: 'Short term (1-4 weeks)' },
        { value: 'medium', label: 'Medium term (1-3 months)' },
        { value: 'long', label: 'Long term (3+ months)' },
        { value: 'ongoing', label: 'Ongoing project' }
    ];

    const communicationPreferences = [
        { value: 'email', label: 'Email' },
        { value: 'phone', label: 'Phone Call' },
        { value: 'whatsapp', label: 'WhatsApp' },
        { value: 'meeting', label: 'In-person Meeting' }
    ];

    const handleNext = () => {
        const requiredFields = ['contactName', 'email', 'phone', 'companyName'];
        const isValid = requiredFields.every(field => formData[field]?.trim());

        if (isValid) {
            onNext();
        }
    };

    const isFormValid = () => {
        const requiredFields = ['contactName', 'email', 'phone', 'companyName'];
        return requiredFields.every(field => formData[field]?.trim());
    };

    return (
        <div className="space-y-6">
            <div className="bg-white rounded-lg border border-border p-6">
                <div className="mb-6">
                    <h3 className="text-lg font-semibold text-foreground">Contact Information</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                        Provide your contact details so we can send you the quote
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <Input
                            label="Contact Person Name"
                            type="text"
                            placeholder="Enter full name"
                            value={formData.contactName || ''}
                            onChange={(e) => updateFormData({ contactName: e.target.value })}
                            required
                        />

                        <Input
                            label="Email Address"
                            type="email"
                            placeholder="Enter email address"
                            value={formData.email || ''}
                            onChange={(e) => updateFormData({ email: e.target.value })}
                            required
                        />

                        <Input
                            label="Phone Number"
                            type="tel"
                            placeholder="Enter phone number"
                            value={formData.phone || ''}
                            onChange={(e) => updateFormData({ phone: e.target.value })}
                            required
                        />

                        <Input
                            label="Alternative Phone"
                            type="tel"
                            placeholder="Alternative contact number"
                            value={formData.alternativePhone || ''}
                            onChange={(e) => updateFormData({ alternativePhone: e.target.value })}
                        />
                    </div>

                    <div className="space-y-4">
                        <Input
                            label="Company Name"
                            type="text"
                            placeholder="Enter company name"
                            value={formData.companyName || ''}
                            onChange={(e) => updateFormData({ companyName: e.target.value })}
                            required
                        />

                        <Select
                            label="Company Type"
                            placeholder="Select company type"
                            options={companyTypes}
                            value={formData.companyType || ''}
                            onChange={(value) => updateFormData({ companyType: value })}
                        />

                        <Input
                            label="Job Title"
                            type="text"
                            placeholder="Your position in company"
                            value={formData.jobTitle || ''}
                            onChange={(e) => updateFormData({ jobTitle: e.target.value })}
                        />

                        <Input
                            label="Company Website"
                            type="url"
                            placeholder="https://www.company.com"
                            value={formData.website || ''}
                            onChange={(e) => updateFormData({ website: e.target.value })}
                        />
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-lg border border-border p-6">
                <div className="mb-6">
                    <h3 className="text-lg font-semibold text-foreground">Project Details</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                        Tell us more about your project requirements
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <Input
                            label="Project Name"
                            type="text"
                            placeholder="Enter project name"
                            value={formData.projectName || ''}
                            onChange={(e) => updateFormData({ projectName: e.target.value })}
                        />

                        <Select
                            label="Project Timeline"
                            placeholder="When do you need the materials?"
                            options={projectTimelines}
                            value={formData.projectTimeline || ''}
                            onChange={(value) => updateFormData({ projectTimeline: value })}
                        />

                        <Input
                            label="Estimated Budget Range"
                            type="text"
                            placeholder="e.g., $10,000 - $50,000"
                            value={formData.budgetRange || ''}
                            onChange={(e) => updateFormData({ budgetRange: e.target.value })}
                        />
                    </div>

                    <div className="space-y-4">
                        <Input
                            label="Project Location"
                            type="text"
                            placeholder="City, State/Province"
                            value={formData.projectLocation || ''}
                            onChange={(e) => updateFormData({ projectLocation: e.target.value })}
                        />

                        <Select
                            label="Preferred Communication"
                            placeholder="How would you like us to contact you?"
                            options={communicationPreferences}
                            value={formData.communicationPreference || ''}
                            onChange={(value) => updateFormData({ communicationPreference: value })}
                        />

                        <Input
                            label="Best Time to Contact"
                            type="text"
                            placeholder="e.g., Weekdays 9 AM - 5 PM"
                            value={formData.bestTimeToContact || ''}
                            onChange={(e) => updateFormData({ bestTimeToContact: e.target.value })}
                        />
                    </div>
                </div>

                <div className="mt-6">
                    <label className="block text-sm font-medium text-foreground mb-3">
                        Additional Information
                    </label>
                    <textarea
                        className="w-full min-h-[100px] px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-vertical"
                        placeholder="Any additional details about your project, special requirements, or questions..."
                        value={formData.additionalInfo || ''}
                        onChange={(e) => updateFormData({ additionalInfo: e.target.value })}
                    />
                </div>
            </div>

            <div className="bg-white rounded-lg border border-border p-6">
                <div className="space-y-4">
                    <Checkbox
                        label="I agree to receive marketing communications from Ferrum Logic"
                        checked={formData.marketingConsent || false}
                        onChange={(e) => updateFormData({ marketingConsent: e.target.checked })}
                    />

                    <Checkbox
                        label="I would like to receive updates about new products and services"
                        checked={formData.productUpdates || false}
                        onChange={(e) => updateFormData({ productUpdates: e.target.checked })}
                    />

                    <Checkbox
                        label="I confirm that all information provided is accurate and complete"
                        checked={formData.informationAccuracy || false}
                        onChange={(e) => updateFormData({ informationAccuracy: e.target.checked })}
                        required
                    />
                </div>
            </div>

            <div className="flex justify-between">
                <Button
                    variant="outline"
                    iconName="ArrowLeft"
                    iconPosition="left"
                    onClick={onPrevious}
                >
                    Back to Specifications
                </Button>
                <Button
                    variant="default"
                    iconName="ArrowRight"
                    iconPosition="right"
                    onClick={handleNext}
                    disabled={!isFormValid()}
                >
                    Review Quote Request
                </Button>
            </div>
        </div>
    );
};

export default ContactDetailsStep;