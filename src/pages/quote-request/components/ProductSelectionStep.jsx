import React, { useState } from 'react';
import Select from '../../../components/ui/Select';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ProductSelectionStep = ({ formData, updateFormData, onNext }) => {
    const [selectedProducts, setSelectedProducts] = useState(formData.products || []);

    const productCategories = [
        { value: 'structural', label: 'Structural Steel' },
        { value: 'reinforcement', label: 'Reinforcement Bars' },
        { value: 'plates', label: 'Steel Plates' },
        { value: 'pipes', label: 'Steel Pipes & Tubes' },
        { value: 'sheets', label: 'Steel Sheets' },
        { value: 'angles', label: 'Steel Angles' },
        { value: 'channels', label: 'Steel Channels' },
        { value: 'custom', label: 'Custom Fabrication' }
    ];

    const steelProducts = [
        {
            id: 'beam-i-200',
            name: 'I-Beam 200mm',
            category: 'structural',
            image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400',
            specifications: 'IS 2062, Grade Fe410',
            unitOptions: ['Meters', 'Pieces', 'Tons']
        },
        {
            id: 'tmt-fe500',
            name: 'TMT Bars Fe500',
            category: 'reinforcement',
            image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400',
            specifications: '8mm to 32mm diameter',
            unitOptions: ['Meters', 'Pieces', 'Tons']
        },
        {
            id: 'plate-ms-10mm',
            name: 'MS Plate 10mm',
            category: 'plates',
            image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=400',
            specifications: 'Thickness: 6-50mm',
            unitOptions: ['Square Meters', 'Pieces', 'Tons']
        },
        {
            id: 'pipe-seamless',
            name: 'Seamless Steel Pipe',
            category: 'pipes',
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
            specifications: 'ASTM A106, Grade B',
            unitOptions: ['Meters', 'Pieces', 'Tons']
        }
    ];

    const addProduct = () => {
        const newProduct = {
            id: Date.now(),
            productId: '',
            quantity: '',
            unit: 'Pieces',
            dimensions: {
                length: '',
                width: '',
                thickness: ''
            },
            specifications: ''
        };
        setSelectedProducts([...selectedProducts, newProduct]);
    };

    const removeProduct = (index) => {
        const updated = selectedProducts.filter((_, i) => i !== index);
        setSelectedProducts(updated);
        updateFormData({ products: updated });
    };

    const updateProduct = (index, field, value) => {
        const updated = selectedProducts.map((product, i) =>
            i === index ? { ...product, [field]: value } : product
        );
        setSelectedProducts(updated);
        updateFormData({ products: updated });
    };

    const updateProductDimensions = (index, dimension, value) => {
        const updated = selectedProducts.map((product, i) =>
            i === index
                ? { ...product, dimensions: { ...product.dimensions, [dimension]: value } }
                : product
        );
        setSelectedProducts(updated);
        updateFormData({ products: updated });
    };

    const getProductOptions = () => {
        return steelProducts.map(product => ({
            value: product.id,
            label: product.name,
            description: product.specifications
        }));
    };

    const getSelectedProductDetails = (productId) => {
        return steelProducts.find(p => p.id === productId);
    };

    const handleNext = () => {
        if (selectedProducts.length > 0 && selectedProducts.every(p => p.productId && p.quantity)) {
            onNext();
        }
    };

    const isFormValid = selectedProducts.length > 0 &&
        selectedProducts.every(p => p.productId && p.quantity);

    return (
        <div className="space-y-6">
            <div className="bg-white rounded-lg border border-border p-6">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h3 className="text-lg font-semibold text-foreground">Product Selection</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                            Select the steel products you need for your project
                        </p>
                    </div>
                    <Button
                        variant="outline"
                        size="sm"
                        iconName="Plus"
                        iconPosition="left"
                        onClick={addProduct}
                    >
                        Add Product
                    </Button>
                </div>

                {selectedProducts.length === 0 ? (
                    <div className="text-center py-12 border-2 border-dashed border-border rounded-lg">
                        <div className="flex items-center justify-center w-16 h-16 bg-muted rounded-full mx-auto mb-4">
                            <Icon name="Package" size={24} className="text-muted-foreground" />
                        </div>
                        <h4 className="text-lg font-medium text-foreground mb-2">No Products Selected</h4>
                        <p className="text-muted-foreground mb-4">
                            Add steel products to your quote request
                        </p>
                        <Button
                            variant="default"
                            iconName="Plus"
                            iconPosition="left"
                            onClick={addProduct}
                        >
                            Add First Product
                        </Button>
                    </div>
                ) : (
                    <div className="space-y-6">
                        {selectedProducts.map((product, index) => {
                            const productDetails = getSelectedProductDetails(product.productId);

                            return (
                                <div key={product.id} className="border border-border rounded-lg p-6 bg-muted/30">
                                    <div className="flex items-start justify-between mb-4">
                                        <h4 className="font-medium text-foreground">Product #{index + 1}</h4>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            iconName="Trash2"
                                            onClick={() => removeProduct(index)}
                                            className="text-destructive hover:text-destructive"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                        <div className="space-y-4">
                                            <Select
                                                label="Steel Product"
                                                placeholder="Select a product"
                                                options={getProductOptions()}
                                                value={product.productId}
                                                onChange={(value) => updateProduct(index, 'productId', value)}
                                                searchable
                                                required
                                            />

                                            {productDetails && (
                                                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg border border-border">
                                                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-muted">
                                                        <Image
                                                            src={productDetails.image}
                                                            alt={productDetails.name}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                    <div className="flex-1">
                                                        <h5 className="font-medium text-foreground">{productDetails.name}</h5>
                                                        <p className="text-sm text-muted-foreground">{productDetails.specifications}</p>
                                                    </div>
                                                </div>
                                            )}

                                            <div className="grid grid-cols-2 gap-4">
                                                <Input
                                                    label="Quantity"
                                                    type="number"
                                                    placeholder="Enter quantity"
                                                    value={product.quantity}
                                                    onChange={(e) => updateProduct(index, 'quantity', e.target.value)}
                                                    required
                                                />
                                                <Select
                                                    label="Unit"
                                                    options={productDetails ?
                                                        productDetails.unitOptions.map(unit => ({ value: unit, label: unit })) :
                                                        [{ value: 'Pieces', label: 'Pieces' }]
                                                    }
                                                    value={product.unit}
                                                    onChange={(value) => updateProduct(index, 'unit', value)}
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <div>
                                                <label className="block text-sm font-medium text-foreground mb-3">
                                                    Dimensions (Optional)
                                                </label>
                                                <div className="grid grid-cols-3 gap-3">
                                                    <Input
                                                        label="Length"
                                                        type="number"
                                                        placeholder="mm"
                                                        value={product.dimensions.length}
                                                        onChange={(e) => updateProductDimensions(index, 'length', e.target.value)}
                                                    />
                                                    <Input
                                                        label="Width"
                                                        type="number"
                                                        placeholder="mm"
                                                        value={product.dimensions.width}
                                                        onChange={(e) => updateProductDimensions(index, 'width', e.target.value)}
                                                    />
                                                    <Input
                                                        label="Thickness"
                                                        type="number"
                                                        placeholder="mm"
                                                        value={product.dimensions.thickness}
                                                        onChange={(e) => updateProductDimensions(index, 'thickness', e.target.value)}
                                                    />
                                                </div>
                                            </div>

                                            <Input
                                                label="Additional Specifications"
                                                placeholder="Any specific requirements..."
                                                value={product.specifications}
                                                onChange={(e) => updateProduct(index, 'specifications', e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>

            <div className="flex justify-between">
                <div></div>
                <Button
                    variant="default"
                    iconName="ArrowRight"
                    iconPosition="right"
                    onClick={handleNext}
                    disabled={!isFormValid}
                >
                    Continue to Specifications
                </Button>
            </div>
        </div>
    );
};

export default ProductSelectionStep;