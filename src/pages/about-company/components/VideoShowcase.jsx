import React, { useState, useRef } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const VideoShowcase = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentVideo, setCurrentVideo] = useState(0);
    const videoRef = useRef(null);

    const videos = [
        {
            id: 1,
            title: "Manufacturing Excellence",
            description: "Take a virtual tour of our state-of-the-art manufacturing facility and witness our precision steel processing operations.",
            thumbnail: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg",
            duration: "3:45",
            category: "Facility Tour"
        },
        {
            id: 2,
            title: "Quality Control Process",
            description: "Discover our rigorous quality control procedures that ensure every steel product meets the highest industry standards.",
            thumbnail: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg",
            duration: "2:30",
            category: "Quality Assurance"
        },
        {
            id: 3,
            title: "Team & Expertise",
            description: "Meet our skilled professionals and learn about their expertise in steel manufacturing and customer service.",
            thumbnail: "https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg",
            duration: "4:15",
            category: "Our Team"
        }
    ];

    const handlePlayVideo = (index) => {
        setCurrentVideo(index);
        setIsPlaying(true);
    };

    const handleCloseVideo = () => {
        setIsPlaying(false);
        if (videoRef.current) {
            videoRef.current.pause();
        }
    };

    return (
        <section className="py-20 bg-muted/30">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center space-x-3 mb-4">
                        <Icon name="Play" size={24} className="text-primary" />
                        <span className="text-primary font-semibold">Video Showcase</span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                        Experience Our Operations
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Get an inside look at our manufacturing processes, quality control systems,
                        and the dedicated team that makes DSM UDHYOG a trusted steel supplier.
                    </p>
                </div>

                {/* Main Video Player */}
                <div className="mb-12">
                    <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
                        <div className="aspect-video relative">
                            {!isPlaying ? (
                                <div className="relative w-full h-full">
                                    <Image
                                        src={videos[currentVideo].thumbnail}
                                        alt={videos[currentVideo].title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                        <button
                                            onClick={() => handlePlayVideo(currentVideo)}
                                            className="flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
                                        >
                                            <Icon name="Play" size={32} color="white" className="ml-1" />
                                        </button>
                                    </div>

                                    {/* Video Info Overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                                        <div className="flex items-center space-x-2 mb-2">
                                            <span className="bg-primary px-2 py-1 rounded text-white text-xs font-medium">
                                                {videos[currentVideo].category}
                                            </span>
                                            <span className="text-white/80 text-sm">
                                                {videos[currentVideo].duration}
                                            </span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-2">
                                            {videos[currentVideo].title}
                                        </h3>
                                        <p className="text-white/90 text-sm max-w-2xl">
                                            {videos[currentVideo].description}
                                        </p>
                                    </div>
                                </div>
                            ) : (
                                <div className="relative w-full h-full bg-black flex items-center justify-center">
                                    {/* Mock Video Player */}
                                    <div className="text-center text-white">
                                        <div className="animate-pulse mb-4">
                                            <Icon name="Play" size={48} />
                                        </div>
                                        <p className="text-lg mb-2">Playing: {videos[currentVideo].title}</p>
                                        <p className="text-sm text-white/80">
                                            Video content would be embedded here using iframe or video element
                                        </p>
                                    </div>

                                    {/* Close Button */}
                                    <button
                                        onClick={handleCloseVideo}
                                        className="absolute top-4 right-4 flex items-center justify-center w-10 h-10 bg-black/50 rounded-full hover:bg-black/70 transition-colors duration-300"
                                    >
                                        <Icon name="X" size={20} color="white" />
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Video Thumbnails */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    {videos.map((video, index) => (
                        <button
                            key={video.id}
                            onClick={() => handlePlayVideo(index)}
                            className={`group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${currentVideo === index ? 'ring-2 ring-primary' : ''
                                }`}
                        >
                            <div className="aspect-video relative overflow-hidden">
                                <Image
                                    src={video.thumbnail}
                                    alt={video.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>

                                {/* Play Button */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                                        <Icon name="Play" size={20} color="white" className="ml-0.5" />
                                    </div>
                                </div>

                                {/* Duration Badge */}
                                <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                                    {video.duration}
                                </div>
                            </div>

                            <div className="p-4">
                                <div className="flex items-center space-x-2 mb-2">
                                    <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded font-medium">
                                        {video.category}
                                    </span>
                                </div>
                                <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                                    {video.title}
                                </h3>
                                <p className="text-sm text-muted-foreground line-clamp-2">
                                    {video.description}
                                </p>
                            </div>
                        </button>
                    ))}
                </div>

                {/* Video Features */}
                <div className="bg-white rounded-2xl p-8">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-foreground mb-4">
                            What You'll Discover
                        </h3>
                        <p className="text-muted-foreground">
                            Our video showcase provides comprehensive insights into our operations
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
                                <Icon name="Factory" size={24} className="text-primary" />
                            </div>
                            <h4 className="font-semibold text-foreground mb-2">Modern Facility</h4>
                            <p className="text-sm text-muted-foreground">
                                State-of-the-art manufacturing equipment and processes
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
                                <Icon name="Shield" size={24} className="text-primary" />
                            </div>
                            <h4 className="font-semibold text-foreground mb-2">Quality Control</h4>
                            <p className="text-sm text-muted-foreground">
                                Rigorous testing and quality assurance procedures
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
                                <Icon name="Users" size={24} className="text-primary" />
                            </div>
                            <h4 className="font-semibold text-foreground mb-2">Expert Team</h4>
                            <p className="text-sm text-muted-foreground">
                                Skilled professionals with years of industry experience
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
                                <Icon name="Truck" size={24} className="text-primary" />
                            </div>
                            <h4 className="font-semibold text-foreground mb-2">Logistics</h4>
                            <p className="text-sm text-muted-foreground">
                                Efficient supply chain and delivery operations
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoShowcase;