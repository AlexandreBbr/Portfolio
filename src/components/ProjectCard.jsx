import { useId, useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ChevronDown, Github, Lock } from "lucide-react";
import TechIcon from "./TechIcon";

export default function ProjectCard({ proj, delay }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useTranslation();
  const detailsId = useId();
  const highlights = t(`projects.${proj.id}.highlights`, { returnObjects: true });

  return (
    <m.article
      className="flex flex-col bg-gray-900/80 rounded-xl shadow-md border border-gray-800 overflow-hidden hover:border-indigo-500/60 transition-colors"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      {proj.image && (
        <figure className="relative border-b border-gray-800">
          <img
            src={proj.image}
            alt={t(`projects.${proj.id}.imageCaption`)}
            loading="lazy"
            decoding="async"
            className="w-full aspect-video object-cover"
          />
          <figcaption className="absolute bottom-2 right-2 px-2 py-0.5 text-[11px] rounded bg-gray-950/75 text-gray-300 backdrop-blur-sm">
            {t(`projects.${proj.id}.imageCaption`)}
          </figcaption>
        </figure>
      )}

      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-center gap-3 flex-wrap">
          <h4 className="text-xl font-bold text-indigo-400">{proj.title}</h4>
          {proj.wip && (
            <span className="px-2 py-0.5 text-xs rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/40">
              {t("projects.wip")}
            </span>
          )}
        </div>

        <p className="text-gray-300 mt-2 text-sm">{t(`projects.${proj.id}.short`)}</p>

        {Array.isArray(highlights) && (
          <ul className="mt-4 space-y-1.5 text-sm text-gray-400">
            {highlights.map((h) => (
              <li key={h} className="flex gap-2">
                <span className="text-indigo-400" aria-hidden="true">▸</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        )}

        <ul className="flex flex-wrap gap-2 mt-5">
          {proj.techs.map((tech) => (
            <li
              key={tech}
              className="flex items-center gap-2 px-3 py-1 text-xs rounded-full bg-indigo-600/20 text-indigo-200 border border-indigo-500/60"
            >
              <TechIcon name={tech} />
              {tech}
            </li>
          ))}
        </ul>

        <AnimatePresence initial={false}>
          {isExpanded && (
            <m.div
              id={detailsId}
              key="details"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="text-gray-400 mt-4 text-sm leading-relaxed">
                {t(`projects.${proj.id}.full`)}
              </p>
            </m.div>
          )}
        </AnimatePresence>

        <div className="flex items-center justify-between gap-4 mt-auto pt-5">
          {proj.github ? (
            <a
              href={proj.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-indigo-300 hover:text-white transition"
            >
              <Github className="w-4 h-4" aria-hidden="true" />
              {t("projects.code")}
              <span className="sr-only"> : {proj.title}</span>
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 text-sm text-gray-500">
              <Lock className="w-4 h-4" aria-hidden="true" />
              {t(proj.proprietary ? "projects.proprietary" : "projects.private")}
            </span>
          )}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            aria-expanded={isExpanded}
            aria-controls={detailsId}
            className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-white transition"
          >
            {isExpanded ? t("projects.showLess") : t("projects.showMore")}
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </m.article>
  );
}
