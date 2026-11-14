import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ProjectMedia from "./ProjectMedia";

const mediaSx = { aspectRatio: "16 / 10", borderRadius: 0, border: 0 };

export default function ProjectCard({ project: { title, video, image, tags, dates }, onClick }) {
  return (
    <Card variant="outlined" sx={{ height: "100%" }}>
      <CardActionArea onClick={onClick} aria-haspopup="dialog" sx={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "stretch", justifyContent: "flex-start" }}>
        <ProjectMedia title={title} video={video} image={image} sx={mediaSx} />
        <CardContent>
          <Stack spacing={0.5} alignItems="flex-start" sx={{ mb: 1 }}>
            {tags?.[0] && <Chip label={tags[0]} size="small" color="primary" variant="outlined" />}
            {dates && <Typography variant="body2" color="text.secondary">{dates}</Typography>}
          </Stack>
          <Typography variant="h6" component="h3">{title}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
