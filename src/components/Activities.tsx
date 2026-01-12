import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Gamepad2, Users } from "lucide-react";

const activities = [
  {
    icon: MessageCircle,
    tag: "Sharing Session",
    title: "Sharing session to discuss experiences and insights",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=250&fit=crop",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Gamepad2,
    tag: "IT Games",
    title: "A fun game to review the material we've learned",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=250&fit=crop",
    color: "bg-success/10 text-success",
  },
  {
    icon: Users,
    tag: "Study Group",
    title: "Discuss and practice the material together",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop",
    color: "bg-accent text-accent-foreground",
  },
];

const Activities = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="resources" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Have a great time practicing, and let your natural speaking style shine through!
          </h2>
          <p className="text-lg text-muted-foreground">
            We are providing engaging daily sessions, focusing on practical, real-life coding and more to help you improve your IT skills.
          </p>
        </motion.div>

        {/* Activity Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover"
                />
                {/* Tag */}
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${activity.color}`}>
                  {activity.tag}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground leading-snug">
                  {activity.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
