import React, { useState, useEffect, useRef } from 'react';
import Icon from '../../../components/AppIcon';

const CompanyStatistics = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [animatedValues, setAnimatedValues] = useState({});
    const sectionRef = useRef(null);

    const statistics = [
        {
            id: 'experience',
            icon: 'Calendar',
            value: 30,
            suffix: '+',
            label: 'Years of Experience',
            description: 'Serving the steel industry with excellence',
            color: 'text-blue-600',
            bgColor: 'bg-blue-50'
        },
        {
            id: 'production',
            icon: 'Factory',
            value: 50000,
            suffix: '+',
            label: 'Tons Produced Monthly',
            description: 'High-quality steel products manufactured',
            color: 'text-green-600',
            bgColor: 'bg-green-50'
        },
        {
            id: 'clients',
            icon: 'Users',
            value: 500,
            suffix: '+',
            label: 'Trusted Clients',
            description: 'Satisfied customers across industries',
            color: 'text-purple-600',
            bgColor: 'bg-purple-50'
        },
        {
            id: 'projects',
            icon: 'Building2',
            value: 2500,
            suffix: '+',
            label: 'Projects Completed',
            description: 'Successful steel supply projects delivered',
            color: 'text-orange-600',
            bgColor: 'bg-orange-50'
        },
        {
            id: 'capacity',
            icon: 'Truck',
            value: 100000,
            suffix: '+',
            label: 'Tons Storage Capacity',
            description: 'Modern warehouse and inventory management',
            color: 'text-red-600',
            bgColor: 'bg-red-50'
        },
        {
            id: 'team',
            icon: 'UserCheck',
            value: 200,
            suffix: '+',
            label: 'Team Members',
            description: 'Skilled professionals and experts',
            color: 'text-indigo-600',
            bgColor: 'bg-indigo-50'
        }
    ];

    const formatNumber = (num) => {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + 'M';
        } else if (num >= 1000) {
            return (num / 1000).toFixed(0) + 'K';
        }
        return num.toString();
    };

    const animateValue = (start, end, duration, callback) => {
        const startTime = performance.now();
        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const current = Math.floor(start + (end - start) * easeOutQuart);

            callback(current);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        requestAnimationFrame(animate);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !isVisible) {
                        setIsVisible(true);

                        // Start animations for all statistics
                        statistics.forEach((stat, index) => {
                            setTimeout(() => {
                                animateValue(0, stat.value, 2000, (value) => {
                                    setAnimatedValues(prev => ({
                                        ...prev,
                                        [stat.id]: value
                                    }));
                                });
                            }, index * 200); // Stagger animations
                        });
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, [isVisible]);

    return (
        <section ref={sectionRef} className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center space-x-3 mb-4">
                        <Icon name="TrendingUp" size={24} className="text-primary" />
                        <span className="text-primary font-semibold">Our Impact</span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                        Numbers That Speak
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Three decades of consistent growth, innovation, and excellence in steel supply.
                        These numbers reflect our commitment to quality and customer satisfaction.
                    </p>
                </div>

                {/* Statistics Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {statistics.map((stat, index) => (
                        <div
                            key={stat.id}
                            className={`bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-500 hover:-translate-y-2 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`}
                            style={{
                                transitionDelay: `${index * 100}ms`
                            }}
                        >
                            <div className="flex items-center justify-between mb-6">
                                <div className={`flex items-center justify-center w-16 h-16 ${stat.bgColor} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                                    <Icon name={stat.icon} size={28} className={stat.color} />
                                </div>
                                <div className="text-right">
                                    <div className="text-3xl lg:text-4xl font-bold text-foreground mb-1">
                                        {formatNumber(animatedValues[stat.id] || 0)}
                                        <span className={stat.color}>{stat.suffix}</span>
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        {stat.label}
                                    </div>
                                </div>
                            </div>

                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {stat.description}
                            </p>

                            {/* Progress Bar */}
                            <div className="mt-4 h-1 bg-muted/30 rounded-full overflow-hidden">
                                <div
                                    className={`h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-2000 ease-out ${isVisible ? 'w-full' : 'w-0'
                                        }`}
                                    style={{
                                        transitionDelay: `${index * 200 + 500}ms`
                                    }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Metrics */}
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-foreground mb-4">
                            Quality & Performance Metrics
                        </h3>
                        <p className="text-muted-foreground">
                            Key performance indicators that demonstrate our operational excellence
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="text-center p-4 bg-success/5 rounded-lg">
                            <div className="text-2xl font-bold text-success mb-2">99.8%</div>
                            <div className="text-sm font-medium text-foreground mb-1">Quality Rate</div>
                            <p className="text-xs text-muted-foreground">Products meeting specifications</p>
                        </div>

                        <div className="text-center p-4 bg-primary/5 rounded-lg">
                            <div className="text-2xl font-bold text-primary mb-2">98.5%</div>
                            <div className="text-sm font-medium text-foreground mb-1">On-Time Delivery</div>
                            <p className="text-xs text-muted-foreground">Orders delivered as scheduled</p>
                        </div>

                        <div className="text-center p-4 bg-warning/5 rounded-lg">
                            <div className="text-2xl font-bold text-warning mb-2">96%</div>
                            <div className="text-sm font-medium text-foreground mb-1">Customer Satisfaction</div>
                            <p className="text-xs text-muted-foreground">Client satisfaction rating</p>
                        </div>

                        <div className="text-center p-4 bg-accent/5 rounded-lg">
                            <div className="text-2xl font-bold text-accent mb-2">24/7</div>
                            <div className="text-sm font-medium text-foreground mb-1">Support Available</div>
                            <p className="text-xs text-muted-foreground">Round-the-clock assistance</p>
                        </div>
                    </div>
                </div>

                {/* Growth Timeline */}
                <div className="mt-16 text-center">
                    <h3 className="text-2xl font-bold text-foreground mb-8">
                        Our Growth Journey
                    </h3>

                    <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
                        <div className="flex items-center space-x-3">
                            <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
                                <Icon name="Calendar" size={20} className="text-primary" />
                            </div>
                            <div className="text-left">
                                <div className="text-lg font-bold text-foreground">1991</div>
                                <div className="text-sm text-muted-foreground">Founded</div>
                            </div>
                        </div>

                        <div className="hidden md:block w-8 h-0.5 bg-border"></div>

                        <div className="flex items-center space-x-3">
                            <div className="flex items-center justify-center w-12 h-12 bg-success/10 rounded-full">
                                <Icon name="TrendingUp" size={20} className="text-success" />
                            </div>
                            <div className="text-left">
                                <div className="text-lg font-bold text-foreground">2005</div>
                                <div className="text-sm text-muted-foreground">Major Expansion</div>
                            </div>
                        </div>

                        <div className="hidden md:block w-8 h-0.5 bg-border"></div>

                        <div className="flex items-center space-x-3">
                            <div className="flex items-center justify-center w-12 h-12 bg-warning/10 rounded-full">
                                <Icon name="Award" size={20} className="text-warning" />
                            </div>
                            <div className="text-left">
                                <div className="text-lg font-bold text-foreground">2018</div>
                                <div className="text-sm text-muted-foreground">ISO Certified</div>
                            </div>
                        </div>

                        <div className="hidden md:block w-8 h-0.5 bg-border"></div>

                        <div className="flex items-center space-x-3">
                            <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full">
                                <Icon name="Zap" size={20} className="text-accent" />
                            </div>
                            <div className="text-left">
                                <div className="text-lg font-bold text-foreground">2024</div>
                                <div className="text-sm text-muted-foreground">Digital Innovation</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompanyStatistics;