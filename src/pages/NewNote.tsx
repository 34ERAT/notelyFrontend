import { Box } from "@mui/material";
import { useEffect } from "react";
import type { CreateNote } from "../types";
import { useEditorStore } from "../store";
import Editor from "../components/Editor";
//TODO: implement auto  sync
function NewNote() {
  const emptyNote: CreateNote = {
    title: "",
    content: "",
    synopsis: "",
  };
  const { note, setNote } = useEditorStore();
  useEffect(() => {
    setNote(emptyNote);
  }, []);
  return (
    <Box key={note.content == "" ? "" : null} height={"85vh"}>
      <Editor mode="new" />
    </Box>
  );
}

export default NewNote;
