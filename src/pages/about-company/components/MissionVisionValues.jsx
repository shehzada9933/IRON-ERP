import React from 'react';
import Icon from '../../../components/AppIcon';

const MissionVisionValues = () => {
    const missionData = {
        mission: {
            icon: "Target",
            title: "Our Mission",
            description: "To provide superior quality steel products and exceptional service that enables our clients to build stronger, safer, and more sustainable structures while maintaining the highest standards of integrity and reliability."
        },
        vision: {
            icon: "Eye",
            title: "Our Vision",
            description: "To be the most trusted and innovative steel supplier in the industry, recognized for our commitment to quality, sustainability, and customer success, while contributing to the development of modern infrastructure."
        }
    };

    const values = [
        {
            icon: "Shield",
            title: "Quality Assurance",
            description: "We maintain rigorous quality control standards and certifications to ensure every product meets or exceeds industry specifications and client expectations."
        },
        {
            icon: "Handshake",
            title: "Customer Focus",
            description: "Our clients' success is our priority. We build lasting partnerships through responsive service, competitive pricing, and reliable delivery commitments."
        },
        {
            icon: "Lightbulb",
            title: "Innovation",
            description: "We continuously invest in new technologies, processes, and solutions to improve efficiency, reduce costs, and deliver better value to our customers."
        },
        {
            icon: "Leaf",
            title: "Sustainability",
            description: "We are committed to environmentally responsible practices, sustainable sourcing, and reducing our carbon footprint for future generations."
        },
        {
            icon: "Users",
            title: "Team Excellence",
            description: "Our skilled and dedicated team is our greatest asset. We foster a culture of continuous learning, safety, and professional development."
        },
        {
            icon: "Award",
            title: "Integrity",
            description: "We conduct business with honesty, transparency, and ethical practices, building trust through consistent actions and reliable performance."
        }
    ];

    return (
        <section className="py-20 bg-muted/30">
            <div className="max-w-7xl mx-auto px-6">
                {/* Mission & Vision */}
                <div className="grid lg:grid-cols-2 gap-12 mb-20">
                    {Object.entries(missionData).map(([key, item]) => (
                        <div key={key} className="relative">
                            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                                <div className="flex items-center space-x-4 mb-6">
                                    <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl">
                                        <Icon name={item.icon} size={28} className="text-primary" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-foreground">{item.title}</h3>
                                </div>
                                <p className="text-muted-foreground leading-relaxed text-lg">
                                    {item.description}
                                </p>

                                {/* Decorative Element */}
                                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full -z-10"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Values Section */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center space-x-3 mb-4">
                        <Icon name="Heart" size={24} className="text-primary" />
                        <span className="text-primary font-semibold">Our Values</span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                        What Drives Us Forward
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Our core values guide every decision we make and every relationship we build,
                        ensuring we deliver excellence in everything we do.
                    </p>
                </div>

                {/* Values Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {values.map((value, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="flex items-center justify-center w-14 h-14 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                                <Icon name={value.icon} size={24} className="text-primary" />
                            </div>

                            <h4 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                                {value.title}
                            </h4>

                            <p className="text-muted-foreground leading-relaxed">
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="mt-16 text-center">
                    <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
                        <h3 className="text-2xl font-bold mb-4">
                            Ready to Experience Our Values in Action?
                        </h3>
                        <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                            Join hundreds of satisfied clients who trust DSM UDHYOG for their steel supply needs.
                            Let us demonstrate our commitment to quality and service.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                            <button
                                onClick={() => window.location.href = '/quote-request'}
                                className="flex items-center space-x-2 bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors duration-300"
                            >
                                <Icon name="Calculator" size={18} />
                                <span>Request Quote</span>
                            </button>
                            <button
                                onClick={() => window.location.href = '/contact'}
                                className="flex items-center space-x-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors duration-300"
                            >
                                <Icon name="Phone" size={18} />
                                <span>Contact Us</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionVisionValues;