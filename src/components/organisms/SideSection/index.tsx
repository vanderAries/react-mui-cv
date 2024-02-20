import { Box } from "@mui/material";
import About from "@components/molecules/About";
import Education from "@components/molecules/Education";

export default function SideSection() {
  return (
    <Box display="flex" flexDirection="column" width="33%">
      <About
        detail={
          <>
            <p>
              I'm a Software Developer with ongoing AWS experience, specializing
              in REST APIs. Proficient in building serverless backend systems
              with a keen focus on testing and documentation.
            </p>
            <p>
              Currently engaged in cloud architecture for analysis platform,
              contributing to standardizing schemas and communication across
              services.
            </p>
            <p>
              Previously Civil Engineer, experienced in automation with Autodesk
              products, interested in scientific analysis software development.
            </p>
            Eager to contribute to responsible desktop programs migration to the
            cloud, aligning with Autodesk's vision.
          </>
        }
      />
      <Education school="c" degree="bachleor" years="2019" />
    </Box>
  );
}
