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
    <Box>
      <Editor
        value={note}
        onChange={(data) => {
          console.log(data);
          setNote({ ...data });
        }}
      />
    </Box>
  );
}

export default NewNote;
