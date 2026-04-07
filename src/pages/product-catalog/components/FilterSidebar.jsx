import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import { Checkbox } from '../../../components/ui/Checkbox';

const FilterSidebar = ({ filters, onFilterChange, onClearFilters, isOpen, onClose }) => {
    const [expandedSections, setExpandedSections] = useState({
        categories: true,
        dimensions: false,
        grades: false,
        certifications: false,
        priceRange: false
    });

    const toggleSection = (section) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    const handleCategoryChange = (categoryId, checked) => {
        const updatedCategories = checked
            ? [...filters.categories, categoryId]
            : filters.categories.filter(id => id !== categoryId);

        onFilterChange({ ...filters, categories: updatedCategories });
    };

    const handleGradeChange = (gradeId, checked) => {
        const updatedGrades = checked
            ? [...filters.grades, gradeId]
            : filters.grades.filter(id => id !== gradeId);

        onFilterChange({ ...filters, grades: updatedGrades });
    };

    const handleCertificationChange = (certId, checked) => {
        const updatedCertifications = checked
            ? [...filters.certifications, certId]
            : filters.certifications.filter(id => id !== certId);

        onFilterChange({ ...filters, certifications: updatedCertifications });
    };

    const handlePriceRangeChange = (field, value) => {
        onFilterChange({
            ...filters,
            priceRange: { ...filters.priceRange, [field]: value }
        });
    };

    const categories = [
        { id: 'structural', label: 'Structural Steel', count: 45 },
        { id: 'plates', label: 'Steel Plates', count: 32 },
        { id: 'reinforcement', label: 'Reinforcement Bars', count: 28 },
        { id: 'pipes', label: 'Steel Pipes', count: 24 },
        { id: 'sheets', label: 'Steel Sheets', count: 19 },
        { id: 'angles', label: 'Steel Angles', count: 16 },
        { id: 'channels', label: 'Steel Channels', count: 14 },
        { id: 'stainless', label: 'Stainless Steel', count: 12 }
    ];

    const grades = [
        { id: 'fe415', label: 'Fe 415', count: 34 },
        { id: 'fe500', label: 'Fe 500', count: 42 },
        { id: 'fe550', label: 'Fe 550', count: 28 },
        { id: 'is2062', label: 'IS 2062', count: 38 },
        { id: 'astm-a36', label: 'ASTM A36', count: 25 },
        { id: 'astm-a572', label: 'ASTM A572', count: 22 },
        { id: '304l', label: '304L Stainless', count: 15 },
        { id: '316l', label: '316L Stainless', count: 12 }
    ];

    const certifications = [
        { id: 'bis', label: 'BIS Certified', count: 89 },
        { id: 'iso9001', label: 'ISO 9001:2015', count: 76 },
        { id: 'iso14001', label: 'ISO 14001:2015', count: 54 },
        { id: 'astm', label: 'ASTM Standards', count: 43 },
        { id: 'jis', label: 'JIS Standards', count: 32 },
        { id: 'din', label: 'DIN Standards', count: 28 }
    ];

    const FilterSection = ({ title, isExpanded, onToggle, children }) => (
        <div className="border-b border-border pb-4 mb-4">
            <button
                onClick={onToggle}
                className="flex items-center justify-between w-full text-left py-2 hover:text-primary transition-industrial-fast"
            >
                <span className="font-medium text-sm text-foreground">{title}</span>
                <Icon
                    name={isExpanded ? "ChevronUp" : "ChevronDown"}
                    size={16}
                    className="text-muted-foreground"
                />
            </button>
            {isExpanded && <div className="mt-3">{children}</div>}
        </div>
    );

    const sidebarContent = (
        <div className="h-full flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border lg:border-b-0">
                <h3 className="font-semibold text-foreground">Filters</h3>
                <div className="flex items-center space-x-2">
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={onClearFilters}
                        className="text-muted-foreground hover:text-foreground"
                    >
                        Clear All
                    </Button>
                    <button
                        onClick={onClose}
                        className="lg:hidden flex items-center justify-center w-8 h-8 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-industrial"
                    >
                        <Icon name="X" size={16} />
                    </button>
                </div>
            </div>

            {/* Filter Content */}
            <div className="flex-1 overflow-y-auto p-4 space-y-6">
                {/* Product Categories */}
                <FilterSection
                    title="Product Categories"
                    isExpanded={expandedSections.categories}
                    onToggle={() => toggleSection('categories')}
                >
                    <div className="space-y-2">
                        {categories.map((category) => (
                            <div key={category.id} className="flex items-center justify-between">
                                <Checkbox
                                    label={category.label}
                                    checked={filters.categories.includes(category.id)}
                                    onChange={(e) => handleCategoryChange(category.id, e.target.checked)}
                                    size="sm"
                                />
                                <span className="text-xs text-muted-foreground">({category.count})</span>
                            </div>
                        ))}
                    </div>
                </FilterSection>

                {/* Dimensions */}
                <FilterSection
                    title="Dimensions"
                    isExpanded={expandedSections.dimensions}
                    onToggle={() => toggleSection('dimensions')}
                >
                    <div className="space-y-3">
                        <Input
                            label="Thickness (mm)"
                            type="number"
                            placeholder="Min - Max"
                            value={filters.dimensions.thickness}
                            onChange={(e) => onFilterChange({
                                ...filters,
                                dimensions: { ...filters.dimensions, thickness: e.target.value }
                            })}
                            className="text-sm"
                        />
                        <Input
                            label="Width (mm)"
                            type="number"
                            placeholder="Min - Max"
                            value={filters.dimensions.width}
                            onChange={(e) => onFilterChange({
                                ...filters,
                                dimensions: { ...filters.dimensions, width: e.target.value }
                            })}
                            className="text-sm"
                        />
                        <Input
                            label="Length (mm)"
                            type="number"
                            placeholder="Min - Max"
                            value={filters.dimensions.length}
                            onChange={(e) => onFilterChange({
                                ...filters,
                                dimensions: { ...filters.dimensions, length: e.target.value }
                            })}
                            className="text-sm"
                        />
                    </div>
                </FilterSection>

                {/* Steel Grades */}
                <FilterSection
                    title="Steel Grades"
                    isExpanded={expandedSections.grades}
                    onToggle={() => toggleSection('grades')}
                >
                    <div className="space-y-2">
                        {grades.map((grade) => (
                            <div key={grade.id} className="flex items-center justify-between">
                                <Checkbox
                                    label={grade.label}
                                    checked={filters.grades.includes(grade.id)}
                                    onChange={(e) => handleGradeChange(grade.id, e.target.checked)}
                                    size="sm"
                                />
                                <span className="text-xs text-muted-foreground">({grade.count})</span>
                            </div>
                        ))}
                    </div>
                </FilterSection>

                {/* Certifications */}
                <FilterSection
                    title="Certifications"
                    isExpanded={expandedSections.certifications}
                    onToggle={() => toggleSection('certifications')}
                >
                    <div className="space-y-2">
                        {certifications.map((cert) => (
                            <div key={cert.id} className="flex items-center justify-between">
                                <Checkbox
                                    label={cert.label}
                                    checked={filters.certifications.includes(cert.id)}
                                    onChange={(e) => handleCertificationChange(cert.id, e.target.checked)}
                                    size="sm"
                                />
                                <span className="text-xs text-muted-foreground">({cert.count})</span>
                            </div>
                        ))}
                    </div>
                </FilterSection>

                {/* Price Range */}
                <FilterSection
                    title="Price Range (USD)"
                    isExpanded={expandedSections.priceRange}
                    onToggle={() => toggleSection('priceRange')}
                >
                    <div className="space-y-3">
                        <div className="grid grid-cols-2 gap-2">
                            <Input
                                label="Min Price"
                                type="number"
                                placeholder="0"
                                value={filters.priceRange.min}
                                onChange={(e) => handlePriceRangeChange('min', e.target.value)}
                                className="text-sm"
                            />
                            <Input
                                label="Max Price"
                                type="number"
                                placeholder="10000"
                                value={filters.priceRange.max}
                                onChange={(e) => handlePriceRangeChange('max', e.target.value)}
                                className="text-sm"
                            />
                        </div>
                        <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                            <span>$50</span>
                            <div className="flex-1 h-1 bg-muted rounded">
                                <div className="h-1 bg-primary rounded" style={{ width: '60%' }}></div>
                            </div>
                            <span>$5000</span>
                        </div>
                    </div>
                </FilterSection>
            </div>

            {/* Apply Filters Button (Mobile) */}
            <div className="lg:hidden p-4 border-t border-border">
                <Button
                    variant="default"
                    fullWidth
                    onClick={onClose}
                    iconName="Filter"
                    iconPosition="left"
                >
                    Apply Filters
                </Button>
            </div>
        </div>
    );

    return (
        <>
            {/* Desktop Sidebar */}
            <div className="hidden lg:block w-full bg-white border-r border-border">
                {sidebarContent}
            </div>

            {/* Mobile Overlay */}
            {isOpen && (
                <div className="lg:hidden fixed inset-0 z-50">
                    <div
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={onClose}
                    />
                    <div className="fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-white shadow-xl">
                        {sidebarContent}
                    </div>
                </div>
            )}
        </>
    );
};

export default FilterSidebar;