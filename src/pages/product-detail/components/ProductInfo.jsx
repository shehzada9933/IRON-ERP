import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ProductInfo = ({ product }) => {
    const [quantity, setQuantity] = useState(1);
    const [selectedLength, setSelectedLength] = useState('6m');
    const [selectedFinish, setSelectedFinish] = useState('mill-scale');

    const productData = {
        name: "Steel I-Beam ISMB 200",
        sku: "ISMB-200-100-25.4",
        category: "Structural Steel",
        basePrice: 65.50,
        currency: "USD",
        unit: "per meter",
        availability: "In Stock",
        leadTime: "2-3 days",
        minOrderQty: 100,
        rating: 4.8,
        reviewCount: 156
    };

    const lengthOptions = [
        { value: '6m', label: '6 meters', price: 65.50 },
        { value: '9m', label: '9 meters', price: 64.80 },
        { value: '12m', label: '12 meters', price: 64.20 },
        { value: 'custom', label: 'Custom Length', price: 66.00 }
    ];

    const finishOptions = [
        { value: 'mill-scale', label: 'Mill Scale (Standard)', price: 0 },
        { value: 'primer', label: 'Red Oxide Primer', price: 2.50 },
        { value: 'galvanized', label: 'Hot Dip Galvanized', price: 8.75 },
        { value: 'painted', label: 'Painted Finish', price: 5.25 }
    ];

    const calculatePrice = () => {
        const lengthPrice = lengthOptions.find(l => l.value === selectedLength)?.price || productData.basePrice;
        const finishPrice = finishOptions.find(f => f.value === selectedFinish)?.price || 0;
        return (lengthPrice + finishPrice) * quantity;
    };

    const getBulkDiscount = () => {
        if (quantity >= 1000) return 8;
        if (quantity >= 500) return 5;
        if (quantity >= 200) return 3;
        return 0;
    };

    const handleAddToQuote = () => {
        const quoteItem = {
            product: productData,
            quantity,
            length: selectedLength,
            finish: selectedFinish,
            unitPrice: calculatePrice() / quantity,
            totalPrice: calculatePrice(),
            timestamp: new Date().toISOString()
        };

        // Store in localStorage for quote form
        const existingQuote = JSON.parse(localStorage.getItem('quoteItems') || '[]');
        existingQuote.push(quoteItem);
        localStorage.setItem('quoteItems', JSON.stringify(existingQuote));

        // Show success feedback
        alert('Product added to quote request!');
    };

    return (
        <div className="space-y-6">
            {/* Product Header */}
            <div className="space-y-3">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <span>{productData.category}</span>
                    <Icon name="ChevronRight" size={12} />
                    <span>SKU: {productData.sku}</span>
                </div>

                <h1 className="text-2xl lg:text-3xl font-bold text-foreground">
                    {productData.name}
                </h1>

                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                            <Icon
                                key={i}
                                name="Star"
                                size={16}
                                className={i < Math.floor(productData.rating) ? 'text-warning fill-current' : 'text-muted-foreground'}
                            />
                        ))}
                        <span className="text-sm text-muted-foreground ml-2">
                            {productData.rating} ({productData.reviewCount} reviews)
                        </span>
                    </div>
                </div>
            </div>

            {/* Pricing */}
            <div className="space-y-4 p-4 bg-muted/30 rounded-lg">
                <div className="flex items-baseline space-x-2">
                    <span className="text-3xl font-bold text-foreground">
                        ${calculatePrice().toFixed(2)}
                    </span>
                    <span className="text-sm text-muted-foreground">
                        (${(calculatePrice() / quantity).toFixed(2)} {productData.unit})
                    </span>
                </div>

                {getBulkDiscount() > 0 && (
                    <div className="flex items-center space-x-2 text-sm text-success">
                        <Icon name="Tag" size={14} />
                        <span>Bulk discount: {getBulkDiscount()}% off</span>
                    </div>
                )}

                <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-2">
                        <Icon name="Package" size={14} className="text-success" />
                        <span className="text-success font-medium">{productData.availability}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Icon name="Clock" size={14} className="text-muted-foreground" />
                        <span className="text-muted-foreground">Lead time: {productData.leadTime}</span>
                    </div>
                </div>
            </div>

            {/* Product Options */}
            <div className="space-y-4">
                <div>
                    <Select
                        label="Length"
                        options={lengthOptions}
                        value={selectedLength}
                        onChange={setSelectedLength}
                    />
                </div>

                <div>
                    <Select
                        label="Finish"
                        options={finishOptions}
                        value={selectedFinish}
                        onChange={setSelectedFinish}
                    />
                </div>

                <div>
                    <Input
                        label="Quantity (meters)"
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                        min={productData.minOrderQty}
                        description={`Minimum order: ${productData.minOrderQty} meters`}
                    />
                </div>
            </div>

            {/* Key Features */}
            <div className="space-y-3">
                <h3 className="font-semibold text-foreground">Key Features</h3>
                <ul className="space-y-2">
                    {[
                        'IS 2062 Grade steel with superior strength',
                        'Precision rolled for consistent dimensions',
                        'Suitable for heavy structural applications',
                        'Available in multiple lengths and finishes',
                        'Mill test certificates provided'
                    ].map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <Icon name="Check" size={14} className="text-success" />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
                <Button
                    variant="default"
                    fullWidth
                    iconName="Calculator"
                    iconPosition="left"
                    onClick={handleAddToQuote}
                    disabled={quantity < productData.minOrderQty}
                >
                    Add to Quote Request
                </Button>

                <div className="grid grid-cols-2 gap-3">
                    <Button
                        variant="outline"
                        iconName="Phone"
                        iconPosition="left"
                        onClick={() => window.location.href = '/contact'}
                    >
                        Call for Price
                    </Button>
                    <Button
                        variant="outline"
                        iconName="MessageCircle"
                        iconPosition="left"
                        onClick={() => { }}
                    >
                        WhatsApp
                    </Button>
                </div>
            </div>

            {/* Additional Info */}
            <div className="pt-4 border-t border-border space-y-3">
                <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Free shipping on orders over $5,000</span>
                    <Icon name="Truck" size={16} className="text-primary" />
                </div>
                <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">30-day return policy</span>
                    <Icon name="RotateCcw" size={16} className="text-primary" />
                </div>
                <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Quality guaranteed</span>
                    <Icon name="Shield" size={16} className="text-primary" />
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;