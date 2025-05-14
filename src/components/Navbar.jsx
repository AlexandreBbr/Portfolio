import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar({ activeSection }) {
  const { t } = useTranslation();

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full bg-gray-950 border-b border-gray-800 z-50"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
        <span className="text-indigo-400 font-bold text-xl">Alexandre B.</span>
        
        <ul className="flex gap-6 text-sm items-center">
          {["hero", "projects", "contact"].map((section) => (
            <li key={section}>
              <button
                onClick={() =>
                  document.querySelector(`#${section}`)?.scrollIntoView({ behavior: "smooth" })
                }
                className={`relative group transition ${
                  activeSection === section
                    ? "text-indigo-400"
                    : "text-gray-300 hover:text-indigo-400"
                }`}
              >
                {t(`navbar.${section}`)}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-indigo-400 transition-all duration-300 group-hover:w-full" />
              </button>
            </li>
          ))}

          <li>
            <LanguageSwitcher />
          </li>
        </ul>
      </div>
    </motion.nav>
  );
}
