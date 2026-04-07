import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const LocationMap = () => {
    const [selectedLocation, setSelectedLocation] = useState('headquarters');

    const locations = {
        headquarters: {
            name: 'Ferrum Logic Headquarters',
            address: '1234 Steel Avenue, Industrial District, Chicago, IL 60601',
            lat: 41.8781,
            lng: -87.6298,
            phone: '+1 (555) 123-4567',
            description: 'Main office and primary steel processing facility'
        },
        westCoast: {
            name: 'West Coast Office',
            address: '5678 Manufacturing Blvd, Los Angeles, CA 90210',
            lat: 34.0522,
            lng: -118.2437,
            phone: '+1 (555) 987-6543',
            description: 'Regional sales office and distribution center'
        },
        eastCoast: {
            name: 'East Coast Warehouse',
            address: '9012 Distribution Center, Newark, NJ 07102',
            lat: 40.7357,
            lng: -74.1724,
            phone: '+1 (555) 456-7890',
            description: 'Warehouse and distribution facility'
        }
    };

    const currentLocation = locations[selectedLocation];

    const handleDirectionsClick = () => {
        const query = encodeURIComponent(currentLocation.address);
        window.open(`https://www.google.com/maps/dir/?api=1&destination=${query}`, '_blank');
    };

    const handleCallLocation = () => {
        window.location.href = `tel:${currentLocation.phone}`;
    };

    return (
        <div className="bg-white rounded-lg border border-border overflow-hidden">
            <div className="p-6 border-b border-border">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                    Find Our Locations
                </h3>

                {/* Location Selector */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {Object.entries(locations).map(([key, location]) => (
                        <Button
                            key={key}
                            variant={selectedLocation === key ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => setSelectedLocation(key)}
                        >
                            {location.name.split(' ')[0]} {location.name.split(' ')[1]}
                        </Button>
                    ))}
                </div>

                {/* Selected Location Info */}
                <div className="bg-muted/30 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">
                        {currentLocation.name}
                    </h4>
                    <div className="space-y-2">
                        <div className="flex items-start space-x-2">
                            <Icon name="MapPin" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">
                                {currentLocation.address}
                            </span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Icon name="Phone" size={16} className="text-primary flex-shrink-0" />
                            <button
                                onClick={handleCallLocation}
                                className="text-sm text-primary hover:text-primary/80 transition-industrial"
                            >
                                {currentLocation.phone}
                            </button>
                        </div>
                        <div className="flex items-start space-x-2">
                            <Icon name="Info" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">
                                {currentLocation.description}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Google Maps Embed */}
            <div className="relative">
                <div className="h-80 lg:h-96">
                    <iframe
                        width="100%"
                        height="100%"
                        loading="lazy"
                        title={currentLocation.name}
                        referrerPolicy="no-referrer-when-downgrade"
                        src={`https://www.google.com/maps?q=${currentLocation.lat},${currentLocation.lng}&z=14&output=embed`}
                        className="border-0"
                    />
                </div>

                {/* Map Overlay Controls */}
                <div className="absolute top-4 right-4 flex flex-col space-y-2">
                    <Button
                        variant="outline"
                        size="sm"
                        iconName="Navigation"
                        onClick={handleDirectionsClick}
                        className="bg-white/90 backdrop-blur-sm"
                    >
                        Directions
                    </Button>
                </div>
            </div>

            {/* Map Actions */}
            <div className="p-4 bg-muted/20 border-t border-border">
                <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                        variant="default"
                        iconName="Navigation"
                        iconPosition="left"
                        onClick={handleDirectionsClick}
                        className="flex-1"
                    >
                        Get Directions
                    </Button>

                    <Button
                        variant="outline"
                        iconName="Phone"
                        iconPosition="left"
                        onClick={handleCallLocation}
                        className="flex-1"
                    >
                        Call Location
                    </Button>

                    <Button
                        variant="outline"
                        iconName="Share"
                        iconPosition="left"
                        onClick={() => {
                            if (navigator.share) {
                                navigator.share({
                                    title: currentLocation.name,
                                    text: currentLocation.address,
                                    url: `https://www.google.com/maps?q=${currentLocation.lat},${currentLocation.lng}`
                                });
                            } else {
                                navigator.clipboard.writeText(currentLocation.address);
                            }
                        }}
                    >
                        Share
                    </Button>
                </div>
            </div>

            {/* Additional Location Services */}
            <div className="p-4 border-t border-border">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                    <div className="flex flex-col items-center space-y-2">
                        <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg">
                            <Icon name="Clock" size={20} className="text-primary" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-foreground">Operating Hours</p>
                            <p className="text-xs text-muted-foreground">Mon-Fri: 8AM-6PM</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center space-y-2">
                        <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg">
                            <Icon name="Car" size={20} className="text-primary" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-foreground">Parking</p>
                            <p className="text-xs text-muted-foreground">Free on-site parking</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center space-y-2">
                        <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg">
                            <Icon name="Truck" size={20} className="text-primary" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-foreground">Delivery</p>
                            <p className="text-xs text-muted-foreground">Nationwide shipping</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LocationMap;