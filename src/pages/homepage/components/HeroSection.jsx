import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

// 3D Steel Beam Component
const SteelBeam = ({ position, rotation, scale = 1 }) => {
    const meshRef = useRef();

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.005;
            meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.1;
        }
    });

    return (
        <mesh ref={meshRef} position={position} rotation={rotation} scale={scale}>
            <boxGeometry args={[2, 0.3, 0.3]} />
            <meshStandardMaterial color="#34495E" metalness={0.8} roughness={0.2} />
        </mesh>
    );
};

// 3D Steel Rod Component
const SteelRod = ({ position, rotation, scale = 1 }) => {
    const meshRef = useRef();

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.z += 0.01;
            meshRef.current.position.x = position[0] + Math.cos(state.clock.elapsedTime * 0.5) * 0.2;
        }
    });

    return (
        <mesh ref={meshRef} position={position} rotation={rotation} scale={scale}>
            <cylinderGeometry args={[0.1, 0.1, 3, 16]} />
            <meshStandardMaterial color="#2C3E50" metalness={0.9} roughness={0.1} />
        </mesh>
    );
};

// 3D Scene Component
const SteelScene = () => {
    return (
        <>
            <ambientLight intensity={0.4} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <pointLight position={[-10, -10, -5]} intensity={0.5} />

            <SteelBeam position={[-2, 0, 0]} rotation={[0, 0, 0]} />
            <SteelBeam position={[2, 1, -1]} rotation={[0, Math.PI / 4, 0]} scale={0.8} />
            <SteelRod position={[0, -1, 1]} rotation={[0, 0, Math.PI / 4]} />
            <SteelRod position={[3, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.7} />

            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </>
    );
};

const HeroSection = () => {
    const [isWebGLSupported, setIsWebGLSupported] = useState(true);

    useEffect(() => {
        // Check WebGL support
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        setIsWebGLSupported(!!gl);
    }, []);

    const handleQuoteRequest = () => {
        window.location.href = '/quote-request';
    };

    const handleExploreProducts = () => {
        window.location.href = '/product-catalog';
    };

    return (
        <section className="relative min-h-screen bg-gradient-to-br from-background via-muted to-background overflow-hidden">
            {/* 3D Background */}
            <div className="absolute inset-0 z-0">
                {isWebGLSupported ? (
                    <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
                        <SteelScene />
                    </Canvas>
                ) : (
                    <div className="w-full h-full bg-steel-gradient opacity-20" />
                )}
            </div>

            {/* Overlay Content */}
            <div className="relative z-10 flex items-center justify-center min-h-screen">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-8"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
                            Your Trusted Partner in
                            <span className="block text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                Quality Steel Supply
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
                            Premium steel products for construction, manufacturing, and industrial applications.
                            Delivering excellence with every order since 1995.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
                    >
                        <Button
                            variant="default"
                            size="lg"
                            iconName="Calculator"
                            iconPosition="left"
                            onClick={handleQuoteRequest}
                            className="w-full sm:w-auto"
                        >
                            Request Quote
                        </Button>

                        <Button
                            variant="outline"
                            size="lg"
                            iconName="Package"
                            iconPosition="left"
                            onClick={handleExploreProducts}
                            className="w-full sm:w-auto"
                        >
                            Explore Products
                        </Button>
                    </motion.div>

                    {/* Trust Indicators */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground"
                    >
                        <div className="flex items-center space-x-2">
                            <Icon name="Shield" size={16} className="text-success" />
                            <span>ISO 9001:2015 Certified</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Icon name="Truck" size={16} className="text-primary" />
                            <span>Pan-India Delivery</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Icon name="Clock" size={16} className="text-warning" />
                            <span>24/7 Support</span>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
            >
                <div className="flex flex-col items-center space-y-2 text-muted-foreground">
                    <span className="text-sm">Scroll to explore</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        <Icon name="ChevronDown" size={20} />
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default HeroSection;