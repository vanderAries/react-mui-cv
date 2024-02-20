import { Box, Typography } from "@mui/material";

import SectionTitle from "@components/atoms/SectionTitle";

interface EducationProps {
  school: string;
  degree: string;
  years: string;
}

export default function Education({ school, degree, years }: EducationProps) {
  return (
    <Box display="flex" flexDirection="column" margin={1}>
      <SectionTitle detail="education" />
      <Typography variant="body1">{school}</Typography>
      <Typography variant="body1">{degree}</Typography>
      <Typography variant="body1">{years}</Typography>
    </Box>
  );
}
