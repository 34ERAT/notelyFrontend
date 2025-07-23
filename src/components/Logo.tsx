import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Box>
      <Link style={{ textDecoration: "none", color: "inherit" }} to={"/"}>
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
      </Link>
    </Box>
  );
}

export default Logo;
