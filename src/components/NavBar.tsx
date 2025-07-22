import { Box, IconButton, Toolbar } from "@mui/material";
import SearchNote from "./SearchNote";
import Profile from "./Profile";
import Logo from "./Logo";
import { Menu } from "@mui/icons-material";
type Props = {
  toggleDrawer: () => void;
};
function NavBar({ toggleDrawer }: Props) {
  return (
    <Toolbar
      sx={{
        display: "flex",
        alignContent: "center",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ display: { xs: "none", sm: "flex" } }}>
        <Logo />
      </Box>
      <IconButton
        sx={{ display: { xs: "flex", sm: "none" } }}
        onClick={toggleDrawer}
      >
        <Menu fontSize="large" />
      </IconButton>
      <SearchNote />
      <Profile />
    </Toolbar>
  );
}

export default NavBar;
