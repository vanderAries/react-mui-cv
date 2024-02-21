import { Box } from "@mui/material";
import WorkExperience from "@components/molecules/WorkExperience";

export default function MainSection() {
  return (
    <Box display="flex" flexDirection="column" flexGrow={1}>
      <WorkExperience />
      <WorkExperience />
    </Box>
  );
}
