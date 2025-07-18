import { AppBar, Toolbar, Typography } from "@mui/material";
import SearchNote from "./SearchNote";
import Profile from "./Profile";
import Logo from "./Logo";
function NavBar() {
  return (
    <AppBar position="fixed" elevation={0}>
      <Toolbar
        sx={{
          display: "flex",
          alignContent: "center",
          justifyContent: "space-between",
        }}
      >
        <Logo />
        <Typography display={{ xs: "none" }} variant="h4" fontWeight={800}>
          Page Title
        </Typography>
        <SearchNote />
        <Profile />
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
