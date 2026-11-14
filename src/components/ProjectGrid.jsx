import { useSearchParams } from "react-router-dom";
import Box from "@mui/material/Box";
import ProjectCard from "./ProjectCard";
import ProjectDialog from "./ProjectDialog";
import { projects } from "../data/content";

const gridSx = { display: "grid", gap: 3, gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" } };

export default function ProjectGrid({ showAllLink }) {
  const [params, setParams] = useSearchParams();
  const open = projects[params.get("project")] ?? null;
  const setOpen = (i) => setParams(i === null ? {} : { project: i }, { replace: true, preventScrollReset: true });

  return (
    <>
      <Box sx={gridSx}>
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} onClick={() => setOpen(i)} />
        ))}
      </Box>
      <ProjectDialog project={open} onClose={() => setOpen(null)} showAllLink={showAllLink} />
    </>
  );
}
