import { Box, Typography } from "@mui/material";
import NoteItem from "../components/NoteItem";
import { notesList } from "../assets/notesList";
function Trash() {
  return (
    <Box display={"flex"} justifyContent={"center"} flexWrap={"wrap"} gap={2}>
      {notesList.length == 0 && (
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
      {notesList.map(({ id, title, synopsis, dateCreated, lastUpdate }) => {
        return (
          <NoteItem
            key={id}
            id={id}
            isdeleted={true}
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

export default Trash;
