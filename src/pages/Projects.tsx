import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ScrollAnimation from "@/components/ScrollAnimation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Home, Calendar, ArrowRight, Shield, FileCheck, Landmark, CheckCircle } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const Projects = () => {
  const allProjects = [
    {
      id: 1,
      title: "Skyline Residences",
      tagline: "Elevated Urban Living",
      location: "Downtown District",
      type: "Plotted Development",
      landSize: "45 Acres",
      connectivity: "2 km from Metro | 5 km from Airport",
      approvals: ["RERA", "BMRDA", "STRRPA", "E-Khata"],
      status: "Completed",
      image: project1,
      description: "Strategic location with approved infrastructure pipeline, positioned in a high-growth corridor with established connectivity and urban development plans.",
      investmentLogic: "Infrastructure-led appreciation with transparent legal compliance",
      infrastructure: "Upcoming Metro Phase 2 | IT Park Development",
      growthIndicators: ["30% YoY area appreciation", "Major employer presence", "Planned infrastructure upgrades"],
    },
    {
      id: 2,
      title: "Paradise Villas",
      tagline: "Nature Meets Investment",
      location: "Coastal Avenue",
      type: "Plotted Development",
      landSize: "62 Acres",
      connectivity: "5 km from Business Hub | Direct Highway Access",
      approvals: ["RERA", "BMRDA", "STRRPA", "E-Khata"],
      status: "Ongoing",
      image: project2,
      description: "Prime coastal location with clear zoning for residential development, offering long-term appreciation potential in an emerging growth corridor.",
      investmentLogic: "Emerging location with infrastructure development pipeline",
      infrastructure: "Proposed Outer Ring Road | SEZ Development",
      growthIndicators: ["Infrastructure investments nearby", "Growing job ecosystem", "Tourism infrastructure boost"],
    },
    {
      id: 3,
      title: "Metropolitan Heights",
      tagline: "Business District Excellence",
      location: "Business Quarter",
      type: "Plotted Development",
      landSize: "38 Acres",
      connectivity: "Walking distance to Business District | Metro Connected",
      approvals: ["RERA", "BMRDA", "STRRPA", "E-Khata"],
      status: "Pre-Launch",
      image: project3,
      description: "Premium business quarter location with all regulatory approvals in place, designed for investors seeking predictable returns in an established commercial zone.",
      investmentLogic: "Established location with stable appreciation trajectory",
      infrastructure: "Existing Metro Connectivity | Tech Parks",
      growthIndicators: ["Established job ecosystem", "Rental yield potential", "Corporate housing demand"],
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-500";
      case "Ongoing":
        return "bg-blue-500";
      case "Pre-Launch":
        return "bg-gold";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Our <span className="text-gold">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Research-backed plotted developments with 100% legal compliance and transparent documentation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Listing */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {allProjects.map((project, index) => (
              <ScrollAnimation key={project.id} direction={index % 2 === 0 ? "left" : "right"}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}>
                  {/* Image */}
                  <div className={`relative group ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
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
                          {project.landSize}
                        </Badge>
                      </div>
                    </div>
                    <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-gold/10 rounded-lg -z-10" />
                  </div>

                  {/* Content */}
                  <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-4xl font-display font-bold mb-2">
                          {project.title}
                        </h2>
                        <p className="text-xl text-gold font-display mb-4">{project.tagline}</p>
                        
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-2">
                            <MapPin size={16} className="text-gold" />
                            <span>{project.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Home size={16} className="text-gold" />
                            <span>{project.type}</span>
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-4">
                          <strong className="text-foreground">Connectivity:</strong> {project.connectivity}
                        </p>
                      </div>

                      <p className="text-lg text-muted-foreground">
                        {project.description}
                      </p>

                      <div className="p-4 bg-secondary rounded-lg">
                        <p className="font-display font-semibold text-gold mb-2">Investment Logic</p>
                        <p className="text-muted-foreground">{project.investmentLogic}</p>
                      </div>

                      {/* Infrastructure & Growth */}
                      <div>
                        <h3 className="text-xl font-display font-semibold mb-3">Why Invest Here?</h3>
                        <div className="space-y-2 mb-4">
                          <div className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{project.infrastructure}</span>
                          </div>
                          {project.growthIndicators.map((indicator, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                              <span className="text-muted-foreground">{indicator}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Approvals */}
                      <div>
                        <h3 className="text-xl font-display font-semibold mb-3">Approvals & Legal Clarity</h3>
                        <div className="grid grid-cols-2 gap-3">
                          {project.approvals.map((approval, idx) => (
                            <div key={idx} className="flex items-center gap-2 p-3 bg-secondary rounded-lg border border-gold/20">
                              <Shield className="w-5 h-5 text-gold flex-shrink-0" />
                              <span className="font-semibold">{approval}</span>
                            </div>
                          ))}
                        </div>
                        <p className="text-sm text-muted-foreground mt-3">
                          ✓ Transparent legal and regulatory compliance
                        </p>
                      </div>

                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4 border-t border-border">
                        <Link to="/contact">
                          <Button className="bg-gold hover:bg-gold-dark text-white group">
                            Book Site Visit
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                          </Button>
                        </Link>
                        <Button variant="outline" className="border-gold text-gold hover:bg-gold/10">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Rycca Brand Positioning */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                The <span className="text-gold">Rycca</span> Difference
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Every project undergoes rigorous research, legal verification, and location analysis. 
                We don't just sell land—we create structured investment opportunities with transparent 
                documentation, clear titles, and zero ambiguity.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-background rounded-lg">
                  <FileCheck className="w-12 h-12 text-gold mx-auto mb-4" />
                  <h3 className="font-display font-bold mb-2">100% Compliance</h3>
                  <p className="text-sm text-muted-foreground">All regulatory approvals in place</p>
                </div>
                <div className="p-6 bg-background rounded-lg">
                  <Landmark className="w-12 h-12 text-gold mx-auto mb-4" />
                  <h3 className="font-display font-bold mb-2">Clear Titles</h3>
                  <p className="text-sm text-muted-foreground">Transparent legal documentation</p>
                </div>
                <div className="p-6 bg-background rounded-lg">
                  <Shield className="w-12 h-12 text-gold mx-auto mb-4" />
                  <h3 className="font-display font-bold mb-2">Zero Ambiguity</h3>
                  <p className="text-sm text-muted-foreground">Research-backed land curation</p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
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
                Schedule a site visit and speak with our investment advisors
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gold">
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
