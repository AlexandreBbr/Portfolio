import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ activeSection }) {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const links = [
    { id: "hero", label: t("navbar.hero") },
    { id: "projects", label: t("navbar.projects") },
    { id: "contact", label: t("navbar.contact") },
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-950/90 backdrop-blur-sm border-b border-gray-800">
      <nav className="max-w-5xl mx-auto flex items-center justify-between p-4">
        <h1 className="text-lg font-bold text-indigo-400">Alexandre</h1>

        <ul className="hidden md:flex gap-8 text-sm text-gray-300">
          {links.map(({ id, label }) => (
            <li
              key={id}
              onClick={() => scrollTo(id)}
              className={`cursor-pointer hover:text-indigo-400 transition ${activeSection === id ? "text-indigo-400 font-semibold" : ""
                }`}
            >
              {label}
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-gray-300"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="md:hidden bg-gray-950 border-t border-gray-800 px-4 py-4 space-y-4 text-gray-300"
          >
            {links.map(({ id, label }) => (
              <li
                key={id}
                onClick={() => scrollTo(id)}
                className={`cursor-pointer hover:text-indigo-400 transition ${activeSection === id ? "text-indigo-400 font-semibold" : ""
                  }`}
              >
                {label}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
