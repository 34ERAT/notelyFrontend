import {
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
type LoginInput = {
  username: string;
  // "email":"{{Email}}",
  password: string;
};
function Login() {
  const [input, setInput] = useState<LoginInput>({
    username: "",
    password: "",
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
              value={input.username}
              error={isEmpty(input.username)}
              type="text"
              label="username or email"
              onChange={({ target: { value } }) => {
                setInput({ ...input, username: value });
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
            onClick={() => navigate("/Dashboard")}
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
