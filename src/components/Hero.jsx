import { m } from "framer-motion";
import { useTranslation } from "react-i18next";
import useIsMobile from "../hooks/useIsMobile";

export default function Hero() {
  const { t } = useTranslation();
  const isMobile = useIsMobile();

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView();

  return (
    <section id="hero" className="min-h-[85vh] flex items-center justify-center px-4 pt-24 pb-12">
      <m.div
        className="text-center space-y-6 max-w-3xl"
        initial={!isMobile ? { opacity: 0, y: 40 } : false}
        animate={!isMobile ? { opacity: 1, y: 0 } : false}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="text-sm uppercase tracking-[0.2em] text-indigo-400 font-medium">
          Alexandre B. · {t("hero.kicker")}
        </p>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
          {t("hero.title")}
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">{t("hero.subtitle")}</p>
        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <button
            onClick={() => scrollTo("projects")}
            className="px-6 py-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 transition font-medium"
          >
            {t("hero.projectsBtn")}
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="px-6 py-2 border border-indigo-500 text-indigo-300 rounded-full hover:bg-indigo-500 hover:text-white transition font-medium"
          >
            {t("hero.contactBtn")}
          </button>
        </div>
      </m.div>
    </section>
  );
}
