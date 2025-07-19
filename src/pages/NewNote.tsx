import { Box } from "@mui/material";
import Editor from "../components/Editor";
import { useState } from "react";
import type { CreateNote } from "../types";

function NewNote() {
  const [note, setNote] = useState<CreateNote>({
    title: "",
    content: "",
    synopsis: "",
  });
  return (
    <Box height={"85vh"}>
      <Editor
        value={note}
        onChange={(data) => {
          setNote({ ...data });
        }}
      />
    </Box>
  );
}

export default NewNote;
