import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const footerLinks = {
  company: {
    title: "COMPANY",
    links: ["About us", "Services", "Team", "Contact"],
  },
  resources: {
    title: "RESOURCES",
    links: ["Events", "Blog", "Newsletter", "Downloads"],
  },
  connect: {
    title: "CONNECT",
    links: ["Facebook", "Instagram", "Discord", "Support"],
  },
  policies: {
    title: "POLICIES",
    links: ["Terms", "Privacy", "Guidelines", "Licenses"],
  },
};

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer ref={ref} className="bg-muted/50 border-t border-border">
      <div className="container-custom section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8"
        >
          {/* Footer Links */}
          {Object.values(footerLinks).map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <h4 className="font-semibold text-foreground mb-4 text-sm">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="col-span-2"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">G</span>
              </div>
              <span className="font-bold text-xl text-foreground">GITS</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              We are a group of individuals from all over the region who share a passion about improving our IT skills and building amazing projects together.
            </p>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm text-muted-foreground">
            ©2024 · GITSociety. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms and Conditions
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
