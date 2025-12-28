import { motion } from "framer-motion";
import { useRef } from "react";
import ScrollAnimation from "@/components/ScrollAnimation";
import { Target, Shield, TrendingUp, Users, Award, CheckCircle, Search, FileCheck, Building2, Home, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
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

  const brandPillars = [
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

  const investmentMethod = [
    {
      step: "Step 1",
      title: "Clarity",
      description: "Transparent approvals, simple workflows, and clear communication at every stage",
    },
    {
      step: "Step 2",
      title: "Credibility",
      description: "Research-led, compliance-first development with 100% legal documentation",
    },
    {
      step: "Step 3",
      title: "Compounding",
      description: "Projects designed for long-term wealth creation and generational value",
    },
  ];

  const investorAdvantages = [
    { icon: Search, text: "Research-led selection" },
    { icon: Shield, text: "100% legal compliance" },
    { icon: FileCheck, text: "Transparent paperwork" },
    { icon: CheckCircle, text: "Predictable execution" },
    { icon: TrendingUp, text: "Growth-driven planning" },
    { icon: Award, text: "Long-term appreciation mindset" },
  ];

  const whatMakesUsDifferent = [
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

      {/* Brand Value Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation direction="left">
              <div>
                <h2 className="text-4xl font-display font-bold mb-6">
                  Our <span className="text-gold">Vision</span>
                </h2>
                <p className="text-xl font-display text-foreground mb-6">
                  To cater to 5,000 house owners over the next five to ten years and become a leader in delivering hassle-free, high-quality real estate developments.
                </p>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    <span className="font-semibold text-gold">Rycca Ventures</span> is positioned as a forward-thinking real estate development firm, specializing in strategically located projects that offer maximum value to investors and end-users alike.
                  </p>
                  <p>
                    Our focus is on delivering top-class infrastructure, ensuring transparent, hassle-free ownership experiences, and creating developments that stand the test of time. We are a modern, premium, and trustworthy brand in the North Bangalore real estate market.
                  </p>
                </div>
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

      {/* Company History/Milestones */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Our <span className="text-gold">Journey</span>
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

      {/* Track Record Stats - Moved before Clients */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Our <span className="text-gold">Track Record</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Clean, minimal, and credibility-focused numbers that speak for themselves
              </p>
            </div>
          </ScrollAnimation>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <ScrollAnimation delay={0.1} direction="up">
              <div className="text-center p-6 bg-secondary rounded-lg hover:shadow-xl transition-all duration-300">
                <div className="text-4xl md:text-5xl font-display font-bold text-gold mb-2">400+</div>
                <p className="text-muted-foreground">Happy Families</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={0.2} direction="up">
              <div className="text-center p-6 bg-secondary rounded-lg hover:shadow-xl transition-all duration-300">
                <div className="text-4xl md:text-5xl font-display font-bold text-gold mb-2">30+</div>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={0.3} direction="up">
              <div className="text-center p-6 bg-secondary rounded-lg hover:shadow-xl transition-all duration-300">
                <div className="text-4xl md:text-5xl font-display font-bold text-gold mb-2">24%+</div>
                <p className="text-muted-foreground">Avg. ROI Delivered</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={0.4} direction="up">
              <div className="text-center p-6 bg-secondary rounded-lg hover:shadow-xl transition-all duration-300">
                <div className="text-4xl md:text-5xl font-display font-bold text-gold mb-2">100%</div>
                <p className="text-muted-foreground">A-Khata Projects</p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Our Clients - Hero Style Section */}
      <section className="relative py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/70" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-white">
                  Our <span className="text-gold">Clients</span>
                </h2>
                <p className="text-xl text-white/90 mb-6">
                  We have proudly sold plots to more than 400 happy families, including doctors, businessmen, and NRIs — many of whom are repeat customers purchasing at least one plot in every project we develop.
                </p>
                <p className="text-lg text-gold font-display italic">
                  "Our focus remains on quality, strategic location advantage, strict compliance with government regulations, and delivering true value for money."
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <Users className="w-12 h-12 text-gold mx-auto mb-4" />
                  <h3 className="text-3xl font-display font-bold text-white mb-2">400+</h3>
                  <p className="text-white/80">Happy Families</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <Award className="w-12 h-12 text-gold mx-auto mb-4" />
                  <h3 className="text-3xl font-display font-bold text-white mb-2">50%+</h3>
                  <p className="text-white/80">Repeat Customers</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <Building2 className="w-12 h-12 text-gold mx-auto mb-4" />
                  <h3 className="text-3xl font-display font-bold text-white mb-2">NRIs</h3>
                  <p className="text-white/80">Global Investors</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <Target className="w-12 h-12 text-gold mx-auto mb-4" />
                  <h3 className="text-3xl font-display font-bold text-white mb-2">100%</h3>
                  <p className="text-white/80">Satisfaction</p>
                </div>
              </div>
            </div>
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
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
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

      {/* Brand Pillars */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Brand <span className="text-gold">Pillars</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The three foundations of every Rycca project
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {brandPillars.map((pillar, index) => (
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

      {/* The Rycca Investment Method */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                The Rycca Investment <span className="text-gold">Method™</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Why Investors Choose Rycca
              </p>
            </div>
          </ScrollAnimation>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {investmentMethod.map((method, index) => (
                <ScrollAnimation key={index} delay={index * 0.1} direction="up">
                  <div className="relative bg-background p-8 rounded-lg hover:shadow-xl transition-all duration-300">
                    <div className="absolute -top-4 left-8">
                      <span className="inline-block px-4 py-2 bg-gold text-white font-display font-bold rounded-full">
                        {method.step}
                      </span>
                    </div>
                    <h3 className="text-2xl font-display font-bold mb-4 mt-4">{method.title}</h3>
                    <p className="text-muted-foreground">{method.description}</p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>

            {/* Investor Advantages Grid */}
            <ScrollAnimation>
              <div className="bg-background p-8 rounded-lg">
                <h3 className="text-3xl font-display font-bold mb-8 text-center">
                  Your Investment, <span className="text-gold">Upgraded</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {investorAdvantages.map((advantage, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 bg-secondary rounded-lg hover:bg-gold/5 transition-all duration-300"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                        <advantage.icon className="w-5 h-5 text-gold" />
                      </div>
                      <p className="font-medium">{advantage.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;