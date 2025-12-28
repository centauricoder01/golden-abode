import { Link } from "react-router-dom";
import { useRef } from "react";
import { motion } from "framer-motion";
import ScrollAnimation from "@/components/ScrollAnimation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, ArrowRight, ChevronLeft, ChevronRight, BookOpen, Lightbulb, FileText } from "lucide-react";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

import blogBangaloreGrowth from "@/assets/blog-bangalore-growth.jpg";
import blogReraGuide from "@/assets/blog-rera-guide.jpg";
import blogNorthBangalore from "@/assets/blog-north-bangalore.jpg";
import blogInvestmentGrowth from "@/assets/blog-investment-growth.jpg";
import blogPlotVsApartment from "@/assets/blog-plot-vs-apartment.jpg";
import blogMetroInfra from "@/assets/blog-metro-infrastructure.jpg";
import blogRyccaMethod from "@/assets/blog-rycca-method.jpg";
import blogTownships from "@/assets/blog-townships.jpg";

const articles: BlogPost[] = [
  {
    slug: "bangalore-real-estate-growth-2025",
    title: "Bangalore Real Estate: The Growth Story of 2025",
    excerpt: "Discover why Bangalore continues to be India's top investment destination with unprecedented infrastructure development.",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Market Insights",
    image: blogBangaloreGrowth,
  },
  {
    slug: "rera-approved-projects-guide",
    title: "Why RERA Approval Matters: A Complete Investor Guide",
    excerpt: "Understanding RERA compliance and how it protects your investment. Learn what makes Rycca projects stand out.",
    date: "March 10, 2024",
    readTime: "7 min read",
    category: "Investment Guide",
    image: blogReraGuide,
  },
  {
    slug: "north-bangalore-infrastructure-boom",
    title: "North Bangalore's Infrastructure Boom",
    excerpt: "From metro connectivity to international airports - explore why North Bangalore is witnessing unprecedented growth.",
    date: "March 5, 2024",
    readTime: "6 min read",
    category: "Location Spotlight",
    image: blogNorthBangalore,
  },
];

const investorInsights: BlogPost[] = [
  {
    slug: "land-investment-vs-stocks",
    title: "Land Investment vs Stocks: A 10-Year Comparison",
    excerpt: "Analyzing returns, risks, and stability of land investments compared to stock market investments.",
    date: "February 28, 2024",
    readTime: "8 min read",
    category: "Investor Insights",
    image: blogInvestmentGrowth,
  },
  {
    slug: "plot-vs-apartment-investment",
    title: "Plot vs Apartment: Which is Better for Long-term Wealth?",
    excerpt: "A comprehensive analysis of appreciation rates, maintenance costs, and flexibility between plots and apartments.",
    date: "February 20, 2024",
    readTime: "6 min read",
    category: "Investor Insights",
    image: blogPlotVsApartment,
  },
  {
    slug: "infrastructure-impact-property-values",
    title: "How Infrastructure Development Impacts Property Values",
    excerpt: "Understanding the correlation between metro lines, highways, and real estate appreciation.",
    date: "February 15, 2024",
    readTime: "5 min read",
    category: "Investor Insights",
    image: blogMetroInfra,
  },
];

const whitepapers: BlogPost[] = [
  {
    slug: "rycca-investment-methodology",
    title: "The Rycca Investment Methodology",
    excerpt: "A detailed whitepaper on our research-first approach to land acquisition and development.",
    date: "January 2024",
    readTime: "15 min read",
    category: "Whitepaper",
    image: blogRyccaMethod,
  },
  {
    slug: "integrated-townships-future",
    title: "The Future of Integrated Townships in Bangalore",
    excerpt: "Exploring the rise of self-sustained communities and their impact on urban development.",
    date: "December 2023",
    readTime: "12 min read",
    category: "Whitepaper",
    image: blogTownships,
  },
  {
    slug: "sustainable-land-development",
    title: "Sustainable Land Development Practices",
    excerpt: "How modern developers are incorporating eco-friendly practices in plotted developments.",
    date: "November 2023",
    readTime: "10 min read",
    category: "Whitepaper",
    image: blogNorthBangalore,
  },
];

