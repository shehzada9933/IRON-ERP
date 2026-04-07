import React, { useState, useRef } from 'react';
import Select from '../../../components/ui/Select';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';

import Icon from '../../../components/AppIcon';

const SpecificationsStep = ({ formData, updateFormData, onNext, onPrevious }) => {
    const [uploadedFiles, setUploadedFiles] = useState(formData.uploadedFiles || []);
    const [isDragOver, setIsDragOver] = useState(false);
    const fileInputRef = useRef(null);

    const steelGrades = [
        { value: 'fe410', label: 'Fe 410 (IS 2062)' },
        { value: 'fe500', label: 'Fe 500 (TMT Bars)' },
        { value: 'fe550', label: 'Fe 550 (High Strength)' },
        { value: 'astm-a36', label: 'ASTM A36' },
        { value: 'astm-a572', label: 'ASTM A572' },
        { value: 'en-s275', label: 'EN S275' },
        { value: 'en-s355', label: 'EN S355' }
    ];

    const certificationOptions = [
        { value: 'mill-certificate', label: 'Mill Test Certificate (MTC)' },
        { value: 'third-party', label: 'Third Party Inspection' },
        { value: 'iso-certification', label: 'ISO Quality Certification' },
        { value: 'bis-certification', label: 'BIS Certification' },
        { value: 'lloyds-certification', label: 'Lloyd\'s Certification' }
    ];

    const deliveryOptions = [
        { value: 'standard', label: 'Standard Delivery (7-14 days)' },
        { value: 'express', label: 'Express Delivery (3-7 days)' },
        { value: 'scheduled', label: 'Scheduled Delivery' },
        { value: 'pickup', label: 'Self Pickup' }
    ];

    const handleFileUpload = (files) => {
        const newFiles = Array.from(files).map(file => ({
            id: Date.now() + Math.random(),
            file,
            name: file.name,
            size: file.size,
            type: file.type,
            uploadProgress: 0
        }));

        const updatedFiles = [...uploadedFiles, ...newFiles];
        setUploadedFiles(updatedFiles);
        updateFormData({ uploadedFiles: updatedFiles });

        // Simulate upload progress
        newFiles.forEach(fileObj => {
            simulateUploadProgress(fileObj.id);
        });
    };

    const simulateUploadProgress = (fileId) => {
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.random() * 30;
            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);
            }

            setUploadedFiles(prev => prev.map(file =>
                file.id === fileId ? { ...file, uploadProgress: progress } : file
            ));
        }, 200);
    };

    const removeFile = (fileId) => {
        const updated = uploadedFiles.filter(file => file.id !== fileId);
        setUploadedFiles(updated);
        updateFormData({ uploadedFiles: updated });
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragOver(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        setIsDragOver(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragOver(false);
        const files = e.dataTransfer.files;
        handleFileUpload(files);
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

    const handleNext = () => {
        onNext();
    };

    return (
        <div className="space-y-6">
            <div className="bg-white rounded-lg border border-border p-6">
                <div className="mb-6">
                    <h3 className="text-lg font-semibold text-foreground">Technical Specifications</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                        Provide detailed requirements for your steel products
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <Select
                            label="Preferred Steel Grade"
                            placeholder="Select steel grade"
                            options={steelGrades}
                            value={formData.steelGrade || ''}
                            onChange={(value) => updateFormData({ steelGrade: value })}
                            searchable
                        />

                        <Select
                            label="Required Certifications"
                            placeholder="Select certifications"
                            options={certificationOptions}
                            value={formData.certifications || []}
                            onChange={(value) => updateFormData({ certifications: value })}
                            multiple
                            searchable
                        />

                        <Input
                            label="Surface Treatment"
                            placeholder="e.g., Galvanized, Painted, Mill Finish"
                            value={formData.surfaceTreatment || ''}
                            onChange={(e) => updateFormData({ surfaceTreatment: e.target.value })}
                        />
                    </div>

                    <div className="space-y-4">
                        <Select
                            label="Delivery Preference"
                            placeholder="Select delivery option"
                            options={deliveryOptions}
                            value={formData.deliveryOption || ''}
                            onChange={(value) => updateFormData({ deliveryOption: value })}
                        />

                        <Input
                            label="Delivery Address"
                            placeholder="Enter complete delivery address"
                            value={formData.deliveryAddress || ''}
                            onChange={(e) => updateFormData({ deliveryAddress: e.target.value })}
                        />

                        <Input
                            label="Special Instructions"
                            placeholder="Any specific handling or delivery requirements"
                            value={formData.specialInstructions || ''}
                            onChange={(e) => updateFormData({ specialInstructions: e.target.value })}
                        />
                    </div>
                </div>
            </div>

            {/* File Upload Section */}
            <div className="bg-white rounded-lg border border-border p-6">
                <div className="mb-6">
                    <h3 className="text-lg font-semibold text-foreground">Technical Drawings & Documents</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                        Upload blueprints, CAD files, or technical specifications
                    </p>
                </div>

                <div
                    className={`border-2 border-dashed rounded-lg p-8 text-center transition-all duration-200 ${isDragOver
                            ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
                        }`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                >
                    <div className="flex items-center justify-center w-16 h-16 bg-muted rounded-full mx-auto mb-4">
                        <Icon name="Upload" size={24} className="text-muted-foreground" />
                    </div>
                    <h4 className="text-lg font-medium text-foreground mb-2">
                        Drop files here or click to upload
                    </h4>
                    <p className="text-muted-foreground mb-4">
                        Supports PDF, DWG, CAD, JPG, PNG files up to 10MB each
                    </p>
                    <Button
                        variant="outline"
                        iconName="Upload"
                        iconPosition="left"
                        onClick={() => fileInputRef.current?.click()}
                    >
                        Choose Files
                    </Button>
                    <input
                        ref={fileInputRef}
                        type="file"
                        multiple
                        accept=".pdf,.dwg,.cad,.jpg,.jpeg,.png"
                        onChange={(e) => handleFileUpload(e.target.files)}
                        className="hidden"
                    />
                </div>

                {uploadedFiles.length > 0 && (
                    <div className="mt-6 space-y-3">
                        <h4 className="font-medium text-foreground">Uploaded Files</h4>
                        {uploadedFiles.map((file) => (
                            <div key={file.id} className="flex items-center space-x-4 p-4 bg-muted/30 rounded-lg border border-border">
                                <div className="flex items-center justify-center w-10 h-10 bg-white rounded-lg">
                                    <Icon name={getFileIcon(file.type)} size={20} className="text-muted-foreground" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm font-medium text-foreground truncate">{file.name}</p>
                                        <span className="text-xs text-muted-foreground">{formatFileSize(file.size)}</span>
                                    </div>
                                    {file.uploadProgress < 100 ? (
                                        <div className="mt-2">
                                            <div className="w-full bg-border rounded-full h-1.5">
                                                <div
                                                    className="bg-primary h-1.5 rounded-full transition-all duration-300"
                                                    style={{ width: `${file.uploadProgress}%` }}
                                                />
                                            </div>
                                            <p className="text-xs text-muted-foreground mt-1">
                                                Uploading... {Math.round(file.uploadProgress)}%
                                            </p>
                                        </div>
                                    ) : (
                                        <p className="text-xs text-success mt-1">Upload complete</p>
                                    )}
                                </div>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    iconName="Trash2"
                                    onClick={() => removeFile(file.id)}
                                    className="text-destructive hover:text-destructive"
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="flex justify-between">
                <Button
                    variant="outline"
                    iconName="ArrowLeft"
                    iconPosition="left"
                    onClick={onPrevious}
                >
                    Back to Products
                </Button>
                <Button
                    variant="default"
                    iconName="ArrowRight"
                    iconPosition="right"
                    onClick={handleNext}
                >
                    Continue to Contact
                </Button>
            </div>
        </div>
    );
};

export default SpecificationsStep;