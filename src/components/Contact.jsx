import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { contacts } from "../data/content";

export default function Contact() {
  return (
    <Box component="footer" id="contact" sx={{ bgcolor: "grey.50", borderTop: 1, borderColor: "divider", py: 6, mt: 4 }}>
      <Container maxWidth="md">
        <Typography variant="h4" component="h2" gutterBottom>
          Contact
        </Typography>
        <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
          {contacts.map(({ label, href, Icon }) => (
            <Button key={label} href={href} variant="outlined" startIcon={<Icon />} target="_blank" rel="noopener noreferrer">
              {label}
            </Button>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
