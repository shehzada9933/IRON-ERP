import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProductGrid = ({
    products,
    viewMode,
    loading,
    onAddToQuote,
    onAddToCompare,
    onLoadMore,
    hasMore
}) => {
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [compareList, setCompareList] = useState([]);

    const handleAddToQuote = (product) => {
        onAddToQuote(product);
        // Show success feedback
        const notification = document.createElement('div');
        notification.className = 'fixed top-4 right-4 bg-success text-white px-4 py-2 rounded-lg shadow-lg z-50';
        notification.textContent = `${product.name} added to quote request`;
        document.body.appendChild(notification);

        setTimeout(() => {
            document.body.removeChild(notification);
        }, 3000);
    };

    const handleAddToCompare = (product) => {
        if (compareList.length >= 3) {
            alert('You can compare up to 3 products at a time');
            return;
        }

        if (compareList.find(p => p.id === product.id)) {
            setCompareList(compareList.filter(p => p.id !== product.id));
        } else {
            setCompareList([...compareList, product]);
        }
        onAddToCompare(product);
    };

    const LoadingSkeleton = () => (
        <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'
            }`}>
            {Array.from({ length: viewMode === 'grid' ? 9 : 6 }).map((_, index) => (
                <div key={index} className="bg-white border border-border rounded-lg overflow-hidden">
                    {viewMode === 'grid' ? (
                        <>
                            <div className="aspect-square bg-muted animate-shimmer" />
                            <div className="p-4 space-y-3">
                                <div className="h-4 bg-muted rounded animate-shimmer" />
                                <div className="h-3 bg-muted rounded w-2/3 animate-shimmer" />
                                <div className="space-y-2">
                                    <div className="h-3 bg-muted rounded w-3/4 animate-shimmer" />
                                    <div className="h-3 bg-muted rounded w-1/2 animate-shimmer" />
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="h-6 bg-muted rounded w-20 animate-shimmer" />
                                    <div className="h-4 bg-muted rounded w-16 animate-shimmer" />
                                </div>
                                <div className="flex space-x-2">
                                    <div className="h-8 bg-muted rounded flex-1 animate-shimmer" />
                                    <div className="h-8 bg-muted rounded w-10 animate-shimmer" />
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="flex items-center p-4 space-x-4">
                            <div className="w-24 h-24 bg-muted rounded-lg animate-shimmer" />
                            <div className="flex-1 space-y-3">
                                <div className="h-4 bg-muted rounded animate-shimmer" />
                                <div className="h-3 bg-muted rounded w-2/3 animate-shimmer" />
                                <div className="flex space-x-4">
                                    <div className="h-3 bg-muted rounded w-20 animate-shimmer" />
                                    <div className="h-3 bg-muted rounded w-16 animate-shimmer" />
                                </div>
                                <div className="flex space-x-2">
                                    <div className="h-8 bg-muted rounded w-24 animate-shimmer" />
                                    <div className="h-8 bg-muted rounded w-20 animate-shimmer" />
                                </div>
                            </div>
                            <div className="text-right space-y-2">
                                <div className="h-6 bg-muted rounded w-20 animate-shimmer" />
                                <div className="h-4 bg-muted rounded w-16 animate-shimmer" />
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );

    if (loading && products.length === 0) {
        return <LoadingSkeleton />;
    }

    if (products.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
                    <Icon name="Package" size={32} className="text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">No products found</h3>
                <p className="text-muted-foreground mb-6 max-w-md">
                    We couldn't find any products matching your current filters. Try adjusting your search criteria or clearing some filters.
                </p>
                <Button
                    variant="outline"
                    iconName="RotateCcw"
                    iconPosition="left"
                >
                    Reset Filters
                </Button>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Product Grid */}
            <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'
                }`}>
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        viewMode={viewMode}
                        onAddToQuote={handleAddToQuote}
                        onAddToCompare={handleAddToCompare}
                    />
                ))}
            </div>

            {/* Load More Button */}
            {hasMore && (
                <div className="flex justify-center pt-8">
                    <Button
                        variant="outline"
                        size="lg"
                        onClick={onLoadMore}
                        loading={loading}
                        iconName="ChevronDown"
                        iconPosition="right"
                    >
                        {loading ? 'Loading...' : 'Load More Products'}
                    </Button>
                </div>
            )}

            {/* Compare Floating Panel */}
            {compareList.length > 0 && (
                <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-white border border-border rounded-lg shadow-industrial-lg p-4 z-40">
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                            <Icon name="GitCompare" size={20} className="text-primary" />
                            <span className="font-medium text-foreground">
                                Compare ({compareList.length}/3)
                            </span>
                        </div>

                        <div className="flex items-center space-x-2">
                            {compareList.map((product) => (
                                <div key={product.id} className="flex items-center space-x-1 px-2 py-1 bg-primary/10 text-primary rounded-full text-sm">
                                    <span className="truncate max-w-20">{product.name}</span>
                                    <button
                                        onClick={() => handleAddToCompare(product)}
                                        className="hover:bg-primary/20 rounded-full p-0.5"
                                    >
                                        <Icon name="X" size={12} />
                                    </button>
                                </div>
                            ))}
                        </div>

                        <Button
                            variant="default"
                            size="sm"
                            disabled={compareList.length < 2}
                            iconName="ArrowRight"
                            iconPosition="right"
                        >
                            Compare Now
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductGrid;