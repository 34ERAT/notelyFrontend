import { Check, Edit } from "@mui/icons-material";
import { Box } from "@mui/material";
import { hasEmpty } from "../../utils";
import ActionButton from "../ActionButton";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import axiosInstance from "../../config/axiosInstance";
import type { CreateNote } from "../../types";
import { useNoteStore } from "../../store";
import { useParams } from "react-router-dom";
import { useCurrentEditor } from "@tiptap/react";

function EditNoteBtn() {
  const [success, setSuccess] = useState(false);
  const { noteId } = useParams();
  const { note, setNote } = useNoteStore();
  const { editor } = useCurrentEditor();
  const { mutate, isPending } = useMutation({
    mutationKey: ["updateNote"],
    mutationFn: async (note: CreateNote) => {
      const { data } = await axiosInstance.patch<CreateNote>(
        `/notes/${noteId}`,
        note,
      );
      return data;
    },
    onSuccess: (data) => {
      setSuccess(true);
      setNote(data);
      editor?.commands.setContent(note.content);
      setTimeout(() => setSuccess(false), 3000);
    },
  });
  return (
    <Box position={"fixed"} bottom={20} right={10}>
      <ActionButton
        isloading={isPending}
        isSuccess={success}
        successIcon={<Check />}
        icon={<Edit />}
        onClick={() => {
          mutate(note);
        }}
        disabled={hasEmpty(Object.values(note))}
      />
    </Box>
  );
}

export default EditNoteBtn;
