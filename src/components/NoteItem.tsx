import { Bookmark, Delete, Restore } from "@mui/icons-material";
import { Card, CardActionArea, IconButton, Tooltip } from "@mui/material";
import NoteItemContent from "./NoteItemContent";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../config/axiosInstance";
import { useSelectedNote } from "../store";

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
  const { noteId, setNoteId } = useSelectedNote();
  const onSuccess = () => {
    queryClient.invalidateQueries({ queryKey: ["getAllNotes"] });
    queryClient.invalidateQueries({ queryKey: ["getTrash"] });
  };

  const queryClient = useQueryClient();
  const { mutate: mutateDeleteNote } = useMutation({
    mutationKey: ["deleteNote"],
    mutationFn: async (id: string) => {
      const { data } = await axiosInstance.delete<{ message: string }>(
        `/notes/${id}`,
      );
      return data;
    },
    onSuccess: onSuccess,
  });
  const { mutate: mutateRestoreNote } = useMutation({
    mutationKey: ["restoreNote"],
    mutationFn: async (id: string) => {
      const { data } = await axiosInstance.patch<{ message: string }>(
        `/notes/restore/${id}`,
      );
      return data;
    },
    onSuccess: onSuccess,
  });

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
        data-active={noteId == id ? "" : undefined}
        sx={{
          height: "100%",
          "&[data-active]": {
            backgroundColor: "action.selected",
            "&:hover": {
              backgroundColor: "action.selectedHover",
            },
          },
        }}
        onClick={() => setNoteId(id)}
      >
        <NoteItemContent
          title={title}
          synopsis={synopsis}
          lastUpdate={lastUpdate}
          dateCreated={dateCreated}
        />
      </CardActionArea>
      {isdeleted ? (
        <IconButton
          className="more"
          color="warning"
          onClick={() => mutateRestoreNote(id)}
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
          onClick={() => mutateDeleteNote(id)}
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
