import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Sparkles, BookOpen, MessageSquare, Heart, Video } from "lucide-react";

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="about" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            The perfect place to learn and grow
          </h2>
          <p className="text-lg text-muted-foreground">
            Elevate your IT skills in our community sessions to learn new material, work on projects, and connect with new friends. So, what could be more fun?
          </p>
        </motion.div>

        {/* Feature 1 - Left Image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-accent rounded-3xl p-6 relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                alt="Team collaboration"
                className="rounded-2xl w-full"
              />
              
              {/* Floating UI Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 }}
                className="absolute -right-4 -bottom-4 floating-card"
              >
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-primary rounded-full border-2 border-background"></div>
                    <div className="w-8 h-8 bg-success rounded-full border-2 border-background"></div>
                    <div className="w-8 h-8 bg-accent-foreground rounded-full border-2 border-background"></div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Building together</p>
                    <p className="text-xs text-muted-foreground">creating connections</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Connect and make friends with other people
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Experience the joy of learning IT and connect with people from all over the region as you improve your coding skills.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With our engaging resources and supportive community, you'll discover that learning IT can be a truly enriching journey.
            </p>
          </motion.div>
        </div>

        {/* Feature 2 - Right Image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 order-2 lg:order-1"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              We strive to create an enjoyable place for your learning journey
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Whether you're just starting out or looking to improve your existing skills, we're here to help you have fun while you learn and grow.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative order-1 lg:order-2"
          >
            <div className="bg-secondary rounded-3xl p-6 relative">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop"
                alt="Learning session"
                className="rounded-2xl w-full"
              />
              
              {/* Floating Chat Bubble */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 }}
                className="absolute -left-4 top-1/4 floating-card"
              >
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">Great session today!</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Feature 3 - Left Image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-accent rounded-3xl p-6 relative">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop"
                alt="Learning resources"
                className="rounded-2xl w-full"
              />
              
              {/* Floating Video Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 }}
                className="absolute -right-4 bottom-8 floating-card"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <Video className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Video Tutorials</p>
                    <p className="text-xs text-muted-foreground">100+ hours content</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Obtain a bounty of learning resources from us
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              We believe that learning IT should be an enjoyable and fulfilling experience.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              That's why we offer a wide range of resources, tutorials, and project opportunities to help you make it.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
