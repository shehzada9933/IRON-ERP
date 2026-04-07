import React, { useState, useRef, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const Product3DViewer = ({ product }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [isDragging, setIsDragging] = useState(false);
    const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0 });
    const [isFullscreen, setIsFullscreen] = useState(false);
    const viewerRef = useRef(null);
    const animationRef = useRef(null);

    // Simulate 3D model loading
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    // Auto-rotation animation
    useEffect(() => {
        if (!isDragging && !isLoading) {
            const animate = () => {
                setRotation(prev => ({
                    ...prev,
                    y: prev.y + 0.5
                }));
                animationRef.current = requestAnimationFrame(animate);
            };
            animationRef.current = requestAnimationFrame(animate);
        }

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [isDragging, isLoading]);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setLastMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;

        const deltaX = e.clientX - lastMousePos.x;
        const deltaY = e.clientY - lastMousePos.y;

        setRotation(prev => ({
            x: Math.max(-90, Math.min(90, prev.x + deltaY * 0.5)),
            y: prev.y + deltaX * 0.5
        }));

        setLastMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleWheel = (e) => {
        e.preventDefault();
        const delta = e.deltaY > 0 ? -0.1 : 0.1;
        setZoom(prev => Math.max(0.5, Math.min(3, prev + delta)));
    };

    const resetView = () => {
        setRotation({ x: 0, y: 0 });
        setZoom(1);
    };

    const toggleFullscreen = () => {
        setIsFullscreen(!isFullscreen);
    };

    if (isLoading) {
        return (
            <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center space-y-4">
                    <div className="animate-spin">
                        <Icon name="Loader2" size={48} className="text-primary" />
                    </div>
                    <div className="space-y-2">
                        <p className="text-sm font-medium text-foreground">Loading 3D Model</p>
                        <p className="text-xs text-muted-foreground">Preparing interactive viewer...</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={`relative ${isFullscreen ? 'fixed inset-0 z-50 bg-black' : 'aspect-square'}`}>
            <div
                ref={viewerRef}
                className={`relative bg-gradient-to-br from-muted to-muted/50 rounded-lg overflow-hidden cursor-grab ${isDragging ? 'cursor-grabbing' : ''
                    } ${isFullscreen ? 'w-full h-full' : 'w-full h-full'}`}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onWheel={handleWheel}
            >
                {/* 3D Model Placeholder - In real app, this would be React Three Fiber */}
                <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{
                        transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${zoom})`
                    }}
                >
                    <div className="relative">
                        {/* Steel I-Beam 3D representation */}
                        <div className="w-48 h-32 relative">
                            {/* Top flange */}
                            <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-gray-400 via-gray-300 to-gray-500 rounded-sm shadow-lg transform-gpu" />

                            {/* Web */}
                            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-2 h-24 bg-gradient-to-r from-gray-500 via-gray-400 to-gray-600 shadow-lg" />

                            {/* Bottom flange */}
                            <div className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-r from-gray-400 via-gray-300 to-gray-500 rounded-sm shadow-lg transform-gpu" />

                            {/* Highlight effects */}
                            <div className="absolute top-1 left-2 w-8 h-1 bg-white/30 rounded-full blur-sm" />
                            <div className="absolute bottom-1 left-2 w-8 h-1 bg-white/30 rounded-full blur-sm" />
                        </div>
                    </div>
                </div>

                {/* Control Overlay */}
                <div className="absolute top-4 right-4 flex flex-col space-y-2">
                    <button
                        onClick={resetView}
                        className="w-10 h-10 bg-white/90 hover:bg-white rounded-lg flex items-center justify-center shadow-md transition-industrial"
                        title="Reset view"
                    >
                        <Icon name="RotateCcw" size={16} className="text-foreground" />
                    </button>

                    <button
                        onClick={toggleFullscreen}
                        className="w-10 h-10 bg-white/90 hover:bg-white rounded-lg flex items-center justify-center shadow-md transition-industrial"
                        title={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
                    >
                        <Icon name={isFullscreen ? "Minimize2" : "Maximize2"} size={16} className="text-foreground" />
                    </button>
                </div>

                {/* Zoom Controls */}
                <div className="absolute bottom-4 right-4 flex flex-col space-y-1">
                    <button
                        onClick={() => setZoom(prev => Math.min(3, prev + 0.2))}
                        className="w-8 h-8 bg-white/90 hover:bg-white rounded flex items-center justify-center shadow-md transition-industrial"
                        title="Zoom in"
                    >
                        <Icon name="Plus" size={14} className="text-foreground" />
                    </button>

                    <div className="w-8 h-16 bg-white/90 rounded flex items-center justify-center shadow-md">
                        <div className="w-1 h-12 bg-muted rounded-full relative">
                            <div
                                className="absolute w-3 h-3 bg-primary rounded-full transform -translate-x-1/2"
                                style={{
                                    bottom: `${((zoom - 0.5) / 2.5) * 100}%`,
                                    left: '50%'
                                }}
                            />
                        </div>
                    </div>

                    <button
                        onClick={() => setZoom(prev => Math.max(0.5, prev - 0.2))}
                        className="w-8 h-8 bg-white/90 hover:bg-white rounded flex items-center justify-center shadow-md transition-industrial"
                        title="Zoom out"
                    >
                        <Icon name="Minus" size={14} className="text-foreground" />
                    </button>
                </div>

                {/* Instructions */}
                <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-2 rounded text-xs">
                    <p>Drag to rotate • Scroll to zoom</p>
                </div>

                {/* Fullscreen Exit */}
                {isFullscreen && (
                    <button
                        onClick={toggleFullscreen}
                        className="absolute top-4 left-4 w-10 h-10 bg-white/90 hover:bg-white rounded-lg flex items-center justify-center shadow-md transition-industrial"
                    >
                        <Icon name="X" size={16} className="text-foreground" />
                    </button>
                )}
            </div>

            {/* 3D Viewer Controls */}
            {!isFullscreen && (
                <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <Icon name="Rotate3D" size={16} className="text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">Interactive 3D Model</span>
                    </div>

                    <div className="flex items-center space-x-2">
                        <Button
                            variant="outline"
                            size="sm"
                            iconName="Download"
                            iconPosition="left"
                            onClick={() => { }}
                        >
                            3D File
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            iconName="Share"
                            iconPosition="left"
                            onClick={() => { }}
                        >
                            Share
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Product3DViewer;