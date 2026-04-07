import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const QuoteSummary = ({ formData }) => {
    const calculateEstimatedValue = () => {
        if (!formData.products || formData.products.length === 0) return 0;

        // Mock calculation based on product types and quantities
        return formData.products.reduce((total, product) => {
            const basePrice = 50; // Base price per unit
            const quantity = parseInt(product.quantity) || 0;
            return total + (basePrice * quantity);
        }, 0);
    };

    const estimatedValue = calculateEstimatedValue();
    const deliveryFee = estimatedValue > 1000 ? 0 : 50;
    const totalEstimate = estimatedValue + deliveryFee;

    const getDeliveryTime = () => {
        switch (formData.deliveryOption) {
            case 'express': return '3-7 days';
            case 'standard': return '7-14 days';
            case 'scheduled': return 'As scheduled';
            case 'pickup': return 'Ready for pickup';
            default: return '7-14 days';
        }
    };

    return (
        <div className="bg-white rounded-lg border border-border p-6 sticky top-24">
            <div className="flex items-center space-x-3 mb-6">
                <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg">
                    <Icon name="Calculator" size={20} className="text-primary" />
                </div>
                <div>
                    <h3 className="font-semibold text-foreground">Quote Summary</h3>
                    <p className="text-sm text-muted-foreground">Estimated pricing</p>
                </div>
            </div>

            {formData.products && formData.products.length > 0 ? (
                <div className="space-y-4">
                    {/* Products Summary */}
                    <div className="space-y-3">
                        <h4 className="text-sm font-medium text-foreground">Selected Products</h4>
                        {formData.products.map((product, index) => (
                            <div key={product.id} className="flex items-center justify-between text-sm">
                                <div className="flex-1">
                                    <p className="text-foreground font-medium">Product #{index + 1}</p>
                                    <p className="text-muted-foreground">{product.quantity} {product.unit}</p>
                                </div>
                                <span className="text-foreground font-medium">
                                    ${(50 * (parseInt(product.quantity) || 0)).toLocaleString()}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="border-t border-border pt-4">
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Subtotal</span>
                                <span className="text-foreground">${estimatedValue.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Delivery</span>
                                <span className="text-foreground">
                                    {deliveryFee === 0 ? 'Free' : `$${deliveryFee}`}
                                </span>
                            </div>
                            <div className="flex justify-between font-semibold text-foreground border-t border-border pt-2">
                                <span>Estimated Total</span>
                                <span>${totalEstimate.toLocaleString()}</span>
                            </div>
                        </div>
                    </div>

                    {/* Delivery Information */}
                    <div className="bg-muted/30 rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-2">
                            <Icon name="Truck" size={16} className="text-primary" />
                            <span className="text-sm font-medium text-foreground">Delivery</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            Expected delivery: {getDeliveryTime()}
                        </p>
                        {formData.deliveryAddress && (
                            <p className="text-xs text-muted-foreground mt-1">
                                To: {formData.deliveryAddress.substring(0, 50)}...
                            </p>
                        )}
                    </div>

                    {/* Contact Information */}
                    {formData.contactName && (
                        <div className="bg-muted/30 rounded-lg p-4">
                            <div className="flex items-center space-x-2 mb-2">
                                <Icon name="User" size={16} className="text-primary" />
                                <span className="text-sm font-medium text-foreground">Contact</span>
                            </div>
                            <p className="text-sm text-muted-foreground">{formData.contactName}</p>
                            {formData.companyName && (
                                <p className="text-xs text-muted-foreground">{formData.companyName}</p>
                            )}
                        </div>
                    )}

                    {/* Important Notes */}
                    <div className="bg-warning/10 border border-warning/20 rounded-lg p-4">
                        <div className="flex items-start space-x-2">
                            <Icon name="Info" size={16} className="text-warning mt-0.5" />
                            <div>
                                <p className="text-sm font-medium text-foreground mb-1">Important Notes</p>
                                <ul className="text-xs text-muted-foreground space-y-1">
                                    <li>• Prices are estimates and subject to change</li>
                                    <li>• Final quote will include detailed specifications</li>
                                    <li>• Delivery times may vary based on location</li>
                                    <li>• Bulk discounts may apply for large orders</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="text-center py-8">
                    <div className="flex items-center justify-center w-16 h-16 bg-muted rounded-full mx-auto mb-4">
                        <Icon name="Package" size={24} className="text-muted-foreground" />
                    </div>
                    <p className="text-muted-foreground text-sm">
                        Add products to see quote summary
                    </p>
                </div>
            )}

            {/* Quick Actions */}
            <div className="mt-6 pt-6 border-t border-border space-y-3">
                <Button
                    variant="outline"
                    size="sm"
                    fullWidth
                    iconName="Phone"
                    iconPosition="left"
                    onClick={() => window.location.href = '/contact'}
                >
                    Call for Assistance
                </Button>
                <Button
                    variant="ghost"
                    size="sm"
                    fullWidth
                    iconName="MessageCircle"
                    iconPosition="left"
                    onClick={() => window.open('https://wa.me/1234567890', '_blank')}
                >
                    WhatsApp Support
                </Button>
            </div>
        </div>
    );
};

export default QuoteSummary;