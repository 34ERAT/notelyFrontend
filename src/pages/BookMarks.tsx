import { NoteAddTwoTone } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import NoteItem from "../components/NoteItem";
import axiosInstance from "../config/axiosInstance";
import type { NoteListItem } from "../types";

function BookMarks() {
  const { data } = useQuery({
    queryKey: ["getBookMarks"],
    queryFn: async () => {
      const { data } =
        await axiosInstance.get<NoteListItem[]>("/notes/bookmarks");
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
          you don't have any bookMarks yet !! <NoteAddTwoTone />
        </Typography>
      )}
      {data?.map(
        ({ id, BookMarked, title, synopsis, dateCreated, lastUpdate }) => {
          return (
            <NoteItem
              key={id}
              BookMarked={BookMarked}
              id={id}
              title={title}
              synopsis={synopsis}
              dateCreated={new Date(dateCreated)}
              lastUpdate={new Date(lastUpdate)}
            />
          );
        },
      )}
    </Box>
  );
}

export default BookMarks;
