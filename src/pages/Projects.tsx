import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ScrollAnimation from "@/components/ScrollAnimation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Home, Calendar, ArrowRight, Shield, FileCheck, Landmark, CheckCircle, Building2, TreePine, Droplets } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const Projects = () => {
  const allProjects = [
    {
      id: 1,
      title: "Rycca Silicon Fairworth",
      tagline: "Swedish Theme Minimalistic Plots with Maximum Value",
      location: "Doddaballapura, Near DMart",
      fullAddress: "Sy. No. 135/2 and 136/2, Raghunathpura Village, Kasaba Hobli, Doddaballapura Taluk, Bengaluru Rural District – 562 163",
      type: "Residential Villa Plots",
      landSize: "1,52,136 Sq.ft.",
      totalPlots: "29 Sites",
      configurations: "30x40, 30x50, 30x48 (East & West Facing, Vastu Compliant)",
      connectivity: "Near ITIR Region (Foxconn, Inox) | NH207 | STRR Connected",
      approvals: ["RERA", "BMRDA", "A-Khata", "STRR Approved"],
      reraNumber: "PRM/KA/RERA/1250/301/PR/130125/007381",
      status: "Now Selling",
      image: project1,
      description: "Located in the high-growth ITIR corridor near Foxconn and major industrial hubs. Surrounded by premium lifestyle infrastructure including Harrow International, Canadian International School, Vidyashilp Academy, Manipal Hospital, and world-class resorts.",
      investmentLogic: "Strategic proximity to ITIR region with high job demand and huge rental yield potential",
      infrastructure: "Foxconn (Semiconductors, EV, AI) | NH207 | STRR Connectivity",
      growthIndicators: [
        "High rental yield potential from IT/Industrial workforce",
        "Proximity to premium schools & hospitals",
        "Multiple road connectivity emerging",
      ],
      amenities: [
        "Heavy Load Bearing CRCP M20 Grade Roads (6 inch thick, UltraTech certified)",
        "Plinth beam near pavement for easy compound wall construction",
        "Overhead tank & Functional STP",
        "Gym and Children's Play Area",
        "Walking track in developed park",
        "52% Open Space",
        "Underground cables for power supply with 3 transformers",
        "Storm Water Drains",
        "Street lights with epoxy painting",
        "100% Vastu Compliant",
      ],
    },
  ];

  const pastProjects = [
    {
      id: 2,
      title: "Nelamangala Layout",
      year: "2013",
      location: "Nelamangala, Bangalore",
      type: "Residential Layout",
      status: "Completed",
      image: project2,
      description: "Our first developer project through a joint venture. Today, 20+ happy families reside here.",
      highlights: ["20+ Happy Families", "20.94% Straight-line ROI", "A-Khata Approved", "Underground Cables"],
      roi: "20.94%",
    },
    {
      id: 3,
      title: "Premium 1-Acre Layout",
      year: "2020",
      location: "North Bangalore",
      type: "Premium Residential",
      status: "Completed",
      image: project3,
      description: "A premium residential layout featuring doubly reinforced concrete roads and underground systems.",
      highlights: ["Doubly Reinforced Roads", "23.33% Straight-line ROI", "Premium Positioning", "Underground Systems"],
      roi: "23.33%",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-500";
      case "Now Selling":
        return "bg-gold";
      case "Pre-Launch":
        return "bg-blue-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section with Strong Image */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={project1}
            alt="Rycca Silicon Fairworth"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
              Our <span className="text-gold">Projects</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Research-backed plotted developments with 100% legal compliance
            </p>
          </motion.div>
        </div>
      </section>

      {/* Current Project - Silicon Fairworth */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <Badge className="bg-gold text-white border-0 mb-4">Featured Project</Badge>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Rycca <span className="text-gold">Silicon Fairworth</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Swedish theme minimalistic plots with maximum value in Bangalore's fastest-growing corridor
              </p>
            </div>
          </ScrollAnimation>

          {allProjects.map((project) => (
            <div key={project.id} className="space-y-12">
              <ScrollAnimation direction="up">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  {/* Image */}
                  <div className="relative group overflow-hidden">
                    <div className="relative overflow-hidden rounded-lg shadow-2xl">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className={`${getStatusColor(project.status)} text-white border-0`}>
                          {project.status}
                        </Badge>
                      </div>
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-background/90 text-foreground border-0">
                          {project.totalPlots}
                        </Badge>
                      </div>
                    </div>
                    <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-gold/10 rounded-lg -z-10 hidden md:block" />
                  </div>

                  {/* Content */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-3xl font-display font-bold mb-2">{project.title}</h3>
                      <p className="text-xl text-gold font-display mb-4">{project.tagline}</p>
                      
                      <div className="space-y-2 text-sm text-muted-foreground mb-4">
                        <div className="flex items-start gap-2">
                          <MapPin size={16} className="text-gold flex-shrink-0 mt-1" />
                          <span>{project.fullAddress}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Home size={16} className="text-gold" />
                          <span>{project.configurations}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Building2 size={16} className="text-gold" />
                          <span>Total Area: {project.landSize}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-lg text-muted-foreground">
                      {project.description}
                    </p>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4 border-t border-border">
                      <Link to="/contact" className="w-full sm:w-auto">
                        <Button className="bg-gold hover:bg-gold-dark text-white group w-full sm:w-auto">
                          Book Site Visit
                          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </Link>
                      <Button variant="outline" className="border-gold text-gold hover:bg-gold/10 w-full sm:w-auto">
                        Download Brochure
                      </Button>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          ))}
        </div>
      </section>

      {/* Investment Logic Section - Separate Scroll Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Investment <span className="text-gold">Logic</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Understanding the strategic value of this location
              </p>
            </div>
          </ScrollAnimation>

          <div className="max-w-5xl mx-auto">
            <ScrollAnimation direction="up">
              <div className="bg-background p-8 md:p-12 rounded-xl shadow-lg mb-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-gold mb-4">
                    Strategic proximity to ITIR region with high job demand and huge rental yield potential
                  </h3>
                  <p className="text-muted-foreground max-w-3xl mx-auto">
                    The ITIR (Information Technology Investment Region) is poised to become Bangalore's next growth engine, 
                    with Foxconn's semiconductor and EV manufacturing facility leading the industrial transformation.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="p-6 bg-secondary rounded-lg text-center">
                    <Building2 className="w-12 h-12 text-gold mx-auto mb-4" />
                    <h4 className="font-display font-bold mb-2">ITIR Industrial Hub</h4>
                    <p className="text-sm text-muted-foreground">Foxconn, Inox, and major MSMEs creating massive job demand</p>
                  </div>
                  <div className="p-6 bg-secondary rounded-lg text-center">
                    <TreePine className="w-12 h-12 text-gold mx-auto mb-4" />
                    <h4 className="font-display font-bold mb-2">Premium Lifestyle</h4>
                    <p className="text-sm text-muted-foreground">International schools, hospitals, resorts, and sports villages</p>
                  </div>
                  <div className="p-6 bg-secondary rounded-lg text-center">
                    <MapPin className="w-12 h-12 text-gold mx-auto mb-4" />
                    <h4 className="font-display font-bold mb-2">Multi-Road Connectivity</h4>
                    <p className="text-sm text-muted-foreground">NH207, STRR, with 4 more approach roads emerging</p>
                  </div>
                </div>

                <div className="text-center">
                  <Link to="/contact">
                    <Button size="lg" className="bg-gold hover:bg-gold-dark text-white group">
                      Know More
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Approvals & Legal Clarity - Dedicated Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Approvals & <span className="text-gold">Legal Clarity</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Complete regulatory compliance for hassle-free ownership
              </p>
            </div>
          </ScrollAnimation>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {["RERA Approved", "BMRDA Approved", "A-Khata", "STRR Approved"].map((approval, index) => (
                <ScrollAnimation key={index} delay={index * 0.1} direction="up">
                  <div className="bg-secondary p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 border-2 border-gold/20 hover:border-gold/50">
                    <Shield className="w-10 h-10 text-gold mx-auto mb-4" />
                    <h4 className="font-display font-bold text-foreground">{approval}</h4>
                  </div>
                </ScrollAnimation>
              ))}
            </div>

            <ScrollAnimation>
              <div className="bg-gradient-to-r from-gold/10 to-gold/5 p-8 rounded-xl">
                <div className="text-center">
                  <h4 className="text-xl font-display font-bold mb-4">RERA Registration Number</h4>
                  <p className="text-lg text-muted-foreground font-mono bg-background inline-block px-6 py-3 rounded-lg">
                    PRM/KA/RERA/1250/301/PR/130125/007381
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <FileCheck className="w-8 h-8 text-gold mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Complete Documentation</p>
                  </div>
                  <div className="text-center">
                    <Landmark className="w-8 h-8 text-gold mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Clear Land Titles</p>
                  </div>
                  <div className="text-center">
                    <CheckCircle className="w-8 h-8 text-gold mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Zero Legal Ambiguity</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                World-Class <span className="text-gold">Amenities</span>
              </h2>
            </div>
          </ScrollAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {allProjects[0].amenities.map((amenity, idx) => (
              <ScrollAnimation key={idx} delay={idx * 0.05} direction="up">
                <div className="flex items-start gap-3 p-4 bg-background rounded-lg hover:shadow-md transition-all duration-300">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{amenity}</span>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Past Projects */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Past <span className="text-gold">Projects</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Successfully delivered projects with consistent ROI
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastProjects.map((project, index) => (
              <ScrollAnimation key={project.id} delay={index * 0.1} direction="up">
                <div className="bg-secondary rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-56 object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className={`${getStatusColor(project.status)} text-white border-0`}>
                        {project.status}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <Badge className="bg-gold text-white border-0 text-lg px-4 py-1">
                        {project.roi} ROI
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar size={14} />
                      <span>{project.year}</span>
                      <span className="mx-2">•</span>
                      <MapPin size={14} />
                      <span>{project.location}</span>
                    </div>
                    <h3 className="text-2xl font-display font-bold mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.highlights.map((highlight, idx) => (
                        <Badge key={idx} variant="outline" className="border-gold/30 text-foreground">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gold-dark via-gold to-gold-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center text-white">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Ready to Explore Investment Opportunities?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Schedule a site visit to Rycca Silicon Fairworth and speak with our investment advisors
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-gold w-full sm:w-auto">
                    Book Site Visit
                  </Button>
                </Link>
                <Button size="lg" className="bg-white text-gold hover:bg-white/90">
                  Download Brochure
                </Button>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default Projects;