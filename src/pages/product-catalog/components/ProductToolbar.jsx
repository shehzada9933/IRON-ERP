import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';
import SearchComponent from '../../../components/ui/SearchComponent';

const ProductToolbar = ({
    viewMode,
    onViewModeChange,
    sortBy,
    onSortChange,
    resultsCount,
    totalProducts,
    onSearch,
    onToggleFilters,
    selectedProducts,
    onBulkQuote,
    onClearSelection
}) => {
    const sortOptions = [
        { value: 'relevance', label: 'Most Relevant' },
        { value: 'price-low', label: 'Price: Low to High' },
        { value: 'price-high', label: 'Price: High to Low' },
        { value: 'popularity', label: 'Most Popular' },
        { value: 'newest', label: 'Newest First' },
        { value: 'stock', label: 'Stock Availability' },
        { value: 'rating', label: 'Customer Rating' }
    ];

    const handleSearch = (query, suggestion = null) => {
        onSearch(query, suggestion);
    };

    return (
        <div className="bg-white border-b border-border">
            {/* Main Toolbar */}
            <div className="p-4 space-y-4">
                {/* Search Bar */}
                <div className="flex items-center space-x-4">
                    <div className="flex-1">
                        <SearchComponent
                            onSearch={handleSearch}
                            placeholder="Search steel products, grades, specifications..."
                        />
                    </div>

                    {/* Mobile Filter Toggle */}
                    <Button
                        variant="outline"
                        size="default"
                        onClick={onToggleFilters}
                        iconName="Filter"
                        className="lg:hidden"
                    >
                        Filters
                    </Button>
                </div>

                {/* Toolbar Controls */}
                <div className="flex items-center justify-between">
                    {/* Results Info */}
                    <div className="flex items-center space-x-4">
                        <div className="text-sm text-muted-foreground">
                            Showing <span className="font-medium text-foreground">{resultsCount}</span> of{' '}
                            <span className="font-medium text-foreground">{totalProducts}</span> products
                        </div>

                        {/* Bulk Actions */}
                        {selectedProducts.length > 0 && (
                            <div className="flex items-center space-x-2">
                                <div className="text-sm text-primary font-medium">
                                    {selectedProducts.length} selected
                                </div>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={onBulkQuote}
                                    iconName="Calculator"
                                    iconPosition="left"
                                >
                                    Bulk Quote
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={onClearSelection}
                                    iconName="X"
                                >
                                    Clear
                                </Button>
                            </div>
                        )}
                    </div>

                    {/* View and Sort Controls */}
                    <div className="flex items-center space-x-4">
                        {/* Sort Dropdown */}
                        <div className="flex items-center space-x-2">
                            <span className="text-sm text-muted-foreground hidden sm:block">Sort by:</span>
                            <Select
                                options={sortOptions}
                                value={sortBy}
                                onChange={onSortChange}
                                className="w-40"
                            />
                        </div>

                        {/* View Mode Toggle */}
                        <div className="flex items-center border border-border rounded-lg p-1">
                            <button
                                onClick={() => onViewModeChange('grid')}
                                className={`flex items-center justify-center w-8 h-8 rounded transition-industrial ${viewMode === 'grid' ? 'bg-primary text-white' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                                    }`}
                                aria-label="Grid view"
                            >
                                <Icon name="Grid3X3" size={16} />
                            </button>
                            <button
                                onClick={() => onViewModeChange('list')}
                                className={`flex items-center justify-center w-8 h-8 rounded transition-industrial ${viewMode === 'list' ? 'bg-primary text-white' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                                    }`}
                                aria-label="List view"
                            >
                                <Icon name="List" size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Active Filters Bar */}
            <div className="px-4 pb-4">
                <div className="flex items-center space-x-2 text-sm">
                    <span className="text-muted-foreground">Active filters:</span>
                    <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1 px-2 py-1 bg-primary/10 text-primary rounded-full">
                            <span>Structural Steel</span>
                            <button className="hover:bg-primary/20 rounded-full p-0.5">
                                <Icon name="X" size={12} />
                            </button>
                        </div>
                        <div className="flex items-center space-x-1 px-2 py-1 bg-primary/10 text-primary rounded-full">
                            <span>Fe 500</span>
                            <button className="hover:bg-primary/20 rounded-full p-0.5">
                                <Icon name="X" size={12} />
                            </button>
                        </div>
                        <div className="flex items-center space-x-1 px-2 py-1 bg-primary/10 text-primary rounded-full">
                            <span>$100 - $500</span>
                            <button className="hover:bg-primary/20 rounded-full p-0.5">
                                <Icon name="X" size={12} />
                            </button>
                        </div>
                        <Button
                            variant="ghost"
                            size="sm"
                            className="text-muted-foreground hover:text-foreground"
                        >
                            Clear all
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductToolbar;