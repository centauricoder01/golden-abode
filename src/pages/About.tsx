import { motion } from "framer-motion";
import ScrollAnimation from "@/components/ScrollAnimation";
import { Target, Shield, TrendingUp, Users, Award, CheckCircle, Search, FileCheck, Building2, Home, Calendar } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";

const About = () => {
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
    "Research-first acquisition",
    "Compliance-led development",
    "Investor-education-led sales",
    "Generational-value projects",
    "Slow, thoughtful rollout for maximum quality",
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
    <div className="min-h-screen pt-20 overflow-x-hidden">
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
              About <span className="text-gold">Rycca Ventures</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              For Investors
            </p>
            <p className="text-2xl font-display">
              Where clarity meets long-term capital growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Brand Value Section */}
      <section className="py-20">
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

      {/* Track Record Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Our <span className="text-gold">Track Record</span>
              </h2>
            </div>
          </ScrollAnimation>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <ScrollAnimation delay={0.1} direction="up">
              <div className="text-center p-6 bg-secondary rounded-lg">
                <div className="text-4xl md:text-5xl font-display font-bold text-gold mb-2">400+</div>
                <p className="text-muted-foreground">Happy Families</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={0.2} direction="up">
              <div className="text-center p-6 bg-secondary rounded-lg">
                <div className="text-4xl md:text-5xl font-display font-bold text-gold mb-2">30+</div>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={0.3} direction="up">
              <div className="text-center p-6 bg-secondary rounded-lg">
                <div className="text-4xl md:text-5xl font-display font-bold text-gold mb-2">24%+</div>
                <p className="text-muted-foreground">Avg. ROI Delivered</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={0.4} direction="up">
              <div className="text-center p-6 bg-secondary rounded-lg">
                <div className="text-4xl md:text-5xl font-display font-bold text-gold mb-2">100%</div>
                <p className="text-muted-foreground">A-Khata Projects</p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                What Makes Us <span className="text-gold">Different</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Five principles that define the Rycca approach
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                {whatMakesUsDifferent.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-6 bg-background rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center">
                      <span className="text-gold font-bold">{index + 1}</span>
                    </div>
                    <p className="text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Brand Pillars */}
      <section className="py-20">
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

      {/* Our Clients */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
                Our <span className="text-gold">Clients</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                We have proudly sold plots to more than 400 happy families, including doctors, businessmen, and NRIs — many of whom are repeat customers purchasing at least one plot in every project we develop.
              </p>
              <p className="text-lg text-foreground font-semibold">
                "Our focus remains on quality, strategic location advantage, strict compliance with government regulations, and delivering true value for money."
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default About;
