import {
  Box,
  Paper,
  Stack,
  Typography,
  TextField,
  Button,
  Alert,
  Toolbar,
} from "@mui/material";
import { useState } from "react";
import { hasEmpty, isEmpty } from "../utils";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../config/axiosInstance";
import { AxiosError } from "axios";

type RegisterUser = {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};
function SignUp() {
  const [input, setInput] = useState<RegisterUser>({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const { isError, isPending, mutate } = useMutation({
    mutationKey: ["signupMutation"],
    mutationFn: async (user: RegisterUser) => {
      const { data } = await axiosInstance.post("/auth/register", user);
      return data;
    },
    onSuccess: () => {
      navigate("/login");
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        setErrorMessage(error?.response?.data?.message);
      }
    },
  });
  return (
    <>
      <Toolbar />
      <Box
        height={"100%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Paper elevation={5} sx={{ p: 2, width: "26rem" }}>
          {isError && <Alert severity={"error"}>{errorMessage}</Alert>}
          <Stack spacing={2}>
            <Typography
              variant="h4"
              gutterBottom
              textAlign={"center"}
              fontWeight={800}
            >
              register
            </Typography>
            <Stack spacing={1}>
              <Stack direction={"row"} spacing={1}>
                <TextField
                  value={input.firstName}
                  error={isEmpty(input.firstName)}
                  onChange={({ target: { value } }) =>
                    setInput({ ...input, firstName: value })
                  }
                  label="first Name"
                  required
                  fullWidth
                />
                <TextField
                  value={input.lastName}
                  error={isEmpty(input.lastName)}
                  onChange={({ target: { value } }) =>
                    setInput({ ...input, lastName: value })
                  }
                  label="last Name"
                  required
                  fullWidth
                />
              </Stack>
              <TextField
                value={input.username}
                error={isEmpty(input.username)}
                onChange={({ target: { value } }) =>
                  setInput({ ...input, username: value })
                }
                label="userName"
                required
              />
              <TextField
                value={input.email}
                error={isEmpty(input.email)}
                onChange={({ target: { value } }) =>
                  setInput({ ...input, email: value })
                }
                label="email"
                type="email"
                required
              />
              <TextField
                value={input.password}
                error={isEmpty(input.password)}
                onChange={({ target: { value } }) =>
                  setInput({ ...input, password: value })
                }
                label="password"
                type="password"
                required
              />
              <TextField
                value={input.confirmPassword}
                error={input.confirmPassword != input.password}
                onChange={({ target: { value } }) =>
                  setInput({ ...input, confirmPassword: value })
                }
                label="confrimPassword"
                type="password"
                required
              />
            </Stack>
            <Button
              disabled={
                hasEmpty(Object.values(input)) ||
                input.confirmPassword != input.password
              }
              loading={isPending}
              onClick={() => mutate(input)}
              variant="contained"
            >
              Create account
            </Button>
          </Stack>
          click to
          <Button
            onClick={() => navigate("/login")}
            size="small"
            variant="text"
          >
            sign in
          </Button>
        </Paper>
      </Box>
    </>
  );
}

export default SignUp;
