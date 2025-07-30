import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useNoteStore } from "../store";
import Editor from "../components/Editor";
//TODO: implement auto  sync
function NewNote() {
  const [showModal, setShowModal] = useState(false);
  const { setNote, setInitialContent } = useNoteStore();
  useEffect(() => {
    setInitialContent("");
    setNote({ title: "", content: "", synopsis: "" });
    setShowModal(true);
  }, []);
  return (
    showModal && (
      <Box height={"85vh"}>
        <Editor mode="new" />
      </Box>
    )
  );
}

export default NewNote;
