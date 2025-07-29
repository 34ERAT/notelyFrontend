import { Box, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import type { CreateNote } from "../types";
import Editor from "../components/Editor";
import axiosInstance from "../config/axiosInstance";
import { useParams } from "react-router-dom";
import { useNoteStore } from "../store";
import { useEffect, useState } from "react";

type ModifiedNote = CreateNote & {
  content: string;
};
function EditNote() {
  const { noteId } = useParams();
  const { setNote, setInitialContent } = useNoteStore();
  const [showModal, setShowModal] = useState(false);
  const { data, isSuccess, isFetching } = useQuery({
    queryKey: ["fetchNote"],
    queryFn: async () => {
      const { data } = await axiosInstance.get<ModifiedNote>(
        `/notes/${noteId}`,
      );
      return data;
    },
  });
  useEffect(() => {
    (async () => {
      if (isSuccess) {
        const { content, title, synopsis } = data;
        setNote({ content, title, synopsis });
        setInitialContent(content);
        setShowModal(true);
      }
    })();
  }, [data]);

  if (isFetching) return <Typography> loading please wait ..</Typography>;
  return (
    showModal && (
      <Box height={"85vh"}>
        <Editor key={noteId} mode="edit" />
      </Box>
    )
  );
}

export default EditNote;
