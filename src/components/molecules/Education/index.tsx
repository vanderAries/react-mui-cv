import { Box } from "@mui/material";

import SectionTitle from "@components/atoms/SectionTitle";
import EducationItem from "@components/atoms/EducationItem";

export default function Education() {
  return (
    <Box display="flex" flexDirection="column" margin={1}>
      <SectionTitle detail="education" />
      <EducationItem
        years="2015-2019"
        university="Cracow University of Technology"
        degree="Bachelor of Engineering"
        field="Civil Engineering"
        detail="Bachleor's thesis: Pre-metro station in Cracow"
      />
      <EducationItem
        years="2020-2021"
        university="Cracow University of Technology"
        degree="Master of Engineering"
        field="Civil Engineering - BIM specialization"
        detail="Master's thesis: Nonlinear FEM trusts solver in Python."
      />
    </Box>
  );
}
