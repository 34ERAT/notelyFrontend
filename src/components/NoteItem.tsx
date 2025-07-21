import { Bookmark, Delete, Restore } from "@mui/icons-material";
import { Card, CardActionArea, IconButton, Tooltip } from "@mui/material";
import NoteItemContent from "./NoteItemContent";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../config/axiosInstance";

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
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationKey: ["deleteNote"],
    mutationFn: async (id: string) => {
      const { data } = await axiosInstance.delete(`/notes/${id}`);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["getAllNotes"],
        refetchType: "active",
      });
    },
    onError: (error) => {
      console.log(error);
    },
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
          onClick={() => mutate(id)}
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
