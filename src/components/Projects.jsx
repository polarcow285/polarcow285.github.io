import ProjectGrid from "./ProjectGrid";
import Section from "./Section";

export default function Projects() {
  return (
    <Section id="projects" title="Projects" seeMoreTo="/projects">
      <ProjectGrid />
    </Section>
  );
}
