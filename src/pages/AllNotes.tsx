import { Box, Typography } from "@mui/material";
import NoteItem from "../components/NoteItem";
import { NoteAddTwoTone } from "@mui/icons-material";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../config/axiosInstance";
import type { NoteListItem } from "../types";
function AllNotes() {
  const { data } = useQuery({
    queryKey: ["getallnotes"],
    queryFn: async () => {
      const { data } = await axiosInstance.get<NoteListItem[]>("/notes");
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
        >
          you don't have any notes yet !! <NoteAddTwoTone />
        </Typography>
      )}
      {data?.map(({ id, title, synopsis, dateCreated, lastUpdate }) => {
        return (
          <NoteItem
            key={id}
            id={id}
            title={title}
            synopsis={synopsis}
            dateCreated={new Date(dateCreated)}
            lastUpdate={new Date(lastUpdate)}
          />
        );
      })}
    </Box>
  );
}

export default AllNotes;
