import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Building2, TrendingUp, Target, Shield, Users, Lightbulb, CheckCircle } from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-property.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const Home = () => {
  // 1st Scroll - Who We Are
  const whoWeAre = {
    title: "Who We Are",
    subtitle: "Rycca Ventures",
    description: "A forward-thinking real estate development firm specializing in strategically located projects that offer maximum value to investors and end-users alike. We focus on delivering top-class infrastructure, transparent ownership experiences, and developments that stand the test of time.",
  };

  // 2nd Scroll - Our Value Proposition (A framework that drives every decision)
  const valueProposition = [
    {
      icon: Target,
      title: "Strategic Location Value",
      description: "Carefully selected locations with infrastructure pipeline and growth indicators",
    },
    {
      icon: Lightbulb,
      title: "Intelligent Planning",
      description: "Research-first acquisition with value-focused planning and zoning optimization",
    },
    {
      icon: TrendingUp,
      title: "Value-Per-Risk Ratio",
      description: "Projects planned for long-term wealth creation and predictable execution",
    },
  ];

  // 3rd Scroll - Track Record Stats
  const trackRecord = [
    { value: "400+", label: "Happy Families" },
    { value: "30+", label: "Years Experience" },
    { value: "24%+", label: "Avg. ROI Delivered" },
    { value: "100%", label: "A-Khata Projects" },
  ];

  // 4th Scroll - Featured Projects
  const projects = [
    {
      id: 1,
      title: "Silicon Fairworth – Phase 1",
      location: "Doddaballapura, Bangalore",
      image: project1,
      status: "Now Selling",
      isBlurred: false,
      hasVideo: true,
    },
    {
      id: 2,
      title: "Silicon Fairworth – Phase 2",
      location: "Doddaballapura, Bangalore",
      image: project2,
      status: "Coming Soon",
      isBlurred: true,
      hasVideo: false,
    },
    {
      id: 3,
      title: "Upcoming Project",
      location: "North Bangalore",
      image: project3,
      status: "Coming Soon",
      isBlurred: true,
      hasVideo: false,
    },
  ];

  // 5th Scroll - Our Approach
  const ourApproach = [
    {
      icon: Shield,
      title: "100% Compliance",
      description: "STRRPA / BMRDA / RERA / E-Khata",
    },
    {
      icon: Award,
      title: "Research-Backed Land Curation",
      description: "Every project undergoes rigorous research and due diligence",
    },
    {
      icon: CheckCircle,
      title: "Transparent Documentation",
      description: "Clear titles with zero ambiguity in legal processes",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Investor POV */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
            <img
              src={heroImage}
              alt="Luxury Property"
              className="w-full h-full object-cover"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-lg md:text-xl text-gold mb-4 font-display tracking-wider"
            >
              Investor POV
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight"
            >
              Building Legacy
              <span className="text-gold block">Through Land</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-xl text-white/90 mb-8 font-body"
            >
              Emotion-driven land investments for future-ready wealth creation.
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
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-foreground">
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

      {/* 1st Scroll - Who We Are */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                {whoWeAre.title}
              </h2>
              <p className="text-2xl text-gold font-display mb-8">{whoWeAre.subtitle}</p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {whoWeAre.description}
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* 2nd Scroll - Our Value Proposition */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Our Value <span className="text-gold">Proposition</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A framework that drives every decision
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valueProposition.map((item, index) => (
              <ScrollAnimation key={index} delay={index * 0.1} direction="up">
                <div className="text-center p-8 rounded-lg bg-background hover:shadow-xl transition-shadow duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 text-gold mb-6">
                    <item.icon size={32} />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* 3rd Scroll - RYCCA = Real Capital Creation + Our Track Record */}
      <section className="py-16 bg-gradient-to-r from-gold-dark via-gold to-gold-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center text-white mb-12">
              <motion.h2 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-display font-bold"
              >
                RYCCA = <span className="underline decoration-4 underline-offset-8">Real Capital Creation</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-6 text-xl opacity-90 max-w-2xl mx-auto"
              >
                Turning land into structured, research-backed wealth for generations.
              </motion.p>
            </div>
          </ScrollAnimation>

          {/* Track Record Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trackRecord.map((stat, index) => (
              <ScrollAnimation key={index} delay={index * 0.1} direction="up">
                <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-lg">
                  <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">{stat.value}</div>
                  <p className="text-white/80">{stat.label}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* 4th Scroll - Featured Projects */}
      <section className="py-20 bg-background">
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
                    <div className="relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className={`w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110 ${
                          project.isBlurred ? "blur-sm brightness-75" : ""
                        }`}
                      />
                      {project.isBlurred && (
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                          <span className="text-white text-lg font-display font-semibold bg-black/50 px-4 py-2 rounded-full">
                            Coming Soon
                          </span>
                        </div>
                      )}
                      {project.hasVideo && !project.isBlurred && (
                        <div className="absolute top-4 right-4">
                          <span className="bg-gold text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                            Walkthrough Available
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3 ${
                        project.status === "Now Selling" ? "bg-gold" : "bg-muted-foreground"
                      }`}>
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

      {/* 5th Scroll - Our Approach */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Our <span className="text-gold">Approach</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The pillars that define how we build and deliver
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ourApproach.map((item, index) => (
              <ScrollAnimation key={index} delay={index * 0.1} direction="up">
                <div className="h-full p-8 rounded-lg bg-background border-2 border-gold/20 hover:border-gold/40 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold/10 text-gold mb-6">
                    <item.icon size={28} />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-3 text-gold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Strip */}
      <section className="py-20 bg-gradient-to-r from-gold-dark via-gold to-gold-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center text-white">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Start Your Wealth Journey Today
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Book a consultation to explore intelligent investment opportunities
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-gold">
                    Book a Consultation
                  </Button>
                </Link>
                <Link to="/projects">
                  <Button size="lg" className="bg-white text-gold hover:bg-white/90">
                    Download Brochure
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default Home;
