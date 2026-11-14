import PageHeader from "../components/PageHeader";
import ProjectGrid from "../components/ProjectGrid";

export default function ProjectsPage() {
  return (
    <PageHeader title="Projects">
      <ProjectGrid showAllLink={false} />
    </PageHeader>
  );
}
