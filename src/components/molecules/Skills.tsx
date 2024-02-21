import { Box } from "@mui/material";
import SkillsItem from "@components/atoms/SkillsItem";
import SectionTitle from "@components/atoms/SectionTitle";

export default function Skills() {
  return (
    <Box display="flex" flexDirection="column" margin={1}>
      <SectionTitle detail="skills" />
      <SkillsItem
        category="Development"
        skills={["JavaScript", "TypeScript", "Python", "SQL", "HTML", "CSS"]}
      />
      <SkillsItem
        category="Frameworks"
        skills={["React", "Express", "Flask"]}
      />
    </Box>
  );
}
