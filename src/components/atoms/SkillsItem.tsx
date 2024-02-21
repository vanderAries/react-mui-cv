import { Typography, Box } from "@mui/material";

interface SkillsItemProps {
  category: string;
  skills: string[];
}

export default function SkillsItem({ category, skills }: SkillsItemProps) {
    return (
        <Box display="flex" flexDirection="column" marginY={1}>
            <Box>
                <Typography variant="h4">{category}</Typography>
            </Box>
            <Box marginY={1}>
                {skills.map((skill, index) => (
                    <Typography key={index} variant="subtitle1">{skill}</Typography>
                ))}
            </Box>
        </Box>
    );
}
