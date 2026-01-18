import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  // Animation untuk robot wave
  const robotVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { duration: 0.6 } },
  };

  const waveVariants = {
    animate: {
      rotate: [0, 14, -8, 14, -8, 0],
      transition: {
        duration: 0.6,
        repeat: Infinity,
        repeatDelay: 2,
      },
    },
  };

  const floatVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
      },
    },
  };

  const containerVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-background to-muted/50 overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </motion.div>

      <motion.div
        className="text-center z-10 px-6"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        {/* Robot Animation */}
        <motion.div
          className="mb-8 flex justify-center"
          variants={robotVariants}
        >
          <motion.div
            className="relative"
            variants={floatVariants}
            animate="animate"
          >
            {/* Robot Body dengan SVG/Emoji */}
            <div className="relative inline-block">
              <div className="text-9xl mb-4 drop-shadow-lg">🤖</div>
              {/* Hand wave */}
              <motion.div
                className="absolute -top-8 -right-12 text-6xl origin-bottom-left"
                variants={waveVariants}
                animate="animate"
              >
                👋
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Content */}
        <motion.div variants={itemVariants}>
          <h1 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            404
          </h1>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Oops! Halaman Tidak Ditemukan
          </h2>
        </motion.div>

        <motion.div variants={itemVariants}>
          <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto leading-relaxed">
            Maaf, halaman yang Anda cari tidak ada. Mungkin telah dipindahkan atau dihapus.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            onClick={() => navigate("/")}
            size="lg"
            variant="hero"
            className="px-8"
          >
            Kembali ke Beranda
          </Button>
          <Button
            onClick={() => navigate("/blog")}
            size="lg"
            variant="outline"
            className="px-8"
          >
            Lihat Blog
          </Button>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          className="mt-12 text-2xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          ✨
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;
