import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Tag as TagIcon } from 'lucide-react';
import { blogs } from '../data/portfolio';
import { useReveal, SectionLabel, Card } from '../components/Shared';

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const blog = blogs.find(b => b.slug === slug);
  const contentRef = useReveal();

  if (!blog) {
    return (
      <div className="py-24 px-6 text-center">
        <h1 className="text-2xl font-bold text-[#1a1a2e] mb-4">Article Not Found</h1>
        <Link to="/blog" className="gradient-text hover:underline">Back to Blog</Link>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="blob w-96 h-96 bg-[#14b8a6] top-10 -right-48" />
          <div className="blob w-80 h-80 bg-[#ff6b5b] bottom-10 left-10" style={{ animationDelay: '-3s' }} />
        </div>
        <div className="max-w-3xl mx-auto relative z-10">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-[#64748b] hover:text-[#ff6b5b] transition-colors duration-200 mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <SectionLabel>{blog.category}</SectionLabel>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-[#1a1a2e]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            {blog.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-[#64748b]">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{blog.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{blog.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 px-6">
        <div ref={contentRef} className="reveal max-w-3xl mx-auto">
          <Card className="prose prose-slate max-w-none">
            <div
              className="text-[#374151] leading-relaxed blog-content"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </Card>

          {/* Tags */}
          <div className="mt-8 flex flex-wrap gap-2">
            {blog.tags.map(tag => (
              <span key={tag} className="inline-flex items-center gap-1 text-xs text-[#64748b] bg-[#f1f5f9] px-3 py-1.5 rounded-full">
                <TagIcon className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .blog-content h2 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.25rem;
          font-weight: 600;
          color: #1a1a2e;
          margin-top: 2rem;
          margin-bottom: 0.75rem;
        }
        .blog-content p {
          margin-bottom: 1rem;
        }
      `}</style>
    </>
  );
}
