import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import Breadcrumb from '../../components/ui/breadcrumb';
import QuoteRequestCTA from '../../components/ui/QuoteRequestCTA';
import FilterSidebar from './components/FilterSidebar';
import ProductToolbar from './components/ProductToolbar';
import ProductGrid from './components/ProductGrid';

const ProductCatalog = () => {
  const [filters, setFilters] = useState({
    categories: [],
    dimensions: {
      thickness: '',
      width: '',
      length: ''
    },
    grades: [],
    certifications: [],
    priceRange: {
      min: '',
      max: ''
    }
  });

  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('relevance');
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterSidebarOpen, setIsFilterSidebarOpen] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  // Mock products data
  const mockProducts = [
    {
      id: 1,
      name: "High-Strength Steel I-Beam 200x100mm",
      category: "Structural Steel",
      grade: "Fe 500",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
      pricePerTon: 850.00,
      originalPrice: 950.00,
      stock: 150,
      moq: 5,
      has3DModel: true,
      specifications: [
        "Length: 6-12 meters",
        "IS 2062 Grade B",
        "Yield Strength: 500 MPa",
        "Tensile Strength: 600 MPa"
      ]
    },
    {
      id: 2,
      name: "Mild Steel Plate 10mm Thickness",
      category: "Steel Plates",
      grade: "IS 2062",
      image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=400&h=400&fit=crop",
      pricePerTon: 720.00,
      stock: 200,
      moq: 3,
      has3DModel: false,
      specifications: [
        "Thickness: 6-50mm",
        "Width: 1000-3000mm",
        "BIS Certified",
        "Hot Rolled Finish"
      ]
    },
    {
      id: 3,
      name: "TMT Reinforcement Bars Fe500D",
      category: "Reinforcement Bars",
      grade: "Fe 500D",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=400&fit=crop",
      pricePerTon: 680.00,
      stock: 300,
      moq: 10,
      has3DModel: true,
      specifications: [
        "Diameter: 8-32mm",
        "Length: 12 meters",
        "Earthquake Resistant",
        "Superior Bendability"
      ]
    },
    {
      id: 4,
      name: "Galvanized Steel Sheets 0.5mm",
      category: "Steel Sheets",
      grade: "ASTM A653",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=400&fit=crop",
      pricePerTon: 920.00,
      stock: 80,
      moq: 2,
      has3DModel: false,
      specifications: [
        "Zinc Coating: Z275",
        "Width: 600-1250mm",
        "Corrosion Resistant",
        "Smooth Finish"
      ]
    },
    {
      id: 5,
      name: "Steel Angle L-Section 50x50x6mm",
      category: "Structural Steel",
      grade: "Fe 415",
      image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=400&h=400&fit=crop",
      pricePerTon: 780.00,
      stock: 120,
      moq: 5,
      has3DModel: true,
      specifications: [
        "Equal Angle Section",
        "Length: 6-12 meters",
        "Hot Rolled",
        "IS 808 Standard"
      ]
    },
    {
      id: 6,
      name: "Seamless Steel Pipe ASTM A106",
      category: "Steel Pipes",
      grade: "ASTM A106",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
      pricePerTon: 1150.00,
      stock: 60,
      moq: 3,
      has3DModel: true,
      specifications: [
        "Diameter: 15-600mm",
        "Wall Thickness: 2-60mm",
        "High Temperature Service",
        "API 5L Certified"
      ]
    },
    {
      id: 7,
      name: "Steel Channel C-Section 100x50mm",
      category: "Structural Steel",
      grade: "Fe 500",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=400&fit=crop",
      pricePerTon: 820.00,
      stock: 90,
      moq: 4,
      has3DModel: true,
      specifications: [
        "ISMC Standard",
        "Length: 6-12 meters",
        "Parallel Flanges",
        "Structural Grade"
      ]
    },
    {
      id: 8,
      name: "Stainless Steel 304 Sheet",
      category: "Stainless Steel",
      grade: "304L",
      image: "https://images.unsplash.com/photo-1609205807107-e8ec2120f9de?w=400&h=400&fit=crop",
      pricePerTon: 2850.00,
      stock: 45,
      moq: 1,
      has3DModel: false,
      specifications: [
        "Thickness: 0.5-6mm",
        "Food Grade Quality",
        "Corrosion Resistant",
        "Mirror Finish Available"
      ]
    },
    {
      id: 9,
      name: "Carbon Steel Round Bar 25mm",
      category: "Steel Bars",
      grade: "C45",
      image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=400&h=400&fit=crop",
      pricePerTon: 750.00,
      stock: 180,
      moq: 5,
      has3DModel: true,
      specifications: [
        "Diameter: 10-200mm",
        "Length: 3-12 meters",
        "Machining Grade",
        "Normalized Condition"
      ]
    }
  ];

  const [products, setProducts] = useState(mockProducts);
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);

  useEffect(() => {
    // Simulate filtering logic
    let filtered = mockProducts;

    // Apply category filters
    if (filters.categories.length > 0) {
      filtered = filtered.filter(product =>
        filters.categories.some(cat =>
          product.category.toLowerCase().includes(cat.toLowerCase())
        )
      );
    }

    // Apply grade filters
    if (filters.grades.length > 0) {
      filtered = filtered.filter(product =>
        filters.grades.some(grade =>
          product.grade.toLowerCase().includes(grade.toLowerCase())
        )
      );
    }

    // Apply price range filters
    if (filters.priceRange.min || filters.priceRange.max) {
      filtered = filtered.filter(product => {
        const price = product.pricePerTon;
        const min = filters.priceRange.min ? parseFloat(filters.priceRange.min) : 0;
        const max = filters.priceRange.max ? parseFloat(filters.priceRange.max) : Infinity;
        return price >= min && price <= max;
      });
    }

    // Apply search query
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.grade.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.specifications.some(spec =>
          spec.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }

    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.pricePerTon - b.pricePerTon);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.pricePerTon - a.pricePerTon);
        break;
      case 'stock':
        filtered.sort((a, b) => b.stock - a.stock);
        break;
      case 'newest':
        filtered.sort((a, b) => b.id - a.id);
        break;
      default:
        // Keep original order for relevance
        break;
    }

    setFilteredProducts(filtered);
  }, [filters, searchQuery, sortBy]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleClearFilters = () => {
    setFilters({
      categories: [],
      dimensions: {
        thickness: '',
        width: '',
        length: ''
      },
      grades: [],
      certifications: [],
      priceRange: {
        min: '',
        max: ''
      }
    });
    setSearchQuery('');
  };

  const handleSearch = (query, suggestion = null) => {
    setSearchQuery(query);
    if (suggestion) {
      // Handle suggestion-specific logic
      console.log('Selected suggestion:', suggestion);
    }
  };

  const handleAddToQuote = (product) => {
    // Add product to quote request
    const existingQuote = JSON.parse(localStorage.getItem('quoteProducts') || '[]');
    const updatedQuote = [...existingQuote, product];
    localStorage.setItem('quoteProducts', JSON.stringify(updatedQuote));
  };

  const handleAddToCompare = (product) => {
    // Handle product comparison
    console.log('Add to compare:', product);
  };

  const handleBulkQuote = () => {
    // Handle bulk quote request
    const bulkProducts = selectedProducts.map(id =>
      filteredProducts.find(p => p.id === id)
    );
    localStorage.setItem('quoteProducts', JSON.stringify(bulkProducts));
    window.location.href = '/quote-request';
  };

  const handleLoadMore = () => {
    setLoading(true);
    // Simulate loading more products
    setTimeout(() => {
      setCurrentPage(prev => prev + 1);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-16">
        <div className="max-w-9xl mx-auto">
          <div className="flex">
            {/* Filter Sidebar */}
            <div className="hidden lg:block w-80 flex-shrink-0">
              <div className="sticky top-16 h-[calc(100vh-4rem)]">
                <FilterSidebar
                  filters={filters}
                  onFilterChange={handleFilterChange}
                  onClearFilters={handleClearFilters}
                  isOpen={isFilterSidebarOpen}
                  onClose={() => setIsFilterSidebarOpen(false)}
                />
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 min-w-0">
              <div className="p-6">
                <Breadcrumb />

                <div className="mb-6">
                  <h1 className="text-3xl font-bold text-foreground mb-2">
                    Steel Product Catalog
                  </h1>
                  <p className="text-muted-foreground">
                    Browse our comprehensive collection of high-quality steel products for construction and industrial applications.
                  </p>
                </div>

                <ProductToolbar
                  viewMode={viewMode}
                  onViewModeChange={setViewMode}
                  sortBy={sortBy}
                  onSortChange={setSortBy}
                  resultsCount={filteredProducts.length}
                  totalProducts={mockProducts.length}
                  onSearch={handleSearch}
                  onToggleFilters={() => setIsFilterSidebarOpen(true)}
                  selectedProducts={selectedProducts}
                  onBulkQuote={handleBulkQuote}
                  onClearSelection={() => setSelectedProducts([])}
                />

                <ProductGrid
                  products={filteredProducts}
                  viewMode={viewMode}
                  loading={loading}
                  onAddToQuote={handleAddToQuote}
                  onAddToCompare={handleAddToCompare}
                  onLoadMore={handleLoadMore}
                  hasMore={currentPage < 3}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Filter Sidebar */}
        <FilterSidebar
          filters={filters}
          onFilterChange={handleFilterChange}
          onClearFilters={handleClearFilters}
          isOpen={isFilterSidebarOpen}
          onClose={() => setIsFilterSidebarOpen(false)}
        />
      </main>

      <QuoteRequestCTA />
    </div>
  );
};

export default ProductCatalog;