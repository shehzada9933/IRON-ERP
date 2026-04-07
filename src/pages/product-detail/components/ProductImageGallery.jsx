import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const ProductImageGallery = ({ product }) => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [isZoomed, setIsZoomed] = useState(false);

    const productImages = [
        {
            id: 1,
            url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop",
            alt: "Steel I-Beam main view",
            type: "main"
        },
        {
            id: 2,
            url: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
            alt: "Steel I-Beam cross section",
            type: "detail"
        },
        {
            id: 3,
            url: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&h=600&fit=crop",
            alt: "Steel I-Beam application",
            type: "application"
        },
        {
            id: 4,
            url: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=800&h=600&fit=crop",
            alt: "Steel I-Beam dimensions",
            type: "technical"
        }
    ];

    const handleImageSelect = (index) => {
        setSelectedImageIndex(index);
        setIsZoomed(false);
    };

    const handleZoomToggle = () => {
        setIsZoomed(!isZoomed);
    };

    const handlePrevious = () => {
        setSelectedImageIndex((prev) =>
            prev === 0 ? productImages.length - 1 : prev - 1
        );
    };

    const handleNext = () => {
        setSelectedImageIndex((prev) =>
            prev === productImages.length - 1 ? 0 : prev + 1
        );
    };

    return (
        <div className="space-y-4">
            {/* Main Image Display */}
            <div className="relative bg-muted rounded-lg overflow-hidden aspect-square">
                <Image
                    src={productImages[selectedImageIndex].url}
                    alt={productImages[selectedImageIndex].alt}
                    className={`w-full h-full object-cover transition-transform duration-300 ${isZoomed ? 'scale-150 cursor-zoom-out' : 'cursor-zoom-in'
                        }`}
                    onClick={handleZoomToggle}
                />

                {/* Navigation Arrows */}
                <button
                    onClick={handlePrevious}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-industrial"
                    aria-label="Previous image"
                >
                    <Icon name="ChevronLeft" size={20} className="text-foreground" />
                </button>

                <button
                    onClick={handleNext}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-industrial"
                    aria-label="Next image"
                >
                    <Icon name="ChevronRight" size={20} className="text-foreground" />
                </button>

                {/* Zoom Indicator */}
                <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-xs">
                    {isZoomed ? 'Click to zoom out' : 'Click to zoom in'}
                </div>

                {/* Image Counter */}
                <div className="absolute bottom-4 left-4 bg-black/50 text-white px-2 py-1 rounded text-xs">
                    {selectedImageIndex + 1} / {productImages.length}
                </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-2">
                {productImages.map((image, index) => (
                    <button
                        key={image.id}
                        onClick={() => handleImageSelect(index)}
                        className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-industrial ${selectedImageIndex === index
                                ? 'border-primary shadow-md'
                                : 'border-border hover:border-primary/50'
                            }`}
                    >
                        <Image
                            src={image.url}
                            alt={image.alt}
                            className="w-full h-full object-cover"
                        />
                        {selectedImageIndex === index && (
                            <div className="absolute inset-0 bg-primary/10" />
                        )}
                    </button>
                ))}
            </div>

            {/* Image Type Indicators */}
            <div className="flex flex-wrap gap-2">
                {productImages.map((image, index) => (
                    <button
                        key={`indicator-${image.id}`}
                        onClick={() => handleImageSelect(index)}
                        className={`px-3 py-1 rounded-full text-xs font-medium transition-industrial ${selectedImageIndex === index
                                ? 'bg-primary text-primary-foreground'
                                : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
                            }`}
                    >
                        {image.type === 'main' && 'Main View'}
                        {image.type === 'detail' && 'Detail'}
                        {image.type === 'application' && 'Application'}
                        {image.type === 'technical' && 'Technical'}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ProductImageGallery;