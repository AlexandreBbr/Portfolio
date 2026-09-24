import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";
import { m, AnimatePresence } from "framer-motion";
import LanguageSwitcher from "./LanguageSwitcher";
import { SECTIONS } from "../data/profile";

export default function Navbar({ activeSection }) {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const links = SECTIONS.map((id) => ({ id, label: t(`navbar.${id}`) }));

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView();
    setIsOpen(false);
  };

  const linkClass = (id) =>
    `hover:text-indigo-400 transition ${activeSection === id ? "text-indigo-400 font-semibold" : ""}`;

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-950/90 backdrop-blur-sm border-b border-gray-800">
      <nav className="max-w-5xl mx-auto flex items-center justify-between p-4">
        <button
          onClick={() => scrollTo("hero")}
          className="text-lg font-bold text-indigo-400"
          aria-label={t("a11y.home")}
        >
          Alexandre B.
        </button>

        <ul className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          {links.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => scrollTo(id)}
                className={linkClass(id)}
                aria-current={activeSection === id ? "true" : undefined}
              >
                {label}
              </button>
            </li>
          ))}
          <li>
            <LanguageSwitcher />
          </li>
        </ul>

        <button
          className="md:hidden text-gray-300"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={t("a11y.menu")}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <m.ul
            id="mobile-menu"
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="md:hidden bg-gray-950 border-t border-gray-800 px-4 py-4 space-y-4 text-gray-300"
          >
            {links.map(({ id, label }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`w-full text-left ${linkClass(id)}`}
                  aria-current={activeSection === id ? "true" : undefined}
                >
                  {label}
                </button>
              </li>
            ))}
            <li className="pt-4 border-t border-gray-800">
              <LanguageSwitcher />
            </li>
          </m.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
