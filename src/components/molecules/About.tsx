import { Box, Typography } from "@mui/material";

import SectionTitle from "@components/atoms/SectionTitle";

interface AboutProps {
  details: string[];
}

export default function About({ details }: AboutProps) {
  return (
    <Box display="flex" flexDirection="column" margin={1}>
      <SectionTitle detail="about" />
      {details.map((detail, index) => (
        <Box key={index} marginTop={1}>
          <Typography key={index} variant="body1">
            {detail}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
