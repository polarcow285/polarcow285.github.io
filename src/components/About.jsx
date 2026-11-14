import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import RichText from "./RichText";
import { about, name, photos } from "../data/content";

export default function About() {
  return (
    <Container component="section" id="about" aria-label="About me" maxWidth="md" sx={{ py: 6 }}>
      <Stack direction={{ xs: "column-reverse", sm: "row" }} spacing={4} alignItems="center">
        <Typography variant="h6" component="p" sx={{ fontWeight: 400, flex: 1 }}>
          <RichText text={about} />
        </Typography>
        <Box
          component="img"
          src={photos.headshot}
          alt={`Headshot of ${name}`}
          sx={{ width: 180, aspectRatio: "3 / 4", objectFit: "cover", borderRadius: 1, flexShrink: 0 }}
        />
      </Stack>
    </Container>
  );
}
