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
          variant="h1"
          fontWeight={900}
          color="inhert"
          letterSpacing={3}
        >
          Welcome to Notely
        </Typography>
        <Typography
          variant="h5"
          fontFamily={"inherit"}
          color="inhert"
          textAlign={"center"}
          width={700}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
          voluptatem qui soluta neque necessitatibus debitis dolore similique
          numquam ipsam quam.
        </Typography>
      </Box>
    </Box>
  );
}

export default HeroSection;
