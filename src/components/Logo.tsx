import { Box, Typography } from "@mui/material";

function Logo() {
  return (
    <Box>
      <Typography
        display={{ xs: "none", md: "flex" }}
        variant="h4"
        textTransform={"uppercase"}
        fontFamily={"Indie Flower"}
        fontWeight={1000}
        noWrap
      >
        Notely
      </Typography>
    </Box>
  );
}

export default Logo;
