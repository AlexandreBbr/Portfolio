import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const current = i18n.language;
  const next = current === "fr" ? "en" : "fr";

  const handleSwitch = () => {
    i18n.changeLanguage(next);
  };

  return (
    <motion.button
      onClick={handleSwitch}
      whileTap={{ scale: 0.95 }}
      whileHover={{
        backgroundColor: "rgba(99, 102, 241, 0.2)",
        borderColor: "#6366f1",
        color: "#ffffff",
      }}
      transition={{ duration: 0.1 }}
      className="px-3 py-1 text-xs border border-gray-600 rounded-full text-gray-400 hover:text-white transition-colors duration-300"
    >
      {next.toUpperCase()}
    </motion.button>
  );
}
