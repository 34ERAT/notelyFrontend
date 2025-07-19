import { Bookmark, Edit, NoteAdd } from "@mui/icons-material";
import RecyclingIcon from "@mui/icons-material/Recycling";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Toolbar,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function SideBar() {
  const navigate = useNavigate();
  const style = {
    display: "flex",
    justifyContent: "space-around",
  };
  return (
    <div>
      <Toolbar sx={{ alignItems: "center", justifyContent: "center" }}>
        <Box component={"img"} src="/notes.png" width={50} />
      </Toolbar>
      <Divider />
      <List sx={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => navigate("NewNote")}
            sx={style}
            disableGutters
          >
            <ListItemIcon sx={style}>
              <NoteAdd color="info" />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            onClick={() => navigate("EditNote")}
            sx={style}
            disableGutters
          >
            <ListItemIcon sx={style}>
              <Edit color="info" />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            sx={style}
            onClick={() => navigate("Bookmark")}
            disableGutters
          >
            <ListItemIcon sx={style}>
              <Bookmark color="info" />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            sx={style}
            onClick={() => navigate("Trash")}
            disableGutters
          >
            <ListItemIcon sx={style}>
              <RecyclingIcon color="info" />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );
}

export default SideBar;
