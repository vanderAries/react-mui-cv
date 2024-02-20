import { Typography, Divider, Box } from "@mui/material";

interface ContactProps {
    detail: string
  }

export default function SectionTitle ({ detail }: ContactProps) {
    return (
        <Box display="flex"
        flexDirection="column">
            <Typography variant="h2">{detail}</Typography>
            <Divider sx={{background: "black", borderBottomWidth: 2, marginY: 1 }} />
        </Box>
    );
};