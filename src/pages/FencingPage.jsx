import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import PageHeader from "../components/PageHeader";
import { fencingGallery } from "../data/slides";

const mediaSx = { width: "100%", height: "auto", aspectRatio: "4 / 3", display: "block", borderRadius: 1 };

export default function FencingPage() {
  const isPhone = useMediaQuery((t) => t.breakpoints.down("sm"));

  return (
    <PageHeader title="Fencing" maxWidth={1100}>
      <Typography variant="body1" paragraph>
        I started fencing when I was eleven years old, and since then it has always been a dream of mine to fence at the college level.  
       </Typography>
       <Typography variant="body1" paragraph>
        Now, I am incredibly grateful to represent Cornell and be surrounded by caring, thoughtful, and spirited teammates. Within this community, I am challenged to push myself as I train and fence with top fencers on our team, and I will treasure these friendships and bonds for years to come.
       </Typography>
       <Typography variant="body1" paragraph>
        As co-captain, I organize and moderate alumni panels, connecting current fencers with professionals across industries, from finance and medicine to executive leadership.
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>Media gallery</Typography>
      
      <ImageList cols={isPhone ? 2 : 3} gap={16} rowHeight="auto">
        {fencingGallery.map(({ src, video, poster, caption, fit = "cover" }) => (
          <ImageListItem key={src || video}>
            {video ? (
              <Box component="video" src={video} poster={poster} controls playsInline preload="metadata" aria-label={caption} sx={{ ...mediaSx, objectFit: "contain", bgcolor: "common.black" }} />
            ) : (
              <Box component="img" src={src} alt={caption} loading="lazy" sx={{ ...mediaSx, objectFit: fit, bgcolor: "grey.100" }} />
            )}
            
            <ImageListItemBar
              title={caption}
              position="below"
              sx={{ "& .MuiImageListItemBar-title": { whiteSpace: "normal", fontSize: "0.875rem", lineHeight: 1.4 } }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </PageHeader>
  );
}
