import { Logout } from "@mui/icons-material";
import { MenuItem, Menu, Avatar, ListItemIcon } from "@mui/material";

type Props = {
  anchorEl: HTMLElement;
  open: boolean;
};
function ProfileMenu({ anchorEl, open }: Props) {
  return (
    <Menu
      id="userProfile"
      anchorEl={anchorEl}
      open={open}
      slotProps={{
        paper: {
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        },
      }}
    >
      <MenuItem>
        <Avatar sx={{ mr: 1 }} /> Profile
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        logout
      </MenuItem>
    </Menu>
  );
}

export default ProfileMenu;
