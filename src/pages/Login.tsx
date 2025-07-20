import {
  Alert,
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { hasEmpty, isEmpty } from "../utils";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../config/axiosInstance";
import { useloginStore } from "../store";
type LoginInput = {
  userName: string;
  password: string;
};
function Login() {
  const navigate = useNavigate();
  const { setAccessToken } = useloginStore();
  const [input, setInput] = useState<LoginInput>({
    userName: "",
    password: "",
  });
  const { mutate, isPending, isError } = useMutation({
    mutationKey: ["loginMutation"],
    mutationFn: async (login: LoginInput) => {
      const { data } = await axiosInstance.post("/auth/login", login);
      return data as { accessToken: string };
    },
    onSuccess: (data) => {
      setAccessToken(data.accessToken);
      navigate("/Dashboard");
    },
  });
  return (
    <Box
      height={"100%"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Paper elevation={5} sx={{ p: 2, width: "20rem" }}>
        {isError && (
          <Alert severity="error"> invalid username or password</Alert>
        )}
        <Stack spacing={3}>
          <Typography
            variant="h4"
            gutterBottom
            textAlign={"center"}
            fontWeight={800}
          >
            Login
          </Typography>
          <Stack direction={"column"} spacing={2}>
            <TextField
              value={input.userName}
              error={isEmpty(input.userName)}
              type="text"
              label="username or email"
              onChange={({ target: { value } }) => {
                setInput({ ...input, userName: value });
              }}
              required
            />
            <TextField
              value={input.password}
              error={isEmpty(input.password)}
              type="password"
              label="password"
              onChange={({ target: { value } }) => {
                setInput({ ...input, password: value });
              }}
              required
            />
          </Stack>
          <Button
            onClick={() => mutate(input)}
            loading={isPending}
            disabled={hasEmpty(Object.values(input))}
            variant="contained"
          >
            login
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
}

export default Login;
