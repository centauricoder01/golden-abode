import { motion } from "framer-motion";
import ScrollAnimation from "@/components/ScrollAnimation";
import { Target, Eye, Heart, Briefcase } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission",
      description: "To create exceptional living spaces that enhance lifestyles and build lasting value for our clients.",
    },
    {
      icon: Eye,
      title: "Vision",
      description: "To be the most trusted name in luxury real estate development, known for innovation and excellence.",
    },
    {
      icon: Heart,
      title: "Values",
      description: "Integrity, quality, and client satisfaction drive every decision we make and every property we build.",
    },
    {
      icon: Briefcase,
      title: "Expertise",
      description: "Decades of combined experience in architecture, construction, and real estate development.",
    },
  ];

  const stats = [
    { number: "25+", label: "Years Experience" },
    { number: "150+", label: "Projects Completed" },
    { number: "5000+", label: "Happy Families" },
    { number: "50+", label: "Awards Won" },
  ];

  return (
    <div className="min-h-screen pt-20">
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
              About <span className="text-gold">Us</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Building more than properties – we're building dreams, communities, and legacies that stand the test of time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation direction="left">
              <div>
                <h2 className="text-4xl font-display font-bold mb-6">
                  Our <span className="text-gold">Story</span>
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Founded over two decades ago with a vision to transform the real estate landscape, we have grown from a small family business into one of the most respected names in luxury property development.
                  </p>
                  <p>
                    Our journey began with a simple belief: every home should be a masterpiece, and every property should exceed expectations. This philosophy has guided us through every project, every decision, and every relationship we've built.
                  </p>
                  <p>
                    Today, we stand proud as creators of some of the most sought-after properties in the region, but we remain humble and committed to the same values that started it all – quality, integrity, and unwavering dedication to our clients.
                  </p>
                  <p className="text-foreground font-semibold">
                    We don't just build properties; we build homes where memories are made, where families grow, and where dreams come true.
                  </p>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="right">
              <div className="relative">
                <img
                  src={aboutTeam}
                  alt="Our Team"
                  className="rounded-lg shadow-2xl w-full"
                />
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gold/10 rounded-lg -z-10" />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Our Core <span className="text-gold">Principles</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The foundation of everything we do
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <ScrollAnimation key={index} delay={index * 0.1} direction="up">
                <div className="bg-background p-8 rounded-lg hover:shadow-xl transition-all duration-300 h-full">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 text-gold mb-6">
                    <value.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-gold-dark via-gold to-gold-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <ScrollAnimation key={index} delay={index * 0.1}>
                <div className="text-center text-white">
                  <div className="text-5xl md:text-6xl font-display font-bold mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg opacity-90">{stat.label}</div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Team Philosophy */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
                Meet Our <span className="text-gold">Expertise</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our team brings together architects, engineers, designers, and real estate experts who share a passion for excellence. With diverse backgrounds and specialized skills, we collaborate to ensure every project exceeds expectations.
              </p>
              <p className="text-lg text-foreground font-semibold">
                "Excellence is not a destination, it's a continuous journey. We are committed to evolving, innovating, and delivering beyond expectations."
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default About;
