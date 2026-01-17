import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How can I join this community?",
    answer: "To join our community, simply click the 'Register' button on this page. Registration is open every Sunday at 09:00 WIB so don't miss your chance.",
  },
  {
    question: "Are there any requirements to join the community?",
    answer: "There are no strict requirements to join GITS. We welcome anyone who has a passion for learning IT, regardless of their current skill level. Whether you're a complete beginner or an experienced developer, you're welcome here!",
  },
  {
    question: "How often do you offer sessions or classes?",
    answer: "We offer daily sessions including sharing sessions, coding practice, and discussion groups. Our main events are held every weekend, while smaller study groups meet throughout the week.",
  },
  {
    question: "What types of activities or resources are offered in the community?",
    answer: "We offer a variety of activities including coding workshops, project collaborations, sharing sessions, IT games, study groups, and mentorship programs. We also provide access to learning materials, tutorials, and a supportive community forum.",
  },
  {
    question: "Is there a cost to join the community or participate in sessions?",
    answer: "Joining GITS is completely free! We believe that everyone should have access to quality IT education regardless of their financial situation. Some special workshops or events may have minimal fees to cover operational costs.",
  },
];

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <section ref={ref} id="faq" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Frequently asked questions
          </h2>
          <p className="text-lg text-muted-foreground">
            You will find answers to the questions we get asked the most.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion 
            type="single" 
            collapsible 
            className="space-y-4"
            onValueChange={setOpenItem}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-card rounded-xl border border-border px-6 overflow-hidden data-[state=open]:shadow-lg data-[state=open]:shadow-primary/10 transition-all duration-300"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5 group">
                    <span>{faq.question}</span>
                  </AccordionTrigger>
                  <AnimatePresence>
                    {openItem === `item-${index}` && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <AccordionContent className="text-muted-foreground pb-5">
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2, delay: 0.1 }}
                          >
                            {faq.answer}
                          </motion.div>
                        </AccordionContent>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
