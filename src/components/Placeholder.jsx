import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ImageOutlined from "@mui/icons-material/ImageOutlined";

export default function Placeholder({ label, sx }) {
  return (
    <Box
      role="img"
      aria-label={`${label} (placeholder)`}
      sx={{
        display: "grid",
        placeItems: "center",
        alignContent: "center",
        gap: 1,
        bgcolor: "grey.100",
        border: "1px dashed",
        borderColor: "grey.400",
        borderRadius: 1,
        color: "text.secondary",
        ...sx,
      }}
    >
      <ImageOutlined />
      <Typography variant="body2">{label}</Typography>
    </Box>
  );
}
