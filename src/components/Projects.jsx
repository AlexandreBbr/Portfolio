import { useTranslation } from "react-i18next";
import SectionWrapper, { SectionTitle } from "./SectionWrapper";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "../data/profile";

export default function Projects() {
  const { t } = useTranslation();

  return (
    <SectionWrapper className="px-4 py-20" id="projects">
      <SectionTitle subtitle={t("projects.subtitle")}>{t("projects.title")}</SectionTitle>
      <div className="grid gap-8 md:grid-cols-2">
        {PROJECTS.map((proj, i) => (
          <ProjectCard key={proj.id} proj={proj} delay={(i % 2) * 0.1} />
        ))}
      </div>
    </SectionWrapper>
  );
}
