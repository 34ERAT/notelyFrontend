import { AppBar, Button, Stack, Toolbar } from "@mui/material";
import Logo from "./Logo";
import { Outlet, useNavigate } from "react-router-dom";
import { useloginStore } from "../store";
import { Forward } from "@mui/icons-material";

function LandingNavBar() {
  const navigate = useNavigate();
  const { accessToken } = useloginStore();
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
            {accessToken ? (
              <Button
                startIcon={<Forward />}
                color="inherit"
                onClick={() => navigate("/Dashboard")}
                variant="outlined"
              >
                Dashboard
              </Button>
            ) : (
              <Button
                color="inherit"
                onClick={() => navigate("/signup")}
                variant="outlined"
              >
                Get Started
              </Button>
            )}
          </Stack>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
}

export default LandingNavBar;
