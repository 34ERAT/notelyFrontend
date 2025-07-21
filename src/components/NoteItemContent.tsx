import { CardContent, Typography, Stack } from "@mui/material";
type Props = {
  title: string;
  synopsis: string;
  dateCreated: Date;
  lastUpdate: Date;
};

function NoteItemContent({ title, synopsis, dateCreated, lastUpdate }: Props) {
  return (
    <CardContent
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        fontFamily: "Indie Flower",
      }}
    >
      <Typography
        gutterBottom
        fontFamily={"inherit"}
        variant="h4"
        fontWeight={900}
      >
        {title}
      </Typography>
      <Typography gutterBottom variant="h6" fontFamily={"inherit"}>
        {synopsis}
      </Typography>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Stack>
          <Typography
            fontFamily={"inherit"}
            variant="subtitle1"
            textTransform={"capitalize"}
            gutterBottom
          >
            created at
          </Typography>
          <Typography color="secondary" fontWeight={900} variant="body2">
            {dateCreated.toDateString()}
          </Typography>
        </Stack>
        <Stack>
          <Typography
            fontFamily={"inherit"}
            variant="subtitle1"
            textTransform={"capitalize"}
            gutterBottom
          >
            last Update
          </Typography>
          <Typography color="info" fontWeight={900} variant="body2">
            {lastUpdate.toDateString()}
          </Typography>
        </Stack>
      </Stack>
    </CardContent>
  );
}

export default NoteItemContent;
