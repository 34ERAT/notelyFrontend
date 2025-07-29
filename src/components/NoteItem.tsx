import { Card, CardActionArea, Stack } from "@mui/material";
import NoteItemContent from "./NoteItemContent";
import { useQueryClient } from "@tanstack/react-query";
import CardRestoreAction from "./CardActions/CardRestoreAction";
import CardDeleteAction from "./CardActions/CardDeleteAction";
import CardEditAction from "./CardActions/CardEditAction";
import { green, yellow } from "@mui/material/colors";
import CardActionBookMark from "./CardActions/CardActionBookMark";
type Props = {
  id: string;
  title: string;
  synopsis: string;
  dateCreated: Date;
  lastUpdate: Date;
  isdeleted?: boolean;
  BookMarked: boolean;
};
function NoteItem({
  id,
  title,
  isdeleted,
  synopsis,
  dateCreated,
  lastUpdate,
  BookMarked,
}: Props) {
  const onSuccess = () => {
    queryClient.invalidateQueries({ queryKey: ["getAllNotes"] });
    queryClient.invalidateQueries({ queryKey: ["getTrash"] });
    queryClient.invalidateQueries({ queryKey: ["getBookMarks"] });
  };

  const queryClient = useQueryClient();
  return (
    <Card
      component={"div"}
      sx={{
        bgcolor: BookMarked ? green[100] : yellow[100],
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
        <NoteItemContent
          title={title}
          synopsis={synopsis}
          lastUpdate={lastUpdate}
          dateCreated={dateCreated}
        />
      </CardActionArea>
      {isdeleted ? (
        <CardRestoreAction id={id} onSuccess={onSuccess} />
      ) : (
        <>
          <CardDeleteAction id={id} onSuccess={onSuccess} />
          <Stack>
            <CardEditAction id={id} />
            <CardActionBookMark
              onSuccess={onSuccess}
              bookMarked={BookMarked}
              id={id}
            />
          </Stack>
        </>
      )}
    </Card>
  );
}

export default NoteItem;
