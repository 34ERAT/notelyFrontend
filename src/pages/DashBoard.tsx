import { AppBar, Box, Drawer, Toolbar } from "@mui/material";
import SideBar from "../components/SideBar";
import CSSBaseline from "@mui/material/CssBaseline";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useState } from "react";
function DashBoard() {
  //TODO: migrate the tool bar
  const drawerWidth = 70;
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CSSBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <NavBar toggleDrawer={() => setOpenDrawer(true)} />
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            <SideBar />
          </Drawer>

          <Drawer
            variant="temporary"
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open={openDrawer}
            onClose={() => setOpenDrawer(false)}
          >
            <SideBar />
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 2,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          <Outlet />
        </Box>
      </Box>
    </>
  );
}

export default DashBoard;
