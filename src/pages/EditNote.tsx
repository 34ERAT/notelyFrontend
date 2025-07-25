import { Box } from "@mui/material";
import ActionButton from "../components/ActionButton";
import { hasEmpty } from "../utils";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import type { CreateNote } from "../types";
import Editor from "../components/Editor";
import { Check, Edit } from "@mui/icons-material";
import axiosInstance from "../config/axiosInstance";
import { useParams } from "react-router-dom";

type ModifiedNote = CreateNote & {
  content: string;
};
function EditNote() {
  const emptyNote: CreateNote = {
    title: "",
    content: "",
    synopsis: "",
  };
  const { noteId } = useParams();
  const [note, setNote] = useState<CreateNote>(emptyNote);
  const { isSuccess } = useQuery({
    queryKey: ["fetchNote"],
    queryFn: async () => {
      const { data } = await axiosInstance.get<ModifiedNote>(
        `/notes/${noteId}`,
      );
      if (isSuccess) {
        const { content, title, synopsis } = data;
        setNote({ content, title, synopsis });
      }
      return data;
    },
  });
  const [success, setSuccess] = useState(false);
  const { mutate, isPending } = useMutation({
    mutationKey: ["updateNote"],
    mutationFn: async (note: CreateNote) => {
      const { data } = await axiosInstance.patch(`/notes/${noteId}`, note);
      return data;
    },
    onSuccess: (data) => {
      setSuccess(true);
      setNote(data);
    },
  });
  return (
    isSuccess && (
      <Box height={"85vh"} position={"relative"}>
        <Editor
          value={note}
          onChange={(data) => {
            setNote({ ...data });
          }}
          preview="preview"
        />
        <Box position={"absolute"} bottom={20} right={10}>
          <ActionButton
            isloading={isPending}
            isSuccess={success}
            successIcon={<Check />}
            icon={<Edit />}
            onClick={() => {
              mutate(note);
              setTimeout(() => setSuccess(false), 3000);
            }}
            disabled={hasEmpty(Object.values(note))}
          />
        </Box>
      </Box>
    )
  );
}

export default EditNote;
