import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ReviewStep = ({ formData, onPrevious, onSubmit }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const steelProducts = [
        {
            id: 'beam-i-200',
            name: 'I-Beam 200mm',
            image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400',
            specifications: 'IS 2062, Grade Fe410'
        },
        {
            id: 'tmt-fe500',
            name: 'TMT Bars Fe500',
            image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400',
            specifications: '8mm to 32mm diameter'
        },
        {
            id: 'plate-ms-10mm',
            name: 'MS Plate 10mm',
            image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=400',
            specifications: 'Thickness: 6-50mm'
        },
        {
            id: 'pipe-seamless',
            name: 'Seamless Steel Pipe',
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
            specifications: 'ASTM A106, Grade B'
        }
    ];

    const getProductDetails = (productId) => {
        return steelProducts.find(p => p.id === productId);
    };

    const formatFileSize = (bytes) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };

    const getFileIcon = (fileType) => {
        if (fileType.includes('pdf')) return 'FileText';
        if (fileType.includes('image')) return 'Image';
        if (fileType.includes('dwg') || fileType.includes('cad')) return 'Drafting';
        return 'File';
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));

        setIsSubmitting(false);
        onSubmit();
    };

    const estimatedDeliveryTime = () => {
        if (formData.deliveryOption === 'express') return '3-7 business days';
        if (formData.deliveryOption === 'standard') return '7-14 business days';
        if (formData.deliveryOption === 'scheduled') return 'As per schedule';
        return 'To be confirmed';
    };

    return (
        <div className="space-y-6">
            {/* Quote Summary */}
            <div className="bg-white rounded-lg border border-border p-6">
                <div className="flex items-center space-x-3 mb-6">
                    <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg">
                        <Icon name="FileText" size={20} className="text-primary" />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-foreground">Quote Request Summary</h3>
                        <p className="text-sm text-muted-foreground">Review your request before submission</p>
                    </div>
                </div>

                {/* Products Section */}
                <div className="mb-8">
                    <h4 className="font-medium text-foreground mb-4 flex items-center">
                        <Icon name="Package" size={16} className="mr-2" />
                        Selected Products ({formData.products?.length || 0})
                    </h4>

                    {formData.products?.map((product, index) => {
                        const productDetails = getProductDetails(product.productId);

                        return (
                            <div key={product.id} className="flex items-start space-x-4 p-4 bg-muted/30 rounded-lg border border-border mb-3">
                                {productDetails && (
                                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-white">
                                        <Image
                                            src={productDetails.image}
                                            alt={productDetails.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                )}
                                <div className="flex-1">
                                    <h5 className="font-medium text-foreground">
                                        {productDetails?.name || 'Unknown Product'}
                                    </h5>
                                    <p className="text-sm text-muted-foreground mb-2">
                                        {productDetails?.specifications}
                                    </p>
                                    <div className="flex items-center space-x-4 text-sm">
                                        <span className="text-foreground">
                                            <strong>Quantity:</strong> {product.quantity} {product.unit}
                                        </span>
                                        {(product.dimensions.length || product.dimensions.width || product.dimensions.thickness) && (
                                            <span className="text-foreground">
                                                <strong>Dimensions:</strong> {product.dimensions.length}×{product.dimensions.width}×{product.dimensions.thickness}mm
                                            </span>
                                        )}
                                    </div>
                                    {product.specifications && (
                                        <p className="text-sm text-muted-foreground mt-1">
                                            <strong>Notes:</strong> {product.specifications}
                                        </p>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Technical Specifications */}
                <div className="mb-8">
                    <h4 className="font-medium text-foreground mb-4 flex items-center">
                        <Icon name="Settings" size={16} className="mr-2" />
                        Technical Specifications
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {formData.steelGrade && (
                            <div className="p-3 bg-muted/30 rounded-lg">
                                <span className="text-sm font-medium text-foreground">Steel Grade:</span>
                                <p className="text-sm text-muted-foreground">{formData.steelGrade}</p>
                            </div>
                        )}

                        {formData.surfaceTreatment && (
                            <div className="p-3 bg-muted/30 rounded-lg">
                                <span className="text-sm font-medium text-foreground">Surface Treatment:</span>
                                <p className="text-sm text-muted-foreground">{formData.surfaceTreatment}</p>
                            </div>
                        )}

                        {formData.deliveryOption && (
                            <div className="p-3 bg-muted/30 rounded-lg">
                                <span className="text-sm font-medium text-foreground">Delivery Option:</span>
                                <p className="text-sm text-muted-foreground">{formData.deliveryOption}</p>
                            </div>
                        )}

                        {formData.certifications?.length > 0 && (
                            <div className="p-3 bg-muted/30 rounded-lg">
                                <span className="text-sm font-medium text-foreground">Certifications:</span>
                                <p className="text-sm text-muted-foreground">{formData.certifications.join(', ')}</p>
                            </div>
                        )}
                    </div>

                    {formData.deliveryAddress && (
                        <div className="mt-4 p-3 bg-muted/30 rounded-lg">
                            <span className="text-sm font-medium text-foreground">Delivery Address:</span>
                            <p className="text-sm text-muted-foreground">{formData.deliveryAddress}</p>
                        </div>
                    )}
                </div>

                {/* Uploaded Files */}
                {formData.uploadedFiles?.length > 0 && (
                    <div className="mb-8">
                        <h4 className="font-medium text-foreground mb-4 flex items-center">
                            <Icon name="Paperclip" size={16} className="mr-2" />
                            Uploaded Documents ({formData.uploadedFiles.length})
                        </h4>

                        <div className="space-y-2">
                            {formData.uploadedFiles.map((file) => (
                                <div key={file.id} className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
                                    <div className="flex items-center justify-center w-8 h-8 bg-white rounded">
                                        <Icon name={getFileIcon(file.type)} size={16} className="text-muted-foreground" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-foreground">{file.name}</p>
                                        <p className="text-xs text-muted-foreground">{formatFileSize(file.size)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Contact Information */}
                <div>
                    <h4 className="font-medium text-foreground mb-4 flex items-center">
                        <Icon name="User" size={16} className="mr-2" />
                        Contact Information
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-3 bg-muted/30 rounded-lg">
                            <span className="text-sm font-medium text-foreground">Contact Person:</span>
                            <p className="text-sm text-muted-foreground">{formData.contactName}</p>
                        </div>

                        <div className="p-3 bg-muted/30 rounded-lg">
                            <span className="text-sm font-medium text-foreground">Company:</span>
                            <p className="text-sm text-muted-foreground">{formData.companyName}</p>
                        </div>

                        <div className="p-3 bg-muted/30 rounded-lg">
                            <span className="text-sm font-medium text-foreground">Email:</span>
                            <p className="text-sm text-muted-foreground">{formData.email}</p>
                        </div>

                        <div className="p-3 bg-muted/30 rounded-lg">
                            <span className="text-sm font-medium text-foreground">Phone:</span>
                            <p className="text-sm text-muted-foreground">{formData.phone}</p>
                        </div>
                    </div>

                    {formData.projectName && (
                        <div className="mt-4 p-3 bg-muted/30 rounded-lg">
                            <span className="text-sm font-medium text-foreground">Project Name:</span>
                            <p className="text-sm text-muted-foreground">{formData.projectName}</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Estimated Timeline */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                        <Icon name="Clock" size={24} className="text-primary" />
                    </div>
                    <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-2">Expected Response Time</h4>
                        <p className="text-muted-foreground mb-4">
                            We'll review your request and send you a detailed quote within 24-48 hours.
                            For complex requirements, our team may contact you for additional clarification.
                        </p>
                        <div className="flex items-center space-x-4 text-sm">
                            <div className="flex items-center space-x-2">
                                <Icon name="Mail" size={16} className="text-primary" />
                                <span className="text-foreground">Quote via email</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Icon name="Truck" size={16} className="text-primary" />
                                <span className="text-foreground">Delivery: {estimatedDeliveryTime()}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-between">
                <Button
                    variant="outline"
                    iconName="ArrowLeft"
                    iconPosition="left"
                    onClick={onPrevious}
                    disabled={isSubmitting}
                >
                    Back to Contact
                </Button>
                <Button
                    variant="default"
                    iconName="Send"
                    iconPosition="right"
                    onClick={handleSubmit}
                    loading={isSubmitting}
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Submitting Request...' : 'Submit Quote Request'}
                </Button>
            </div>
        </div>
    );
};

export default ReviewStep;