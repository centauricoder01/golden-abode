import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ScrollAnimation from "@/components/ScrollAnimation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Home,
  ArrowRight,
  Shield,
  CheckCircle,
  Building2,
  TreePine,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import first from "@/assets/1.png";
import second from "@/assets/2.png";
import third from "@/assets/3.png";
import fourth from "@/assets/4.png";
import fifth from "@/assets/5.png";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const carouselImages = [first, second, third, fourth, fifth];

  const goTo = (index) => setCurrentIndex(index);
  const goNext = () =>
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
  const goPrev = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
    );

  useEffect(() => {
    const timer = setInterval(goNext, 4000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleTouchStart = (e) =>
    setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e) =>
    setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (Math.abs(distance) > 50) {
      distance > 0 ? goNext() : goPrev();
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  const allProjects = [
    {
      id: 1,
      title: "Rycca Silicon Fairworth",
      tagline: "Scandinavian Theme Minimalistic Plots with Maximum Value",
      location: "Doddaballapura, Near DMart",
      fullAddress:
        "Sy. No. 135/2 and 136/2, Raghunathpura Village, Kasaba Hobli, Doddaballapura Taluk, Bengaluru Rural District – 562 163",
      type: "Residential Villa Plots",
      landSize: "1,52,136 Sq.ft.",
      totalPlots: "29 Sites",
      configurations: "30×40, 30×50, 30×48",
      plotFacing: "East & West Facing, Vastu Compliant",
      connectivity:
        "Near ITIR Region (Foxconn, Inox) | NH207 | STRR Connected",
      approvals: ["RERA", "BMRDA", "A-Khata", "STRR Approved"],
      reraNumber: "PRM/KA/RERA/1250/301/PR/130125/007381",
      status: "Now Selling",
      image: second,
      description:
        "Located in the high-growth ITIR corridor near Foxconn and major industrial hubs. Surrounded by premium lifestyle infrastructure including Harrow International, Canadian International School, Vidyashilp Academy, Manipal Hospital, and world-class resorts.",
      keyHighlights: [
        "Strategic ITIR Location",
        "Premium Infrastructure",
        "High ROI Potential",
        "100% Legal Compliance",
      ],
      topAmenities: [
        "Heavy Load Bearing CRCP M20 Grade Roads",
        "Overhead Tank & Functional STP",
        "52% Open Space",
        "Underground Power Cables",
        "100% Vastu Compliant",
      ],
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section with Strong Image */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={first}
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
            <div className="text-center mb-16">
              <Badge className="bg-gold text-white border-0 mb-4 px-6 py-2 text-base">
                Featured Project
              </Badge>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Rycca <span className="text-gold">Silicon Fairworth</span>
              </h2>
              <p className="text-xl text-gold font-display mb-2">
                Scandinavian Theme Minimalistic Plots with Maximum Value
              </p>
            </div>
          </ScrollAnimation>

          {allProjects.map((project) => (
            <div key={project.id} className="max-w-7xl mx-auto">
              {/* Main Image & Info Grid */}
              <ScrollAnimation direction="up">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
                  {/* Image Carousel */}
                  <div
                    className="relative group overflow-hidden rounded-2xl shadow-2xl w-full h-[300px] sm:h-[400px] lg:h-[500px]"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                  >
                    {/* Carousel Images */}
                    {carouselImages.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt={`Rycca Silicon Fairworth ${idx + 1}`}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                          idx === currentIndex ? "opacity-100" : "opacity-0"
                        }`}
                      />
                    ))}

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />

                    {/* Badges */}
                    <div className="absolute top-6 right-6 z-10">
                      <Badge className="bg-gold text-white border-0 px-4 py-2 text-base font-bold">
                        {project.status}
                      </Badge>
                    </div>
                    <div className="absolute top-6 left-6 z-10">
                      <Badge className="bg-white/95 text-foreground border-0 px-4 py-2 text-base font-bold">
                        {project.totalPlots}
                      </Badge>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                      onClick={goPrev}
                      className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-foreground rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={goNext}
                      className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-foreground rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      aria-label="Next image"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>

                    {/* Dot Indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
                      {carouselImages.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => goTo(idx)}
                          className={`rounded-full transition-all duration-300 ${
                            idx === currentIndex
                              ? "w-8 h-3 bg-gold"
                              : "w-3 h-3 bg-white/60 hover:bg-white/80"
                          }`}
                          aria-label={`Go to image ${idx + 1}`}
                        />
                      ))}
                    </div>

                    {/* Image Counter */}
                    <div className="absolute bottom-4 right-4 z-10 bg-black/50 text-white text-xs px-3 py-1 rounded-full">
                      {currentIndex + 1} / {carouselImages.length}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-center space-y-6">
                    {/* Location */}
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-sm text-muted-foreground uppercase tracking-wide mb-1">
                            Location
                          </p>
                          <p className="text-base font-medium">
                            {project.fullAddress}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-secondary rounded-lg">
                        <Home className="w-5 h-5 text-gold mb-2" />
                        <p className="text-xs text-muted-foreground uppercase mb-1">
                          Plot Sizes
                        </p>
                        <p className="text-sm font-bold">
                          {project.configurations}
                        </p>
                      </div>
                      <div className="p-4 bg-secondary rounded-lg">
                        <Building2 className="w-5 h-5 text-gold mb-2" />
                        <p className="text-xs text-muted-foreground uppercase mb-1">
                          Total Area
                        </p>
                        <p className="text-sm font-bold">{project.landSize}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                      <Link to="/contact" className="flex-1">
                        <Button
                          className="bg-gold hover:bg-gold-dark text-white w-full group"
                          size="lg"
                        >
                          Book Site Visit
                          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Key Highlights */}
              <ScrollAnimation direction="up">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                  {project.keyHighlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="p-6 bg-secondary rounded-xl text-center hover:shadow-lg transition-all"
                    >
                      <CheckCircle className="w-8 h-8 text-gold mx-auto mb-3" />
                      <p className="text-sm font-semibold">{highlight}</p>
                    </div>
                  ))}
                </div>
              </ScrollAnimation>
            </div>
          ))}
        </div>
      </section>

      {/* Investment Logic - Compact */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Investment <span className="text-gold">Logic</span>
              </h2>
              <p className="text-lg text-gold font-display max-w-3xl mx-auto">
                Strategic proximity to ITIR region with high job demand and huge
                rental yield potential
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <ScrollAnimation direction="up" delay={0.1}>
              <div className="p-8 bg-background rounded-xl text-center hover:shadow-xl transition-all">
                <Building2 className="w-12 h-12 text-gold mx-auto mb-4" />
                <h4 className="font-display font-bold text-lg mb-2">
                  ITIR Industrial Hub
                </h4>
                <p className="text-sm text-muted-foreground">
                  Foxconn, Inox, and major MSMEs creating massive job demand
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={0.2}>
              <div className="p-8 bg-background rounded-xl text-center hover:shadow-xl transition-all">
                <TreePine className="w-12 h-12 text-gold mx-auto mb-4" />
                <h4 className="font-display font-bold text-lg mb-2">
                  Premium Lifestyle
                </h4>
                <p className="text-sm text-muted-foreground">
                  International schools, hospitals, resorts, and sports villages
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={0.3}>
              <div className="p-8 bg-background rounded-xl text-center hover:shadow-xl transition-all">
                <MapPin className="w-12 h-12 text-gold mx-auto mb-4" />
                <h4 className="font-display font-bold text-lg mb-2">
                  Multi-Road Connectivity
                </h4>
                <p className="text-sm text-muted-foreground">
                  NH207, STRR, with 4 more approach roads emerging
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Approvals - Compact */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                100% <span className="text-gold">Legal Compliance</span>
              </h2>
            </div>
          </ScrollAnimation>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {["RERA", "BMRDA", "A-Khata", "STRR"].map((approval, index) => (
                <ScrollAnimation
                  key={index}
                  delay={index * 0.1}
                  direction="up"
                >
                  <div className="bg-secondary p-6 rounded-xl text-center hover:shadow-lg transition-all border-2 border-gold/20 hover:border-gold/50">
                    <Shield className="w-10 h-10 text-gold mx-auto mb-3" />
                    <h4 className="font-display font-bold">{approval}</h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      Approved
                    </p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>

            <ScrollAnimation>
              <div className="bg-gold/10 p-6 rounded-xl text-center border-2 border-gold/20">
                <p className="text-sm text-muted-foreground mb-2">
                  RERA Registration Number
                </p>
                <p className="text-base font-mono font-bold">
                  PRM/KA/RERA/1250/301/PR/130125/007381
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Top Amenities - Compact */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Premium <span className="text-gold">Amenities</span>
              </h2>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {allProjects[0].topAmenities.map((amenity, idx) => (
              <ScrollAnimation key={idx} delay={idx * 0.05} direction="up">
                <div className="flex items-center gap-3 p-5 bg-background rounded-xl hover:shadow-md transition-all">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-sm font-medium">{amenity}</span>
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
            <div className="text-center text-white max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Ready to Invest in Your Future?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Schedule a site visit and speak with our investment advisors
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white text-gold hover:bg-gold-light border-0 w-full sm:w-auto font-bold"
                  >
                    Book Site Visit
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

export default Projects;