import { Link } from "react-router-dom"; // 1. Import Link
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import posts from '../data/posts.json';
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Blog = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="min-h-screen font-sans pt-24 md:pt-30 pb-16 md:pb-24 relative overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
          
          {/* Hero Section */}
          <motion.section 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="py-20 px-6 text-center"
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Wawasan Terbaru
            </motion.h1>
            <motion.p 
              className="text-slate-500 max-w-2xl mx-auto text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Eksplorasi ide, tutorial, dan berita teknologi terkini.
            </motion.p>
          </motion.section>

          <main className="max-w-7xl mx-auto px-6 -mt-10" ref={ref}>
            {/* --- FEATURED POST --- */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.7, ease: "easeOut" }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <Link to={`/blog/${posts[0].id}`} className="block group">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-blue-50 transition-all hover:shadow-2xl hover:border-blue-200">
                  <div className="md:w-1/2">
                    <img src={posts[0].image} alt="Featured" className="h-64 md:h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="md:w-1/2 p-8 flex flex-col justify-center">
                    <motion.span 
                      className="text-blue-600 font-semibold text-sm uppercase tracking-wider w-fit"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      {posts[0].category}
                    </motion.span>
                    <motion.h2 
                      className="text-3xl font-bold mt-2 mb-4 group-hover:text-blue-600 transition-colors"
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      {posts[0].title}
                    </motion.h2>
                    <motion.p 
                      className="text-slate-600 mb-6 leading-relaxed"
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      {posts[0].excerpt}
                    </motion.p>
                    <motion.div 
                      className="flex items-center text-sm text-slate-500"
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.5 }}
                    >
                      <span className="font-medium text-slate-900">{posts[0].author}</span>
                      <span className="mx-2">•</span>
                      <span>{posts[0].date}</span>
                    </motion.div>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* --- BLOG GRID --- */}
            <section className="py-16">
              <motion.div 
                className="flex justify-between items-center mb-10"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-slate-900">Artikel Terbaru</h3>
                <div className="h-1 flex-grow mx-4 bg-blue-50 rounded hidden sm:block"></div>
              </motion.div>

              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {posts.map((post) => (
                  <motion.div
                    key={post.id}
                    variants={itemVariants}
                  >
                    <Link to={`/blog/${post.id}`} className="group block h-full">
                      <article className="cursor-pointer h-full flex flex-col">
                        <div className="relative overflow-hidden rounded-xl mb-4">
                          <motion.img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-56 object-cover"
                            initial={{ scale: 1, opacity: 0 }}
                            animate={isInView ? { scale: 1, opacity: 1 } : {}}
                            whileHover={{ scale: 1.1 }}
                            transition={{ 
                              duration: 0.6,
                              hover: { duration: 0.4 }
                            }}
                          />
                          <motion.div 
                            className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-blue-600 shadow-sm"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.4, delay: 0.2 }}
                          >
                            {post.category}
                          </motion.div>
                        </div>
                        <motion.h4 
                          className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors leading-snug flex-grow"
                          initial={{ opacity: 0, y: 10 }}
                          animate={isInView ? { opacity: 1, y: 0 } : {}}
                          transition={{ duration: 0.5 }}
                        >
                          {post.title}
                        </motion.h4>
                        <motion.p 
                          className="text-slate-600 text-sm line-clamp-2 mb-4"
                          initial={{ opacity: 0, y: 10 }}
                          animate={isInView ? { opacity: 1, y: 0 } : {}}
                          transition={{ duration: 0.5, delay: 0.1 }}
                        >
                          {post.excerpt}
                        </motion.p>
                        <motion.div 
                          className="text-xs text-slate-400 font-medium"
                          initial={{ opacity: 0 }}
                          animate={isInView ? { opacity: 1 } : {}}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        >
                          {post.date} — Oleh {post.author}
                        </motion.div>
                      </article>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
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