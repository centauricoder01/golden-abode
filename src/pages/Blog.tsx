import { Link } from "react-router-dom";
import ScrollAnimation from "@/components/ScrollAnimation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, ArrowRight } from "lucide-react";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    slug: "bangalore-real-estate-growth-2025",
    title: "Bangalore Real Estate: The Growth Story of 2025",
    excerpt: "Discover why Bangalore continues to be India's top investment destination with unprecedented infrastructure development and tech hub expansion.",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Market Insights",
    image: "/api/placeholder/800/500",
  },
  {
    slug: "rera-approved-projects-guide",
    title: "Why RERA Approval Matters: A Complete Investor Guide",
    excerpt: "Understanding RERA compliance and how it protects your investment. Learn what makes Rycca projects stand out in regulatory excellence.",
    date: "March 10, 2024",
    readTime: "7 min read",
    category: "Investment Guide",
    image: "/api/placeholder/800/500",
  },
  {
    slug: "north-bangalore-infrastructure-boom",
    title: "North Bangalore's Infrastructure Boom: What Investors Need to Know",
    excerpt: "From metro connectivity to international airports - explore why North Bangalore is witnessing unprecedented growth in property values.",
    date: "March 5, 2024",
    readTime: "6 min read",
    category: "Location Spotlight",
    image: "/api/placeholder/800/500",
  },
  {
    slug: "plot-investment-vs-apartments",
    title: "Plot Investment vs. Apartments: Which Delivers Better Returns?",
    excerpt: "A detailed comparison of investment strategies, returns, and long-term appreciation potential in Bangalore's evolving real estate market.",
    date: "February 28, 2024",
    readTime: "8 min read",
    category: "Investment Strategy",
    image: "/api/placeholder/800/500",
  },
  {
    slug: "rycca-edge-investment-method",
    title: "The Rycca Edge: Our Data-Driven Investment Method Explained",
    excerpt: "Go behind the scenes of our proprietary investment methodology that has delivered consistent 30%+ annual returns for our investors.",
    date: "February 20, 2024",
    readTime: "10 min read",
    category: "Company Insights",
    image: "/api/placeholder/800/500",
  },
  {
    slug: "bmrda-approved-townships",
    title: "BMRDA Approved Townships: The Future of Planned Living",
    excerpt: "Why master-planned townships are reshaping Bangalore's residential landscape and what it means for property investors.",
    date: "February 15, 2024",
    readTime: "6 min read",
    category: "Development Trends",
    image: "/api/placeholder/800/500",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-background via-background to-gold/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation direction="up">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
                Insights & <span className="text-gold">Updates</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Expert perspectives on Bangalore real estate, market trends, and investment strategies
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <ScrollAnimation key={post.slug} direction="up" delay={index * 0.1}>
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
                      <CardTitle className="text-xl group-hover:text-gold transition-colors">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-3">
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
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-gold/5 to-background">
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
