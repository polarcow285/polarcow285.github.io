import { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Fab from "@mui/material/Fab";
import Fade from "@mui/material/Fade";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import VolumeOff from "@mui/icons-material/VolumeOff";
import VolumeUp from "@mui/icons-material/VolumeUp";

export default function MediaCarousel({ label, slides, height = "45vh" }) {
  const [index, setIndex] = useState(0);
  const [muted, setMuted] = useState(true);
  const videoRefs = useRef([]);
  const touchX = useRef(null);
  const count = slides.length;

  const go = (i) => {
    setIndex((i + count) % count);
    setMuted(true);
  };

  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === index) {
        v.muted = muted;
        v.play().catch(() => {});
      } else {
        v.pause();
        v.muted = true;
      }
    });
  }, [index, muted]);

  const current = slides[index];

  const onStageClick = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    go(e.clientX - r.left < r.width / 2 ? index - 1 : index + 1);
  };
  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") { go(index + 1); e.preventDefault(); }
    if (e.key === "ArrowLeft") { go(index - 1); e.preventDefault(); }
  };
  const onTouchStart = (e) => { touchX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 40) go(dx < 0 ? index + 1 : index - 1);
    touchX.current = null;
  };

  const arrowSx = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 2,
    color: "text.primary",
    bgcolor: "rgba(255, 255, 255, 0.92)",
    "&:hover": { bgcolor: "#fff" },
  };

  return (
    <Card
      elevation={2}
      role="region"
      aria-roledescription="carousel"
      aria-label={`${label} photos`}
      onKeyDown={onKeyDown}
      sx={{
        width: { xs: "100%", sm: "fit-content" },
        maxWidth: "100%",
        textAlign: "left",
        transition: (t) => t.transitions.create("box-shadow"),
        "&:hover": { boxShadow: 8 },
      }}
    >
      <Box
        tabIndex={0}
        aria-live="polite"
        onClick={onStageClick}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        sx={{
          position: "relative",
          height,
          minHeight: 180,
          width: { xs: "100%", sm: "auto" },
          aspectRatio: { xs: "auto", sm: "3 / 2" },
          overflow: "clip", 
          bgcolor: "#000",
          cursor: "pointer",
          userSelect: "none",
          "&:focus-visible": { outline: 2, outlineColor: "primary.main", outlineOffset: -2 },
        }}
      >
        {slides.map((s, i) => (
          <Fade key={s.src || s.video} in={i === index} timeout={300}>
            <Box
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${count}`}
              sx={{ position: "absolute", inset: 0 }}
            >
              
              <Box
                sx={{
                  position: "absolute",
                  inset: "-30px",
                  backgroundImage: `url("${s.poster || s.src}")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "blur(22px) brightness(.6)",
                }}
              />
              <Box
                component={s.video ? "video" : "img"}
                ref={s.video ? (el) => (videoRefs.current[i] = el) : undefined}
                {...(s.video
                  ? { src: s.video, poster: s.poster, loop: true, playsInline: true, muted: true, preload: "metadata", "aria-label": s.alt ?? s.caption }
                  : { src: s.src, alt: s.alt ?? s.caption, draggable: false })}
                sx={{ position: "relative", display: "block", width: "100%", height: "100%", objectFit: "contain" }}
              />
            </Box>
          </Fade>
        ))}

        <Fab
          size="small"
          aria-label={`Previous ${label} photo`}
          onClick={(e) => { e.stopPropagation(); go(index - 1); }}
          sx={{ ...arrowSx, left: 12 }}
        >
          <KeyboardArrowLeft />
        </Fab>
        <Fab
          size="small"
          aria-label={`Next ${label} photo`}
          onClick={(e) => { e.stopPropagation(); go(index + 1); }}
          sx={{ ...arrowSx, right: 12 }}
        >
          <KeyboardArrowRight />
        </Fab>

        {current.video && (
          <IconButton
            aria-label={muted ? "Turn sound on" : "Turn sound off"}
            onClick={(e) => { e.stopPropagation(); setMuted((m) => !m); }}
            sx={{
              position: "absolute",
              bottom: 8,
              right: 8,
              zIndex: 2,
              color: "#fff",
              bgcolor: "rgba(0, 0, 0, 0.54)",
              "&:hover": { bgcolor: "rgba(0, 0, 0, 0.7)" },
            }}
          >
            {muted ? <VolumeOff /> : <VolumeUp />}
          </IconButton>
        )}
      </Box>

      <CardContent sx={{ width: 0, minWidth: "100%", pb: "8px !important" }}>
        <Typography variant="body1" sx={{ minHeight: { sm: "3em" } }}>
          {current.caption}
        </Typography>

        <Box role="group" aria-label={`Choose a ${label} slide`} sx={{ display: "flex", pt: 0.5, pb: 1, ml: "-2px" }}>
          {slides.map((s, i) => (
            <ButtonBase
              key={i}
              aria-label={`Show slide ${i + 1}: ${s.alt ?? s.caption}`}
              aria-current={i === index}
              onClick={() => go(i)}
              sx={{
                width: 8,
                height: 8,
                mx: "2px",
                borderRadius: "50%",
                bgcolor: i === index ? "primary.main" : "action.disabled",
                transition: (t) => t.transitions.create("background-color", { duration: t.transitions.duration.shortest }),
                "&.Mui-focusVisible": { outline: 2, outlineColor: "primary.main", outlineOffset: 2 },
              }}
            />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}
