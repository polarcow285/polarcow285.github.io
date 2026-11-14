import { useRef, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import ArrowForward from "@mui/icons-material/ArrowForward";
import CloseIcon from "@mui/icons-material/Close";
import OpenInNew from "@mui/icons-material/OpenInNew";
import PictureAsPdf from "@mui/icons-material/PictureAsPdf";
import ProjectMedia from "./ProjectMedia";
import RichText from "./RichText";

const figureSx = { width: "100%", maxHeight: "55vh", objectFit: "contain", bgcolor: "grey.100", borderRadius: 1 };
const padX = { xs: 3, sm: 10 };

function Pdf({ src, label = "Read the full paper" }) {
  const [open, setOpen] = useState(false);
  const isPhone = useMediaQuery((t) => t.breakpoints.down("sm"));
  const buttonProps = isPhone ? { href: src, target: "_blank", rel: "noopener noreferrer" } : { onClick: () => setOpen(true) };

  return (
    <>
      <Button variant="outlined" startIcon={<PictureAsPdf />} sx={{ mb: 3 }} {...buttonProps}>
        {label}
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="lg" sx={{ "& .MuiDialog-paper": { height: "90vh" } }}>
        <IconButton aria-label="Close PDF" onClick={() => setOpen(false)} sx={{ position: "absolute", top: 8, right: 8, color: "error.main", bgcolor: "background.paper", "&:hover": { bgcolor: "grey.100" } }}>
          <CloseIcon />
        </IconButton>
        <Box component="iframe" src={`${src}#toolbar=0&navpanes=0&view=FitH`} title={label} sx={{ width: "100%", height: "100%", border: 0 }} />
      </Dialog>
    </>
  );
}

const Caption = ({ children }) => (
  <Typography component="figcaption" variant="caption" color="text.secondary" sx={{ display: "block", mt: 1, textAlign: "center" }}>
    {children}
  </Typography>
);

function Block({ block, title }) {
  if (typeof block === "string")
    return <Typography variant="body1" paragraph><RichText text={block} /></Typography>;
  if (block.quote)
    return (
      <Box component="blockquote" sx={{ m: 0, mb: 3, pl: 2, py: 0.5, borderLeft: 4, borderColor: "primary.main" }}>
        <Typography variant="body1" color="text.secondary" sx={{ fontStyle: "italic" }}><RichText text={block.quote} /></Typography>
      </Box>
    );
  if (block.heading)
    return <Typography variant="h6" component="h3" sx={{ mt: 2, mb: 1 }}>{block.heading}</Typography>;
  if (block.list)
    return (
      <Box component="ul" sx={{ mt: 0, mb: 2, pl: 3 }}>
        {block.list.map((item, i) => (
          <Typography component="li" variant="body1" key={i} sx={{ mb: 1 }}><RichText text={item} /></Typography>
        ))}
      </Box>
    );
  if (block.pdf) return <Pdf src={block.pdf} label={block.label} />;
  if (block.embed)
    return (
      <Box component="figure" sx={{ m: 0, mb: 3 }}>
        <Box component="iframe" src={block.embed} title={block.caption || title} allowFullScreen sx={{ width: "100%", aspectRatio: "16 / 9", border: 0, borderRadius: 1, bgcolor: "grey.100" }} />
        {block.caption && <Caption>{block.caption}</Caption>}
      </Box>
    );
  if (block.link)
    return (
      <Button href={block.link} target="_blank" rel="noopener noreferrer" variant="outlined" endIcon={<OpenInNew />} sx={{ mb: 3, mr: 2 }}>
        {block.label || block.link}
      </Button>
    );
  if (block.images)
    return (
      <Box component="figure" sx={{ m: 0, mb: 3 }}>
        <Box sx={{ display: "grid", gap: 2, gridTemplateColumns: { xs: "1fr", sm: `repeat(${block.images.length}, 1fr)` } }}>
          {block.images.map((src) => (
            <Box key={src} component="img" src={src} alt={block.caption || title} sx={{ ...figureSx, height: { sm: "55vh" }, objectFit: "cover" }} />
          ))}
        </Box>
        {block.caption && <Caption>{block.caption}</Caption>}
      </Box>
    );
  return (
    <Box component="figure" sx={{ m: 0, mb: 3 }}>
      <ProjectMedia title={block.caption || title} video={block.video} image={block.image} sx={{ ...figureSx, aspectRatio: block.video || block.image ? "auto" : "16 / 9" }} />
      {block.caption && <Caption>{block.caption}</Caption>}
    </Box>
  );
}

export default function ProjectDialog({ project, onClose, showAllLink = true }) {
  const isPhone = useMediaQuery((t) => t.breakpoints.down("sm"));
  const last = useRef(project);
  if (project) last.current = project;
  const p = last.current;

  return (
    <Dialog
      open={Boolean(project)}
      onClose={onClose}
      fullScreen={isPhone}
      fullWidth
      maxWidth="lg"
      aria-labelledby="project-dialog-title"
      sx={{ "& .MuiDialog-paper": { height: { sm: "90vh" } } }}
    >
      {p && (
        <>
          <DialogTitle component="div" sx={{ px: padX, pt: 3, pr: 8 }}>
            <Typography variant="h6" component="h2" id="project-dialog-title">{p.title}</Typography>
            {(p.dates || p.tags) && (
              <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" alignItems="center" sx={{ mt: 1.5 }}>
                {p.dates && <Typography variant="body2" color="text.secondary" sx={{ mr: 1 }}>{p.dates}</Typography>}
                {p.tags?.map((tag) => <Chip key={tag} label={tag} size="small" color="primary" variant="outlined" />)}
              </Stack>
            )}
          </DialogTitle>
          <IconButton aria-label="Close" onClick={onClose} sx={{ position: "absolute", top: 12, right: 12, color: "error.main" }}>
            <CloseIcon />
          </IconButton>

          <DialogContent dividers sx={{ px: padX, py: 4 }}>
            <ProjectMedia title={p.title} video={p.video} image={p.image} sx={{ ...figureSx, mb: 3, aspectRatio: p.video || p.image ? "auto" : "16 / 9" }} />
            {p.details.map((block, i) => <Block key={i} block={block} title={p.title} />)}
          </DialogContent>

          {showAllLink && (
            <DialogActions sx={{ px: padX, py: 2 }}>
              <Button component={RouterLink} to="/projects" variant="contained" endIcon={<ArrowForward />}>
                See All Projects
              </Button>
            </DialogActions>
          )}
        </>
      )}
    </Dialog>
  );
}
