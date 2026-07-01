import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { blogs } from '../data/portfolio';
import { useReveal, SectionLabel, SectionTitle, Divider, Tag, Card } from '../components/Shared';

export default function Blog() {
  const heroRef = useReveal();
  const gridRef = useReveal();

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="reveal relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="blob w-96 h-96 bg-[#14b8a6] top-10 -right-48" />
          <div className="blob w-80 h-80 bg-[#ff6b5b] bottom-10 left-10" style={{ animationDelay: '-3s' }} />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            <span className="gradient-text-alt">Blog</span>
          </h1>
          <p className="text-lg text-[#64748b] max-w-2xl">
            Thoughts, insights, and lessons learned from my engineering journey.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 px-6">
        <div ref={gridRef} className="reveal max-w-5xl mx-auto">
          <div className="grid grid-cols-1 gap-8">
            {blogs.map((blog, index) => (
              <Link key={blog.slug} to={`/blog/${blog.slug}`}>
                <Card className="group">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Tag>{blog.category}</Tag>
                        <div className="flex items-center gap-1 text-xs text-[#64748b]">
                          <Calendar className="w-3 h-3" />
                          <span>{blog.date}</span>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-[#64748b]">
                          <Clock className="w-3 h-3" />
                          <span>{blog.readTime}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-[#1a1a2e] group-hover:text-[#ff6b5b] transition-colors duration-300" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        {blog.title}
                      </h3>
                      <p className="text-sm text-[#64748b] leading-relaxed mb-4">
                        {blog.excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-sm gradient-text font-medium group-hover:gap-3 transition-all duration-300">
                        Read Article <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
