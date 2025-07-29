import { Box, Typography } from "@mui/material";
import NoteItem from "../components/NoteItem";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../config/axiosInstance";
import type { NoteListItem } from "../types";
function Trash() {
  const { data } = useQuery({
    queryKey: ["getTrash"],
    queryFn: async () => {
      const { data } = await axiosInstance.get<NoteListItem[]>("/notes/trash");
      return data;
    },
  });
  return (
    <Box display={"flex"} justifyContent={"center"} flexWrap={"wrap"} gap={2}>
      {data?.length == 0 && (
        <Typography
          variant="h4"
          textTransform={"capitalize"}
          fontFamily={"Indie Flower"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          You have nothing in trash !!
        </Typography>
      )}
      {data?.map(({ id, dateCreated, lastUpdate, ...rest }) => {
        return (
          <NoteItem
            key={id}
            id={id}
            {...rest}
            dateCreated={new Date(dateCreated)}
            lastUpdate={new Date(lastUpdate)}
          />
        );
      })}
    </Box>
  );
}

export default Trash;
