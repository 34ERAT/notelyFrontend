import { Box, Toolbar } from "@mui/material";
import HeroSection from "../components/HeroSection";
import AboutUsSection from "../components/AboutUsSection";
import TestimonialsSection from "../components/TestimonialsSection";

function LandingPage() {
  return (
    <Box>
      <Toolbar />
      <HeroSection />
      <AboutUsSection />
      <TestimonialsSection />
    </Box>
  );
}

export default LandingPage;
