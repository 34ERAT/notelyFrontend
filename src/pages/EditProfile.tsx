import { Avatar, Box, Button, Paper, Stack, TextField } from "@mui/material";
import { useProfileStore } from "../store";
import { useState } from "react";
import { hasEmpty, isEmpty } from "../utils";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../config/axiosInstance";
import { Check } from "@mui/icons-material";
type PatchProfile = {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  avatar: string;
};
//TODO: check  change the button color and  give it sume time and return it to normal
function EditProfile() {
  const { profile, setProfile } = useProfileStore();
  const [newProfile, setNewProfile] = useState<PatchProfile>({ ...profile });
  const [isSuccess, setisSuccess] = useState(false);
  const { mutate, isPending } = useMutation({
    mutationKey: ["patchProfile"],
    mutationFn: async (profile: PatchProfile) => {
      const { data } = await axiosInstance.patch("/user", profile);
      return data;
    },
    onSuccess: (data) => {
      setProfile(data);
      setisSuccess(true);
    },
  });

  return (
    <Box display={"flex"} justifyContent={"center"} padding={1}>
      <Paper
        elevation={4}
        sx={{ borderRadius: 2, p: 1, overflow: "hidden", width: "40rem" }}
      >
        <Stack>
          <Stack padding={2}>
            <Avatar src={profile.avatar} sx={{ width: 100, height: 100 }}>
              TM
            </Avatar>
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
          color="primary"
          startIcon={isSuccess && <Check />}
          onClick={() => {
            mutate(newProfile);
            setTimeout(() => setisSuccess(false), 3000);
          }}
        >
          Update
        </Button>
      </Paper>
    </Box>
  );
}

export default EditProfile;
