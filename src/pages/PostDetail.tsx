import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useParams, useNavigate } from "react-router-dom"; // Tambah useNavigate untuk tombol kembali
import posts from '../data/posts.json';
import { useEffect, useState } from "react";

export const PostDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [progress, setProgress] = useState(0);

    // Scroll progress handler
    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight - windowHeight;
            const scrolled = window.scrollY;
            const scrollPercent = documentHeight > 0 ? (scrolled / documentHeight) * 100 : 0;
            setProgress(Math.min(scrollPercent, 100));
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Mencari data post berdasarkan ID
    const post = posts.find((p) => p.id === id);

    // Mapping author ke LinkedIn profile
    const getAuthorLinkedIn = (author) => {
        const linkedInProfiles = {
            "Helga Alan Abhipraya": "https://www.linkedin.com/in/helga-alan-abhipraya/"
        };
        return linkedInProfiles[author] || null;
    };

    // Mapping author ke avatar image
    const getAuthorAvatar = (author) => {
        const avatarMap = {
            "Helga Alan Abhipraya": "/testimonials-avatar/alan.jpg",
            "Alvin Adetya": "/testimonials-avatar/alvin.jpg",
            "Fahmi Nabil Maulana": "/testimonials-avatar/fahmi.png",
            "Ilham Budi Trisetyo": "/testimonials-avatar/ilham.jpg"
        };
        return avatarMap[author] || `https://ui-avatars.com/api/?name=${author}&background=0D8ABC&color=fff&size=120&bold=true`;
    };

    // Fungsi untuk menghitung reading time
    const calculateReadingTime = (htmlContent) => {
        if (!htmlContent) return 1;
        
        // Remove HTML tags
        const textContent = htmlContent.replace(/<[^>]*>/g, '');
        
        // Count words (split by spaces and filter empty strings)
        const wordCount = textContent
            .split(/\s+/)
            .filter(word => word.length > 0).length;
        
        // Average reading speed: 200 words per minute
        const readingTime = Math.ceil(wordCount / 200);
        
        return Math.max(1, readingTime); // Minimum 1 menit
    };

    const readingTime = post ? calculateReadingTime(post.content) : 1;

    // Definisi variable untuk author
    const authorLinkedIn = post ? getAuthorLinkedIn(post.author) : null;
    const authorAvatar = post ? getAuthorAvatar(post.author) : null;

    // Safety Check: Jika post tidak ditemukan, tampilkan pesan error atau loading
    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold">Artikel tidak ditemukan</h2>
                    <button onClick={() => navigate('/')} className="text-blue-600 underline mt-4">
                        Kembali ke Blog
                    </button>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="min-h-screen bg-background">
                <Header />
                <main>
                    <div className="min-h-screen bg-white">
                        {/* --- PROGRESS BAR --- */}
                        <div className="fixed top-0 left-0 w-full h-1 bg-blue-100 z-50">
                            <div 
                                className="bg-blue-600 h-1 transition-all duration-300"
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>

                        <header className="max-w-4xl mx-auto px-6 pt-12">
                            <button 
                                onClick={() => navigate(-1)} // Kembali ke halaman sebelumnya
                                className="text-blue-600 font-medium flex items-center gap-2 mb-8 hover:translate-x-[-4px] transition-transform pt-10 md:pt-12"
                            >
                                ← Kembali ke Blog
                            </button>

                            <div className="space-y-4">
                                <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-bold tracking-wide uppercase">
                                    {post.category}
                                </span>
                                <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                                    {post.title}
                                </h1>

                                <div className="flex items-center gap-4 py-6 border-b border-slate-100">
                                    {/* Author Avatar dengan image dari testimonials */}
                                    <img
                                        src={authorAvatar}
                                        alt={post.author}
                                        className="w-14 h-14 rounded-full border-2 border-blue-100 object-cover shadow-md"
                                    />
                                    <div className="flex-grow">
                                        <p className="font-bold text-slate-900 leading-none">
                                            {post.author}
                                        </p>
                                        <p className="text-sm text-slate-500 mt-2 flex items-center gap-2">
                                            <span>{post.date}</span>
                                            <span>•</span>
                                            <span>{readingTime} menit membaca</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </header>

                        <article className="max-w-4xl mx-auto px-6 py-10">
                            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-blue-100 mb-12">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full object-cover max-h-[500px]"
                                />
                            </div>

                            {/* Intro Paragraph */}
                            <div className="mb-10 text-lg text-slate-600 leading-relaxed font-medium border-l-4 border-blue-600 pl-6 italic">
                                {post.excerpt}
                            </div>

                            {/* Konten Artikel */}
                            <div className="prose prose-lg prose-blue max-w-none text-slate-700 leading-relaxed [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-8 [&_h2]:mb-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-3 [&_p]:mb-4 [&_ul]:mb-4 [&_ol]:mb-4 [&_li]:mb-2">
                                <div dangerouslySetInnerHTML={{ __html: post.content }} />
                            </div>

                            {/* Tags Statis */}
                            <div className="mt-12 pt-8 border-t border-slate-100 flex flex-wrap gap-2">
                                {["React", "WebDev", "Tailwind"].map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-sm bg-slate-100 text-slate-600 px-3 py-1 rounded hover:bg-blue-600 hover:text-white cursor-pointer transition-colors"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </article>

                        <section className="max-w-4xl mx-auto px-6 pb-20">
                            <div className="bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center md:items-start gap-8 border border-blue-200/50">
                                {/* Author Avatar */}
                                <div className="flex-shrink-0">
                                    <img
                                        src={authorAvatar}
                                        alt={post.author}
                                        className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
                                    />
                                </div>

                                {/* Author Info */}
                                <div className="flex-grow text-center md:text-left">
                                    <h4 className="text-2xl font-bold text-slate-900 mb-2">
                                        Tentang Penulis
                                    </h4>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        <span className="font-semibold text-blue-900">{post.author}</span> adalah kontributor profesional di blog ini dengan expertise mendalam dalam topik <span className="font-semibold">{post.category}</span>. Berpengalaman dalam membagikan insights dan best practices terkini di industri teknologi.
                                    </p>

                                    {/* Social Link or Follow Button */}
                                    {authorLinkedIn ? (
                                        <a
                                            href={authorLinkedIn}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                                        >
                                            Ikuti di LinkedIn
                                        </a>
                                    ) : (
                                        <button className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                                            Ikuti Penulis
                                        </button>
                                    )}
                                </div>
                            </div>
                        </section>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
};

export default PostDetail;