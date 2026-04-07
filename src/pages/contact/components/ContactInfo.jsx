import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ContactInfo = () => {
    const contactDetails = [
        {
            department: 'Sales Department',
            phone: '+1 (555) 123-4567',
            email: 'sales@ferrumlogic.com',
            hours: 'Mon-Fri: 8:00 AM - 6:00 PM',
            icon: 'Phone'
        },
        {
            department: 'Technical Support',
            phone: '+1 (555) 123-4568',
            email: 'support@ferrumlogic.com',
            hours: 'Mon-Fri: 9:00 AM - 5:00 PM',
            icon: 'Wrench'
        },
        {
            department: 'Customer Service',
            phone: '+1 (555) 123-4569',
            email: 'service@ferrumlogic.com',
            hours: 'Mon-Sat: 8:00 AM - 7:00 PM',
            icon: 'Headphones'
        }
    ];

    const officeLocations = [
        {
            name: 'Headquarters',
            address: '1234 Steel Avenue, Industrial District, Chicago, IL 60601',
            phone: '+1 (555) 123-4567',
            type: 'Main Office'
        },
        {
            name: 'West Coast Office',
            address: '5678 Manufacturing Blvd, Los Angeles, CA 90210',
            phone: '+1 (555) 987-6543',
            type: 'Regional Office'
        },
        {
            name: 'East Coast Warehouse',
            address: '9012 Distribution Center, Newark, NJ 07102',
            phone: '+1 (555) 456-7890',
            type: 'Warehouse & Distribution'
        }
    ];

    const handleCallClick = (phone) => {
        window.location.href = `tel:${phone}`;
    };

    const handleEmailClick = (email) => {
        window.location.href = `mailto:${email}`;
    };

    const handleWhatsAppClick = () => {
        const message = encodeURIComponent("Hi, I'm interested in your steel products and services.");
        window.open(`https://wa.me/15551234567?text=${message}`, '_blank');
    };

    return (
        <div className="space-y-6">
            {/* Contact Departments */}
            <div className="bg-white rounded-lg border border-border p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                    Contact Our Team
                </h3>
                <div className="space-y-4">
                    {contactDetails.map((contact, index) => (
                        <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-muted/50 transition-industrial">
                            <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg flex-shrink-0">
                                <Icon name={contact.icon} size={20} className="text-primary" />
                            </div>
                            <div className="flex-1">
                                <h4 className="font-medium text-foreground mb-1">
                                    {contact.department}
                                </h4>
                                <div className="space-y-1">
                                    <button
                                        onClick={() => handleCallClick(contact.phone)}
                                        className="flex items-center space-x-2 text-sm text-primary hover:text-primary/80 transition-industrial"
                                    >
                                        <Icon name="Phone" size={14} />
                                        <span>{contact.phone}</span>
                                    </button>
                                    <button
                                        onClick={() => handleEmailClick(contact.email)}
                                        className="flex items-center space-x-2 text-sm text-primary hover:text-primary/80 transition-industrial"
                                    >
                                        <Icon name="Mail" size={14} />
                                        <span>{contact.email}</span>
                                    </button>
                                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                        <Icon name="Clock" size={14} />
                                        <span>{contact.hours}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Office Locations */}
            <div className="bg-white rounded-lg border border-border p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                    Our Locations
                </h3>
                <div className="space-y-4">
                    {officeLocations.map((office, index) => (
                        <div key={index} className="border-l-4 border-primary pl-4">
                            <div className="flex items-start justify-between mb-2">
                                <h4 className="font-medium text-foreground">
                                    {office.name}
                                </h4>
                                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                                    {office.type}
                                </span>
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">
                                {office.address}
                            </p>
                            <button
                                onClick={() => handleCallClick(office.phone)}
                                className="flex items-center space-x-2 text-sm text-primary hover:text-primary/80 transition-industrial"
                            >
                                <Icon name="Phone" size={14} />
                                <span>{office.phone}</span>
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg border border-border p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                    Quick Actions
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <Button
                        variant="default"
                        fullWidth
                        iconName="Phone"
                        iconPosition="left"
                        onClick={() => handleCallClick('+1 (555) 123-4567')}
                    >
                        Call Now
                    </Button>

                    <Button
                        variant="success"
                        fullWidth
                        iconName="MessageCircle"
                        iconPosition="left"
                        onClick={handleWhatsAppClick}
                    >
                        WhatsApp
                    </Button>

                    <Button
                        variant="outline"
                        fullWidth
                        iconName="Mail"
                        iconPosition="left"
                        onClick={() => handleEmailClick('info@ferrumlogic.com')}
                    >
                        Email Us
                    </Button>

                    <Button
                        variant="outline"
                        fullWidth
                        iconName="Download"
                        iconPosition="left"
                        onClick={() => { }}
                    >
                        Company Brochure
                    </Button>
                </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-error/5 border border-error/20 rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-3">
                    <div className="flex items-center justify-center w-8 h-8 bg-error/10 rounded-lg">
                        <Icon name="AlertTriangle" size={16} className="text-error" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                        Emergency Support
                    </h3>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                    For urgent steel supply issues or after-hours emergencies:
                </p>
                <Button
                    variant="destructive"
                    iconName="Phone"
                    iconPosition="left"
                    onClick={() => handleCallClick('+1 (555) 911-STEEL')}
                >
                    Emergency Hotline: +1 (555) 911-STEEL
                </Button>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-lg border border-border p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                    Business Hours
                </h3>
                <div className="space-y-3">
                    <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">Monday - Friday</span>
                        <span className="text-sm text-muted-foreground">8:00 AM - 6:00 PM EST</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">Saturday</span>
                        <span className="text-sm text-muted-foreground">9:00 AM - 4:00 PM EST</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">Sunday</span>
                        <span className="text-sm text-muted-foreground">Closed</span>
                    </div>
                    <div className="pt-2 border-t border-border">
                        <p className="text-xs text-muted-foreground">
                            * Holiday hours may vary. Emergency support available 24/7.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;