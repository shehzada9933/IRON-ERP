import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CertificationsSection = () => {
    const certifications = [
        {
            id: 1,
            name: "ISO 9001:2015",
            description: "Quality Management System",
            issuer: "International Organization for Standardization",
            validUntil: "2026",
            badge: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg",
            icon: "Award",
            color: "text-blue-600"
        },
        {
            id: 2,
            name: "ISO 14001:2015",
            description: "Environmental Management System",
            issuer: "International Organization for Standardization",
            validUntil: "2025",
            badge: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg",
            icon: "Leaf",
            color: "text-green-600"
        },
        {
            id: 3,
            name: "OHSAS 18001",
            description: "Occupational Health & Safety",
            issuer: "British Standards Institution",
            validUntil: "2025",
            badge: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg",
            icon: "Shield",
            color: "text-orange-600"
        },
        {
            id: 4,
            name: "BIS Certification",
            description: "Bureau of Indian Standards",
            issuer: "Government of India",
            validUntil: "2025",
            badge: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg",
            icon: "CheckCircle",
            color: "text-purple-600"
        }
    ];

    const qualityStandards = [
        {
            standard: "IS 2062",
            description: "Hot Rolled Medium and High Tensile Structural Steel",
            compliance: "100%"
        },
        {
            standard: "IS 1786",
            description: "High Strength Deformed Steel Bars and Wires",
            compliance: "100%"
        },
        {
            standard: "ASTM A36",
            description: "Carbon Structural Steel",
            compliance: "100%"
        },
        {
            standard: "IS 808",
            description: "Dimensions for Hot Rolled Steel Beam, Column, Channel and Angle Sections",
            compliance: "100%"
        }
    ];

    const industryRecognitions = [
        {
            title: "Best Steel Supplier Award",
            year: "2023",
            organization: "Construction Industry Association",
            icon: "Trophy"
        },
        {
            title: "Excellence in Quality",
            year: "2022",
            organization: "Steel Manufacturers Association",
            icon: "Star"
        },
        {
            title: "Sustainable Business Practices",
            year: "2023",
            organization: "Green Business Council",
            icon: "Leaf"
        },
        {
            title: "Customer Service Excellence",
            year: "2024",
            organization: "Business Excellence Forum",
            icon: "Heart"
        }
    ];

    return (
        <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center space-x-3 mb-4">
                        <Icon name="Award" size={24} className="text-primary" />
                        <span className="text-primary font-semibold">Quality Assurance</span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                        Certifications & Standards
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Our commitment to quality is validated by internationally recognized certifications
                        and adherence to the highest industry standards.
                    </p>
                </div>

                {/* Certifications Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {certifications.map((cert) => (
                        <div
                            key={cert.id}
                            className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                        >
                            <div className="text-center">
                                <div className="relative mb-4">
                                    <div className="w-20 h-20 mx-auto bg-muted/50 rounded-full overflow-hidden">
                                        <Image
                                            src={cert.badge}
                                            alt={`${cert.name} Certification Badge`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className={`absolute -bottom-2 -right-2 w-8 h-8 ${cert.color} bg-white rounded-full flex items-center justify-center shadow-md`}>
                                        <Icon name={cert.icon} size={16} className={cert.color} />
                                    </div>
                                </div>

                                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                                    {cert.name}
                                </h3>

                                <p className="text-sm text-muted-foreground mb-3">
                                    {cert.description}
                                </p>

                                <div className="text-xs text-muted-foreground space-y-1">
                                    <div>Issued by: {cert.issuer}</div>
                                    <div className="flex items-center justify-center space-x-1">
                                        <Icon name="Calendar" size={12} />
                                        <span>Valid until {cert.validUntil}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Quality Standards */}
                <div className="bg-muted/30 rounded-2xl p-8 mb-16">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-foreground mb-4">
                            Compliance Standards
                        </h3>
                        <p className="text-muted-foreground">
                            We strictly adhere to national and international quality standards
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {qualityStandards.map((standard, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg p-4 flex items-center space-x-4"
                            >
                                <div className="flex items-center justify-center w-12 h-12 bg-success/10 rounded-lg">
                                    <Icon name="CheckCircle" size={20} className="text-success" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-1">
                                        <h4 className="font-bold text-foreground">{standard.standard}</h4>
                                        <span className="text-sm font-semibold text-success">{standard.compliance}</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground">{standard.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Industry Recognitions */}
                <div className="text-center mb-12">
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                        Industry Recognition
                    </h3>
                    <p className="text-muted-foreground mb-8">
                        Awards and recognitions that validate our commitment to excellence
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {industryRecognitions.map((recognition, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mx-auto mb-4">
                                <Icon name={recognition.icon} size={24} className="text-accent" />
                            </div>

                            <h4 className="font-bold text-foreground mb-2">
                                {recognition.title}
                            </h4>

                            <div className="text-sm text-muted-foreground space-y-1">
                                <div className="flex items-center justify-center space-x-1">
                                    <Icon name="Calendar" size={12} />
                                    <span>{recognition.year}</span>
                                </div>
                                <div>{recognition.organization}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Trust Indicators */}
                <div className="mt-16 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-foreground mb-4">
                            Why Choose Certified Quality?
                        </h3>
                        <div className="grid md:grid-cols-3 gap-8 mt-8">
                            <div className="flex flex-col items-center">
                                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                                    <Icon name="Shield" size={24} className="text-primary" />
                                </div>
                                <h4 className="font-semibold text-foreground mb-2">Guaranteed Quality</h4>
                                <p className="text-sm text-muted-foreground text-center">
                                    Every product meets international quality standards
                                </p>
                            </div>

                            <div className="flex flex-col items-center">
                                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                                    <Icon name="Clock" size={24} className="text-primary" />
                                </div>
                                <h4 className="font-semibold text-foreground mb-2">Consistent Supply</h4>
                                <p className="text-sm text-muted-foreground text-center">
                                    Reliable delivery schedules and inventory management
                                </p>
                            </div>

                            <div className="flex flex-col items-center">
                                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                                    <Icon name="Users" size={24} className="text-primary" />
                                </div>
                                <h4 className="font-semibold text-foreground mb-2">Expert Support</h4>
                                <p className="text-sm text-muted-foreground text-center">
                                    Technical guidance from certified professionals
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CertificationsSection;