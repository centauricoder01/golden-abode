import { motion } from "framer-motion";
import { useRef, useState } from "react";
import ScrollAnimation from "@/components/ScrollAnimation";
import {
  Target,
  TrendingUp,
  Award,
  ChevronLeft,
  ChevronRight,
  FileCheck,
  ShieldCheck,
  FileText,
  Leaf,
  LineChart,
} from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";
import dimple from "/Dimple.png";
import Mehraram from "/Mehraram.png";
import NitinMR from "/NitinMR.png";
import heroImage from "@/assets/hero-property.jpg";

const About = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // 3rd Scroll - Leadership
  const leadershipScrollRef = useRef<HTMLDivElement>(null);

  const scrollLeadership = (direction: "left" | "right") => {
    if (leadershipScrollRef.current) {
      const scrollAmount = 320;
      leadershipScrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const leadership = [
    {
      name: "Mehraram",
      role: "Managing Director",
      image: Mehraram,
      bgColor: "bg-blue-200",
    },
    {
      name: "Nitin MR",
      role: "Managing Director",
      image: NitinMR,
      bgColor: "bg-amber-200",
    },
    {
      name: "Dimple",
      role: "Managing Director",
      image: dimple,
      bgColor: "bg-pink-200",
    },
  ];

  const whatMakesUsDifferent = [
    {
      title: "Research-first acquisition",
      description:
        "Every land parcel undergoes rigorous due diligence before acquisition, analyzing growth corridors, infrastructure development, and appreciation potential.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
    },
    {
      title: "Compliance-led development",
      description:
        "We prioritize 100% regulatory compliance including RERA, BMRDA, A-Khata approvals ensuring hassle-free ownership experience.",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80",
    },
    {
      title: "Investor-education-led sales",
      description:
        "We don't just sell plots—we educate investors about location logic, growth indicators, and long-term value creation strategies.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
    },
    {
      title: "Generational-value projects",
      description:
        "Projects designed not just for immediate returns but for creating lasting wealth that can be passed down through generations.",
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80",
    },
    {
      title: "Slow, thoughtful rollout",
      description:
        "We prioritize quality over speed, ensuring every detail is perfected before project delivery for maximum value realization.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    },
  ];

  // 4th Scroll - Team & Experience
  const milestones = [
    {
      year: "1992",
      title: "Our Roots",
      description:
        "The founder's journey in real estate began with properties in BTM Layout, Bangalore.",
    },
    {
      year: "2013",
      title: "First Developer Project",
      description:
        "Launched our first project as a developer in Nelamangala through a joint venture. Today, 20+ happy families reside there with a steady ROI of 20.94%.",
    },
    {
      year: "2020",
      title: "Premium Layout",
      description:
        "Developed a premium 1-acre residential layout featuring doubly reinforced concrete roads, delivering a strong ROI of 23.33%.",
    },
    {
      year: "2025",
      title: "Silicon Fairworth",
      description:
        "Launched Rycca Silicon Fairworth with 45 plots registered since April 2025 and 30 more bookings in record time.",
    },
  ];

  // 5th Scroll - Value Proposition for Investors
  const investorValueProposition = [
    {
      icon: FileCheck,
      title: "Clear Title & Approvals",
      description:
        "Fully approved plots with clear titles, ready for registration and immediate ownership transfer",
    },
    {
      icon: TrendingUp,
      title: "Realistic Appreciation",
      description:
        "Data-backed growth potential based on location, infrastructure planning, and market demand",
    },
    {
      icon: ShieldCheck,
      title: "Low-Risk Investment",
      description:
        "Legally compliant projects designed to minimize risk with complete regulatory clarity",
    },
    {
      icon: FileText,
      title: "Transparent Process",
      description:
        "End-to-end documentation transparency with no hidden clauses or unexpected surprises",
    },
    {
      icon: Leaf,
      title: "Long-Term Wealth Creation",
      description:
        "Land assets positioned for legacy value, resale opportunities, and passive appreciation",
    },
    {
      icon: LineChart,
      title: "Sustainable Growth",
      description:
        "Projects aligned with long-term development plans ensuring steady, linear value growth",
    },
  ];

  // 6th Scroll - What We Bring to the Table
  const whatWeBring = [
    {
      title: "Deep Land-Market Research",
      description:
        "We evaluate micro-markets using economic, infrastructure and growth data before every acquisition.",
      position: "top-left",
    },
    {
      title: "Rigorous Due-Diligence & Legal Compliance",
      description:
        "Every parcel is verified: titles, approvals, zoning, compliance with local planning authorities.",
      position: "top-right",
    },
    {
      title: "Holistic Master-Planning & Value Engineering",
      description:
        "Plots are planned considering long-term resale value, infrastructure readiness, and livability.",
      position: "bottom-left",
    },
    {
      title: "Transparent Investor Communication",
      description:
        "From approvals to payment schedules, everything is clear and documented — no hidden costs.",
      position: "bottom-right",
    },
    {
      title: "Investor-Ready Product Delivery",
      description:
        "Plots are planned considering long-term resale value, infrastructure readiness, and livability.",
      position: "bottom-center",
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section with Banner Image */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="About Rycca Ventures"
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
              About <span className="text-gold">Rycca Ventures</span>
            </h1>
            <p className="text-2xl md:text-3xl font-display text-gold mt-4">
              Where clarity meets long-term capital growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="sticky top-0 z-40 bg-background mt-5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center gap-4 py-6">
            <a
              href="#about-section"
              className={`px-8 py-3 font-display font-bold rounded-full transition-all bg-secondary text-muted-foreground hover:bg-primary hover:text-white`}
            >
              About Rycca
            </a>
            <a
              href="#leadership-section"
              className={`px-8 py-3 font-display font-bold rounded-full transition-all bg-secondary text-muted-foreground hover:bg-primary hover:text-white`}
            >
              Leadership
            </a>
            <a
              href="#investor-section"
              className={`px-8 py-3 font-display font-bold rounded-full transition-all bg-secondary text-muted-foreground hover:bg-primary hover:text-white`}
            >
              Investor
            </a>
          </div>
        </div>
      </section>

      {/* Vision Section - 3 Column Layout */}
      <section
        className="py-0 bg-background overflow-hidden relative mt-20"
        id="about-section"
      >
        {/* Gradient Fade Overlay at Top */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background via-background/80 to-transparent z-10 pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-3">
          {/* Column 1: VISION Text with Shadow (Mobile: appears first) */}
          <ScrollAnimation direction="left">
            <div className="relative bg-[#C9A05C] flex items-center justify-center py-16 lg:py-0 order-1 overflow-hidden min-h-[400px] lg:min-h-full">
              {/* Background Shadow Text */}
              <h2
                className="absolute text-[8rem] sm:text-[10rem] lg:text-[12rem] font-display font-bold leading-none tracking-tight opacity-40"
                style={{
                  writingMode: "vertical-rl",
                  textOrientation: "mixed",
                  transform: "rotate(180deg)",
                  color: "#d4b47a",
                  textShadow: "3px 3px 8px rgba(26, 43, 74, 0.2)",
                }}
              >
                VISION
              </h2>

              {/* Main VISION Text */}
              <h2
                className="relative z-10 text-6xl sm:text-7xl lg:text-8xl font-display font-bold leading-none tracking-tight"
                style={{
                  writingMode: "vertical-rl",
                  textOrientation: "mixed",
                  transform: "rotate(180deg)",
                  color: "#1a2b4a",
                }}
              >
                VISION
              </h2>
            </div>
          </ScrollAnimation>

          {/* Column 2: Image (Mobile: appears second) */}
          <ScrollAnimation direction="up">
            <div className="relative bg-white flex items-center justify-center p-0 order-2 min-h-[500px] lg:min-h-full">
              <img
                src="/vertical-image.jpg"
                alt="Vision - Planning and Strategy"
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollAnimation>

          {/* Column 3: Content (Mobile: appears third) */}
          <ScrollAnimation direction="right">
            <div className="bg-[#1a2b4a] text-white flex items-center justify-center p-8 lg:p-12 xl:p-16 order-3 min-h-[400px] lg:min-h-full">
              <div className="max-w-xl">
                <h3 className="text-3xl lg:text-4xl xl:text-5xl font-display font-bold mb-6 lg:mb-8 pb-4 border-b-2 border-white/30">
                  The Logic of Legacy
                </h3>
                <p className="text-base lg:text-lg xl:text-xl leading-relaxed text-white/90">
                  To redefine land ownership through economically logical
                  developments designed to outlast market cycles and strengthen
                  generational wealth.
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Mission Section - 3 Column Layout (Reversed) */}
      <section
        className="py-0 bg-background overflow-hidden"
        id="mission-section"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {/* Column 1: Content (Mobile: appears third, Desktop: appears first) */}
          <ScrollAnimation direction="left">
            <div className="bg-[#5c3a2e] text-white flex items-center justify-center p-8 lg:p-12 xl:p-16 order-3 lg:order-1 min-h-[400px] lg:min-h-full">
              <div className="max-w-xl">
                <p className="text-base lg:text-lg xl:text-xl leading-relaxed text-white/90 mb-6 lg:mb-8">
                  Acquire high-potential land parcels through research-first,
                  economically logical evaluation, and develop them with full
                  compliance, transparent approvals, and future-ready
                  infrastructure.
                </p>
                <p className="text-base lg:text-lg xl:text-xl leading-relaxed text-white/90">
                  Educate investors on long-term value creation and deliver
                  steady appreciation through clarity, integrity, and
                  consistent, trustworthy execution
                </p>
              </div>
            </div>
          </ScrollAnimation>

          {/* Column 2: Image (Mobile: appears second, Desktop: appears second) */}
          <ScrollAnimation direction="up">
            <div className="relative bg-white flex items-center justify-center p-0 order-2 min-h-[500px] lg:min-h-full">
              <img
                src="/vertical-image.jpg"
                alt="Mission - Modern Development"
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollAnimation>

          {/* Column 3: MISSION Text with Shadow (Mobile: appears first, Desktop: appears third) */}
          <ScrollAnimation direction="right">
            <div className="relative bg-[#e8e4d8] flex items-center justify-center py-16 lg:py-0 order-1 lg:order-3 overflow-hidden min-h-[400px] lg:min-h-full">
              {/* Background Shadow Text */}
              <h2
                className="absolute text-[8rem] sm:text-[10rem] lg:text-[12rem] font-display font-bold leading-none tracking-tight opacity-40"
                style={{
                  writingMode: "vertical-rl",
                  textOrientation: "mixed",
                  transform: "rotate(180deg)",
                  color: "#f0ebe0",
                  textShadow: "3px 3px 8px rgba(26, 43, 74, 0.2)",
                }}
              >
                MISSION
              </h2>

              {/* Main MISSION Text */}
              <h2
                className="relative z-10 text-6xl sm:text-7xl lg:text-8xl font-display font-bold leading-none tracking-tight"
                style={{
                  writingMode: "vertical-rl",
                  textOrientation: "mixed",
                  transform: "rotate(180deg)",
                  color: "#1a2b4a",
                }}
              >
                MISSION
              </h2>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* 3th Scroll - Team & Experience */}
      <section className="py-20 bg-secondary" id="team-experience-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Team & <span className="text-gold">Experience</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Over three decades of building trust and creating value
              </p>
            </div>
          </ScrollAnimation>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <ScrollAnimation key={index} delay={index * 0.1} direction="up">
                  <div className="flex gap-6 p-6 bg-background rounded-lg hover:shadow-lg transition-all duration-300">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center">
                        <span className="text-gold font-bold text-lg">
                          {milestone.year}
                        </span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4rd Scroll - Leadership */}
      <section
        className="py-20 bg-background overflow-hidden"
        id="leadership-section"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-6">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 italic">
                OUR <span className="text-foreground">LEADERSHIP</span>
              </h2>
            </div>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-4">
              A team driven by clarity, integrity, and economically logical
              decision-making.
            </p>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
              Rycca's leaders bring deep experience across land acquisition,
              compliance, planning, and investor advisory.
            </p>
          </ScrollAnimation>

          {/* Desktop: Grid, Mobile: Horizontal Scroll */}
          <div className="relative">
            {/* Scroll buttons for mobile */}
            <div className="flex md:hidden justify-center gap-4 mb-6">
              <button
                onClick={() => scrollLeadership("left")}
                className="p-2 rounded-full bg-secondary border border-gold/20 hover:border-gold/60 transition-colors"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5 text-gold" />
              </button>
              <button
                onClick={() => scrollLeadership("right")}
                className="p-2 rounded-full bg-secondary border border-gold/20 hover:border-gold/60 transition-colors"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5 text-gold" />
              </button>
            </div>

            <div
              ref={leadershipScrollRef}
              className="flex md:grid md:grid-cols-3 gap-8 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x snap-mandatory md:snap-none scrollbar-hide max-w-5xl mx-auto"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {leadership.map((leader, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="flex-shrink-0 w-[280px] md:w-auto snap-center"
                >
                  <div className="flex flex-col items-center">
                    {/* Image with colored background */}
                    <div className="relative mb-6">
                      <div
                        className={`absolute inset-0 ${leader.bgColor} rounded-lg transform translate-x-2 translate-y-2`}
                        style={{
                          width: "85%",
                          height: "90%",
                          top: "5%",
                          left: "7.5%",
                        }}
                      />
                      <motion.img
                        src={leader.image}
                        alt={leader.name}
                        className="relative z-10 w-64 h-80 object-cover object-top rounded-lg"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                    {/* Name and Role */}
                    <h3 className="text-xl font-display font-bold text-foreground">
                      {leader.name}
                    </h3>
                    <p className="text-muted-foreground">{leader.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <ScrollAnimation delay={0.3}>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mt-12 italic">
              Their vision is simple — build developments that outlast cycles
              and create intelligent wealth for every investor.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* What Makes Us Different - Horizontal Card Scroller */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                  What Makes Us <span className="text-gold">Different</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl">
                  Five principles that define the Rycca approach
                </p>
              </div>
              <div className="hidden md:flex gap-2">
                <button
                  onClick={() => scroll("left")}
                  className="p-3 rounded-full bg-background border border-gold/20 hover:border-gold/60 transition-colors"
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="w-6 h-6 text-gold" />
                </button>
                <button
                  onClick={() => scroll("right")}
                  className="p-3 rounded-full bg-background border border-gold/20 hover:border-gold/60 transition-colors"
                  aria-label="Scroll right"
                >
                  <ChevronRight className="w-6 h-6 text-gold" />
                </button>
              </div>
            </div>
          </ScrollAnimation>

          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {whatMakesUsDifferent.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-[300px] md:w-[350px] snap-start group"
              >
                <div className="relative h-[400px] rounded-xl overflow-hidden cursor-pointer">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                  {/* Default: Title visible */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transition-all duration-300 group-hover:opacity-0">
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center mb-4">
                      <span className="text-gold font-bold">{index + 1}</span>
                    </div>
                    <h3 className="text-xl font-display font-bold text-white">
                      {item.title}
                    </h3>
                  </div>

                  {/* On Hover: Full overlay with description */}
                  <div className="absolute inset-0 bg-gold/90 p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
                      <span className="text-white font-bold text-lg">
                        {index + 1}
                      </span>
                    </div>
                    <h3 className="text-xl font-display font-bold text-white mb-4">
                      {item.title}
                    </h3>
                    <p className="text-white/90 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5th Scroll - Value Proposition for Investors */}
      <section className="py-20 bg-background" id="investor-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Value Proposition for{" "}
                <span className="text-gold">Investors</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The three foundations of every Rycca project
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {investorValueProposition.map((pillar, index) => (
              <ScrollAnimation key={index} delay={index * 0.1} direction="up">
                <div className="bg-secondary p-8 rounded-lg hover:shadow-xl transition-all duration-300 h-full">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 text-gold mb-6">
                    <pillar.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-4">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground">{pillar.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* 6th Scroll - What We Bring to the Table */}
      <section className="py-20 bg-secondary overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-center  italic">
              WHAT WE BRING ON THE{" "}
              <span className="text-foreground">TABLE</span>
            </h2>
          </ScrollAnimation>

          {/* Hub-Spoke Design */}
          <div className="relative max-w-6xl mx-auto">
            {/* Mobile: Stacked Layout */}
            <div className="md:hidden space-y-6">
              {/* Center Circle - Mobile */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex justify-center mb-8"
              >
                <div className="w-48 h-48 rounded-full border-2 border-muted-foreground/30 flex items-center justify-center bg-background shadow-lg">
                  <div className="text-center px-4">
                    <p className="text-lg font-display">Why trust</p>
                    <p className="text-2xl font-display font-bold text-gold">
                      RYCCA
                    </p>
                    <p className="text-lg font-display">with your</p>
                    <p className="text-lg font-display">Capital?</p>
                  </div>
                </div>
              </motion.div>

              {/* Cards - Mobile */}
              {whatWeBring.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-background border border-muted-foreground/20 rounded-lg p-6"
                >
                  <h3 className="font-display font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Desktop: Hub-Spoke Layout */}
            <div
              className="hidden md:block relative"
              style={{ minHeight: "800px" }}
            >
              {/* Connecting Lines - Behind everything */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{ zIndex: 1 }}
              >
                {/* Top Left Line */}
                <motion.line
                  x1="50%"
                  y1="50%"
                  x2="28%"
                  y2="20%"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-muted-foreground/30"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                />
                {/* Top Right Line */}
                <motion.line
                  x1="50%"
                  y1="50%"
                  x2="72%"
                  y2="20%"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-muted-foreground/30"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                />
                {/* Bottom Left Line */}
                <motion.line
                  x1="50%"
                  y1="50%"
                  x2="28%"
                  y2="62%"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-muted-foreground/30"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                />
                {/* Bottom Right Line */}
                <motion.line
                  x1="50%"
                  y1="50%"
                  x2="72%"
                  y2="62%"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-muted-foreground/30"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                />
                {/* Bottom Center Line */}
                <motion.line
                  x1="50%"
                  y1="50%"
                  x2="50%"
                  y2="82%"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-muted-foreground/30"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  viewport={{ once: true }}
                />
              </svg>

              {/* Center Circle */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="absolute inset-0 flex items-center justify-center"
                style={{ zIndex: 10 }}
              >
                <div className="w-64 h-64 rounded-full border-2 border-muted-foreground/30 flex items-center justify-center bg-background shadow-xl">
                  <div className="text-center px-6">
                    <p className="text-xl font-display">Why trust</p>
                    <p className="text-3xl font-display font-bold text-gold">
                      RYCCA
                    </p>
                    <p className="text-xl font-display">with your</p>
                    <p className="text-xl font-display">Capital?</p>
                  </div>
                </div>
              </motion.div>

              {/* Top Left Card */}
              <motion.div
                initial={{ opacity: 0, x: -30, y: -30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="absolute left-16 top-32 w-80 bg-background border border-muted-foreground/20 rounded-lg p-6 hover:shadow-lg transition-shadow"
                style={{ zIndex: 5 }}
              >
                <h3 className="font-display font-bold text-foreground mb-2">
                  {whatWeBring[0].title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {whatWeBring[0].description}
                </p>
              </motion.div>

              {/* Top Right Card */}
              <motion.div
                initial={{ opacity: 0, x: 30, y: -30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute right-20 top-20 w-80 bg-background border border-muted-foreground/20 rounded-lg p-6 hover:shadow-lg transition-shadow"
                style={{ zIndex: 5 }}
              >
                <h3 className="font-display font-bold text-foreground mb-2">
                  {whatWeBring[1].title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {whatWeBring[1].description}
                </p>
              </motion.div>

              {/* Bottom Left Card */}
              <motion.div
                initial={{ opacity: 0, x: -30, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="absolute left-0 top-[52%] w-80 bg-background border border-muted-foreground/20 rounded-lg p-6 hover:shadow-lg transition-shadow"
                style={{ zIndex: 5 }}
              >
                <h3 className="font-display font-bold text-foreground mb-2">
                  {whatWeBring[2].title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {whatWeBring[2].description}
                </p>
              </motion.div>

              {/* Bottom Right Card */}
              <motion.div
                initial={{ opacity: 0, x: 30, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute right-0 top-[52%] w-80 bg-background border border-muted-foreground/20 rounded-lg p-6 hover:shadow-lg transition-shadow"
                style={{ zIndex: 5 }}
              >
                <h3 className="font-display font-bold text-foreground mb-2">
                  {whatWeBring[3].title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {whatWeBring[3].description}
                </p>
              </motion.div>

              {/* Bottom Center Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="absolute left-[37%] bottom-0 transform -translate-x-1/2 w-80 bg-background border border-muted-foreground/20 rounded-lg p-6 hover:shadow-lg transition-shadow"
                style={{ zIndex: 5 }}
              >
                <h3 className="font-display font-bold text-foreground mb-2">
                  {whatWeBring[4].title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {whatWeBring[4].description}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
