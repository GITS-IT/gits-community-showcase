import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useParams, useNavigate } from "react-router-dom"; // Tambah useNavigate untuk tombol kembali
import posts from '../data/posts.json';

export const PostDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Mencari data post berdasarkan ID
    const post = posts.find((p) => p.id === id);

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
                            <div className="bg-blue-600 h-1 w-2/3 transition-all"></div>
                        </div>

                        <header className="max-w-4xl mx-auto px-6 pt-12">
                            <button 
                                onClick={() => navigate(-1)} // Kembali ke halaman sebelumnya
                                className="text-blue-600 font-medium flex items-center gap-2 mb-8 hover:translate-x-[-4px] transition-transform"
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
                                    {/* Karena di JSON author hanya string, kita pakai UI Avatars untuk gambar otomatis */}
                                    <img
                                        src={`https://ui-avatars.com/api/?name=${post.author}&background=0D8ABC&color=fff`}
                                        alt={post.author}
                                        className="w-12 h-12 rounded-full border-2 border-blue-100"
                                    />
                                    <div>
                                        <p className="font-bold text-slate-900 leading-none">
                                            {post.author}
                                        </p>
                                        <p className="text-sm text-slate-500 mt-1">
                                            {post.date} • 5 Menit Membaca
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
                                    className="w-full object-cover max-h-[400px]"
                                />
                            </div>

                            {/* Konten Artikel */}
                            <div className="prose prose-lg prose-blue max-w-none text-slate-700 leading-relaxed">
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
                            <div className="bg-blue-50 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6">
                                <div className="text-center md:text-left">
                                    <h4 className="text-xl font-bold text-blue-900">
                                        Tentang Penulis
                                    </h4>
                                    <p className="text-blue-800/80 mt-2">
                                        {post.author} adalah kontributor di blog ini yang berfokus pada topik {post.category}.
                                    </p>
                                </div>
                                <button className="whitespace-nowrap bg-blue-600 text-white px-6 py-2 rounded-full font-bold hover:bg-blue-700 transition-shadow shadow-lg shadow-blue-200">
                                    Ikuti Penulis
                                </button>
                            </div>
                        </section>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
};