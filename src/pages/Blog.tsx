import { Link } from "react-router-dom"; // 1. Import Link
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import posts from '../data/posts.json';

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="min-h-screen font-sans pt-24 md:pt-30 pb-16 md:pb-24 relative overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
          
          <section className="py-20 px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Wawasan Terbaru</h1>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              Eksplorasi ide, tutorial, dan berita teknologi terkini.
            </p>
          </section>

          <main className="max-w-7xl mx-auto px-6 -mt-10">
            {/* --- FEATURED POST --- */}
            {/* Bungkus Featured Post dengan Link */}
            <Link to={`/blog/${posts[0].id}`} className="block group">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-blue-50 transition-all hover:shadow-2xl hover:border-blue-200">
                <div className="md:w-1/2">
                  <img src={posts[0].image} alt="Featured" className="h-64 md:h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                  <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">{posts[0].category}</span>
                  <h2 className="text-3xl font-bold mt-2 mb-4 group-hover:text-blue-600 transition-colors">{posts[0].title}</h2>
                  <p className="text-slate-600 mb-6 leading-relaxed">{posts[0].excerpt}</p>
                  <div className="flex items-center text-sm text-slate-500">
                    <span className="font-medium text-slate-900">{posts[0].author}</span>
                    <span className="mx-2">•</span>
                    <span>{posts[0].date}</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* --- BLOG GRID --- */}
            <section className="py-16">
              <div className="flex justify-between items-center mb-10">
                <h3 className="text-2xl font-bold text-slate-900">Artikel Terbaru</h3>
                <div className="h-1 flex-grow mx-4 bg-blue-50 rounded hidden sm:block"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  // 2. Gunakan Link di setiap kartu
                  <Link key={post.id} to={`/blog/${post.id}`} className="group">
                    <article className="cursor-pointer">
                      <div className="relative overflow-hidden rounded-xl mb-4">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-blue-600 shadow-sm">
                          {post.category}
                        </div>
                      </div>
                      <h4 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors leading-snug">
                        {post.title}
                      </h4>
                      <p className="text-slate-600 text-sm line-clamp-2 mb-4">
                        {post.excerpt}
                      </p>
                      <div className="text-xs text-slate-400 font-medium">
                        {post.date} — Oleh {post.author}
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </section>
          </main>
          {/* ... Footer / CTA ... */}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;