import { Avatar, Box, Card, CardContent, Typography } from "@mui/material";
import { faker } from "@faker-js/faker";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { grey } from "@mui/material/colors";
function TestimonalCard() {
  console.log(faker.image.avatar());
  return (
    <Card
      elevation={3}
      sx={{ bgcolor: grey[100], width: 300, borderRadius: 4, pt: 3 }}
    >
      <Box
        justifyContent={"center"}
        alignItems={"center"}
        display={"flex"}
        flexDirection={"column"}
        gap={2}
      >
        <Avatar sx={{ width: 120, height: 120 }} src={faker.image.avatar()} />
        <Typography variant="subtitle1" fontWeight={700}>
          {faker.person.fullName()}{" "}
        </Typography>
      </Box>
      <CardContent
        sx={{ justifyContent: "center", alignItems: "center", display: "flex" }}
      >
        <Typography
          color="info"
          textTransform={"capitalize"}
          textAlign={"center"}
        >
          <FormatQuoteIcon color="inherit" sx={{ rotate: "180deg" }} />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          voluptatum corrupti neque ut tempore ducimus eos tempora possimus
          earum omnis!
        </Typography>
      </CardContent>
    </Card>
  );
}

export default TestimonalCard;
