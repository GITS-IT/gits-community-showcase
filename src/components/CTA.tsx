import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl"
          style={{ background: 'var(--gradient-cta)' }}
        >
          {/* Background Decorations */}
          <div className="absolute top-4 left-4 flex gap-2">
            <div className="w-3 h-3 rounded-full bg-white/30"></div>
            <div className="w-3 h-3 rounded-full bg-white/30"></div>
            <div className="w-3 h-3 rounded-full bg-white/30"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center p-8 md:p-12 lg:p-16">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=400&fit=crop"
                alt="Join our community"
                className="rounded-2xl w-full max-w-md mx-auto lg:mx-0"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center lg:text-left"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-success-foreground mb-4">
                Let's create a bright future together!
              </h2>
              <p className="text-success-foreground/80 mb-8 max-w-lg">
                Don't miss out on exclusive content, events, and opportunities for self-improvement. Join our community today and take the first step towards a better you!
              </p>
              <a href="https://forms.gle/6bL8AmJW2Mj7LBdz5" target="_blank" rel="noopener noreferrer">
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-success hover:bg-white/90 font-semibold px-8"
              >
                  Join With Us
              </Button>
                </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
