import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useNoteStore } from "../store";
import Editor from "../components/Editor";
//TODO: implement auto  sync
function NewNote() {
  const [showModal, setShowModal] = useState(false);
  const { initalContent, setNote, setInitialContent } = useNoteStore();
  useEffect(() => {
    setInitialContent("");
    setNote({ title: "", content: "", synopsis: "" });
    setShowModal(true);
  }, [initalContent]);
  return (
    showModal && (
      <Box height={"85vh"}>
        <Editor mode="new" />
      </Box>
    )
  );
}

export default NewNote;
