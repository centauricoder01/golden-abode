import { useParams, Link } from "react-router-dom";
import ScrollAnimation from "@/components/ScrollAnimation";
import { Calendar, Clock, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import heroBlogImage from "@/assets/blog-bangalore-growth.jpg";
import metroInfraImage from "@/assets/blog-metro-infrastructure.jpg";
import investmentGrowthImage from "@/assets/blog-investment-growth.jpg";

// Sample blog data - in a real app, this would come from an API or CMS
const blogContent: Record<string, any> = {
  "bangalore-real-estate-growth-2025": {
    title: "Bangalore Real Estate: The Growth Story of 2025",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Market Insights",
    author: "Rycca Research Team",
    image: heroBlogImage,
    content: `
      <h2>Introduction</h2>
      <p>Bangalore's real estate market continues to be one of India's most dynamic and promising sectors. With the city's evolution as a global tech hub and the ongoing infrastructure boom, 2025 is shaping up to be a landmark year for property investors.</p>

      <h2>The Infrastructure Revolution</h2>
      <p>The city is witnessing unprecedented infrastructure development that's reshaping its real estate landscape:</p>
      
      <ul>
        <li><strong>Metro Expansion:</strong> Phase 2 and 3 of Namma Metro are adding over 150+ km of connectivity, directly impacting property values along new corridors.</li>
        <li><strong>Peripheral Ring Road (PRR):</strong> The 65 km expressway is set to reduce travel times by 40% and unlock new development zones.</li>
        <li><strong>Airport Connectivity:</strong> Enhanced connectivity to Kempegowda International Airport is driving growth in North Bangalore.</li>
        <li><strong>Satellite Town Ring Road (STRR):</strong> This 280 km project will create new micro-markets and investment opportunities.</li>
      </ul>

      <h2>Key Growth Corridors</h2>
      <p>Our data indicates three primary growth corridors for 2025:</p>
      
      <h3>1. North Bangalore</h3>
      <p>With metro connectivity, airport proximity, and BMRDA-approved townships, North Bangalore is experiencing 25-30% year-on-year appreciation. Areas like Devanahalli, Chikkajala, and Yelahanka are seeing massive institutional interest.</p>

      <h3>2. East Bangalore</h3>
      <p>The IT corridor expansion towards Whitefield and beyond is creating sustained demand. Our analysis shows consistent 20-25% annual returns in well-planned developments.</p>

      <h3>3. Peripheral Areas</h3>
      <p>Townships along the PRR and STRR routes are offering entry points with 35-40% appreciation potential over the next 3-5 years.</p>

      <h2>Investment Opportunities</h2>
      <p>For investors looking to capitalize on Bangalore's growth, the key is to focus on:</p>
      
      <ul>
        <li>RERA-approved projects with clear title deeds</li>
        <li>Locations with upcoming infrastructure projects</li>
        <li>Master-planned townships with complete amenities</li>
        <li>Developers with proven track records</li>
      </ul>

      <h2>The Rycca Advantage</h2>
      <p>At Rycca, we leverage proprietary data analytics and on-ground intelligence to identify high-potential locations before they become mainstream. Our investment methodology has consistently delivered 30%+ annual returns by focusing on:</p>
      
      <ul>
        <li>Strategic location selection based on infrastructure mapping</li>
        <li>Regulatory compliance (RERA, BMRDA, STRR approvals)</li>
        <li>Scientific pricing based on comparable analysis</li>
        <li>Transparent transaction processes</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Bangalore's real estate market in 2025 offers unprecedented opportunities for informed investors. With the right partner and data-driven approach, you can build significant wealth through strategic property investments.</p>

      <p>Ready to explore investment opportunities? Contact our team for a personalized portfolio analysis.</p>
    `,
  },
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = slug ? blogContent[slug] : null;

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-gold hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-background via-background to-gold/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <ScrollAnimation direction="up">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-gold hover:gap-3 transition-all mb-12 group"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="font-semibold">Back to Blog</span>
            </Link>

            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-gold text-white px-4 py-1.5 text-sm font-semibold rounded-full">
                  {post.category}
                </span>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8 leading-tight">
                {post.title}
              </h1>

              <div className="flex items-center justify-between">
                <p className="text-lg text-muted-foreground">By {post.author}</p>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-muted-foreground">Share:</span>
                  <button className="p-2 hover:bg-gold/10 rounded-full transition-colors">
                    <Facebook className="w-5 h-5 text-gold" />
                  </button>
                  <button className="p-2 hover:bg-gold/10 rounded-full transition-colors">
                    <Twitter className="w-5 h-5 text-gold" />
                  </button>
                  <button className="p-2 hover:bg-gold/10 rounded-full transition-colors">
                    <Linkedin className="w-5 h-5 text-gold" />
                  </button>
                  <button className="p-2 hover:bg-gold/10 rounded-full transition-colors">
                    <Share2 className="w-5 h-5 text-gold" />
                  </button>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <ScrollAnimation direction="up">
            <div className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-5xl mx-auto">
            <ScrollAnimation direction="up">
              <div className="space-y-12">
                {/* Introduction Section */}
                <div className="prose prose-lg max-w-none
                  prose-headings:font-display prose-headings:font-bold prose-headings:text-foreground
                  prose-h2:text-4xl prose-h2:mt-16 prose-h2:mb-10 prose-h2:text-gold
                  prose-h3:text-2xl prose-h3:mt-16 prose-h3:mb-8
                  prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-10 prose-p:text-lg
                  prose-ul:my-10 prose-ul:text-muted-foreground
                  prose-li:mb-4 prose-li:text-lg prose-li:leading-relaxed
                  prose-strong:text-foreground prose-strong:font-semibold">
                  <h2>Introduction</h2>
                  <p>Bangalore's real estate market continues to be one of India's most dynamic and promising sectors. With the city's evolution as a global tech hub and the ongoing infrastructure boom, 2025 is shaping up to be a landmark year for property investors.</p>

                  <h2>The Infrastructure Revolution</h2>
                  <p>The city is witnessing unprecedented infrastructure development that's reshaping its real estate landscape:</p>
                  
                  <ul>
                    <li><strong>Metro Expansion:</strong> Phase 2 and 3 of Namma Metro are adding over 150+ km of connectivity, directly impacting property values along new corridors.</li>
                    <li><strong>Peripheral Ring Road (PRR):</strong> The 65 km expressway is set to reduce travel times by 40% and unlock new development zones.</li>
                    <li><strong>Airport Connectivity:</strong> Enhanced connectivity to Kempegowda International Airport is driving growth in North Bangalore.</li>
                    <li><strong>Satellite Town Ring Road (STRR):</strong> This 280 km project will create new micro-markets and investment opportunities.</li>
                  </ul>
                </div>

                {/* First Image Break */}
                <ScrollAnimation direction="up">
                  <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl my-16">
                    <img
                      src={metroInfraImage}
                      alt="Bangalore Metro Infrastructure Development"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </ScrollAnimation>

                {/* Growth Corridors Section */}
                <div className="prose prose-lg max-w-none
                  prose-headings:font-display prose-headings:font-bold prose-headings:text-foreground
                  prose-h2:text-4xl prose-h2:mt-16 prose-h2:mb-10 prose-h2:text-gold
                  prose-h3:text-2xl prose-h3:mt-16 prose-h3:mb-8
                  prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-10 prose-p:text-lg
                  prose-ul:my-10 prose-ul:text-muted-foreground
                  prose-li:mb-4 prose-li:text-lg prose-li:leading-relaxed
                  prose-strong:text-foreground prose-strong:font-semibold">
                  <h2>Key Growth Corridors</h2>
                  <p>Our data indicates three primary growth corridors for 2025:</p>
                  
                  <h3>1. North Bangalore</h3>
                  <p>With metro connectivity, airport proximity, and BMRDA-approved townships, North Bangalore is experiencing 25-30% year-on-year appreciation. Areas like Devanahalli, Chikkajala, and Yelahanka are seeing massive institutional interest.</p>

                  <h3>2. East Bangalore</h3>
                  <p>The IT corridor expansion towards Whitefield and beyond is creating sustained demand. Our analysis shows consistent 20-25% annual returns in well-planned developments.</p>

                  <h3>3. Peripheral Areas</h3>
                  <p>Townships along the PRR and STRR routes are offering entry points with 35-40% appreciation potential over the next 3-5 years.</p>
                </div>

                {/* Second Image Break */}
                <ScrollAnimation direction="up">
                  <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl my-16">
                    <img
                      src={investmentGrowthImage}
                      alt="Real Estate Investment Growth Trends"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </ScrollAnimation>

                {/* Investment & Conclusion Section */}
                <div className="prose prose-lg max-w-none
                  prose-headings:font-display prose-headings:font-bold prose-headings:text-foreground
                  prose-h2:text-4xl prose-h2:mt-16 prose-h2:mb-10 prose-h2:text-gold
                  prose-h3:text-2xl prose-h3:mt-16 prose-h3:mb-8
                  prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-10 prose-p:text-lg
                  prose-ul:my-10 prose-ul:text-muted-foreground
                  prose-li:mb-4 prose-li:text-lg prose-li:leading-relaxed
                  prose-strong:text-foreground prose-strong:font-semibold">
                  <h2>Investment Opportunities</h2>
                  <p>For investors looking to capitalize on Bangalore's growth, the key is to focus on:</p>
                  
                  <ul>
                    <li>RERA-approved projects with clear title deeds</li>
                    <li>Locations with upcoming infrastructure projects</li>
                    <li>Master-planned townships with complete amenities</li>
                    <li>Developers with proven track records</li>
                  </ul>

                  <h2>The Rycca Advantage</h2>
                  <p>At Rycca, we leverage proprietary data analytics and on-ground intelligence to identify high-potential locations before they become mainstream. Our investment methodology has consistently delivered 30%+ annual returns by focusing on:</p>
                  
                  <ul>
                    <li>Strategic location selection based on infrastructure mapping</li>
                    <li>Regulatory compliance (RERA, BMRDA, STRR approvals)</li>
                    <li>Scientific pricing based on comparable analysis</li>
                    <li>Transparent transaction processes</li>
                  </ul>

                  <h2>Conclusion</h2>
                  <p>Bangalore's real estate market in 2025 offers unprecedented opportunities for informed investors. With the right partner and data-driven approach, you can build significant wealth through strategic property investments.</p>

                  <p>Ready to explore investment opportunities? Contact our team for a personalized portfolio analysis.</p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gold/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <ScrollAnimation direction="up">
            <Card className="max-w-5xl mx-auto border-gold/20 shadow-xl">
              <CardContent className="p-12 md:p-16 text-center">
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                  Ready to Invest with Confidence?
                </h2>
                <p className="text-muted-foreground text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
                  Discover how Rycca's data-driven approach can help you build wealth through strategic real estate investments
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/projects"
                    className="px-10 py-4 bg-gold text-white rounded-md hover:bg-gold/90 transition-colors font-semibold text-lg"
                  >
                    View Projects
                  </Link>
                  <Link
                    to="/contact"
                    className="px-10 py-4 border-2 border-gold text-gold rounded-md hover:bg-gold/10 transition-colors font-semibold text-lg"
                  >
                    Schedule Consultation
                  </Link>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <ScrollAnimation direction="up">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {["rera-approved-projects-guide", "north-bangalore-infrastructure-boom", "rycca-edge-investment-method"].map((relatedSlug) => (
                <Link
                  key={relatedSlug}
                  to={`/blog/${relatedSlug}`}
                  className="group"
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 border-border hover:border-gold/50">
                    <div className="relative h-56 overflow-hidden bg-muted">
                      <img
                        src="/api/placeholder/400/300"
                        alt="Related post"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-display font-bold text-xl group-hover:text-gold transition-colors mb-3">
                        {relatedSlug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
                      </h3>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        Discover more insights about Bangalore real estate and investment strategies...
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
