import { Avatar, IconButton, Stack, Typography } from "@mui/material";
import { useState } from "react";
import ProfileMenu from "./ProfileMenu";
import { useProfileStore } from "../store";

function Profile() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const {
    profile: { email, avatar, firstName, lastName },
  } = useProfileStore();
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent="space-between"
      spacing={2}
      fontWeight={800}
    >
      <Typography
        display={{ xs: "none", md: "flex" }}
        variant="subtitle1"
        fontSize={"1.2rem"}
        fontWeight={400}
      >
        {email}
      </Typography>
      <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
        <Avatar src={avatar}>
          {`${firstName[0] + lastName[0]}`.toUpperCase()}
        </Avatar>
      </IconButton>
      <ProfileMenu anchorEl={anchorEl as HTMLElement} open={open} />
    </Stack>
  );
}

export default Profile;
