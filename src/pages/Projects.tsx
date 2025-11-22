import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ScrollAnimation from "@/components/ScrollAnimation";
import { Button } from "@/components/ui/button";
import { MapPin, Home, Calendar, ArrowRight } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const Projects = () => {
  const allProjects = [
    {
      id: 1,
      title: "Skyline Residences",
      location: "Downtown District",
      type: "High-Rise Apartments",
      units: "180 Units",
      completion: "Completed 2023",
      status: "Completed",
      image: project1,
      description: "Luxury high-rise living with panoramic city views, state-of-the-art amenities, and unparalleled convenience in the heart of downtown.",
      features: ["Infinity Pool", "Gym & Spa", "Smart Home", "24/7 Security"],
    },
    {
      id: 2,
      title: "Paradise Villas",
      location: "Coastal Avenue",
      type: "Luxury Villas",
      units: "45 Villas",
      completion: "Expected Q4 2024",
      status: "Ongoing",
      image: project2,
      description: "Exclusive beachfront villas with private pools, landscaped gardens, and direct beach access for the ultimate tropical lifestyle.",
      features: ["Private Pool", "Beach Access", "Garden", "Sunset Views"],
    },
    {
      id: 3,
      title: "Metropolitan Heights",
      location: "Business Quarter",
      type: "Premium Penthouses",
      units: "25 Penthouses",
      completion: "Launch Q2 2025",
      status: "Pre-Launch",
      image: project3,
      description: "Ultra-luxury penthouses with rooftop terraces, offering sophisticated urban living with breathtaking skyline views.",
      features: ["Rooftop Terrace", "Smart Living", "Concierge", "Premium Finishes"],
    },
  ];

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
              Discover our portfolio of exceptional properties, each designed to redefine luxury living
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {allProjects.map((project, index) => (
              <ScrollAnimation key={project.id} direction={index % 2 === 0 ? "left" : "right"}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
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
                        <span className={`px-4 py-2 rounded-full text-xs font-semibold ${
                          project.status === "Completed"
                            ? "bg-green-500 text-white"
                            : project.status === "Ongoing"
                            ? "bg-blue-500 text-white"
                            : "bg-gold text-white"
                        }`}>
                          {project.status}
                        </span>
                      </div>
                    </div>
                    <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-gold/10 rounded-lg -z-10" />
                  </div>

                  {/* Content */}
                  <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-4xl font-display font-bold mb-4">
                          {project.title}
                        </h2>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <MapPin size={16} className="text-gold" />
                            <span>{project.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Home size={16} className="text-gold" />
                            <span>{project.type}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar size={16} className="text-gold" />
                            <span>{project.completion}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-lg text-muted-foreground">
                        {project.description}
                      </p>

                      <div>
                        <h3 className="text-xl font-display font-semibold mb-3">Key Features</h3>
                        <div className="grid grid-cols-2 gap-3">
                          {project.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-gold rounded-full" />
                              <span className="text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center gap-4 pt-4">
                        <span className="text-2xl font-display font-bold">{project.units}</span>
                        <Link to="/contact">
                          <Button className="bg-gold hover:bg-gold-dark text-white group">
                            Enquire Now
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                          </Button>
                        </Link>
                      </div>
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
                Interested in Our Projects?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Schedule a site visit or speak with our team to learn more about investment opportunities
              </p>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gold">
                  Schedule a Visit
                </Button>
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default Projects;
