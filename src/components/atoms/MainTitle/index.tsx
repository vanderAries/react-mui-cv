import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";

interface MainTitleProps {
  detail: ReactNode;
  variant?: "h1" | "h2" | "h3";
}

export default function MainTitle({ detail, variant }: MainTitleProps) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="flex-end"
      width="100%"
      margin={1}
    >
      <Typography variant={variant}>
        {detail}
      </Typography>
    </Box>
  );
}
