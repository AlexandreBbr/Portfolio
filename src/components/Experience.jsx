import { useTranslation } from "react-i18next";
import { ClipboardList, Layers, Server, ShieldCheck } from "lucide-react";
import SectionWrapper, { SectionTitle } from "./SectionWrapper";
import { EXPERIENCE } from "../data/profile";

const icons = { fullstack: Layers, security: ShieldCheck, servers: Server, management: ClipboardList };

export default function Experience() {
  const { t } = useTranslation();

  return (
    <SectionWrapper id="experience" className="px-4 py-20">
      <SectionTitle subtitle={t("experience.subtitle")}>{t("experience.title")}</SectionTitle>
      <div className="grid gap-6 sm:grid-cols-2">
        {EXPERIENCE.map((key) => {
          const Icon = icons[key];
          const items = t(`experience.${key}.items`, { returnObjects: true });
          return (
            <div key={key} className="bg-gray-900/80 p-6 rounded-xl border border-gray-800">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-indigo-300 mb-4">
                <Icon className="w-5 h-5" aria-hidden="true" />
                {t(`experience.${key}.title`)}
              </h3>
              <ul className="space-y-2 text-sm text-gray-300">
                {items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-indigo-400" aria-hidden="true">▸</span>
                    <span>{item}</span>
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
