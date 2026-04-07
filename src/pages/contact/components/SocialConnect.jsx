import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const SocialConnect = () => {
    const socialLinks = [
        {
            name: 'LinkedIn',
            icon: 'Linkedin',
            url: 'https://linkedin.com/company/ferrum-logic',
            description: 'Connect with us professionally',
            followers: '2.5K followers'
        },
        {
            name: 'Facebook',
            icon: 'Facebook',
            url: 'https://facebook.com/ferrumlogic',
            description: 'Follow our latest updates',
            followers: '1.8K likes'
        },
        {
            name: 'Twitter',
            icon: 'Twitter',
            url: 'https://twitter.com/ferrumlogic',
            description: 'Industry news and insights',
            followers: '950 followers'
        },
        {
            name: 'YouTube',
            icon: 'Youtube',
            url: 'https://youtube.com/ferrumlogic',
            description: 'Watch our facility tours',
            followers: '1.2K subscribers'
        }
    ];

    const handleSocialClick = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    const handleNewsletterSignup = () => {
        // In a real app, this would open a newsletter signup modal or redirect
        console.log('Newsletter signup clicked');
    };

    return (
        <div className="space-y-6">
            {/* Social Media Links */}
            <div className="bg-white rounded-lg border border-border p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                    Connect With Us
                </h3>
                <p className="text-muted-foreground mb-6">
                    Stay updated with our latest steel products, industry insights, and company news.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {socialLinks.map((social, index) => (
                        <button
                            key={index}
                            onClick={() => handleSocialClick(social.url)}
                            className="flex items-center space-x-4 p-4 border border-border rounded-lg hover:border-primary/30 hover:bg-primary/5 transition-industrial group"
                        >
                            <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-industrial">
                                <Icon name={social.icon} size={20} className="text-primary" />
                            </div>
                            <div className="flex-1 text-left">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-industrial">
                                    {social.name}
                                </h4>
                                <p className="text-sm text-muted-foreground">
                                    {social.description}
                                </p>
                                <p className="text-xs text-muted-foreground mt-1">
                                    {social.followers}
                                </p>
                            </div>
                            <Icon name="ExternalLink" size={16} className="text-muted-foreground group-hover:text-primary transition-industrial" />
                        </button>
                    ))}
                </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-steel-gradient rounded-lg p-6 text-white">
                <div className="flex items-center space-x-3 mb-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-white/20 rounded-lg">
                        <Icon name="Mail" size={20} className="text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">
                        Steel Industry Newsletter
                    </h3>
                </div>

                <p className="text-white/90 mb-6">
                    Get weekly updates on steel prices, market trends, new product launches, and exclusive offers for our partners.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                        variant="outline"
                        fullWidth
                        iconName="Mail"
                        iconPosition="left"
                        onClick={handleNewsletterSignup}
                        className="bg-white/10 border-white/30 text-white hover:bg-white/20"
                    >
                        Subscribe to Newsletter
                    </Button>
                </div>

                <div className="mt-4 pt-4 border-t border-white/20">
                    <div className="flex items-center justify-between text-sm text-white/80">
                        <span>Join 5,000+ industry professionals</span>
                        <div className="flex items-center space-x-1">
                            <Icon name="Shield" size={14} />
                            <span>No spam, unsubscribe anytime</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Company Resources */}
            <div className="bg-white rounded-lg border border-border p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                    Company Resources
                </h3>

                <div className="space-y-3">
                    <Button
                        variant="outline"
                        fullWidth
                        iconName="Download"
                        iconPosition="left"
                        onClick={() => { }}
                    >
                        Download Company Brochure
                    </Button>

                    <Button
                        variant="outline"
                        fullWidth
                        iconName="FileText"
                        iconPosition="left"
                        onClick={() => { }}
                    >
                        Product Catalog (PDF)
                    </Button>

                    <Button
                        variant="outline"
                        fullWidth
                        iconName="Award"
                        iconPosition="left"
                        onClick={() => { }}
                    >
                        Quality Certifications
                    </Button>

                    <Button
                        variant="outline"
                        fullWidth
                        iconName="Calendar"
                        iconPosition="left"
                        onClick={() => { }}
                    >
                        Schedule Facility Tour
                    </Button>
                </div>
            </div>

            {/* Customer Testimonial */}
            <div className="bg-muted/30 rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg">
                        <Icon name="Quote" size={20} className="text-primary" />
                    </div>
                    <div>
                        <h4 className="font-semibold text-foreground">Customer Feedback</h4>
                        <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                                <Icon key={i} name="Star" size={14} className="text-warning fill-current" />
                            ))}
                        </div>
                    </div>
                </div>

                <blockquote className="text-muted-foreground italic mb-4">
                    "Ferrum Logic has been our trusted steel supplier for over 5 years. Their quality is consistent, delivery is always on time, and their customer service is exceptional."
                </blockquote>

                <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon name="User" size={16} className="text-primary" />
                    </div>
                    <div>
                        <p className="text-sm font-medium text-foreground">Michael Rodriguez</p>
                        <p className="text-xs text-muted-foreground">Construction Manager, BuildTech Inc.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SocialConnect;