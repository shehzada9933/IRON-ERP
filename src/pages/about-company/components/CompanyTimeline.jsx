import React, { useState, useEffect, useRef } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CompanyTimeline = () => {
    const [visibleItems, setVisibleItems] = useState(new Set());
    const timelineRef = useRef(null);

    const timelineData = [
        {
            id: 1,
            year: "1991",
            title: "Foundation & Early Years",
            description: "DSM UDHYOG was established with a vision to provide quality steel products to the growing construction industry. Started with a small facility and 10 dedicated employees.",
            image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg",
            achievements: ["Initial setup with 500 tons monthly capacity", "First major contract with local builders", "Quality certification process initiated"]
        },
        {
            id: 2,
            year: "1998",
            title: "Expansion & Growth",
            description: "Expanded operations with new machinery and increased production capacity. Established strong relationships with major steel manufacturers and suppliers.",
            image: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg",
            achievements: ["Production capacity increased to 2,000 tons/month", "Expanded team to 50+ employees", "Introduced quality control systems"]
        },
        {
            id: 3,
            year: "2005",
            title: "Technology Integration",
            description: "Invested in modern technology and automated systems to improve efficiency and product quality. Implemented ERP systems for better inventory management.",
            image: "https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg",
            achievements: ["Automated cutting and processing systems", "ERP implementation for inventory management", "ISO 9001:2000 certification achieved"]
        },
        {
            id: 4,
            year: "2012",
            title: "Market Leadership",
            description: "Became one of the leading steel suppliers in the region. Expanded client base to include major construction companies and infrastructure projects.",
            image: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg",
            achievements: ["5,000+ tons monthly capacity", "200+ regular clients", "Regional market leadership achieved"]
        },
        {
            id: 5,
            year: "2018",
            title: "Digital Transformation",
            description: "Embraced digital transformation with online ordering systems, digital inventory tracking, and customer portal development for enhanced service delivery.",
            image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg",
            achievements: ["Online ordering platform launched", "Digital inventory tracking system", "Customer portal development"]
        },
        {
            id: 6,
            year: "2024",
            title: "Sustainable Future",
            description: "Committed to sustainable practices and environmental responsibility. Implementing green technologies and eco-friendly processes for a better tomorrow.",
            image: "https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg",
            achievements: ["Green technology implementation", "Environmental compliance certification", "Sustainable supply chain development"]
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const itemId = parseInt(entry.target.dataset.timelineId);
                        setVisibleItems(prev => new Set([...prev, itemId]));
                    }
                });
            },
            { threshold: 0.3 }
        );

        const timelineItems = document.querySelectorAll('[data-timeline-id]');
        timelineItems.forEach(item => observer.observe(item));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center space-x-3 mb-4">
                        <Icon name="Clock" size={24} className="text-primary" />
                        <span className="text-primary font-semibold">Our Journey</span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                        Three Decades of Excellence
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        From humble beginnings to industry leadership, discover the milestones that shaped DSM UDHYOG into the trusted steel supplier we are today.
                    </p>
                </div>

                <div ref={timelineRef} className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-border h-full hidden lg:block"></div>

                    <div className="space-y-16 lg:space-y-24">
                        {timelineData.map((item, index) => (
                            <div
                                key={item.id}
                                data-timeline-id={item.id}
                                className={`relative transition-all duration-700 ${visibleItems.has(item.id)
                                    ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                    }`}
                            >
                                {/* Desktop Layout */}
                                <div className="hidden lg:flex items-center">
                                    {index % 2 === 0 ? (
                                        <>
                                            {/* Left Content */}
                                            <div className="w-1/2 pr-12">
                                                <div className="text-right">
                                                    <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
                                                        <Icon name="Calendar" size={16} className="text-primary" />
                                                        <span className="text-primary font-bold text-lg">{item.year}</span>
                                                    </div>
                                                    <h3 className="text-2xl font-bold text-foreground mb-3">{item.title}</h3>
                                                    <p className="text-muted-foreground mb-4 leading-relaxed">{item.description}</p>
                                                    <div className="space-y-2">
                                                        {item.achievements.map((achievement, idx) => (
                                                            <div key={idx} className="flex items-center justify-end space-x-2">
                                                                <span className="text-sm text-muted-foreground">{achievement}</span>
                                                                <Icon name="CheckCircle" size={16} className="text-success" />
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Center Timeline Dot */}
                                            <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-primary rounded-full border-4 border-background shadow-lg">
                                                <Icon name="Zap" size={20} color="white" />
                                            </div>

                                            {/* Right Image */}
                                            <div className="w-1/2 pl-12">
                                                <div className="relative overflow-hidden rounded-xl shadow-lg">
                                                    <Image
                                                        src={item.image}
                                                        alt={`${item.title} - ${item.year}`}
                                                        className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            {/* Left Image */}
                                            <div className="w-1/2 pr-12">
                                                <div className="relative overflow-hidden rounded-xl shadow-lg">
                                                    <Image
                                                        src={item.image}
                                                        alt={`${item.title} - ${item.year}`}
                                                        className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                                </div>
                                            </div>

                                            {/* Center Timeline Dot */}
                                            <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-primary rounded-full border-4 border-background shadow-lg">
                                                <Icon name="Zap" size={20} color="white" />
                                            </div>

                                            {/* Right Content */}
                                            <div className="w-1/2 pl-12">
                                                <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
                                                    <Icon name="Calendar" size={16} className="text-primary" />
                                                    <span className="text-primary font-bold text-lg">{item.year}</span>
                                                </div>
                                                <h3 className="text-2xl font-bold text-foreground mb-3">{item.title}</h3>
                                                <p className="text-muted-foreground mb-4 leading-relaxed">{item.description}</p>
                                                <div className="space-y-2">
                                                    {item.achievements.map((achievement, idx) => (
                                                        <div key={idx} className="flex items-center space-x-2">
                                                            <Icon name="CheckCircle" size={16} className="text-success" />
                                                            <span className="text-sm text-muted-foreground">{achievement}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>

                                {/* Mobile Layout */}
                                <div className="lg:hidden">
                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 bg-primary rounded-full">
                                            <Icon name="Zap" size={16} color="white" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="inline-flex items-center space-x-2 bg-primary/10 px-3 py-1 rounded-full mb-3">
                                                <Icon name="Calendar" size={14} className="text-primary" />
                                                <span className="text-primary font-bold">{item.year}</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                                            <div className="relative overflow-hidden rounded-lg mb-3">
                                                <Image
                                                    src={item.image}
                                                    alt={`${item.title} - ${item.year}`}
                                                    className="w-full h-48 object-cover"
                                                />
                                            </div>
                                            <p className="text-muted-foreground mb-3 text-sm leading-relaxed">{item.description}</p>
                                            <div className="space-y-1">
                                                {item.achievements.map((achievement, idx) => (
                                                    <div key={idx} className="flex items-center space-x-2">
                                                        <Icon name="CheckCircle" size={14} className="text-success" />
                                                        <span className="text-xs text-muted-foreground">{achievement}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompanyTimeline;