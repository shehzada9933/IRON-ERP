import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const CompanyHero = () => {
    return (
        <section className="relative h-[70vh] min-h-[500px] overflow-hidden bg-gradient-to-br from-primary via-secondary to-primary">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="https://images.pexels.com/photos/162568/steel-mill-factory-industry-162568.jpeg"
                    alt="DSM UDHYOG Steel Manufacturing Facility"
                    className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
                <div className="max-w-3xl">
                    <div className="flex items-center space-x-3 mb-6">
                        <div className="flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg">
                            <Icon name="Building2" size={24} color="white" />
                        </div>
                        <span className="text-white/90 font-medium text-lg">About Our Company</span>
                    </div>

                    <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                        Building Tomorrow with
                        <span className="block text-accent"> Quality Steel</span>
                    </h1>

                    <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
                        For over three decades, DSM UDHYOG has been India's trusted partner in steel supply,
                        delivering excellence through innovation, quality, and unwavering commitment to our clients.
                    </p>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-8">
                        <div className="flex items-center space-x-3">
                            <div className="flex items-center justify-center w-10 h-10 bg-accent/20 rounded-full">
                                <Icon name="Award" size={20} color="white" />
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-white">ISO 9001:2015</div>
                                <div className="text-sm text-white/80">Certified Quality</div>
                            </div>
                        </div>

                        <div className="flex items-center space-x-3">
                            <div className="flex items-center justify-center w-10 h-10 bg-accent/20 rounded-full">
                                <Icon name="Users" size={20} color="white" />
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-white">500+</div>
                                <div className="text-sm text-white/80">Trusted Clients</div>
                            </div>
                        </div>

                        <div className="flex items-center space-x-3">
                            <div className="flex items-center justify-center w-10 h-10 bg-accent/20 rounded-full">
                                <Icon name="Calendar" size={20} color="white" />
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-white">30+ Years</div>
                                <div className="text-sm text-white/80">Industry Experience</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="flex flex-col items-center space-y-2">
                    <span className="text-white/80 text-sm">Scroll to explore</span>
                    <Icon name="ChevronDown" size={20} color="white" className="opacity-80" />
                </div>
            </div>
        </section>
    );
};

export default CompanyHero;