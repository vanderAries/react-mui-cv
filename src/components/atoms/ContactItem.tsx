import React from "react";
import { Box, Typography } from "@mui/material";

interface ContactItemProps {
  detail: string;
  icon: React.ElementType;
}

export default function ContactItem({
  detail,
  icon: IconComponent,
}: ContactItemProps) {
  return (
    <Box display="flex" alignItems="center">
      <IconComponent />
      <Typography variant="body1" marginLeft={1}>
        {detail}
      </Typography>
    </Box>
  );
}
