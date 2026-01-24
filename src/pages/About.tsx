import { motion } from "framer-motion";
import { useRef } from "react";
import ScrollAnimation from "@/components/ScrollAnimation";
import { Target, Shield, TrendingUp, Users, Award, CheckCircle, Search, FileCheck, Building2, ChevronLeft, ChevronRight, Lightbulb, Eye, Crosshair } from "lucide-react";
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
  const leadership = [
    {
      name: "Leadership Team",
      role: "Founders",
      description: "Our leadership brings over three decades of real estate expertise, having started the journey in 1992 with properties in BTM Layout, Bangalore.",
      image: aboutTeam,
    }
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
      title: "Research-first acquisition",
      description: "Every land parcel undergoes rigorous due diligence before acquisition, analyzing growth corridors, infrastructure development, and appreciation potential.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
    },
    {
      title: "Compliance-led development",
      description: "We prioritize 100% regulatory compliance including RERA, BMRDA, A-Khata approvals ensuring hassle-free ownership experience.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80",
    },
    {
      title: "Investor-education-led sales",
      description: "We don't just sell plots—we educate investors about location logic, growth indicators, and long-term value creation strategies.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
    },
    {
      title: "Generational-value projects",
      description: "Projects designed not just for immediate returns but for creating lasting wealth that can be passed down through generations.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80",
    },
    {
      title: "Slow, thoughtful rollout",
      description: "We prioritize quality over speed, ensuring every detail is perfected before project delivery for maximum value realization.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
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
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                <span className="text-gold">Leadership</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Guided by experience, driven by vision
              </p>
            </div>
          </ScrollAnimation>

          <div className="max-w-4xl mx-auto">
            {leadership.map((leader, index) => (
              <ScrollAnimation key={index} direction="up">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="relative">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="rounded-lg shadow-2xl w-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-3xl font-display font-bold mb-2">{leader.name}</h3>
                    <p className="text-gold text-lg mb-6">{leader.role}</p>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {leader.description}
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
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
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                  What We Bring to the <span className="text-gold">Table</span>
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
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {whatWeBring.map((item, index) => (
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
                    <h3 className="text-xl font-display font-bold text-white">{item.title}</h3>
                  </div>
                  
                  {/* On Hover: Full overlay with description */}
                  <div className="absolute inset-0 bg-gold/90 p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
                      <span className="text-white font-bold text-lg">{index + 1}</span>
                    </div>
                    <h3 className="text-xl font-display font-bold text-white mb-4">{item.title}</h3>
                    <p className="text-white/90 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
