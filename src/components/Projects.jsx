import SectionWrapper from "./SectionWrapper";
import ProjectCard from "./ProjectCard";
import { useTranslation } from "react-i18next";

export default function Projects({ projects }) {
  const { t } = useTranslation();

  return (
    <SectionWrapper className="px-4 py-20" id="projects">
      <h2 className="text-3xl font-semibold mb-10 text-center">
        {t("projects.title")}
      </h2>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((proj, i) => (
          <ProjectCard key={i} proj={proj} delay={i * 0.1} />
        ))}
      </div>
    </SectionWrapper>
  );
}
