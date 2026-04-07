import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProductSpecifications = ({ product }) => {
    const [activeTab, setActiveTab] = useState('specifications');

    const specifications = [
        { label: 'Material Grade', value: 'IS 2062 E250 (Fe 410W)', icon: 'Award' },
        { label: 'Dimensions', value: 'ISMB 200 x 100mm', icon: 'Ruler' },
        { label: 'Length', value: '6m, 9m, 12m (Standard)', icon: 'ArrowRight' },
        { label: 'Weight per Meter', value: '25.4 kg/m', icon: 'Weight' },
        { label: 'Flange Width', value: '100mm', icon: 'ArrowLeftRight' },
        { label: 'Web Thickness', value: '5.7mm', icon: 'Layers' },
        { label: 'Flange Thickness', value: '8.5mm', icon: 'Layers' },
        { label: 'Root Radius', value: '12mm', icon: 'Circle' },
        { label: 'Moment of Inertia', value: 'Ixx: 2230 cm⁴', icon: 'RotateCw' },
        { label: 'Section Modulus', value: 'Zxx: 223 cm³', icon: 'Calculator' },
        { label: 'Surface Area', value: '1.26 m²/m', icon: 'Square' },
        { label: 'Coating', value: 'Mill Scale / Primer Available', icon: 'Paintbrush' }
    ];

    const technicalData = [
        { property: 'Yield Strength', value: '250 N/mm²', standard: 'IS 2062' },
        { property: 'Tensile Strength', value: '410 N/mm²', standard: 'IS 2062' },
        { property: 'Elongation', value: '23% min', standard: 'IS 2062' },
        { property: 'Carbon Content', value: '0.23% max', standard: 'IS 2062' },
        { property: 'Manganese Content', value: '1.50% max', standard: 'IS 2062' },
        { property: 'Phosphorus Content', value: '0.055% max', standard: 'IS 2062' },
        { property: 'Sulphur Content', value: '0.055% max', standard: 'IS 2062' },
        { property: 'Silicon Content', value: '0.40% max', standard: 'IS 2062' }
    ];

    const certifications = [
        { name: 'IS 2062 Certification', status: 'Certified', icon: 'CheckCircle', color: 'text-success' },
        { name: 'ISO 9001:2015', status: 'Certified', icon: 'CheckCircle', color: 'text-success' },
        { name: 'BIS License', status: 'Valid', icon: 'CheckCircle', color: 'text-success' },
        { name: 'CE Marking', status: 'Available', icon: 'CheckCircle', color: 'text-success' },
        { name: 'Mill Test Certificate', status: 'Provided', icon: 'FileText', color: 'text-primary' },
        { name: 'Third Party Inspection', status: 'Available', icon: 'Search', color: 'text-primary' }
    ];

    const applications = [
        { category: 'Construction', uses: ['Building frames', 'Roof structures', 'Industrial sheds'] },
        { category: 'Infrastructure', uses: ['Bridges', 'Flyovers', 'Metro stations'] },
        { category: 'Industrial', uses: ['Crane structures', 'Conveyor systems', 'Equipment frames'] },
        { category: 'Commercial', uses: ['Warehouses', 'Shopping complexes', 'Office buildings'] }
    ];

    const tabs = [
        { id: 'specifications', label: 'Specifications', icon: 'FileText' },
        { id: 'technical', label: 'Technical Data', icon: 'BarChart3' },
        { id: 'certifications', label: 'Certifications', icon: 'Award' },
        { id: 'applications', label: 'Applications', icon: 'Building' }
    ];

    const renderSpecifications = () => (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {specifications.map((spec, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-lg">
                        <Icon name={spec.icon} size={16} className="text-primary" />
                    </div>
                    <div className="flex-1">
                        <p className="text-sm font-medium text-foreground">{spec.label}</p>
                        <p className="text-sm text-muted-foreground">{spec.value}</p>
                    </div>
                </div>
            ))}
        </div>
    );

    const renderTechnicalData = () => (
        <div className="space-y-4">
            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="border-b border-border">
                            <th className="text-left py-3 px-4 font-semibold text-foreground">Property</th>
                            <th className="text-left py-3 px-4 font-semibold text-foreground">Value</th>
                            <th className="text-left py-3 px-4 font-semibold text-foreground">Standard</th>
                        </tr>
                    </thead>
                    <tbody>
                        {technicalData.map((data, index) => (
                            <tr key={index} className="border-b border-border/50 hover:bg-muted/30 transition-industrial">
                                <td className="py-3 px-4 text-sm text-foreground">{data.property}</td>
                                <td className="py-3 px-4 text-sm font-medium text-foreground">{data.value}</td>
                                <td className="py-3 px-4 text-sm text-muted-foreground">{data.standard}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

    const renderCertifications = () => (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                        <Icon name={cert.icon} size={20} className={cert.color} />
                        <div>
                            <p className="text-sm font-medium text-foreground">{cert.name}</p>
                            <p className="text-xs text-muted-foreground">{cert.status}</p>
                        </div>
                    </div>
                    <Button variant="outline" size="sm" iconName="Download">
                        Download
                    </Button>
                </div>
            ))}
        </div>
    );

    const renderApplications = () => (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {applications.map((app, index) => (
                <div key={index} className="space-y-3">
                    <h4 className="font-semibold text-foreground flex items-center space-x-2">
                        <Icon name="Building2" size={16} className="text-primary" />
                        <span>{app.category}</span>
                    </h4>
                    <ul className="space-y-2">
                        {app.uses.map((use, useIndex) => (
                            <li key={useIndex} className="flex items-center space-x-2 text-sm text-muted-foreground">
                                <Icon name="ArrowRight" size={12} className="text-primary" />
                                <span>{use}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );

    return (
        <div className="space-y-6">
            {/* Tab Navigation */}
            <div className="border-b border-border">
                <nav className="flex space-x-8">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center space-x-2 py-3 px-1 border-b-2 font-medium text-sm transition-industrial ${activeTab === tab.id
                                    ? 'border-primary text-primary' : 'border-transparent text-muted-foreground hover:text-foreground hover:border-border'
                                }`}
                        >
                            <Icon name={tab.icon} size={16} />
                            <span>{tab.label}</span>
                        </button>
                    ))}
                </nav>
            </div>

            {/* Tab Content */}
            <div className="min-h-[400px]">
                {activeTab === 'specifications' && renderSpecifications()}
                {activeTab === 'technical' && renderTechnicalData()}
                {activeTab === 'certifications' && renderCertifications()}
                {activeTab === 'applications' && renderApplications()}
            </div>

            {/* Download Actions */}
            <div className="flex flex-wrap gap-3 pt-4 border-t border-border">
                <Button variant="outline" iconName="FileText" iconPosition="left">
                    Specification Sheet
                </Button>
                <Button variant="outline" iconName="Download" iconPosition="left">
                    CAD Drawing
                </Button>
                <Button variant="outline" iconName="Award" iconPosition="left">
                    Certificates
                </Button>
                <Button variant="outline" iconName="Calculator" iconPosition="left">
                    Weight Calculator
                </Button>
            </div>
        </div>
    );
};

export default ProductSpecifications;