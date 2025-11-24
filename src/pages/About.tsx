import { motion } from "framer-motion";
import ScrollAnimation from "@/components/ScrollAnimation";
import { Target, Shield, TrendingUp, Users, Award, CheckCircle, Search, FileCheck } from "lucide-react";
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
              About <span className="text-gold">Rycca</span>
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
                  To turn land into intelligent wealth through structured, research-driven development.
                </p>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    <span className="font-semibold text-gold">Rycca</span> means <span className="font-semibold">"Real Capital Creation"</span>. 
                    This isn't just our name—it's our mission, our methodology, and our commitment to every investor who trusts us.
                  </p>
                  <p>
                    We believe land isn't just a physical asset—it's a vehicle for structured, generational wealth. Our approach 
                    combines rigorous research, transparent compliance, and intelligent planning to transform land into lasting capital.
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

      {/* Leadership Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
                Leadership & <span className="text-gold">Team</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our team brings together land acquisition specialists, legal experts, urban planners, and financial 
                analysts who share a passion for creating structured, research-backed investment opportunities.
              </p>
              <p className="text-lg text-foreground font-semibold">
                "Real Capital Creation isn't just about buying land—it's about transforming it into intelligent, 
                generational wealth through research, compliance, and strategic planning."
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default About;
