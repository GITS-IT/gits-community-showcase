import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface LinkItem {
  text: string;
  url?: string;
}

type FooterLink = string | LinkItem;

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerLinks: Record<string, FooterSection> = {
  company: {
    title: "COMMUNITY",
    links: ["About us", "Services", "Team", "Contact"],
  },
  resources: {
    title: "RESOURCES",
    links: ["Events", "Blog", "Newsletter"],
  },
  connect: {
    title: "CONNECT WITH US!",
    links: [
      { text: "Instagram", url: "https://www.instagram.com/gombongitsociety/" },
      { text: "Discord", url: "https://discord.gg/SyrDgPAM" },
      { text: "WhatsApp Group", url: "https://chat.whatsapp.com/Cs15furLUihKO69S3ShJSA" },
    ],
  },
  // policies: {
  //   title: "POLICIES",
  //   links: ["Terms", "Privacy", "Guidelines", "Licenses"],
  // },
};

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const renderLink = (link: FooterLink) => {
    const isExternal = typeof link !== "string";
    const text = isExternal ? link.text : link;
    const url = isExternal ? link.url : "#";

    return (
      <li key={text}>
        <a
          href={url}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="text-muted-foreground hover:text-foreground transition-colors text-sm"
        >
          {text}
        </a>
      </li>
    );
  };

  return (
    <footer ref={ref} className="bg-muted/50 border-t border-border">
      <div className="container-custom section-padding">
        <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-16">
          {/* Footer Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-6 w-fit"
          >
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
                  {section.links.map(renderLink)}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="flex flex-col items-start md:items-end md:min-w-max"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-20 h-20 rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">
                  <img src="/logo.png" alt="gits" />
                </span>
              </div>
              <span className="font-bold text-xl text-foreground"></span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs md:text-right">
              We are a group of individuals from all over the region who share a passion about improving our IT skills and building amazing projects together.
            </p>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 pt-8 border-t border-border"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className="text-sm text-muted-foreground">
              ©2026 · Gombong IT Society. All rights reserved.
            </p>
            <div className="flex gap-6 whitespace-nowrap">
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
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
