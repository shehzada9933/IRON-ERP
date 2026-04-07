import React from 'react';
import { motion } from 'framer-motion';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const CredentialsSection = () => {
    const certifications = [
        {
            id: 1,
            name: "ISO 9001:2015",
            description: "Quality Management System",
            icon: "Award",
            image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg"
        },
        {
            id: 2,
            name: "ISO 14001:2015",
            description: "Environmental Management",
            icon: "Leaf",
            image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg"
        },
        {
            id: 3,
            name: "OHSAS 18001",
            description: "Occupational Health & Safety",
            icon: "Shield",
            image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg"
        },
        {
            id: 4,
            name: "BIS Certification",
            description: "Bureau of Indian Standards",
            icon: "CheckCircle",
            image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg"
        }
    ];

    const testimonials = [
        {
            id: 1,
            name: "Rajesh Kumar",
            position: "Project Manager",
            company: "Metro Construction Ltd.",
            content: "Ferrum Logic has been our trusted steel supplier for over 5 years. Their quality consistency and timely delivery have been crucial to our project success.",
            rating: 5,
            avatar: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
            id: 2,
            name: "Priya Sharma",
            position: "Procurement Head",
            company: "Industrial Solutions Pvt.",
            content: "Excellent product quality and competitive pricing. Their technical support team is knowledgeable and always ready to help with specifications.",
            rating: 5,
            avatar: "https://randomuser.me/api/portraits/women/44.jpg"
        },
        {
            id: 3,
            name: "Amit Patel",
            position: "Site Engineer",
            company: "BuildTech Infrastructure",
            content: "The TMT bars supplied by Ferrum Logic exceeded our expectations. Great strength and bendability. Highly recommend for construction projects.",
            rating: 5,
            avatar: "https://randomuser.me/api/portraits/men/56.jpg"
        }
    ];

    const qualityBadges = [
        {
            id: 1,
            title: "Premium Quality",
            description: "Grade A steel products",
            icon: "Star",
            color: "text-warning"
        },
        {
            id: 2,
            title: "Tested & Certified",
            description: "Laboratory verified",
            icon: "FlaskConical",
            color: "text-success"
        },
        {
            id: 3,
            title: "Nationwide Delivery",
            description: "Pan-India logistics",
            icon: "Truck",
            color: "text-primary"
        },
        {
            id: 4,
            title: "24/7 Support",
            description: "Round-the-clock service",
            icon: "Headphones",
            color: "text-accent"
        }
    ];

    return (
        <section className="py-20 bg-muted/30">
            <div className="max-w-7xl mx-auto px-6">
                {/* Certifications */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                        Certified Excellence
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Our commitment to quality is backed by international certifications
                        and industry recognition.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-xl p-6 shadow-industrial-md hover:shadow-industrial-lg transition-industrial group hover:scale-105"
                        >
                            <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 group-hover:bg-primary/20 transition-industrial">
                                <Icon
                                    name={cert.icon}
                                    size={24}
                                    className="text-primary"
                                />
                            </div>

                            <h3 className="text-lg font-semibold text-foreground mb-2 text-center">
                                {cert.name}
                            </h3>

                            <p className="text-sm text-muted-foreground text-center">
                                {cert.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Quality Badges */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {qualityBadges.map((badge, index) => (
                        <motion.div
                            key={badge.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-center space-x-4 bg-white rounded-lg p-4 shadow-industrial-sm hover:shadow-industrial-md transition-industrial"
                        >
                            <div className="flex-shrink-0">
                                <Icon
                                    name={badge.icon}
                                    size={24}
                                    className={badge.color}
                                />
                            </div>
                            <div>
                                <h4 className="font-semibold text-foreground text-sm">
                                    {badge.title}
                                </h4>
                                <p className="text-xs text-muted-foreground">
                                    {badge.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Client Testimonials */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                        What Our Clients Say
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Don't just take our word for it. Here's what industry professionals
                        say about our products and services.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-xl p-6 shadow-industrial-md hover:shadow-industrial-lg transition-industrial"
                        >
                            {/* Rating Stars */}
                            <div className="flex items-center space-x-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Icon
                                        key={i}
                                        name="Star"
                                        size={16}
                                        className="text-warning fill-current"
                                    />
                                ))}
                            </div>

                            {/* Testimonial Content */}
                            <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                                "{testimonial.content}"
                            </blockquote>

                            {/* Client Info */}
                            <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 rounded-full overflow-hidden">
                                    <Image
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <div className="font-semibold text-foreground">
                                        {testimonial.name}
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        {testimonial.position}
                                    </div>
                                    <div className="text-xs text-primary font-medium">
                                        {testimonial.company}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CredentialsSection;