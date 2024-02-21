import { Typography, Box } from "@mui/material";

interface SkillsItemProps {
  category: string;
  skills: string[];
}

export default function SkillsItem({ category, skills }: SkillsItemProps) {
  return (
    <Box display="flex" flexDirection="column" marginTop={1}>
      <Typography variant="h4">{category}</Typography>
      <Box display="flex" flexWrap="wrap">
        {skills.map((skill, index) => (
          <Box key={index} marginRight={1}>
            <Typography key={index} variant="subtitle1">
              {skill}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
