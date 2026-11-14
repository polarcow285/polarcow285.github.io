import CardMedia from "@mui/material/CardMedia";
import Placeholder from "./Placeholder";

export default function ProjectMedia({ title, video, image, sx }) {
  if (video)
    return (
      <CardMedia
        component="video"
        src={video}
        autoPlay
        loop
        playsInline
        ref={(v) => v && (v.muted = true)}
        aria-label={`${title} demo`}
        sx={sx}
      />
    );
  if (image) return <CardMedia component="img" image={image} alt={title} sx={sx} />;
  return <Placeholder label="Image" sx={sx} />;
}
