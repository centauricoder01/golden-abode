import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Target,
  TrendingUp,
  Lightbulb,
  Building,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";
import { Button } from "@/components/ui/button";
import project1 from "@/assets/1.png";
import first from "@/assets/1.png";
import second from "@/assets/2.png";
import third from "@/assets/3.png";
import fourth from "@/assets/4.png";
import fifth from "@/assets/5.png";
import React from "react";

const ProjectCard = ({ project, images }) => {
  const projectImages = project.isBlurred ? [project.image] : images;
  const [activeIdx, setActiveIdx] = React.useState(0);
  const [tStart, setTStart] = React.useState(null);
  const [tEnd, setTEnd] = React.useState(null);

  const nextSlide = () =>
    setActiveIdx((prev) => (prev + 1) % projectImages.length);
  const prevSlide = () =>
    setActiveIdx(
      (prev) => (prev - 1 + projectImages.length) % projectImages.length,
    );

  React.useEffect(() => {
    if (project.isBlurred) return;
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [activeIdx, project.isBlurred]);

  const onTouchStart = (e) => setTStart(e.targetTouches[0].clientX);
  const onTouchMove = (e) => setTEnd(e.targetTouches[0].clientX);
  const onTouchEnd = () => {
    if (!tStart || !tEnd) return;
    const dist = tStart - tEnd;
    if (Math.abs(dist) > 50) {
      dist > 0 ? nextSlide() : prevSlide();
    }
    setTStart(null);
    setTEnd(null);
  };

  return (
    <Link to={`/projects`} className="group block">
      <div
        className="relative overflow-hidden rounded-2xl lg:rounded-3xl shadow-2xl h-[500px] sm:h-[600px] lg:h-[700px]"
        onTouchStart={!project.isBlurred ? onTouchStart : undefined}
        onTouchMove={!project.isBlurred ? onTouchMove : undefined}
        onTouchEnd={!project.isBlurred ? onTouchEnd : undefined}
      >
        {projectImages.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${project.title} ${idx + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
              idx === activeIdx
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            } ${project.isBlurred ? "blur-sm brightness-75" : ""}`}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30" />

        {project.isBlurred && (
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <span className="text-white text-xl sm:text-2xl lg:text-3xl font-display font-bold bg-black/60 backdrop-blur-sm px-6 py-3 sm:px-8 sm:py-4 rounded-full border-2 border-white/30">
              Coming Soon
            </span>
          </div>
        )}

        {/* {!project.isBlurred && projectImages.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                prevSlide();
              }}
              className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white rounded-full p-2 sm:p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                nextSlide();
              }}
              className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white rounded-full p-2 sm:p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          </>
        )} */}

        {!project.isBlurred && projectImages.length > 1 && (
          <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {projectImages.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setActiveIdx(idx);
                }}
                className={`rounded-full transition-all duration-300 ${
                  idx === activeIdx
                    ? "w-8 sm:w-10 h-2.5 sm:h-3 bg-gold"
                    : "w-2.5 sm:w-3 h-2.5 sm:h-3 bg-white/50 hover:bg-white/70"
                }`}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>
        )}

        <div className="absolute inset-0 p-6 sm:p-8 lg:p-12 xl:p-16 flex flex-col justify-between z-10">
          <div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-white mb-3 sm:mb-4 leading-tight">
              {project.title}
            </h3>
            <div className="flex items-center gap-2 text-white/90 text-base sm:text-lg lg:text-xl">
              <span>📍</span>
              <span>{project.location}</span>
            </div>
            {project.hasVideo && !project.isBlurred && (
              <div className="mt-4 inline-block">
                <span className="bg-gold/90 backdrop-blur-sm text-white text-xs sm:text-sm font-semibold px-3 py-1.5 sm:px-4 sm:py-2 rounded-full flex items-center gap-2 w-fit">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                  Walkthrough Available
                </span>
              </div>
            )}
          </div>

          <div className="space-y-3 sm:space-y-4">
            {/* {!project.isBlurred && projectImages.length > 1 && (
              <div className="flex justify-end mb-2">
                <span className="bg-black/40 backdrop-blur-sm text-white text-xs sm:text-sm px-3 py-1 rounded-full">
                  {activeIdx + 1} / {projectImages.length}
                </span>
              </div>
            )} */}
            <div>
              <span
                className={`inline-block px-4 py-1.5 sm:px-6 sm:py-2 text-sm sm:text-base font-bold rounded-full ${
                  project.status === "Now Selling"
                    ? "bg-gold text-white"
                    : "bg-white/20 backdrop-blur-sm text-white border border-white/30"
                }`}
              >
                {project.status}
              </span>
            </div>
            {!project.isBlurred && (
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <Button
                  className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-foreground group-hover:border-white transition-all duration-300 w-full sm:w-auto"
                  size="lg"
                >
                  View Details
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

const Home = () => {
  // 1st Scroll - Who We Are
  const whoWeAre = {
    title: "Who We Are",
    subtitle: "Rycca Ventures",
    description:
      "A forward-thinking real estate development firm specializing in strategically located projects that offer maximum value to investors and end-users alike. We focus on delivering top-class infrastructure, transparent ownership experiences, and developments that stand the test of time.",
  };

  // 2nd Scroll - Our Value Proposition (A framework that drives every decision)
  const valueProposition = [
    {
      icon: Target,
      title: "Strategic Location Value",
      description:
        "Carefully selected locations with infrastructure pipeline and growth indicators",
    },
    {
      icon: Lightbulb,
      title: "Intelligent Planning",
      description:
        "Research-first acquisition with value-focused planning and zoning optimization",
    },
    {
      icon: TrendingUp,
      title: "Value-Per-Risk Ratio",
      description:
        "Projects planned for long-term wealth creation and predictable execution",
    },
    {
      icon: Building,
      title: "Market-Aligned Product Strategy",
      description:
        "Products designed around real demand, buyer psychology, and exit liquidity.",
    },
  ];

  // 3rd Scroll - Track Record Stats
  const trackRecord = [
    { value: "400+", label: "Happy Families" },
    { value: "30+", label: "Years Experience" },
    // { value: "Consistent", label: "Value Growth" },
    { value: "20.94%", label: "Straight line ROI" },
    { value: "100%", label: "A-Khata Projects" },
  ];

  // 4th Scroll - Featured Projects
  const projects = [
    {
      id: 1,
      title: "Bengaluru Luxury Living",
      location: "Doddaballapura, Bangalore",
      image: project1,
      status: "Now Selling",
      isBlurred: false,
      hasVideo: true,
    },
  ];

  // 5th Scroll - Our Approach (Timeline)
  const ourApproach = [
    {
      title: "Selecting a locality",
      description:
        "Identify high-potential micro-markets with strong growth indicators.",
      color: "bg-blue-600",
    },
    {
      title: "Market Scan",
      description: "Evaluate land value trends, feasibility, and competition.",
      color: "bg-orange-500",
    },
    {
      title: "Short Listing Properties",
      description:
        "Filter and finalize land parcels that meet our development criteria.",
      color: "bg-green-600",
    },
    {
      title: "Reconnaissance & Proposed Plans",
      description: "Site visits, surveys, and preliminary concept planning.",
      color: "bg-pink-600",
    },
    {
      title: "Land Acquisition / JV After Due-Diligence",
      description:
        "Title checks, compliance review, and regulatory audit. Investor A entry: High risk, high returns, low capital.",
      color: "bg-purple-600",
    },
    {
      title: "Master Planning, Approvals & Layout Design",
      description: "Theme-based master plan and all regulatory approvals.",
      color: "bg-red-600",
    },
    {
      title: "Landscaping & Sustainable Development",
      description:
        "Roads, utilities, green zones, and core development. Investor B entry: Medium risk, balanced returns.",
      color: "bg-amber-500",
    },
    {
      title: "Khata & Registration",
      description: "Complete documentation and registration readiness.",
      color: "bg-pink-500",
    },
    {
      title: "End-User Product Delivery",
      description:
        "Clear documentation, amenities, and customer-ready plots. Investor C entry: Low risk, stable returns, higher capital.",
      color: "bg-cyan-500",
    },
    {
      title: "Long-Term Value Support",
      description:
        "Resale guidance, investment advisory, and transfer assistance.",
      color: "bg-indigo-600",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Investor POV */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          {/* YouTube Video Background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source
              src="https://res.cloudinary.com/dgdh8odrt/video/upload/f_auto,q_auto,vc_auto/main-video-builder_qr6w5y"
              type="video/mp4"
            />
          </video>

          {/* Gradient Overlay */}
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
                <Button
                  size="lg"
                  className="bg-gold hover:bg-gold-dark text-white group"
                >
                  Explore Projects
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-foreground"
                >
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
              <p className="text-2xl text-gold font-display mb-8">
                {whoWeAre.subtitle}
              </p>
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

          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border border-red-500">
            {valueProposition.map((item, index) => (
              <ScrollAnimation key={index} delay={index * 0.1} direction="up">
                <div className="text-center p-8 rounded-lg bg-background hover:shadow-xl transition-shadow duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 text-gold mb-6">
                    <item.icon size={32} />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div> */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valueProposition.map((item, index) => {
              const isLastItem = index === valueProposition.length - 1;

              return (
                <ScrollAnimation
                  key={index}
                  delay={index * 0.1}
                  direction="up"
                  className={isLastItem ? "md:col-start-2" : ""}
                >
                  <div className="text-center p-8 rounded-lg bg-background hover:shadow-xl transition-shadow duration-300">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 text-gold mb-6">
                      <item.icon size={32} />
                    </div>

                    <h3 className="text-xl font-display font-semibold mb-3">
                      {item.title}
                    </h3>

                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3rd Scroll - RYCCA = Real Capital Creation + Our Track Record */}
      <section className="py-16 bg-[#B6772F]">
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
                RYCCA ={" "}
                <span className="underline decoration-4 underline-offset-8">
                  Real Capital Creation
                </span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-6 text-xl opacity-90 max-w-2xl mx-auto"
              >
                Turning land into structured, research-backed wealth for
                generations.
              </motion.p>
            </div>
          </ScrollAnimation>

          {/* Track Record Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trackRecord.map((stat, index) => (
              <ScrollAnimation key={index} delay={index * 0.1} direction="up">
                <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-lg">
                  <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
                    {stat.value}
                  </div>
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

          <div className="space-y-8 max-w-full mx-auto">
            {projects.map((project, index) => (
              <ScrollAnimation
                key={project.id}
                delay={index * 0.15}
                direction="up"
              >
                <ProjectCard
                  project={project}
                  images={[first, second, third, fourth, fifth]}
                />
              </ScrollAnimation>
            ))}
          </div>

          <ScrollAnimation delay={0.5}>
            <div className="text-center mt-12 sm:mt-16">
              <Link to="/projects">
                <Button
                  size="lg"
                  className="bg-gold hover:bg-gold-dark text-white group px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg w-full sm:w-auto"
                >
                  View All Projects
                  <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* 5th Scroll - Our Approach */}
      <section className="py-20 bg-secondary overflow-hidden">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-4">
              <h2 className="text-4xl md:text-5xl font-display font-bold italic">
                OUR <span className="text-foreground">APPROACH</span>
              </h2>
              <div className="w-16 h-1 bg-gold mx-auto mt-4 mb-6" />
              <p className="text-xl text-muted-foreground">
                How we operate Step by Step
              </p>
            </div>
          </ScrollAnimation>

          {/* Desktop Timeline - Alternating Pattern */}
          <div className="hidden lg:block relative  w-full mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 h-1 bg-muted-foreground/30 z-0" />

            {/* Timeline Wrapper with proper height */}
            <div className="relative" style={{ height: "500px" }}>
              {ourApproach.map((step, index) => {
                const isAbove = index % 2 === 0;
                // Better spacing calculation
                const leftPosition = `${(index / (ourApproach.length - 1)) * 85}%`;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: isAbove ? -30 : 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.08 }}
                    viewport={{ once: true }}
                    className="absolute"
                    style={{
                      left: leftPosition,
                      transform: "translateX(-50%)",
                      width: isAbove ? "260px" : "240px",
                      top: isAbove ? "60px" : "calc(50% + 50px)",
                    }}
                  >
                    {/* Content Box */}
                    <div className="bg-background border-2 border-muted rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-gold/50 min-h-[140px]">
                      <h3 className="text-base font-display font-bold text-gold mb-2 leading-tight">
                        {index + 1}. {step.title}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Connector Line from box to dot */}
                    <div
                      className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-muted-foreground/40"
                      style={{
                        [isAbove ? "top" : "bottom"]: "100%",
                        height: isAbove ? "40px" : "40px",
                      }}
                    />

                    {/* Dot on Timeline */}
                    <div
                      className={`absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full ${step.color} border-4 border-secondary z-10 shadow-md`}
                      style={{
                        [isAbove ? "top" : "bottom"]: isAbove
                          ? "calc(100% + 40px)"
                          : "calc(100% + 40px)",
                      }}
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Tablet Timeline */}
          <div className="hidden md:block lg:hidden relative mt-24 mb-24 max-w-5xl mx-auto px-6">
            <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 h-0.5 bg-muted-foreground/30 z-0" />

            <div className="relative" style={{ height: "400px" }}>
              {ourApproach.map((step, index) => {
                const isAbove = index % 2 === 0;
                const leftPosition = `${(index / (ourApproach.length - 1)) * 100}%`;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: isAbove ? -20 : 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    viewport={{ once: true }}
                    className="absolute"
                    style={{
                      left: leftPosition,
                      transform: "translateX(-50%)",
                      width: "140px",
                      top: isAbove ? "0" : "calc(50% + 40px)",
                    }}
                  >
                    <div className="bg-background border-2 border-muted rounded-xl p-3 shadow-md hover:shadow-lg transition-all duration-300 min-h-[110px]">
                      <h3 className="text-xs font-display font-bold text-gold mb-1 leading-tight">
                        {index + 1}. {step.title}
                      </h3>
                      <p className="text-[10px] text-muted-foreground leading-snug">
                        {step.description}
                      </p>
                    </div>

                    <div
                      className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-muted-foreground/40"
                      style={{
                        [isAbove ? "top" : "bottom"]: "100%",
                        height: "30px",
                      }}
                    />

                    <div
                      className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full ${step.color} border-3 border-secondary z-10`}
                      style={{
                        [isAbove ? "top" : "bottom"]: isAbove
                          ? "calc(100% + 30px)"
                          : "calc(100% + 30px)",
                      }}
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Mobile: Vertical Timeline */}
          <div className="md:hidden mt-12 max-w-md mx-auto">
            <div className="space-y-6">
              {ourApproach.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-5 h-5 rounded-full ${step.color} flex-shrink-0 border-4 border-secondary shadow-md`}
                    />
                    {index < ourApproach.length - 1 && (
                      <div className="w-0.5 h-full bg-muted-foreground/30 mt-2" />
                    )}
                  </div>
                  <div className="pb-6 flex-1">
                    <h3 className="text-base font-display font-bold text-gold mb-2">
                      {index + 1}. {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                    {/* Investor Entry Points for Mobile */}
                  </div>
                </motion.div>
              ))}
            </div>
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
                Book a consultation to explore intelligent investment
                opportunities
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-white text-white hover:bg-white hover:text-gold"
                  >
                    Book a Consultation
                  </Button>
                </Link>
                {/* <Link to="/projects">
                  <Button
                    size="lg"
                    className="bg-white text-gold hover:bg-white/90"
                  >
                    Download Brochure
                  </Button>
                </Link> */}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default Home;
