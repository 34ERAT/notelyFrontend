import { Bookmark, Delete, Restore } from "@mui/icons-material";
import {
  Card,
  CardActionArea,
  CardContent,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";

type Props = {
  id: string;
  title: string;
  synopsis: string;
  dateCreated: Date;
  lastUpdate: Date;
  isdeleted?: boolean;
};
function NoteItem({
  id,
  title,
  isdeleted,
  synopsis,
  dateCreated,
  lastUpdate,
}: Props) {
  return (
    <Card
      component={"div"}
      sx={{
        position: "relative",
        width: { xs: 300, md: 300 },
        height: 250,
        borderRadius: 5,
        "&:hover .more": {
          display: "block",
        },
      }}
    >
      <CardActionArea
        data-active={
          "c4f8308d-6471-4d78-bed9-5c71d30be485" == id ? "" : undefined
        }
        sx={{
          height: "100%",
          "&[data-active]": {
            backgroundColor: "action.selected",
            "&:hover": {
              backgroundColor: "action.selectedHover",
            },
          },
        }}
      >
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
      </CardActionArea>
      {isdeleted ? (
        <IconButton
          className="more"
          color="warning"
          sx={{ position: "absolute", display: "none", top: 0, right: 0 }}
        >
          <Tooltip title="Restore">
            <Restore />
          </Tooltip>
        </IconButton>
      ) : (
        <IconButton
          className="more"
          color="warning"
          sx={{ position: "absolute", display: "none", top: 0, right: 0 }}
        >
          <Tooltip title="delete">
            <Delete />
          </Tooltip>
        </IconButton>
      )}
      {!isdeleted && (
        <IconButton
          className="more"
          color="secondary"
          sx={{ position: "absolute", display: "none", top: 40, right: 0 }}
        >
          <Tooltip title="Bookmark">
            <Bookmark />
          </Tooltip>
        </IconButton>
      )}
    </Card>
  );
}

export default NoteItem;
