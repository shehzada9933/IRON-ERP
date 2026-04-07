import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const LeadershipTeam = () => {
    const leadership = [
        {
            id: 1,
            name: "Rajesh Kumar Sharma",
            position: "Founder & Managing Director",
            experience: "35+ Years",
            image: "https://randomuser.me/api/portraits/men/45.jpg",
            bio: "Visionary leader who founded DSM UDHYOG with a commitment to quality and innovation. Under his leadership, the company has grown from a small steel supplier to a regional industry leader.",
            expertise: ["Strategic Planning", "Business Development", "Industry Relations"],
            education: "B.Tech Mechanical Engineering, IIT Delhi",
            linkedin: "#",
            email: "rajesh.sharma@dsmudhyog.com"
        },
        {
            id: 2,
            name: "Priya Patel",
            position: "Chief Operating Officer",
            experience: "20+ Years",
            image: "https://randomuser.me/api/portraits/women/32.jpg",
            bio: "Operations expert with extensive experience in manufacturing and supply chain management. She ensures smooth operations and maintains our high-quality standards across all processes.",
            expertise: ["Operations Management", "Supply Chain", "Quality Control"],
            education: "MBA Operations, XLRI Jamshedpur",
            linkedin: "#",
            email: "priya.patel@dsmudhyog.com"
        },
        {
            id: 3,
            name: "Amit Singh",
            position: "Chief Technology Officer",
            experience: "18+ Years",
            image: "https://randomuser.me/api/portraits/men/38.jpg",
            bio: "Technology innovator driving digital transformation and automation initiatives. He leads our technology strategy and ensures we stay ahead of industry trends.",
            expertise: ["Technology Strategy", "Digital Transformation", "Automation"],
            education: "M.Tech Computer Science, IIT Bombay",
            linkedin: "#",
            email: "amit.singh@dsmudhyog.com"
        },
        {
            id: 4,
            name: "Sunita Gupta",
            position: "Chief Financial Officer",
            experience: "22+ Years",
            image: "https://randomuser.me/api/portraits/women/41.jpg",
            bio: "Financial strategist with deep expertise in corporate finance and risk management. She oversees financial planning and ensures sustainable growth for the organization.",
            expertise: ["Financial Planning", "Risk Management", "Corporate Finance"],
            education: "CA, ICAI & MBA Finance, FMS Delhi",
            linkedin: "#",
            email: "sunita.gupta@dsmudhyog.com"
        },
        {
            id: 5,
            name: "Vikram Mehta",
            position: "Head of Sales & Marketing",
            experience: "16+ Years",
            image: "https://randomuser.me/api/portraits/men/35.jpg",
            bio: "Sales and marketing leader with proven track record in B2B relationship building and market expansion. He drives our customer acquisition and retention strategies.",
            expertise: ["Sales Strategy", "Market Development", "Customer Relations"],
            education: "MBA Marketing, ISB Hyderabad",
            linkedin: "#",
            email: "vikram.mehta@dsmudhyog.com"
        },
        {
            id: 6,
            name: "Dr. Kavita Reddy",
            position: "Head of Quality Assurance",
            experience: "14+ Years",
            image: "https://randomuser.me/api/portraits/women/29.jpg",
            bio: "Quality expert with PhD in Materials Science. She leads our quality assurance initiatives and ensures compliance with international standards and certifications.",
            expertise: ["Quality Systems", "Materials Science", "Compliance"],
            education: "PhD Materials Science, IISc Bangalore",
            linkedin: "#",
            email: "kavita.reddy@dsmudhyog.com"
        }
    ];

    const organizationStats = [
        {
            icon: "Users",
            value: "200+",
            label: "Team Members",
            description: "Skilled professionals across all departments"
        },
        {
            icon: "GraduationCap",
            value: "85%",
            label: "Technical Graduates",
            description: "Engineering and technical education background"
        },
        {
            icon: "Award",
            value: "15+",
            label: "Industry Certifications",
            description: "Professional certifications and training"
        },
        {
            icon: "Clock",
            value: "12 Years",
            label: "Average Experience",
            description: "Mean industry experience of our team"
        }
    ];

    return (
        <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center space-x-3 mb-4">
                        <Icon name="Users" size={24} className="text-primary" />
                        <span className="text-primary font-semibold">Leadership Team</span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                        Meet Our Leaders
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Our experienced leadership team combines decades of industry expertise with innovative thinking
                        to drive DSM UDHYOG's continued growth and success.
                    </p>
                </div>

                {/* Leadership Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {leadership.map((leader) => (
                        <div
                            key={leader.id}
                            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                        >
                            {/* Profile Image */}
                            <div className="relative mb-6">
                                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden ring-4 ring-primary/10 group-hover:ring-primary/20 transition-all duration-300">
                                    <Image
                                        src={leader.image}
                                        alt={leader.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                                    {leader.experience}
                                </div>
                            </div>

                            {/* Basic Info */}
                            <div className="text-center mb-4">
                                <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                                    {leader.name}
                                </h3>
                                <p className="text-primary font-medium mb-2">{leader.position}</p>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {leader.bio}
                                </p>
                            </div>

                            {/* Expertise Tags */}
                            <div className="mb-4">
                                <div className="flex flex-wrap gap-2 justify-center">
                                    {leader.expertise.map((skill, index) => (
                                        <span
                                            key={index}
                                            className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full font-medium"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Education */}
                            <div className="mb-4 p-3 bg-muted/30 rounded-lg">
                                <div className="flex items-center space-x-2 mb-1">
                                    <Icon name="GraduationCap" size={14} className="text-primary" />
                                    <span className="text-xs font-medium text-primary">Education</span>
                                </div>
                                <p className="text-xs text-muted-foreground">{leader.education}</p>
                            </div>

                            {/* Contact Actions */}
                            <div className="flex items-center justify-center space-x-3">
                                <button
                                    onClick={() => window.open(`mailto:${leader.email}`)}
                                    className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full hover:bg-primary hover:text-white transition-colors duration-300"
                                    title="Send Email"
                                >
                                    <Icon name="Mail" size={16} />
                                </button>
                                <button
                                    onClick={() => window.open(leader.linkedin)}
                                    className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full hover:bg-primary hover:text-white transition-colors duration-300"
                                    title="LinkedIn Profile"
                                >
                                    <Icon name="Linkedin" size={16} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Organization Stats */}
                <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 mb-16">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-foreground mb-4">
                            Our Team Strength
                        </h3>
                        <p className="text-muted-foreground">
                            Numbers that reflect our commitment to excellence and expertise
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {organizationStats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
                                    <Icon name={stat.icon} size={24} className="text-primary" />
                                </div>
                                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                                <div className="font-semibold text-foreground mb-1">{stat.label}</div>
                                <p className="text-sm text-muted-foreground">{stat.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Team Culture */}
                <div className="bg-white rounded-2xl p-8">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-foreground mb-4">
                            Our Team Culture
                        </h3>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            We foster an environment of collaboration, innovation, and continuous learning
                            that empowers our team to deliver exceptional results.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="flex items-center justify-center w-16 h-16 bg-success/10 rounded-full mx-auto mb-4">
                                <Icon name="Target" size={24} className="text-success" />
                            </div>
                            <h4 className="font-semibold text-foreground mb-2">Performance Excellence</h4>
                            <p className="text-sm text-muted-foreground">
                                We set high standards and support our team in achieving exceptional performance through continuous improvement.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="flex items-center justify-center w-16 h-16 bg-warning/10 rounded-full mx-auto mb-4">
                                <Icon name="Lightbulb" size={24} className="text-warning" />
                            </div>
                            <h4 className="font-semibold text-foreground mb-2">Innovation & Learning</h4>
                            <p className="text-sm text-muted-foreground">
                                We encourage creative thinking and provide opportunities for professional development and skill enhancement.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mx-auto mb-4">
                                <Icon name="Heart" size={24} className="text-accent" />
                            </div>
                            <h4 className="font-semibold text-foreground mb-2">Work-Life Balance</h4>
                            <p className="text-sm text-muted-foreground">
                                We believe in maintaining a healthy work-life balance that promotes well-being and long-term success.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LeadershipTeam;