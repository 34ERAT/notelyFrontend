import {
  Box,
  Paper,
  Stack,
  Typography,
  TextField,
  Button,
} from "@mui/material";

function SignUp() {
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
          <Stack spacing={0.5}>
            <TextField label="first Name" required />
            <TextField label="last Name" required />
            <TextField label="userName" required />
            <TextField label="email " required />
            <TextField label="password" required />
            <TextField label="confrimPassword" required />
          </Stack>
          <Button variant="contained">Create account</Button>
        </Stack>
      </Paper>
    </Box>
  );
}

export default SignUp;
