import { Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

function HeroSection() {
  return (
    <Box
      width={"100%"}
      height={"89.7vh"}
      display={"flex"}
      sx={{
        background: 'url("/heroNotes.jpg")',
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Box
        sx={{
          height: "100%",
          background: "#00000090",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: grey[100],
          fontFamily: "Indie Flower",
        }}
      >
        <Typography
          fontFamily={"inherit"}
          variant="h4"
          fontWeight={700}
          color="inhert"
          letterSpacing={{ xs: 1, md: 3 }}
          textAlign={"center"}
          noWrap
          sx={{ fontSize: { xs: "2rem", md: "4rem" } }}
          padding={1}
          gutterBottom
        >
          Welcome to Notely
        </Typography>
        <Typography
          variant="subtitle1"
          fontFamily={"inherit"}
          color="inhert"
          textAlign={"center"}
          width={{ xs: "90%", sm: "70%", md: "40%" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Typography>
      </Box>
    </Box>
  );
}

export default HeroSection;
