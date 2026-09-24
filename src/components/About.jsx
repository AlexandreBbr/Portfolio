import { useTranslation } from "react-i18next";
import { Download } from "lucide-react";
import SectionWrapper, { SectionTitle } from "./SectionWrapper";
import { CV_URL } from "../data/profile";

export default function About() {
  const { t } = useTranslation();

  return (
    <SectionWrapper id="about" className="px-4 py-20">
      <SectionTitle>{t("about.title")}</SectionTitle>
      <div className="max-w-3xl mx-auto space-y-5 text-gray-300 text-lg leading-relaxed">
        <p>{t("about.p1")}</p>
        <p>{t("about.p2")}</p>
        {CV_URL && (
          <div className="pt-2 text-center">
            <a
              href={CV_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 transition font-medium text-base"
            >
              <Download className="w-4 h-4" aria-hidden="true" />
              {t("about.cv")}
            </a>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}