interface ContentScrollerProps {
  items: BlogPost[];
  sectionId: string;
}

const ContentScroller = ({ items, sectionId }: ContentScrollerProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative">
      <div className="absolute -top-16 right-0 hidden md:flex gap-2">
        <button
          onClick={() => scroll("left")}
          className="p-3 rounded-full bg-secondary border border-gold/20 hover:border-gold/60 transition-colors"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5 text-gold" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="p-3 rounded-full bg-secondary border border-gold/20 hover:border-gold/60 transition-colors"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5 text-gold" />
        </button>
      </div>
      
      <div 
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {items.map((post, index) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex-shrink-0 w-[320px] md:w-[380px] snap-start"
          >
            <Link to={`/blog/${post.slug}`} className="group block h-full">
              <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 border-border hover:border-gold/50">
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gold text-white px-3 py-1 text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg group-hover:text-gold transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-gold font-semibold group-hover:gap-3 gap-2 transition-all">
                    Read More
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const Blog = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-background via-background to-gold/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation direction="up">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
                Knowledge <span className="text-gold">Hub</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Expert perspectives on Bangalore real estate, market trends, and investment strategies
              </p>
            </div>
          </ScrollAnimation>

          {/* Navigation Anchors */}
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <a 
              href="#articles" 
              className="flex items-center gap-2 px-6 py-3 bg-secondary rounded-full hover:bg-gold/10 transition-colors border border-gold/20 hover:border-gold/50"
            >
              <BookOpen className="w-5 h-5 text-gold" />
              <span className="font-medium">Articles</span>
            </a>
            <a 
              href="#investor-insights" 
              className="flex items-center gap-2 px-6 py-3 bg-secondary rounded-full hover:bg-gold/10 transition-colors border border-gold/20 hover:border-gold/50"
            >
              <Lightbulb className="w-5 h-5 text-gold" />
              <span className="font-medium">Investor Insights</span>
            </a>
            <a 
              href="#whitepapers" 
              className="flex items-center gap-2 px-6 py-3 bg-secondary rounded-full hover:bg-gold/10 transition-colors border border-gold/20 hover:border-gold/50"
            >
              <FileText className="w-5 h-5 text-gold" />
              <span className="font-medium">Whitepapers</span>
            </a>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section id="articles" className="py-20 bg-background scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-8 h-8 text-gold" />
                <h2 className="text-3xl md:text-4xl font-display font-bold">
                  Articles
                </h2>
              </div>
              <p className="text-muted-foreground max-w-2xl">
                In-depth articles on market trends, location analysis, and real estate insights
              </p>
            </div>
          </ScrollAnimation>

          <ContentScroller items={articles} sectionId="articles" />
        </div>
      </section>

      {/* Investor Insights Section */}
      <section id="investor-insights" className="py-20 bg-secondary scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="w-8 h-8 text-gold" />
                <h2 className="text-3xl md:text-4xl font-display font-bold">
                  Investor Insights
                </h2>
              </div>
              <p className="text-muted-foreground max-w-2xl">
                Strategic investment perspectives and comparative analysis for informed decisions
              </p>
            </div>
          </ScrollAnimation>

          <ContentScroller items={investorInsights} sectionId="investor-insights" />
        </div>
      </section>

      {/* Whitepapers Section */}
      <section id="whitepapers" className="py-20 bg-background scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-8 h-8 text-gold" />
                <h2 className="text-3xl md:text-4xl font-display font-bold">
                  Whitepapers
                </h2>
              </div>
              <p className="text-muted-foreground max-w-2xl">
                Detailed research documents and comprehensive guides on real estate investment
              </p>
            </div>
          </ScrollAnimation>

          <ContentScroller items={whitepapers} sectionId="whitepapers" />
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-gold/10 via-secondary to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation direction="up">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Stay Updated
              </h2>
              <p className="text-muted-foreground mb-8">
                Subscribe to our newsletter for the latest insights, market updates, and exclusive investment opportunities
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-6 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-gold flex-1 max-w-md"
                />
                <button className="px-8 py-3 bg-gold text-white rounded-md hover:bg-gold/90 transition-colors font-semibold">
                  Subscribe
                </button>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default Blog;