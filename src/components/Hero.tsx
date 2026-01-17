import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, MessageCircle, Users, Code } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 relative overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium"
            >
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              Building tech skills, building connections
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Become skilled in
              <br />
              Tech with our IT
              <br />
              community today
            </h1>

            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-lg">
              Join our supportive community for IT learning resources, projects, and connection with others.
            </p>

            {/* Checklist */}
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-muted-foreground">
                <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                Meet people from different parts of the region
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                Improve your coding skills
              </li>
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="https://forms.gle/6bL8AmJW2Mj7LBdz5" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg">
                  Register now
              </Button>
                </a>
              <Button variant="heroOutline" size="lg">
                Learn more
              </Button>
            </div>
          </motion.div>

          {/* Right Content - Hero Image with Floating Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-accent rounded-3xl p-4">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&h=600&fit=crop"
                  alt="Tech professional"
                  className="rounded-2xl w-full h-auto object-cover"
                />
              </div>

              {/* Floating Card 1 - Chat */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute -left-8 top-1/4 floating-card animate-float"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Active Discussion</p>
                    <p className="text-xs text-muted-foreground">500+ members online</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Card 2 - Users */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute -right-4 top-1/2 floating-card animate-float"
                style={{ animationDelay: '2s' }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">1.2K+ Members</p>
                    <p className="text-xs text-muted-foreground">Growing daily</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Card 3 - Code */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
                className="absolute left-1/4 -bottom-4 floating-card animate-float"
                style={{ animationDelay: '4s' }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                    <Code className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">50+ Projects</p>
                    <p className="text-xs text-muted-foreground">Collaborative coding</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
