import { Box } from "@mui/material";
import Editor from "../components/Editor";
import { useState } from "react";
import type { CreateNote } from "../types";
import CheckIcon from "@mui/icons-material/Check";
import SaveIcon from "@mui/icons-material/Save";
import { hasEmpty, toMarkDown } from "../utils";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../config/axiosInstance";
import ActionButton from "../components/ActionButton";
//TODO: implement auto  sync
function NewNote() {
  const emptyNote: CreateNote = {
    title: "",
    content: "",
    synopsis: "",
  };
  const [note, setNote] = useState<CreateNote>(emptyNote);
  const [success, setSuccess] = useState(false);
  const { mutate, isPending } = useMutation({
    mutationKey: ["newNote"],
    mutationFn: async (note: CreateNote) => {
      const { data } = await axiosInstance.post("/notes", {
        ...note,
        content: toMarkDown(note.content),
      });
      return data;
    },
  });
  return (
    <Box height={"85vh"} position={"relative"}>
      <Editor
        preview="edit"
        value={note}
        onChange={(data) => {
          setNote({ ...data });
        }}
      />
      <Box position={"absolute"} bottom={20} right={10}>
        <ActionButton
          isloading={isPending}
          isSuccess={success}
          successIcon={<CheckIcon />}
          icon={<SaveIcon />}
          onClick={() => {
            mutate(note);
            setNote(emptyNote);
            setTimeout(() => setSuccess(false), 3000);
          }}
          disabled={hasEmpty(Object.values(note))}
        />
      </Box>
    </Box>
  );
}

export default NewNote;
