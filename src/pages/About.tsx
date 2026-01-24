import { motion } from "framer-motion";
import { useRef } from "react";
import ScrollAnimation from "@/components/ScrollAnimation";
import { Target, TrendingUp, Award, CheckCircle, ChevronLeft, ChevronRight, Eye, Crosshair } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";
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

  // 1st Scroll - Our Vision
  const vision = {
    title: "Our Vision",
    description: "To cater to 5,000 house owners over the next five to ten years and become a leader in delivering hassle-free, high-quality real estate developments.",
    details: "Rycca Ventures is positioned as a forward-thinking real estate development firm, specializing in strategically located projects that offer maximum value to investors and end-users alike."
  };

  // 2nd Scroll - Our Mission
  const mission = {
    title: "Our Mission",
    description: "To deliver top-class infrastructure, ensuring transparent, hassle-free ownership experiences, and creating developments that stand the test of time.",
    points: [
      "Quality-first development approach",
      "Strategic location advantage",
      "Strict compliance with government regulations",
      "True value for money"
    ]
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
      name: "Mr. John Joe",
      role: "Managing Director",
      image: aboutTeam,
      bgColor: "bg-blue-200",
    },
    {
      name: "Mr. John Joe",
      role: "Managing Director",
      image: aboutTeam,
      bgColor: "bg-amber-200",
    },
    {
      name: "Mr. John Joe",
      role: "Managing Director",
      image: aboutTeam,
      bgColor: "bg-pink-200",
    },
  ];

  // 4th Scroll - Team & Experience
  const milestones = [
    {
      year: "1992",
      title: "Our Roots",
      description: "The founder's journey in real estate began with properties in BTM Layout, Bangalore.",
    },
    {
      year: "2013",
      title: "First Developer Project",
      description: "Launched our first project as a developer in Nelamangala through a joint venture. Today, 20+ happy families reside there with a steady ROI of 20.94%.",
    },
    {
      year: "2020",
      title: "Premium Layout",
      description: "Developed a premium 1-acre residential layout featuring doubly reinforced concrete roads, delivering a strong ROI of 23.33%.",
    },
    {
      year: "2025",
      title: "Silicon Fairworth",
      description: "Launched Rycca Silicon Fairworth with 45 plots registered since April 2025 and 30 more bookings in record time.",
    },
  ];

  // 5th Scroll - Value Proposition for Investors
  const investorValueProposition = [
    {
      icon: Target,
      title: "Strategic Location Value",
      description: "Infrastructure pipeline and growth indicators carefully analyzed for maximum appreciation potential",
    },
    {
      icon: TrendingUp,
      title: "Intelligent Planning",
      description: "Research-first acquisition with value-focused zoning and land-use optimization",
    },
    {
      icon: Award,
      title: "Value-Per-Risk Ratio",
      description: "Projects planned for long-term wealth creation with predictable execution timelines",
    },
  ];

  // 6th Scroll - What We Bring to the Table
  const whatWeBring = [
    {
      title: "Deep Land-Market Research",
      description: "We evaluate micro-markets using economic, infrastructure and growth data before every acquisition.",
      position: "top-left",
    },
    {
      title: "Rigorous Due-Diligence & Legal Compliance",
      description: "Every parcel is verified: titles, approvals, zoning, compliance with local planning authorities.",
      position: "top-right",
    },
    {
      title: "Holistic Master-Planning & Value Engineering",
      description: "Plots are planned considering long-term resale value, infrastructure readiness, and livability.",
      position: "bottom-left",
    },
    {
      title: "Transparent Investor Communication",
      description: "From approvals to payment schedules, everything is clear and documented — no hidden costs.",
      position: "bottom-right",
    },
    {
      title: "Investor-Ready Product Delivery",
      description: "Plots are planned considering long-term resale value, infrastructure readiness, and livability.",
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

      {/* 1st Scroll - Our Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation direction="left">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center">
                    <Eye className="w-7 h-7 text-gold" />
                  </div>
                  <h2 className="text-4xl font-display font-bold">
                    Our <span className="text-gold">Vision</span>
                  </h2>
                </div>
                <p className="text-xl font-display text-foreground mb-6">
                  {vision.description}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {vision.details}
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="right">
              <div className="relative overflow-hidden">
                <img
                  src={aboutTeam}
                  alt="Rycca Team"
                  className="rounded-lg shadow-2xl w-full"
                />
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gold/10 rounded-lg -z-10 hidden sm:block" />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* 2nd Scroll - Our Mission */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center">
                  <Crosshair className="w-7 h-7 text-gold" />
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold">
                  Our <span className="text-gold">Mission</span>
                </h2>
              </div>
              <p className="text-xl text-center text-foreground mb-12">
                {mission.description}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {mission.points.map((point, index) => (
                  <ScrollAnimation key={index} delay={index * 0.1} direction="up">
                    <div className="flex items-center gap-4 p-6 bg-background rounded-lg hover:shadow-lg transition-all duration-300">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-gold" />
                      </div>
                      <p className="font-medium text-lg">{point}</p>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* 3rd Scroll - Leadership */}
      <section className="py-20 bg-background overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-6">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 italic">
                OUR <span className="text-foreground">LEADERSHIP</span>
              </h2>
            </div>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-4">
              A team driven by clarity, integrity, and economically logical decision-making.
            </p>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
              Rycca's leaders bring deep experience across land acquisition, compliance, planning, and investor advisory.
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
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
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
                      <div className={`absolute inset-0 ${leader.bgColor} rounded-lg transform translate-x-2 translate-y-2`} 
                           style={{ width: '85%', height: '90%', top: '5%', left: '7.5%' }} />
                      <motion.img
                        src={leader.image}
                        alt={leader.name}
                        className="relative z-10 w-64 h-80 object-cover object-top"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                    {/* Name and Role */}
                    <h3 className="text-xl font-display font-bold text-foreground">{leader.name}</h3>
                    <p className="text-muted-foreground">{leader.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <ScrollAnimation delay={0.3}>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mt-12 italic">
              Their vision is simple — build developments that outlast cycles and create intelligent wealth for every investor.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* 4th Scroll - Team & Experience */}
      <section className="py-20 bg-secondary">
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
                        <span className="text-gold font-bold text-lg">{milestone.year}</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5th Scroll - Value Proposition for Investors */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Value Proposition for <span className="text-gold">Investors</span>
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
                  <h3 className="text-2xl font-display font-bold mb-4">{pillar.title}</h3>
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
            <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16 italic">
              WHAT WE BRING ON THE <span className="text-foreground">TABLE</span>
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
                    <p className="text-2xl font-display font-bold text-gold">RYCCA</p>
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
                  <h3 className="font-display font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Desktop: Hub-Spoke Layout */}
            <div className="hidden md:block relative min-h-[600px]">
              {/* Center Circle */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
              >
                <div className="w-52 h-52 rounded-full border-2 border-muted-foreground/30 flex items-center justify-center bg-background shadow-xl">
                  <div className="text-center">
                    <p className="text-xl font-display">Why trust</p>
                    <p className="text-3xl font-display font-bold text-gold">RYCCA</p>
                    <p className="text-xl font-display">with your</p>
                    <p className="text-xl font-display">Capital?</p>
                  </div>
                </div>
              </motion.div>

              {/* Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                {/* Top Left Line */}
                <motion.line
                  x1="25%" y1="18%" x2="45%" y2="38%"
                  stroke="currentColor" strokeWidth="1" className="text-muted-foreground/30"
                  initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }} viewport={{ once: true }}
                />
                {/* Top Right Line */}
                <motion.line
                  x1="75%" y1="18%" x2="55%" y2="38%"
                  stroke="currentColor" strokeWidth="1" className="text-muted-foreground/30"
                  initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }} viewport={{ once: true }}
                />
                {/* Bottom Left Line */}
                <motion.line
                  x1="15%" y1="65%" x2="42%" y2="55%"
                  stroke="currentColor" strokeWidth="1" className="text-muted-foreground/30"
                  initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }} viewport={{ once: true }}
                />
                {/* Bottom Right Line */}
                <motion.line
                  x1="85%" y1="65%" x2="58%" y2="55%"
                  stroke="currentColor" strokeWidth="1" className="text-muted-foreground/30"
                  initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }} viewport={{ once: true }}
                />
                {/* Bottom Center Line */}
                <motion.line
                  x1="50%" y1="90%" x2="50%" y2="70%"
                  stroke="currentColor" strokeWidth="1" className="text-muted-foreground/30"
                  initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
                  transition={{ duration: 0.8, delay: 0.7 }} viewport={{ once: true }}
                />
              </svg>

              {/* Top Left Card */}
              <motion.div
                initial={{ opacity: 0, x: -30, y: -30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="absolute left-0 top-0 w-80 bg-background border border-muted-foreground/20 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="font-display font-bold text-foreground mb-2">{whatWeBring[0].title}</h3>
                <p className="text-sm text-muted-foreground">{whatWeBring[0].description}</p>
              </motion.div>

              {/* Top Right Card */}
              <motion.div
                initial={{ opacity: 0, x: 30, y: -30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute right-0 top-0 w-80 bg-background border border-muted-foreground/20 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="font-display font-bold text-foreground mb-2">{whatWeBring[1].title}</h3>
                <p className="text-sm text-muted-foreground">{whatWeBring[1].description}</p>
              </motion.div>

              {/* Bottom Left Card */}
              <motion.div
                initial={{ opacity: 0, x: -30, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="absolute left-0 top-[55%] w-80 bg-background border border-muted-foreground/20 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="font-display font-bold text-foreground mb-2">{whatWeBring[2].title}</h3>
                <p className="text-sm text-muted-foreground">{whatWeBring[2].description}</p>
              </motion.div>

              {/* Bottom Right Card */}
              <motion.div
                initial={{ opacity: 0, x: 30, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute right-0 top-[55%] w-80 bg-background border border-muted-foreground/20 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="font-display font-bold text-foreground mb-2">{whatWeBring[3].title}</h3>
                <p className="text-sm text-muted-foreground">{whatWeBring[3].description}</p>
              </motion.div>

              {/* Bottom Center Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-80 bg-background border border-muted-foreground/20 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="font-display font-bold text-foreground mb-2">{whatWeBring[4].title}</h3>
                <p className="text-sm text-muted-foreground">{whatWeBring[4].description}</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
