import { Typography, Box } from "@mui/material";

interface EducationItemProps {
  years: string;
  university: string;
  degree: string;
  field: string;
  detail: string;
}

export default function EducationItem({
  years,
  university,
  degree,
  field,
  detail,
}: EducationItemProps) {
  return (
    <Box display="flex" flexDirection="column" marginTop={1}>
      <Typography variant="subtitle1">{years}</Typography>
      <Typography variant="h4">{university}</Typography>
      <Box marginBottom={1}>
        <Typography variant="body1">{degree}</Typography>
        <Typography variant="body1">{field}</Typography>
      </Box>
      <Typography variant="body1">{detail}</Typography>
    </Box>
  );
}
