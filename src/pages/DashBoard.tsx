import { Box, Drawer } from "@mui/material";
import SideBar from "../components/SideBar";
import CSSBaseline from "@mui/material/CssBaseline";
import { Outlet } from "react-router-dom";
function DashBoard() {
  const drawerWidth = 70;
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CSSBaseline />
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
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </>
  );
}

export default DashBoard;
