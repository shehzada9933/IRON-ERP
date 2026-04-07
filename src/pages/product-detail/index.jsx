import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Breadcrumb from '../../components/ui/breadcrumb';
import QuoteRequestCTA from '../../components/ui/QuoteRequestCTA';
import ProductImageGallery from './components/ProductImageGallery';
import Product3DViewer from './components/Product3DViewer';
import ProductInfo from './components/ProductInfo';
import ProductSpecifications from './components/ProductSpecifications';
import RelatedProducts from './components/RelatedProducts';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const ProductDetail = () => {
  const [activeView, setActiveView] = useState('3d');
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  // Simulate product loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const breadcrumbItems = [
    { label: 'Home', path: '/homepage' },
    { label: 'Products', path: '/product-catalog' },
    { label: 'Structural Steel', path: '/product-catalog?category=structural' },
    { label: 'Steel I-Beam ISMB 200', path: '/product-detail' }
  ];

  const productData = {
    id: 'ismb-200-100',
    name: 'Steel I-Beam ISMB 200',
    category: 'Structural Steel',
    description: 'High-quality structural steel I-beam manufactured to IS 2062 standards, perfect for construction and industrial applications.'
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-16">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="animate-pulse space-y-8">
              <div className="h-4 bg-muted rounded w-1/3"></div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="aspect-square bg-muted rounded-lg"></div>
                <div className="space-y-4">
                  <div className="h-8 bg-muted rounded w-3/4"></div>
                  <div className="h-4 bg-muted rounded w-1/2"></div>
                  <div className="h-20 bg-muted rounded"></div>
                  <div className="h-12 bg-muted rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Breadcrumb Navigation */}
          <Breadcrumb customItems={breadcrumbItems} />

          {/* Product Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Left Column - Product Visuals */}
            <div className="space-y-6">
              {/* View Toggle */}
              <div className="flex items-center space-x-2 bg-muted/50 rounded-lg p-1">
                <button
                  onClick={() => setActiveView('3d')}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-industrial ${activeView === '3d' ? 'bg-white text-primary shadow-sm' : 'text-muted-foreground hover:text-foreground'
                    }`}
                >
                  <Icon name="Rotate3D" size={16} />
                  <span>3D View</span>
                </button>
                <button
                  onClick={() => setActiveView('gallery')}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-industrial ${activeView === 'gallery' ? 'bg-white text-primary shadow-sm' : 'text-muted-foreground hover:text-foreground'
                    }`}
                >
                  <Icon name="Images" size={16} />
                  <span>Gallery</span>
                </button>
              </div>

              {/* Product Viewer */}
              {activeView === '3d' ? (
                <Product3DViewer product={productData} />
              ) : (
                <ProductImageGallery product={productData} />
              )}
            </div>

            {/* Right Column - Product Information */}
            <div>
              <ProductInfo product={productData} />
            </div>
          </div>

          {/* Product Specifications */}
          <div className="mb-12">
            <div className="bg-white border border-border rounded-lg p-6">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center space-x-2">
                <Icon name="FileText" size={24} className="text-primary" />
                <span>Product Specifications</span>
              </h2>
              <ProductSpecifications product={productData} />
            </div>
          </div>

          {/* Related Products */}
          <div className="mb-12">
            <RelatedProducts />
          </div>

          {/* Additional Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white border border-border rounded-lg p-6 text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4">
                <Icon name="Truck" size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Fast Delivery</h3>
              <p className="text-sm text-muted-foreground">
                Quick dispatch with reliable logistics partners across the region
              </p>
            </div>

            <div className="bg-white border border-border rounded-lg p-6 text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-success/10 rounded-lg mx-auto mb-4">
                <Icon name="Shield" size={24} className="text-success" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Quality Assured</h3>
              <p className="text-sm text-muted-foreground">
                All products come with mill test certificates and quality guarantees
              </p>
            </div>

            <div className="bg-white border border-border rounded-lg p-6 text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-warning/10 rounded-lg mx-auto mb-4">
                <Icon name="Headphones" size={24} className="text-warning" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Expert Support</h3>
              <p className="text-sm text-muted-foreground">
                Technical assistance and consultation from our steel experts
              </p>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="bg-steel-gradient rounded-lg p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Need a Custom Quote?</h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Get personalized pricing for bulk orders, custom lengths, or special finishes.
              Our team will provide you with the best rates and delivery options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                iconName="Calculator"
                iconPosition="left"
                onClick={() => window.location.href = '/quote-request'}
              >
                Request Detailed Quote
              </Button>
              <Button
                variant="outline"
                iconName="Phone"
                iconPosition="left"
                onClick={() => window.location.href = '/contact'}
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                Speak with Expert
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Request CTA */}
      <QuoteRequestCTA />
    </div>
  );
};

export default ProductDetail;