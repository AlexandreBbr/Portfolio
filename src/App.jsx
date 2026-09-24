import { useEffect, useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Parallax from "./components/Parallax";

import { SECTIONS } from "./data/profile";

function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (typeof window !== "undefined" && window.console) {
      console.log(
        "%c💌 Ce message est destiné à celle qui partage ma vie, je t'aime plus que tout, merci de toujours me tirer vers le haut. -A",
        "color: pink; font-size: 16px; font-style: italic;"
      );
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);

      const scrollPosition = window.scrollY + window.innerHeight / 2;
      for (const id of SECTIONS) {
        const section = document.getElementById(id);
        if (
          section &&
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(id);
          break;
        }
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-950 text-white font-sans overflow-hidden">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:px-4 focus:py-2 focus:rounded-full focus:bg-indigo-500 focus:text-white"
      >
        {t("a11y.skip")}
      </a>
      <Parallax />
      <Navbar activeSection={activeSection} />
      <main id="main" className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="relative z-10 text-center text-gray-500 text-sm py-10">
        © {new Date().getFullYear()} Alexandre Barbier. {t("footer.text")}
      </footer>

      <AnimatePresence>
        {showScrollTop && (
          <m.button
            key="scroll-top"
            onClick={() => window.scrollTo({ top: 0 })}
            className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-indigo-500 text-white flex items-center justify-center shadow-xl hover:bg-indigo-600 transition-colors duration-300 z-50"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            aria-label={t("a11y.backToTop")}
          >
            <span className="text-xl font-bold" aria-hidden="true">↑</span>
          </m.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
