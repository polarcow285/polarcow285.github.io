import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function PageHeader({ title, maxWidth = 900, children }) {
  return (
    <Container maxWidth={false} sx={{ maxWidth, py: 6 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        {title}
      </Typography>
      {children}
    </Container>
  );
}
