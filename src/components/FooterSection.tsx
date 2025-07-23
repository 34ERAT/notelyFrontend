import { Facebook, LinkedIn, Pinterest, Twitter } from "@mui/icons-material";
import { Box, Button, Stack } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

function FooterSection() {
  const navigate = useNavigate();
  return (
    <Box
      bgcolor={grey[300]}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      mt={10}
      pt={5}
      gap={3}
      height={"20vh"}
    >
      <Stack direction={"row"} spacing={4}>
        <Facebook fontSize="large" />
        <Twitter fontSize="large" />
        <Pinterest fontSize="large" />
        <LinkedIn fontSize="large" />
      </Stack>
      <Stack direction={"row"}>
        <Button variant="text" onClick={() => navigate("/login")}>
          signIn
        </Button>
        <Button variant="text" onClick={() => navigate("/signup")}>
          signup
        </Button>
      </Stack>
    </Box>
  );
}

export default FooterSection;
