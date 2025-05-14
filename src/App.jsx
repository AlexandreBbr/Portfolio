import "./index.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Parallax from "./components/Parallax";

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

  const projects = [
    {
      title: "Pulsar (Work in Progress)",
      description: t("projects.pulsar.short"),
      fullDescription: t("projects.pulsar.full"),
      techs: ["C++", "C#", "Rust", "Vulkan"],
    },  
    {
      title: "R-Type",
      description: t("projects.rtype.short"),
      fullDescription: t("projects.rtype.full"),
      techs: ["C++", "SFML", "UDP", "CMake"],
      github: "https://github.com/AlexandreBbr/rtype"
    },
    {
      title: "Zappy",
      description: t("projects.zappy.short"),
      fullDescription: t("projects.zappy.full"),
      techs: ["C", "C++", "Python", "Sockets", "Multithreading"],
      github: "https://github.com/AlexandreBbr/zappy"
    },
    {
      title: "Gomoku",
      description: t("projects.gomoku.short"),
      fullDescription: t("projects.gomoku.full"),
      techs: ["Python"],
      github: "https://github.com/AlexandreBbr/gomoku-ai"
    },
    {
      title: "Raytracer",
      description: t("projects.raytracer.short"),
      fullDescription: t("projects.raytracer.full"),
      techs: ["C++", "SFML", "libconfig++", "Multithreading"],
      github: "https://github.com/AlexandreBbr/raytracer"
    }
  ];

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = ["hero", "projects", "contact"];
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      for (let id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetHeight = section.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-950 text-white font-sans scroll-smooth overflow-hidden">
      <Parallax />
      <main className="relative z-10">
        <Navbar activeSection={activeSection} />
        <Hero />
        <Projects projects={projects} />
        <Contact />
        <footer className="text-center text-gray-500 text-sm py-10">
          © {new Date().getFullYear()} Barbier. {t("footer.text")}
        </footer>
      </main>

      {showScrollTop && (
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-indigo-500 text-white flex items-center justify-center shadow-xl hover:bg-indigo-600 transition-colors duration-300 z-50"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          aria-label="Retour en haut"
        >
          <span className="text-xl font-bold">↑</span>
        </motion.button>
      )}
    </div>
  );
}

export default App;
