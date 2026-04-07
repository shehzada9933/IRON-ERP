import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProductCard = ({ product, viewMode = 'grid', onAddToQuote, onAddToCompare }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleAddToQuote = (e) => {
        e.preventDefault();
        e.stopPropagation();
        onAddToQuote(product);
    };

    const handleAddToCompare = (e) => {
        e.preventDefault();
        e.stopPropagation();
        onAddToCompare(product);
    };

    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2
        }).format(price);
    };

    if (viewMode === 'list') {
        return (
            <Link
                to="/product-detail"
                className="block bg-white border border-border rounded-lg hover:shadow-industrial-md transition-industrial group"
            >
                <div className="flex items-center p-4 space-x-4">
                    {/* Product Image */}
                    <div className="relative w-24 h-24 flex-shrink-0 bg-muted rounded-lg overflow-hidden">
                        <Image
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-industrial"
                            onLoad={() => setImageLoaded(true)}
                        />
                        {!imageLoaded && (
                            <div className="absolute inset-0 bg-muted animate-shimmer" />
                        )}
                        {product.has3DModel && (
                            <div className="absolute top-2 right-2 w-6 h-6 bg-primary/90 rounded-full flex items-center justify-center">
                                <Icon name="Box" size={12} color="white" />
                            </div>
                        )}
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                            <div className="flex-1">
                                <h3 className="font-semibold text-foreground group-hover:text-primary transition-industrial-fast line-clamp-1">
                                    {product.name}
                                </h3>
                                <p className="text-sm text-muted-foreground mt-1 line-clamp-1">
                                    {product.category} • {product.grade}
                                </p>
                                <div className="flex items-center space-x-4 mt-2">
                                    <span className="text-sm text-muted-foreground">
                                        Stock: <span className="font-medium text-success">{product.stock} tons</span>
                                    </span>
                                    <span className="text-sm text-muted-foreground">
                                        MOQ: {product.moq} tons
                                    </span>
                                </div>
                            </div>

                            <div className="text-right ml-4">
                                <div className="text-lg font-bold text-primary">
                                    {formatPrice(product.pricePerTon)}/ton
                                </div>
                                {product.originalPrice && (
                                    <div className="text-sm text-muted-foreground line-through">
                                        {formatPrice(product.originalPrice)}/ton
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Specifications */}
                        <div className="flex items-center space-x-4 mt-3 text-xs text-muted-foreground">
                            {product.specifications.slice(0, 3).map((spec, index) => (
                                <span key={index} className="flex items-center space-x-1">
                                    <Icon name="CheckCircle2" size={12} className="text-success" />
                                    <span>{spec}</span>
                                </span>
                            ))}
                        </div>

                        {/* Actions */}
                        <div className="flex items-center space-x-2 mt-3">
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={handleAddToQuote}
                                iconName="Calculator"
                                iconPosition="left"
                            >
                                Add to Quote
                            </Button>
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={handleAddToCompare}
                                iconName="GitCompare"
                            >
                                Compare
                            </Button>
                        </div>
                    </div>
                </div>
            </Link>
        );
    }

    return (
        <Link
            to="/product-detail"
            className="block bg-white border border-border rounded-lg hover:shadow-industrial-md transition-industrial group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Product Image */}
            <div className="relative aspect-square bg-muted rounded-t-lg overflow-hidden">
                <Image
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-industrial"
                    onLoad={() => setImageLoaded(true)}
                />

                {!imageLoaded && (
                    <div className="absolute inset-0 bg-muted animate-shimmer" />
                )}

                {/* 3D Model Badge */}
                {product.has3DModel && (
                    <div className="absolute top-3 left-3 px-2 py-1 bg-primary/90 text-white text-xs font-medium rounded-full flex items-center space-x-1">
                        <Icon name="Box" size={12} />
                        <span>3D</span>
                    </div>
                )}

                {/* Stock Status */}
                <div className="absolute top-3 right-3">
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${product.stock > 100
                            ? 'bg-success/90 text-white'
                            : product.stock > 0
                                ? 'bg-warning/90 text-white' : 'bg-error/90 text-white'
                        }`}>
                        {product.stock > 100 ? 'In Stock' : product.stock > 0 ? 'Low Stock' : 'Out of Stock'}
                    </div>
                </div>

                {/* Hover Overlay */}
                {isHovered && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-industrial">
                        <div className="flex items-center space-x-2">
                            <Button
                                variant="secondary"
                                size="sm"
                                onClick={handleAddToQuote}
                                iconName="Calculator"
                            >
                                Quote
                            </Button>
                            <Button
                                variant="secondary"
                                size="sm"
                                onClick={handleAddToCompare}
                                iconName="GitCompare"
                            >
                                Compare
                            </Button>
                        </div>
                    </div>
                )}
            </div>

            {/* Product Info */}
            <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-industrial-fast line-clamp-2">
                        {product.name}
                    </h3>
                </div>

                <p className="text-sm text-muted-foreground mb-3">
                    {product.category} • {product.grade}
                </p>

                {/* Key Specifications */}
                <div className="space-y-1 mb-3">
                    {product.specifications.slice(0, 2).map((spec, index) => (
                        <div key={index} className="flex items-center space-x-2 text-xs text-muted-foreground">
                            <Icon name="CheckCircle2" size={12} className="text-success" />
                            <span>{spec}</span>
                        </div>
                    ))}
                </div>

                {/* Price and Stock */}
                <div className="flex items-center justify-between mb-3">
                    <div>
                        <div className="text-lg font-bold text-primary">
                            {formatPrice(product.pricePerTon)}
                        </div>
                        <div className="text-xs text-muted-foreground">per ton</div>
                    </div>
                    <div className="text-right">
                        <div className="text-sm font-medium text-foreground">
                            {product.stock} tons
                        </div>
                        <div className="text-xs text-muted-foreground">available</div>
                    </div>
                </div>

                {/* MOQ */}
                <div className="text-xs text-muted-foreground mb-4">
                    Minimum Order: {product.moq} tons
                </div>

                {/* Action Buttons */}
                <div className="flex items-center space-x-2">
                    <Button
                        variant="outline"
                        size="sm"
                        fullWidth
                        onClick={handleAddToQuote}
                        iconName="Calculator"
                        iconPosition="left"
                    >
                        Add to Quote
                    </Button>
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={handleAddToCompare}
                        iconName="GitCompare"
                    >
                        <span className="sr-only">Compare</span>
                    </Button>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;