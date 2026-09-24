import { useTranslation } from "react-i18next";
import { m } from "framer-motion";

export default function LanguageSwitcher() {
  const { t, i18n } = useTranslation();
  const current = i18n.resolvedLanguage || "fr";
  const next = current === "fr" ? "en" : "fr";

  return (
    <m.button
      onClick={() => i18n.changeLanguage(next)}
      whileTap={{ scale: 0.95 }}
      whileHover={{
        backgroundColor: "rgba(99, 102, 241, 0.2)",
        borderColor: "#6366f1",
        color: "#ffffff",
      }}
      transition={{ duration: 0.1 }}
      className="px-3 py-1 text-xs border border-gray-600 rounded-full text-gray-400 hover:text-white transition-colors duration-300"
      aria-label={t("a11y.switchLang")}
      lang={next}
    >
      {next.toUpperCase()}
    </m.button>
  );
}
