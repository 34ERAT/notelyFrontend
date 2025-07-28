import CheckIcon from "@mui/icons-material/Check";
import SaveIcon from "@mui/icons-material/Save";
import { Box } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useCurrentEditor } from "@tiptap/react";
import { useState } from "react";
import axiosInstance from "../../config/axiosInstance";
import { useEditorStore } from "../../store";
import type { CreateNote } from "../../types";
import { hasEmpty, toMarkDown } from "../../utils";
import ActionButton from "../ActionButton";

//TODO: implement auto  sync
function SaveNoteBtn() {
  const emptyNote: CreateNote = {
    title: "",
    content: "",
    synopsis: "",
  };
  const { editor } = useCurrentEditor();
  const { note, setNote } = useEditorStore();
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
    onSuccess() {
      console.log("i have run ");
      editor?.commands.setContent("");
      setNote(emptyNote);
    },
  });
  return (
    <Box position={"fixed"} bottom={20} right={10}>
      <ActionButton
        isloading={isPending}
        isSuccess={success}
        successIcon={<CheckIcon />}
        icon={<SaveIcon />}
        onClick={() => {
          mutate(note);
          setTimeout(() => setSuccess(false), 3000);
        }}
        disabled={hasEmpty(Object.values(note))}
      />
    </Box>
  );
}

export default SaveNoteBtn;
