import { Box, Stack, Typography } from "@mui/material";
import TestimonalCard from "./TestimonalCard";

function TestimonialsSection() {
  return (
    <Box height={"80vh"}>
      <Typography
        variant="h2"
        textTransform={"capitalize"}
        textAlign={"center"}
        fontWeight={900}
        fontFamily="Indie Flower"
      >
        Testimonials
      </Typography>
      <Stack
        height={"100%"}
        justifyContent={"center"}
        direction={"row"}
        alignItems="center"
        flexWrap={"wrap"}
        spacing={4}
      >
        <TestimonalCard />
        <TestimonalCard />
        <TestimonalCard />
      </Stack>
    </Box>
  );
}

export default TestimonialsSection;
