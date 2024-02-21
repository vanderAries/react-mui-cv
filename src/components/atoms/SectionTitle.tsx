import { Typography, Divider, Box } from "@mui/material";

interface SectionTitleProps {
  detail: string;
}

export default function SectionTitle({ detail }: SectionTitleProps) {
  return (
    <Box display="flex" flexDirection="column">
      <Typography variant="h2">{detail}</Typography>
      <Divider
        sx={{ background: "black", borderBottomWidth: 2, marginTop: 1 }}
      />
    </Box>
  );
}
