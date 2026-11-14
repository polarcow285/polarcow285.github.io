import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Placeholder from "./Placeholder";
import Section from "./Section";
import { experiences } from "../data/content";

const logoSx = { width: { xs: 56, sm: 72 }, height: { xs: 56, sm: 72 }, flexShrink: 0, borderRadius: 1 };

export default function Experience() {
  return (
    <Section id="experience" title="Work Experience">
      <Stack spacing={2}>
        {experiences.map(({ company, role, dates, summary, logo }) => (
          <Card key={company + dates} variant="outlined">
            <CardContent sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box sx={{ flex: 1 }}>
                <Typography variant="h5" component="h3">{company}</Typography>
                <Typography variant="subtitle1">{role}</Typography>
                <Typography variant="body2" color="text.secondary">{dates}</Typography>
                {summary && <Typography variant="body2" sx={{ mt: 1 }}>{summary}</Typography>}
              </Box>
              {logo ? (
                <Box component="img" src={logo} alt={`${company} logo`} sx={{ ...logoSx, objectFit: "cover" }} />
              ) : (
                <Placeholder label="Logo" sx={{ ...logoSx, "& svg": { display: "none" } }} />
              )}
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Section>
  );
}
