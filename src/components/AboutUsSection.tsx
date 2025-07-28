import { Box, Button, Grid, Stack, Typography } from "@mui/material";

function AboutUsSection() {
  return (
    <Box
      display={"flex"}
      minHeight={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Grid
        container
        columns={2}
        sx={{
          fontFamily: "Indie Flower",
        }}
      >
        <Grid
          size={{ xs: 2, sm: 1 }}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          padding={2}
        >
          <Box
            component="img"
            src="/aboutUsImage.jpeg"
            width="90%"
            borderRadius={4}
          />
        </Grid>
        <Grid
          sx={{
            gap: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
          size={{ xs: 2, sm: 1 }}
        >
          <Stack
            spacing={2}
            justifyContent={"center"}
            alignItems={{ xs: "center", md: "start" }}
            height={"100%"}
            padding={3}
            sx={{ textAlign: { xs: "center", md: "left" } }}
          >
            <Typography
              gutterBottom
              variant="h4"
              fontWeight={900}
              fontFamily={"inherit"}
              textTransform={"capitalize"}
              textAlign={"inherit"}
            >
              About us
            </Typography>
            <Stack
              pb={2}
              justifyContent={"center"}
              width={"90%"}
              height={"100%"}
            >
              <Typography
                variant="h3"
                fontWeight={700}
                fontSize={{ xs: "2rem" }}
                gutterBottom
              >
                We give the best exprience
              </Typography>
              <Typography gutterBottom height={"50%"} variant="body1">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id,
                minima unde architecto quis tempore quo tempora debitis
                perspiciatis? Nesciunt veniam sapiente blanditiis rerum ex
                perferendis officiis iste expedita autem numquam soluta,
                reprehenderit reiciendis provident odio!
              </Typography>
            </Stack>
            <Button variant="contained" sx={{ width: 150 }}>
              learn more
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AboutUsSection;
