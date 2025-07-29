import { Avatar, Box, Button, Paper, Stack, TextField } from "@mui/material";
import { useProfileStore } from "../store";
import { useState } from "react";
import { hasEmpty, isEmpty } from "../utils";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../config/axiosInstance";
import { CheckCircle } from "@mui/icons-material";
import ImageUpload from "../components/ImageUpload";
type PatchProfile = {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
};
function EditProfile() {
  const { profile, setProfile } = useProfileStore();
  const [newProfile, setNewProfile] = useState<PatchProfile>({
    firstName: profile.firstName,
    username: profile.username,
    lastName: profile.lastName,
    email: profile.email,
  });
  const [isSuccess, setisSuccess] = useState(false);
  const { mutate, isPending } = useMutation({
    mutationKey: ["patchProfile"],
    mutationFn: async (profile: PatchProfile) => {
      const { data } = await axiosInstance.patch("/user", profile);
      return data;
    },
    onSuccess: (data) => {
      setisSuccess(true);
      setProfile(data);
      setTimeout(() => setisSuccess(false), 3000);
    },
  });

  return (
    <Box display={"flex"} justifyContent={"center"} padding={1}>
      <Paper
        elevation={4}
        sx={{ borderRadius: 2, p: 1, overflow: "hidden", width: "40rem" }}
      >
        <Stack>
          <Stack
            padding={2}
            alignItems={"center"}
            justifyContent={"space-between"}
            direction={"row"}
          >
            <Avatar src={profile.avatar} sx={{ width: 100, height: 100 }}>
              {`${profile.firstName[0]}${profile.lastName[0]}`.toUpperCase()}
            </Avatar>
            <ImageUpload
              onChange={(image: string) => {
                setProfile({ ...profile, avatar: image });
              }}
            />
          </Stack>
          <Stack spacing={3}>
            <Stack direction={"row"} spacing={2}>
              <TextField
                value={newProfile.firstName}
                fullWidth
                error={isEmpty(newProfile.firstName)}
                onChange={({ target: { value } }) =>
                  setNewProfile({ ...newProfile, firstName: value })
                }
                slotProps={{
                  inputLabel: { shrink: !isEmpty(newProfile.firstName) },
                }}
                variant="standard"
                label="FirstName"
                required
              />
              <TextField
                value={newProfile.lastName}
                fullWidth
                variant="standard"
                label="LastName"
                error={isEmpty(newProfile.lastName)}
                onChange={({ target: { value } }) =>
                  setNewProfile({ ...newProfile, lastName: value })
                }
                slotProps={{
                  inputLabel: { shrink: !isEmpty(newProfile.lastName) },
                }}
                required
              />
            </Stack>
            <Stack spacing={2}>
              <TextField
                value={newProfile.username}
                error={isEmpty(newProfile.username)}
                variant="standard"
                label="UserName"
                onChange={({ target: { value } }) =>
                  setNewProfile({ ...newProfile, username: value })
                }
                slotProps={{
                  inputLabel: { shrink: !isEmpty(newProfile.username) },
                }}
                required
              />
              <TextField
                value={newProfile.email}
                error={isEmpty(newProfile.email)}
                variant="standard"
                type="email"
                label="email"
                onChange={({ target: { value } }) =>
                  setNewProfile({ ...newProfile, email: value })
                }
                slotProps={{
                  inputLabel: { shrink: !isEmpty(newProfile.username) },
                }}
                required
              />
            </Stack>
          </Stack>
        </Stack>
        <Button
          loading={isPending}
          disabled={hasEmpty(Object.values(newProfile))}
          sx={{ mt: 2 }}
          variant="contained"
          color={isSuccess ? "success" : "primary"}
          startIcon={isSuccess && <CheckCircle />}
          onClick={() => {
            mutate(newProfile);
          }}
        >
          Update
        </Button>
      </Paper>
    </Box>
  );
}

export default EditProfile;
