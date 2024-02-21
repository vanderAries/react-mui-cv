import { Box, Divider } from "@mui/material";

import Contact from "@components/molecules/Contact";
import MainTitle from "@components/atoms/MainTitle";

export default function Header() {
  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        width="100%"
        height="100px"
      >
        <MainTitle
          detail={
            <>
              Paweł
              <br />
              Bąk
            </>
          }
          variant="h1"
        />
        <MainTitle
          detail={
            <>
              Web Fullstack
              <br />
              Software Engineer
            </>
          }
          variant="h3"
        />
        <Contact
          phone="+48 791 482 166"
          email="gp.bak96@gmail.com"
          linkedin="gp-bak"
        />
      </Box>
      <Divider sx={{ margin: 1 }} />
    </>
  );
}
