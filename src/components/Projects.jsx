import { useTranslation } from "react-i18next";
import SectionWrapper, { SectionTitle } from "./SectionWrapper";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "../data/profile";

const GROUPS = ["pro", "perso"];

export default function Projects() {
  const { t } = useTranslation();

  return (
    <SectionWrapper className="px-4 py-20" id="projects">
      <SectionTitle subtitle={t("projects.subtitle")}>{t("projects.title")}</SectionTitle>
      <div className="space-y-14">
        {GROUPS.map((group) => (
          <div key={group}>
            <h3 className="text-xl font-semibold text-gray-200 mb-6 pb-2 border-b border-gray-800">
              {t(`projects.groups.${group}`)}
            </h3>
            <div className="grid gap-8 md:grid-cols-2">
              {PROJECTS.filter((p) => p.group === group).map((proj, i) => (
                <ProjectCard key={proj.id} proj={proj} delay={(i % 2) * 0.1} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
