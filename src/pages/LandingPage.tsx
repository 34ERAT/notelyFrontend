import { Box } from "@mui/material";
import HeroSection from "../components/HeroSection";
import AboutUsSection from "../components/AboutUsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FooterSection from "../components/FooterSection";

function LandingPage() {
  return (
    <Box>
      <HeroSection />
      <AboutUsSection />
      <TestimonialsSection />
      <FooterSection />
    </Box>
  );
}

export default LandingPage;
