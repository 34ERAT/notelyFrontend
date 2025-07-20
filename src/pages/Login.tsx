import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

function Login() {
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
            <TextField label="username or password" required />
            <TextField label="password" required />
          </Stack>
          <Button variant="contained">SignUP</Button>
        </Stack>
      </Paper>
    </Box>
  );
}

export default Login;
