import { Box } from "@mui/material";
import SkillsItem from "@components/atoms/SkillsItem";
import SectionTitle from "@components/atoms/SectionTitle";

export default function Skills() {
  return (
    <Box display="flex" flexDirection="column" margin={1}>
      <SectionTitle detail="skills" />
      <SkillsItem
        category="Development"
        skills={["AWS", "Node.js", "TypeScript", "Python", "Docker", "Linux", "REST API", "Serverless", "DevOps", "React"]}
      />
      <SkillsItem
        category="Testing"
        skills={["API Testing", "Postman", "Jest", "Reports", "Jenkins", "Infrastructure Automation"]}
      />
      <SkillsItem
        category="Civil Engineering"
        skills={["Revit", "Robot", "Dynamo", "RFEM", "AutoCAD", "Basic Civil3D", "FEM"]}
      />
      <SkillsItem
        category="Soft Skills"
        skills={["Problem-Solving", "Creativity", "Communication & Cooperation"]}
      />
    </Box>
  );
}
