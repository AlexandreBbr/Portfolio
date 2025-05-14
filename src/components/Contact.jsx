import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <SectionWrapper id="contact" className="px-4 py-20">
      <motion.div
        className="max-w-xl mx-auto text-center space-y-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-3xl font-semibold text-white">
          {t("contact.title")}
        </h2>
        <p className="text-gray-400 text-lg">
          {t("contact.text")}
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/AlexandreBbr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-indigo-400 hover:text-white transition"
          >
            <Github className="w-5 h-5" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/alexandre-b-b123a91b8/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-indigo-400 hover:text-white transition"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </a>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
