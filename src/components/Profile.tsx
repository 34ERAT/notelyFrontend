import { Avatar, IconButton, Stack, Typography } from "@mui/material";
import { useState } from "react";
import ProfileMenu from "./ProfileMenu";

function Profile() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

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
        helloe jolly
      </Typography>
      <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
        <Avatar>TM</Avatar>
      </IconButton>
      <ProfileMenu anchorEl={anchorEl as HTMLElement} open={open} />
    </Stack>
  );
}

export default Profile;
