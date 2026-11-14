import { Link as RouterLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ArrowForward from "@mui/icons-material/ArrowForward";

export default function Section({ id, title, seeMoreTo, subtitle, children }) {
  return (
    <Container component="section" id={id} aria-labelledby={`${id}-heading`} maxWidth="md" sx={{ py: 6 }}>
      <Box sx={{ display: "flex", alignItems: "baseline", gap: 2, mb: subtitle ? 0.5 : 3 }}>
        <Typography variant="h4" component="h2" id={`${id}-heading`}>
          {title}
        </Typography>
        {seeMoreTo && (
          <Button component={RouterLink} to={seeMoreTo} size="small" endIcon={<ArrowForward />}>
            See more
          </Button>
        )}
      </Box>
      {subtitle && (
        <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 3 }}>
          {subtitle}
        </Typography>
      )}
      {children}
    </Container>
  );
}
