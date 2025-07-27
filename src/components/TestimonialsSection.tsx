import { Box, Stack, Typography } from "@mui/material";
import TestimonalCard from "./TestimonalCard";

function TestimonialsSection() {
  return (
    <Box minHeight={"80vh"}>
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
        gap={3}
      >
        <TestimonalCard />
        <TestimonalCard />
        <TestimonalCard />
      </Stack>
    </Box>
  );
}

export default TestimonialsSection;
