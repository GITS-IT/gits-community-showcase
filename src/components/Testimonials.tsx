import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Bersama GITS, saya merasa lebih percaya diri dalam menghadapi tantangan di bidang keamanan jaringan.",
    name: "Helga Alan Abhipraya",
    role: "Network Security Engineer",
    avatar: "/public/testimonials-avatar/alan.jpg",
  },
  {
    quote: "I've been learning coding with this community for the past few months and I'm amazed at how much I have improved. The daily sessions and other activities really helped me.",
    name: "Ilham Budi Trisetyo",
    role: "UI/UX Designer",
    avatar: "testimonials-avatar/ilham.jpg",
  },
  {
    quote: "The community has been fantastic in providing a supportive and engaging learning environment. I am making great progress and I am confident that I will continue to improve.",
    name: "Alvin Adetya",
    role: "Full Stack Developer",
    avatar: "testimonials-avatar/alvin.jpg ",
  },
    {
    quote: "The community has been fantastic in providing a supportive and engaging learning environment. I am making great progress and I am confident that I will continue to improve.",
    name: "Fahmi Nabil Maulana",
    role: "Full Stack Developer",
    avatar: "testimonials-avatar/fahmi.jpg",
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentTestimonials = testimonials.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section ref={ref} id="community" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            See how this community helping people to enhance their IT skills
          </h2>
          <p className="text-lg text-muted-foreground">
            See the impact of joining the community and what others have had to say about their experiences with us.
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {currentTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-card rounded-2xl p-6 shadow-card border border-border/50"
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prevPage}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === currentPage ? "bg-primary" : "bg-border"
                }`}
              />
            ))}
          </div>
          <button
            onClick={nextPage}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
