import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ClientTestimonials = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const testimonials = [
        {
            id: 1,
            name: "Rajesh Agarwal",
            position: "Project Manager",
            company: "Metro Construction Ltd.",
            companyLogo: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg",
            avatar: "https://randomuser.me/api/portraits/men/42.jpg",
            rating: 5,
            testimonial: `DSM UDHYOG has been our trusted steel supplier for over 8 years. Their consistent quality, timely delivery, and competitive pricing have made them an integral part of our construction projects. The team's technical expertise and customer service are exceptional.`,
            projectDetails: "Supplied 2,500 tons of structural steel for Metro Phase-II project",
            location: "Mumbai, Maharashtra"
        },
        {
            id: 2,
            name: "Priya Sharma",
            position: "Procurement Head",
            company: "Skyline Builders",
            companyLogo: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg",
            avatar: "https://randomuser.me/api/portraits/women/35.jpg",
            rating: 5,
            testimonial: `Working with DSM UDHYOG has transformed our procurement process. Their online ordering system, transparent pricing, and quality assurance have significantly improved our project efficiency. They understand our requirements and deliver exactly what we need.`,
            projectDetails: "Regular supplier for residential and commercial projects",
            location: "Delhi NCR"
        },
        {
            id: 3,
            name: "Vikram Singh",
            position: "Chief Engineer",
            company: "Infrastructure Solutions",
            companyLogo: "https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg",
            avatar: "https://randomuser.me/api/portraits/men/48.jpg",
            rating: 5,
            testimonial: `The quality of steel products from DSM UDHYOG is outstanding. Their ISO certification and rigorous quality control processes give us confidence in every order. The technical support team is knowledgeable and always ready to help with specifications.`,
            projectDetails: "Bridge construction project - 1,800 tons of high-grade steel",
            location: "Pune, Maharashtra"
        },
        {
            id: 4,
            name: "Anjali Patel",
            position: "Operations Director",
            company: "Modern Steel Works",
            companyLogo: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg",
            avatar: "https://randomuser.me/api/portraits/women/29.jpg",
            rating: 5,
            testimonial: `DSM UDHYOG's commitment to sustainability and environmental responsibility aligns perfectly with our company values. Their green practices and eco-friendly processes make them our preferred partner for all steel requirements.`,
            projectDetails: "Long-term partnership for manufacturing operations",
            location: "Ahmedabad, Gujarat"
        },
        {
            id: 5,
            name: "Suresh Kumar",
            position: "Site Manager",
            company: "Apex Constructions",
            companyLogo: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg",
            avatar: "https://randomuser.me/api/portraits/men/52.jpg",
            rating: 5,
            testimonial: `The logistics and delivery service of DSM UDHYOG is remarkable. They have never missed a delivery deadline, and their inventory management ensures we always have the right materials at the right time. Highly recommended!`,
            projectDetails: "Multi-phase residential complex - 3,200 tons supplied",
            location: "Bangalore, Karnataka"
        }
    ];

    const clientLogos = [
        { name: "Metro Construction", logo: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg" },
        { name: "Skyline Builders", logo: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg" },
        { name: "Infrastructure Solutions", logo: "https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg" },
        { name: "Modern Steel Works", logo: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg" },
        { name: "Apex Constructions", logo: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg" },
        { name: "Prime Developers", logo: "https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg" },
        { name: "Elite Engineering", logo: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg" },
        { name: "Global Constructions", logo: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg" }
    ];

    // Auto-play functionality
    useEffect(() => {
        if (isAutoPlaying) {
            const interval = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % testimonials.length);
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [isAutoPlaying, testimonials.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, index) => (
            <Icon
                key={index}
                name="Star"
                size={16}
                className={index < rating ? "text-yellow-400 fill-current" : "text-gray-300"}
            />
        ));
    };

    return (
        <section className="py-20 bg-muted/30">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center space-x-3 mb-4">
                        <Icon name="MessageSquare" size={24} className="text-primary" />
                        <span className="text-primary font-semibold">Client Testimonials</span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                        What Our Clients Say
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Don't just take our word for it. Here's what our valued clients have to say about
                        their experience working with DSM UDHYOG.
                    </p>
                </div>

                {/* Main Testimonial Carousel */}
                <div className="relative mb-16">
                    <div
                        className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg"
                        onMouseEnter={() => setIsAutoPlaying(false)}
                        onMouseLeave={() => setIsAutoPlaying(true)}
                    >
                        <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
                            {/* Client Info */}
                            <div className="flex-shrink-0 text-center lg:text-left">
                                <div className="w-24 h-24 mx-auto lg:mx-0 rounded-full overflow-hidden ring-4 ring-primary/10 mb-4">
                                    <Image
                                        src={testimonials[currentSlide].avatar}
                                        alt={testimonials[currentSlide].name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-1">
                                    {testimonials[currentSlide].name}
                                </h3>
                                <p className="text-primary font-medium mb-2">
                                    {testimonials[currentSlide].position}
                                </p>
                                <div className="flex items-center justify-center lg:justify-start space-x-2 mb-3">
                                    <div className="w-8 h-8 rounded overflow-hidden">
                                        <Image
                                            src={testimonials[currentSlide].companyLogo}
                                            alt={testimonials[currentSlide].company}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <span className="text-sm text-muted-foreground">
                                        {testimonials[currentSlide].company}
                                    </span>
                                </div>
                                <div className="flex items-center justify-center lg:justify-start space-x-1 mb-2">
                                    {renderStars(testimonials[currentSlide].rating)}
                                </div>
                                <div className="flex items-center justify-center lg:justify-start space-x-1 text-sm text-muted-foreground">
                                    <Icon name="MapPin" size={14} />
                                    <span>{testimonials[currentSlide].location}</span>
                                </div>
                            </div>

                            {/* Testimonial Content */}
                            <div className="flex-1">
                                <div className="mb-6">
                                    <Icon name="Quote" size={32} className="text-primary/20 mb-4" />
                                    <p className="text-lg text-muted-foreground leading-relaxed italic">
                                        "{testimonials[currentSlide].testimonial}"
                                    </p>
                                </div>

                                <div className="bg-primary/5 rounded-lg p-4">
                                    <div className="flex items-center space-x-2 mb-2">
                                        <Icon name="Briefcase" size={16} className="text-primary" />
                                        <span className="text-sm font-medium text-primary">Project Details</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground">
                                        {testimonials[currentSlide].projectDetails}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                    >
                        <Icon name="ChevronLeft" size={20} className="text-primary" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                    >
                        <Icon name="ChevronRight" size={20} className="text-primary" />
                    </button>
                </div>

                {/* Slide Indicators */}
                <div className="flex items-center justify-center space-x-2 mb-16">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                                    ? 'bg-primary w-8' : 'bg-border hover:bg-primary/50'
                                }`}
                        />
                    ))}
                </div>

                {/* Client Logos */}
                <div className="bg-white rounded-2xl p-8">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-foreground mb-4">
                            Trusted by Industry Leaders
                        </h3>
                        <p className="text-muted-foreground">
                            We're proud to serve some of the most respected names in construction and manufacturing
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
                        {clientLogos.map((client, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-center p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors duration-300 group"
                            >
                                <div className="w-16 h-16 rounded overflow-hidden opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                                    <Image
                                        src={client.logo}
                                        alt={client.name}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="mt-16 text-center">
                    <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
                        <h3 className="text-2xl font-bold mb-4">
                            Ready to Join Our Satisfied Clients?
                        </h3>
                        <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                            Experience the same level of quality, service, and reliability that our clients rave about.
                            Let us be your trusted steel supply partner.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                            <button
                                onClick={() => window.location.href = '/quote-request'}
                                className="flex items-center space-x-2 bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors duration-300"
                            >
                                <Icon name="Calculator" size={18} />
                                <span>Get Your Quote</span>
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

export default ClientTestimonials;