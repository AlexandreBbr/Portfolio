import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    SiReact, SiTailwindcss, SiJavascript, SiC, SiSfml,
    SiHtml5, SiCss3, SiFramer, SiCplusplus, SiPython,
    SiRust,
} from "react-icons/si";
import { useTranslation } from "react-i18next";
import { ChevronDown } from "lucide-react";

const techIcons = {
    React: <SiReact className="text-cyan-400" />,
    Tailwind: <SiTailwindcss className="text-sky-400" />,
    JavaScript: <SiJavascript className="text-yellow-400" />,
    HTML5: <SiHtml5 className="text-orange-400" />,
    CSS3: <SiCss3 className="text-blue-500" />,
    "Framer Motion": <SiFramer className="text-pink-400" />,
    "C++": <SiCplusplus className="text-blue-300" />,
    Python: <SiPython classname="text-yellow-300" />,
    C: <SiC className="text-blue-300" />,
    SFML: <SiSfml className="text-blue-300" />,
    Rust: <SiRust className="text-blue-300" />,
};

export default function ProjectCard({ proj, delay }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const { t } = useTranslation();

    return (
        <motion.div
            className="bg-gray-900 p-6 rounded-xl shadow-md border border-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
        >
            <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold text-indigo-400">{proj.title}</h3>
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-indigo-500 text-indigo-300 hover:bg-indigo-500 hover:text-white transition-colors duration-300 text-sm font-medium"
                >
                    {isExpanded ? t("projects.showLess") : t("projects.showMore")}
                    <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                    />
                </button>
            </div>

            <AnimatePresence initial={false}>
                <motion.div
                    key={isExpanded ? "expanded" : "collapsed"}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden"
                >
                    <p className="text-gray-400 mt-2 text-sm whitespace-pre-line">
                        {isExpanded
                            ? proj.fullDescription || proj.description
                            : proj.description.length > 160
                                ? proj.description.slice(0, 160) + "..."
                                : proj.description}
                    </p>

                    {proj.techs && (
                        <div className="flex flex-wrap gap-2 mt-4">
                            {proj.techs.map((tech, idx) => (
                                <motion.span
                                    key={idx}
                                    className="flex items-center gap-2 px-3 py-1 text-sm rounded-full bg-indigo-600/20 text-indigo-300 border border-indigo-500"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                                >
                                    {techIcons[tech] || null}
                                    {tech}
                                </motion.span>
                            ))}
                        </div>
                    )}
                </motion.div>
            </AnimatePresence>
            {proj.github && (
                <div className="flex gap-4 mt-4">
                    <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-indigo-300 hover:underline"
                    >
                        GitHub
                    </a>
                </div>
            )}
        </motion.div>
    );
}
