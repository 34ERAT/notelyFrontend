import { Logout, Password } from "@mui/icons-material";
import { MenuItem, Menu, Avatar, ListItemIcon } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../config/axiosInstance";
import { useloginStore, useProfileStore } from "../store";
import { useNavigate } from "react-router-dom";

type Props = {
  anchorEl: HTMLElement;
  open: boolean;
  onClose: () => void;
  onClick: () => void;
};
function ProfileMenu({ onClick, onClose, anchorEl, open }: Props) {
  const { setAccessToken } = useloginStore();
  const { profile } = useProfileStore();
  const navigate = useNavigate();
  const { mutate: mutateLogout } = useMutation({
    mutationKey: ["logout"],
    mutationFn: async () => {
      await axiosInstance.post("auth/logout");
    },
    onSuccess: () => {
      setAccessToken("");
      navigate("/");
    },
  });
  return (
    <Menu
      id="userProfile"
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      onClick={onClick}
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
      <MenuItem onClick={() => navigate("/DashBoard/Profile")}>
        <Avatar src={profile.avatar} sx={{ mr: 1 }} /> Profile
      </MenuItem>

      <MenuItem onClick={() => navigate("/DashBoard/Password")}>
        <ListItemIcon>
          <Password />
        </ListItemIcon>
        password
      </MenuItem>
      <MenuItem onClick={() => mutateLogout()}>
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        logout
      </MenuItem>
    </Menu>
  );
}

export default ProfileMenu;
