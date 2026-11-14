import Box from "@mui/material/Box";
import MediaCarousel from "./MediaCarousel";
import Section from "./Section";
import { fencingSlides } from "../data/slides";

export default function Fencing() {
  return (
    <Section id="fencing" title="Fencing" seeMoreTo="/fencing" subtitle="Whether I'm on the strip or on the sideline, I show up for my teammates.">
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <MediaCarousel label="Fencing" slides={fencingSlides} height="45vh" />
      </Box>
    </Section>
  );
}
