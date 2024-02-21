import { ReactNode } from "react";
import { Box, Typography } from "@mui/material";

import SectionTitle from "@components/atoms/SectionTitle";

interface AboutProps {
  detail: ReactNode;
}

export default function About({ detail }: AboutProps) {
  return (
    <Box display="flex" flexDirection="column" margin={1}>
      <SectionTitle detail="about" />
      <Typography variant="body1">{detail}</Typography>
    </Box>
  );
}
