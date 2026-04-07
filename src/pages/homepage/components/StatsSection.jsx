import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const AnimatedCounter = ({ end, duration = 2, suffix = "", prefix = "" }) => {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.3 });

    useEffect(() => {
        if (isInView && !hasAnimated) {
            setHasAnimated(true);
            let startTime;
            const animate = (currentTime) => {
                if (!startTime) startTime = currentTime;
                const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);

                const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                setCount(Math.floor(easeOutQuart * end));

                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };
            requestAnimationFrame(animate);
        }
    }, [isInView, end, duration, hasAnimated]);

    return (
        <span ref={ref} className="font-bold text-4xl md:text-5xl text-primary">
            {prefix}{count.toLocaleString()}{suffix}
        </span>
    );
};

const StatsSection = () => {
    const statsData = [
        {
            id: 1,
            icon: "Calendar",
            value: 28,
            suffix: "+",
            label: "Years of Experience",
            description: "Serving the steel industry since 1995"
        },
        {
            id: 2,
            icon: "Weight",
            value: 500000,
            suffix: "+",
            label: "Tons Supplied",
            description: "Quality steel delivered nationwide"
        },
        {
            id: 3,
            icon: "Users",
            value: 2500,
            suffix: "+",
            label: "Trusted Clients",
            description: "Building lasting partnerships"
        },
        {
            id: 4,
            icon: "MapPin",
            value: 15,
            suffix: "+",
            label: "Cities Served",
            description: "Pan-India delivery network"
        }
    ];

    return (
        <section className="py-20 bg-muted/30">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                        Trusted by Industry Leaders
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Our commitment to quality and reliability has made us the preferred steel supplier
                        for construction companies, manufacturers, and contractors across India.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {statsData.map((stat, index) => (
                        <motion.div
                            key={stat.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="text-center group"
                        >
                            <div className="bg-white rounded-2xl p-8 shadow-industrial-md hover:shadow-industrial-lg transition-industrial group-hover:scale-105">
                                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-6 group-hover:bg-primary/20 transition-industrial">
                                    <Icon
                                        name={stat.icon}
                                        size={32}
                                        className="text-primary"
                                    />
                                </div>

                                <div className="mb-4">
                                    <AnimatedCounter
                                        end={stat.value}
                                        suffix={stat.suffix}
                                        duration={2.5}
                                    />
                                </div>

                                <h3 className="text-lg font-semibold text-foreground mb-2">
                                    {stat.label}
                                </h3>

                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {stat.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Trust Indicators */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <div className="flex flex-wrap items-center justify-center gap-8 text-muted-foreground">
                        <div className="flex items-center space-x-2">
                            <Icon name="Award" size={20} className="text-success" />
                            <span className="font-medium">Quality Assured</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Icon name="Zap" size={20} className="text-warning" />
                            <span className="font-medium">Fast Delivery</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Icon name="Shield" size={20} className="text-primary" />
                            <span className="font-medium">Certified Supplier</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Icon name="Headphones" size={20} className="text-accent" />
                            <span className="font-medium">24/7 Support</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default StatsSection;