import React, { useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

// 3D Product Models
const SteelRod3D = () => {
    const meshRef = useRef();

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
        }
    });

    return (
        <mesh ref={meshRef}>
            <cylinderGeometry args={[0.3, 0.3, 4, 16]} />
            <meshStandardMaterial color="#2C3E50" metalness={0.9} roughness={0.1} />
        </mesh>
    );
};

const SteelBeam3D = () => {
    const meshRef = useRef();

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
        }
    });

    return (
        <mesh ref={meshRef}>
            <boxGeometry args={[4, 0.5, 0.5]} />
            <meshStandardMaterial color="#34495E" metalness={0.8} roughness={0.2} />
        </mesh>
    );
};

const SteelSheet3D = () => {
    const meshRef = useRef();

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y = state.clock.elapsedTime * 0.4;
        }
    });

    return (
        <mesh ref={meshRef}>
            <boxGeometry args={[3, 0.1, 2]} />
            <meshStandardMaterial color="#2C3E50" metalness={0.7} roughness={0.3} />
        </mesh>
    );
};

const CustomFab3D = () => {
    const meshRef = useRef();

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y = state.clock.elapsedTime * 0.6;
        }
    });

    return (
        <group ref={meshRef}>
            <mesh position={[0, 0, 0]}>
                <boxGeometry args={[2, 2, 0.2]} />
                <meshStandardMaterial color="#34495E" metalness={0.8} roughness={0.2} />
            </mesh>
            <mesh position={[0, 0, 1]}>
                <cylinderGeometry args={[0.2, 0.2, 2, 8]} />
                <meshStandardMaterial color="#2C3E50" metalness={0.9} roughness={0.1} />
            </mesh>
        </group>
    );
};

const Product3DViewer = ({ productType, className = "" }) => {
    const renderProduct = () => {
        switch (productType) {
            case 'rods':
                return <SteelRod3D />;
            case 'beams':
                return <SteelBeam3D />;
            case 'sheets':
                return <SteelSheet3D />;
            case 'custom':
                return <CustomFab3D />;
            default:
                return <SteelRod3D />;
        }
    };

    return (
        <div className={`w-full h-48 ${className}`}>
            <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <pointLight position={[-10, -10, -5]} intensity={0.3} />
                {renderProduct()}
                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={2} />
            </Canvas>
        </div>
    );
};

const ProductCard = ({ product, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [show3D, setShow3D] = useState(false);

    const handleViewDetails = () => {
        localStorage.setItem('selectedProduct', JSON.stringify(product));
        window.location.href = '/product-detail';
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="bg-white rounded-2xl overflow-hidden shadow-industrial-md hover:shadow-industrial-lg transition-industrial group-hover:scale-105">
                {/* Product Image/3D Viewer */}
                <div className="relative h-64 bg-muted/20 overflow-hidden">
                    {show3D ? (
                        <Product3DViewer productType={product.type} />
                    ) : (
                        <Image
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover transition-industrial group-hover:scale-110"
                        />
                    )}

                    {/* 3D Toggle Button */}
                    <button
                        onClick={() => setShow3D(!show3D)}
                        className="absolute top-4 right-4 flex items-center justify-center w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:bg-white transition-industrial"
                    >
                        <Icon
                            name={show3D ? "Image" : "Box"}
                            size={16}
                            className="text-primary"
                        />
                    </button>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-primary/90 text-white text-xs font-medium rounded-full">
                            {product.category}
                        </span>
                    </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-industrial">
                        {product.name}
                    </h3>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                        {product.description}
                    </p>

                    {/* Specifications */}
                    <div className="space-y-2 mb-6">
                        {product.specifications.map((spec, idx) => (
                            <div key={idx} className="flex items-center space-x-2 text-sm">
                                <Icon name="Check" size={14} className="text-success" />
                                <span className="text-muted-foreground">{spec}</span>
                            </div>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between">
                        <div className="text-sm text-muted-foreground">
                            <span className="font-medium text-primary">₹{product.priceRange}</span>
                            <span className="ml-1">per {product.unit}</span>
                        </div>

                        <Button
                            variant="outline"
                            size="sm"
                            iconName="ArrowRight"
                            iconPosition="right"
                            onClick={handleViewDetails}
                        >
                            View Details
                        </Button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const ProductShowcase = () => {
    const productsData = [
        {
            id: 1,
            type: 'rods',
            name: "TMT Steel Rods",
            category: "Reinforcement",
            description: "High-strength TMT bars for construction reinforcement with superior bendability and weldability.",
            image: "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg",
            specifications: [
                "Grade: Fe500 & Fe550",
                "Size: 8mm to 32mm",
                "Length: 12m standard"
            ],
            priceRange: "45,000-52,000",
            unit: "ton"
        },
        {
            id: 2,
            type: 'beams',
            name: "Steel I-Beams",
            category: "Structural",
            description: "Premium quality I-beams for structural applications with excellent load-bearing capacity.",
            image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg",
            specifications: [
                "Standard: IS 808",
                "Size: 100mm to 600mm",
                "Length: Up to 12m"
            ],
            priceRange: "48,000-55,000",
            unit: "ton"
        },
        {
            id: 3,
            type: 'sheets',
            name: "Steel Sheets",
            category: "Flat Products",
            description: "High-quality steel sheets for industrial and construction applications with precise dimensions.",
            image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg",
            specifications: [
                "Thickness: 1mm to 25mm",
                "Width: Up to 2000mm",
                "Grade: IS 2062"
            ],
            priceRange: "50,000-58,000",
            unit: "ton"
        },
        {
            id: 4,
            type: 'custom',
            name: "Custom Fabrication",
            category: "Fabricated",
            description: "Tailored steel fabrication services for specialized industrial and construction requirements.",
            image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg",
            specifications: [
                "Custom designs",
                "Precision cutting",
                "Quality welding"
            ],
            priceRange: "Contact",
            unit: "project"
        }
    ];

    const handleViewAllProducts = () => {
        window.location.href = '/product-catalog';
    };

    return (
        <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                        Premium Steel Products
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                        Discover our comprehensive range of high-quality steel products,
                        engineered for durability and performance in every application.
                    </p>

                    <Button
                        variant="outline"
                        iconName="Package"
                        iconPosition="left"
                        onClick={handleViewAllProducts}
                    >
                        View All Products
                    </Button>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {productsData.map((product, index) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            index={index}
                        />
                    ))}
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <div className="bg-steel-gradient rounded-2xl p-8 text-white">
                        <h3 className="text-2xl font-bold mb-4">
                            Need Custom Steel Solutions?
                        </h3>
                        <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                            Our expert team can provide tailored steel products and fabrication services
                            to meet your specific project requirements.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button
                                variant="secondary"
                                size="lg"
                                iconName="Calculator"
                                iconPosition="left"
                                onClick={() => window.location.href = '/quote-request'}
                            >
                                Get Custom Quote
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                iconName="Phone"
                                iconPosition="left"
                                onClick={() => window.location.href = '/contact'}
                                className="border-white/70 text-white bg-white/10 hover:bg-white hover:text-primary"
                            >
                                Speak to Expert
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ProductShowcase;