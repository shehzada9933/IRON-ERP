import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const RelatedProducts = () => {
    const relatedProducts = [
        {
            id: 1,
            name: "Steel I-Beam ISMB 150",
            sku: "ISMB-150-75-14.2",
            image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop",
            price: 52.75,
            unit: "per meter",
            category: "Structural Steel",
            rating: 4.7,
            availability: "In Stock"
        },
        {
            id: 2,
            name: "Steel I-Beam ISMB 250",
            sku: "ISMB-250-125-37.3",
            image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
            price: 78.90,
            unit: "per meter",
            category: "Structural Steel",
            rating: 4.9,
            availability: "In Stock"
        },
        {
            id: 3,
            name: "Steel Angle L50x50x5",
            sku: "ISA-50-50-5-3.77",
            image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=400&h=300&fit=crop",
            price: 24.50,
            unit: "per meter",
            category: "Structural Steel",
            rating: 4.6,
            availability: "In Stock"
        },
        {
            id: 4,
            name: "Steel Channel ISMC 100",
            sku: "ISMC-100-50-9.56",
            image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=400&h=300&fit=crop",
            price: 35.25,
            unit: "per meter",
            category: "Structural Steel",
            rating: 4.8,
            availability: "Limited Stock"
        }
    ];

    const complementaryProducts = [
        {
            id: 5,
            name: "Welding Electrodes E7018",
            sku: "WE-7018-3.2-5KG",
            image: "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?w=400&h=300&fit=crop",
            price: 45.00,
            unit: "per 5kg pack",
            category: "Welding Supplies",
            rating: 4.5,
            availability: "In Stock"
        },
        {
            id: 6,
            name: "Steel Primer Paint",
            sku: "SP-RO-20L",
            image: "https://images.pexels.com/photos/1669754/pexels-photo-1669754.jpeg?w=400&h=300&fit=crop",
            price: 85.00,
            unit: "per 20L",
            category: "Coatings",
            rating: 4.4,
            availability: "In Stock"
        }
    ];

    const ProductCard = ({ product, isComplementary = false }) => (
        <div className="bg-white border border-border rounded-lg overflow-hidden hover:shadow-md transition-industrial group">
            <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${product.availability === 'In Stock' ? 'bg-success/10 text-success' : 'bg-warning/10 text-warning'
                        }`}>
                        {product.availability}
                    </span>
                </div>
            </div>

            <div className="p-4 space-y-3">
                <div className="space-y-1">
                    <p className="text-xs text-muted-foreground">{product.category}</p>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-industrial line-clamp-2">
                        {product.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">SKU: {product.sku}</p>
                </div>

                <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                        <Icon
                            key={i}
                            name="Star"
                            size={12}
                            className={i < Math.floor(product.rating) ? 'text-warning fill-current' : 'text-muted-foreground'}
                        />
                    ))}
                    <span className="text-xs text-muted-foreground ml-1">
                        {product.rating}
                    </span>
                </div>

                <div className="space-y-2">
                    <div className="flex items-baseline space-x-1">
                        <span className="text-lg font-bold text-foreground">
                            ${product.price.toFixed(2)}
                        </span>
                        <span className="text-xs text-muted-foreground">
                            {product.unit}
                        </span>
                    </div>

                    <div className="flex space-x-2">
                        <Button
                            variant="outline"
                            size="sm"
                            fullWidth
                            iconName="Calculator"
                            iconPosition="left"
                            onClick={() => { }}
                        >
                            Quote
                        </Button>
                        <Button
                            variant="default"
                            size="sm"
                            fullWidth
                            iconName="Eye"
                            iconPosition="left"
                            onClick={() => { }}
                        >
                            View
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="space-y-8">
            {/* Related Products */}
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold text-foreground">Similar Products</h2>
                    <Link
                        to="/product-catalog"
                        className="text-sm text-primary hover:text-primary/80 transition-industrial flex items-center space-x-1"
                    >
                        <span>View all products</span>
                        <Icon name="ArrowRight" size={14} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {relatedProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>

            {/* Complementary Products */}
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold text-foreground">Frequently Bought Together</h2>
                    <Button
                        variant="outline"
                        size="sm"
                        iconName="Plus"
                        iconPosition="left"
                        onClick={() => { }}
                    >
                        Add Bundle to Quote
                    </Button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {complementaryProducts.map((product) => (
                        <ProductCard key={product.id} product={product} isComplementary />
                    ))}
                </div>
            </div>

            {/* Product Comparison */}
            <div className="bg-muted/30 rounded-lg p-6 space-y-4">
                <h3 className="font-semibold text-foreground flex items-center space-x-2">
                    <Icon name="BarChart3" size={20} className="text-primary" />
                    <span>Compare Steel I-Beams</span>
                </h3>

                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-border">
                                <th className="text-left py-2 font-medium text-foreground">Size</th>
                                <th className="text-left py-2 font-medium text-foreground">Weight (kg/m)</th>
                                <th className="text-left py-2 font-medium text-foreground">Price ($/m)</th>
                                <th className="text-left py-2 font-medium text-foreground">Availability</th>
                                <th className="text-left py-2 font-medium text-foreground">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-border/50">
                                <td className="py-2 text-foreground">ISMB 150</td>
                                <td className="py-2 text-muted-foreground">14.2</td>
                                <td className="py-2 text-foreground font-medium">$52.75</td>
                                <td className="py-2">
                                    <span className="text-success text-xs">In Stock</span>
                                </td>
                                <td className="py-2">
                                    <Button variant="outline" size="xs">Compare</Button>
                                </td>
                            </tr>
                            <tr className="border-b border-border/50 bg-primary/5">
                                <td className="py-2 text-foreground font-medium">ISMB 200 (Current)</td>
                                <td className="py-2 text-muted-foreground">25.4</td>
                                <td className="py-2 text-foreground font-medium">$65.50</td>
                                <td className="py-2">
                                    <span className="text-success text-xs">In Stock</span>
                                </td>
                                <td className="py-2">
                                    <span className="text-xs text-primary">Current Product</span>
                                </td>
                            </tr>
                            <tr className="border-b border-border/50">
                                <td className="py-2 text-foreground">ISMB 250</td>
                                <td className="py-2 text-muted-foreground">37.3</td>
                                <td className="py-2 text-foreground font-medium">$78.90</td>
                                <td className="py-2">
                                    <span className="text-success text-xs">In Stock</span>
                                </td>
                                <td className="py-2">
                                    <Button variant="outline" size="xs">Compare</Button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default RelatedProducts;