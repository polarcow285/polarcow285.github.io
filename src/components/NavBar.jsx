import { Link as RouterLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { name, navLinks } from "../data/content";

export default function NavBar() {
  return (
    <AppBar position="sticky" color="inherit" elevation={0} sx={{ borderBottom: 1, borderColor: "divider" }}>
      <Toolbar>
        <Typography
          component={RouterLink}
          to="/"
          variant="h6"
          sx={{ display: { xs: "none", sm: "block" }, color: "inherit", textDecoration: "none", flexGrow: 1 }}
        >
          {name}
        </Typography>
        <Box component="nav" sx={{ display: "flex", mx: { xs: "auto", sm: 0 } }}>
          {navLinks.map(({ label, to, href }) => (
            <Button key={label} {...(to ? { component: RouterLink, to } : { href })} color="inherit" size="small">
              {label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
