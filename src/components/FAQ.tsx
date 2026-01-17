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
    question: "Bagaimana cara bergabung ke dalam komunitas GITS ?",
    answer: "Untuk join ke komunitas GITS, kamu bisa mengunjungi link Discord atau WhatsApp Group yang tersedia di bagian Connect With Us pada footer website kami. Setelah bergabung, kamu bisa memperkenalkan diri dan mulai berinteraksi dengan anggota komunitas lainnya!",
  },
  {
    question: "Apa saja persyaratan untuk bergabung dengan GITS ?",
    answer: "Tidak ada persyaratan khusus untuk bergabung dengan GITS. Kami terbuka untuk siapa saja yang memiliki minat dalam dunia IT, baik pemula maupun yang sudah berpengalaman. Yang terpenting adalah semangat untuk belajar dan berbagi pengetahuan dengan sesama anggota komunitas.",
  },
  {
    question: "Apa tujuan GITS dibentuk ?",
    answer: "Tujuan utama GITS adalah untuk menciptakan wadah bagi para pelajar dan profesional IT untuk saling berbagi ilmu, pengalaman, dan sumber daya. Kami ingin membangun komunitas yang suportif dimana anggotanya dapat tumbuh bersama dalam bidang teknologi informasi.",
  },
  {
    question: "Apa saja kegiatan yang dilakukan oleh GITS ?",
    answer: "Kegiatan GITS meliputi berbagai sesi pembelajaran dan sharing session. Kami juga sering mengadakan diskusi tentang tren terbaru di dunia IT serta berbagi tips dan trik seputar pengembangan perangkat lunak, keamanan siber, dan topik terkait lainnya. Selain itu, kami juga mengadakan event komunitas seperti meet and greet untuk mempererat hubungan antar anggota. Kami juga membangun relasi dengan profesional di industri IT untuk memberikan wawasan dan peluang bagi anggota kami.",
  },
  {
    question: "Adakah biaya untuk bergabung dengan GITS ?",
    answer: "Untuk bergabung dengan GITS, tidak ada biaya yang dikenakan. Komunitas ini bersifat gratis dan terbuka untuk semua orang yang ingin belajar dan berbagi pengetahuan di bidang IT.",
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
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Temukan jawaban untuk pertanyaan-pertanyaan yang sering diajukan.
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
