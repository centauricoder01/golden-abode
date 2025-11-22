import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Users, Building2, TrendingUp } from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-property.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const Home = () => {
  const features = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "Award-winning designs and world-class construction standards",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Decades of experience in luxury real estate development",
    },
    {
      icon: Building2,
      title: "Prime Locations",
      description: "Carefully selected locations for maximum value and lifestyle",
    },
    {
      icon: TrendingUp,
      title: "Investment Value",
      description: "Properties designed to appreciate and deliver returns",
    },
  ];

  const projects = [
    {
      id: 1,
      title: "Skyline Residences",
      location: "Downtown District",
      image: project1,
      status: "Completed",
    },
    {
      id: 2,
      title: "Paradise Villas",
      location: "Coastal Avenue",
      image: project2,
      status: "Ongoing",
    },
    {
      id: 3,
      title: "Metropolitan Heights",
      location: "Business Quarter",
      image: project3,
      status: "Pre-Launch",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Luxury Property"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight"
            >
              Building Dreams,
              <span className="text-gold block">Creating Legacies</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-xl text-white/90 mb-8 font-body"
            >
              Discover exceptional luxury properties that redefine modern living. Where elegance meets excellence.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/projects">
                <Button size="lg" className="bg-gold hover:bg-gold-dark text-white group">
                  Explore Projects
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-foreground">
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gold rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-gold rounded-full" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Why Choose <span className="text-gold">Us</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experience the difference with our commitment to excellence and innovation
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <ScrollAnimation key={index} delay={index * 0.1} direction="up">
                <div className="text-center p-8 rounded-lg bg-secondary hover:shadow-xl transition-shadow duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 text-gold mb-6">
                    <feature.icon size={32} />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Featured <span className="text-gold">Projects</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our portfolio of exceptional properties
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ScrollAnimation key={project.id} delay={index * 0.15} direction="up">
                <Link to="/projects" className="group block">
                  <div className="relative overflow-hidden rounded-lg shadow-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="inline-block px-3 py-1 bg-gold text-xs font-semibold rounded-full mb-3">
                        {project.status}
                      </span>
                      <h3 className="text-2xl font-display font-bold mb-2">{project.title}</h3>
                      <p className="text-white/90">{project.location}</p>
                    </div>
                  </div>
                </Link>
              </ScrollAnimation>
            ))}
          </div>

          <ScrollAnimation delay={0.5}>
            <div className="text-center mt-12">
              <Link to="/projects">
                <Button size="lg" className="bg-gold hover:bg-gold-dark text-white group">
                  View All Projects
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
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
                Ready to Find Your Dream Home?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Let's discuss how we can bring your vision to life
              </p>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gold">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default Home;
