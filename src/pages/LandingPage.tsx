import { Box, Toolbar } from "@mui/material";
import HeroSection from "../components/HeroSection";
import AboutUsSection from "../components/AboutUsSection";

function LandingPage() {
  return (
    <Box>
      <Toolbar />
      <HeroSection />
      <AboutUsSection />
    </Box>
  );
}

export default LandingPage;
