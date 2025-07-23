import { AppBar, Button, Stack, Toolbar } from "@mui/material";
import Logo from "./Logo";
import { Outlet } from "react-router-dom";

function LandingNavBar() {
  return (
    <>
      <AppBar sx={{}} position="fixed">
        <Toolbar>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            width={"100%"}
          >
            <Logo />
            <Button color="inherit" variant="outlined">
              Get Started
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
}

export default LandingNavBar;
