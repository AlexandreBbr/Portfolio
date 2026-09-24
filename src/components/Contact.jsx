import { Github, Linkedin } from "lucide-react";
import SectionWrapper, { SectionTitle } from "./SectionWrapper";
import { useTranslation } from "react-i18next";
import { LINKS } from "../data/profile";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <SectionWrapper id="contact" className="px-4 py-20">
      <div className="max-w-xl mx-auto text-center">
        <SectionTitle>{t("contact.title")}</SectionTitle>
        <p className="-mt-4 mb-8 text-gray-400 text-lg">{t("contact.text")}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 transition font-medium"
          >
            <Linkedin className="w-5 h-5" aria-hidden="true" />
            LinkedIn
          </a>
          <a
            href={LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2 border border-indigo-500 text-indigo-300 rounded-full hover:bg-indigo-500 hover:text-white transition font-medium"
          >
            <Github className="w-5 h-5" aria-hidden="true" />
            GitHub
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}
