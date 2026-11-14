import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { name, photos } from "../data/content";

export default function Hero() {
  return (
    <Box sx={{ position: "relative", height: { xs: "calc(100svh - 56px)", sm: "calc(100vh - 64px)" }, minHeight: 420, overflow: "hidden" }}>
      <Box
        component="img"
        src={photos.hero}
        alt={`${name} working with a robot arm in the lab`}
        sx={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "65% 30%" }}
      />
      <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 50%)" }} />
      <Typography
        variant="h2"
        component="h1"
        sx={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: { xs: "8%", sm: "10%" },
          px: 2,
          textAlign: "center",
          color: "common.white",
          fontWeight: 700,
          fontSize: { xs: "2.25rem", sm: "3.5rem" },
          textShadow: "0 2px 16px rgba(0,0,0,0.45)",
        }}
      >
        Hi, I'm {name}
      </Typography>
    </Box>
  );
}
