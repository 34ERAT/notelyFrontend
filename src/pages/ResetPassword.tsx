import {
  Alert,
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState, type ChangeEvent } from "react";
import { isEmpty, hasEmpty } from "../utils";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../config/axiosInstance";
import { CheckCircle } from "@mui/icons-material";
import { useloginStore } from "../store";
type PatchPassword = {
  oldPassword: string;
  password: string;
  confirmPassword: string;
};
function ResetPassword() {
  const [input, setInput] = useState<PatchPassword>({
    oldPassword: "",
    password: "",
    confirmPassword: "",
  });

  const [isSuccess, setIsSuccess] = useState(false);

  const { setAccessToken } = useloginStore();
  const { mutate: mutateLogout } = useMutation({
    mutationKey: ["logout"],
    mutationFn: async () => {
      await axiosInstance.post("auth/logout");
    },
    onSuccess: () => {
      setAccessToken("");
      setTimeout(() => setIsSuccess(false), 3000);
      navigate("/login");
    },
  });

  const navigate = useNavigate();
  const {
    mutate: mutatePatchPassword,
    isPending,
    isError,
  } = useMutation({
    mutationKey: ["resetPassword"],
    mutationFn: async (newPassword: PatchPassword) => {
      const { data } = await axiosInstance.patch("/auth/password", newPassword);
      return data;
    },
    onSuccess() {
      setIsSuccess(true);
      mutateLogout();
    },
  });

  const handleChange = ({
    target: { value, name },
  }: ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [name]: value });
  };
  return (
    <Box
      height={"100%"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Paper elevation={5} sx={{ p: 2, width: "20rem" }}>
        {isError && <Alert severity="error">something went wrong</Alert>}
        <Stack spacing={3}>
          <Typography
            variant="h4"
            gutterBottom
            textAlign={"center"}
            fontWeight={800}
            color="error"
          >
            Rest Password
          </Typography>
          <Stack direction={"column"} spacing={2}>
            <TextField
              value={input.oldPassword}
              error={isEmpty(input.oldPassword)}
              type="password"
              label="oldPassword"
              name="oldPassword"
              onChange={handleChange}
              required
            />
            <TextField
              value={input.password}
              error={isEmpty(input.password)}
              type="password"
              label="password"
              name="password"
              onChange={handleChange}
              required
            />

            <TextField
              value={input.confirmPassword}
              error={
                isEmpty(input.confirmPassword) ||
                input.confirmPassword != input.password
              }
              type="password"
              label="confirm password"
              name="confirmPassword"
              onChange={handleChange}
              required
            />
          </Stack>
          <Button
            onClick={() => mutatePatchPassword(input)}
            loading={isPending}
            startIcon={isSuccess && <CheckCircle />}
            disabled={
              hasEmpty(Object.values(input)) ||
              input.confirmPassword != input.password
            }
            variant="contained"
            color={isSuccess ? "success" : "primary"}
          >
            update
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
}

export default ResetPassword;
