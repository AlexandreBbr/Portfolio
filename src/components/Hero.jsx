import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <SectionWrapper
      id="hero"
      className="min-h-[70vh] flex items-center justify-center px-4 pt-20"
    >
      <motion.div
        className="text-center space-y-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          {t("hero.title")}
        </h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          {t("hero.subtitle")}
        </p>
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={() =>
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-6 py-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 transition font-medium"
          >
            {t("hero.projectsBtn")}
          </button>
          <button
            onClick={() =>
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-6 py-2 border border-indigo-500 text-indigo-400 rounded-full hover:bg-indigo-500 hover:text-white transition font-medium"
          >
            {t("hero.contactBtn")}
          </button>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
