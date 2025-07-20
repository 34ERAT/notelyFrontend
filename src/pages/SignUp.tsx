import {
  Box,
  Paper,
  Stack,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { useState } from "react";
import { hasEmpty, isEmpty } from "../utils";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  return (
    <Box
      height={"100%"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Paper elevation={5} sx={{ p: 2, width: "20rem" }}>
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
            <TextField
              value={input.firstName}
              error={isEmpty(input.firstName)}
              onChange={({ target: { value } }) =>
                setInput({ ...input, firstName: value })
              }
              label="first Name"
              required
            />
            <TextField
              value={input.lastName}
              error={isEmpty(input.lastName)}
              onChange={({ target: { value } }) =>
                setInput({ ...input, lastName: value })
              }
              label="last Name"
              required
            />
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
            onClick={() => navigate("/login")}
            variant="contained"
          >
            Create account
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
}

export default SignUp;
