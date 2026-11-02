import { useTranslation } from "react-i18next";
import { Atom, Code2, Cpu, Database, Globe } from "lucide-react";
import SectionWrapper, { SectionTitle } from "./SectionWrapper";
import TechIcon from "./TechIcon";
import { SKILLS } from "../data/profile";

const groupIcons = { languages: Code2, web: Globe, data: Database, systems: Cpu, quantum: Atom };

export default function Skills() {
  const { t } = useTranslation();

  return (
    <SectionWrapper id="skills" className="px-4 py-20">
      <SectionTitle>{t("skills.title")}</SectionTitle>
      <div className="grid gap-6 sm:grid-cols-2">
        {SKILLS.map(({ key, items }, i) => {
          const Icon = groupIcons[key];
          const fullRow = SKILLS.length % 2 === 1 && i === SKILLS.length - 1;
          return (
            <div
              key={key}
              className={`bg-gray-900/80 p-6 rounded-xl border border-gray-800 ${fullRow ? "sm:col-span-2" : ""}`}
            >
              <h3 className="flex items-center gap-2 text-lg font-semibold text-indigo-300 mb-4">
                <Icon className="w-5 h-5" aria-hidden="true" />
                {t(`skills.${key}`)}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 px-3 py-1 text-sm rounded-full bg-gray-800 text-gray-200 border border-gray-700"
                  >
                    <TechIcon name={item} />
                    {item.startsWith("skills.") ? t(item) : item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
