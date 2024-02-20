import { Container, Box } from "@mui/material";
import Header from "@components/organisms/Header";
import SideSection from "@components/organisms/SideSection";
import MainSection from "@components/organisms/MainSection";

export default function Resume() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ width: 595, height: 842, overflow: "auto" }}>
        <Header />
        <Box display="flex" width="100%">
          <SideSection />
          <MainSection />
        </Box>
      </Box>
    </Container>
  );
}
