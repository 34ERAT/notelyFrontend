import { Box, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import type { CreateNote } from "../types";
import Editor from "../components/Editor";
import axiosInstance from "../config/axiosInstance";
import { useParams } from "react-router-dom";
import { useEditorStore } from "../store";

type ModifiedNote = CreateNote & {
  content: string;
};
function EditNote() {
  const { noteId } = useParams();
  const { setNote } = useEditorStore();
  console.log("running");
  const { data, isSuccess, isLoading } = useQuery({
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
  if (isLoading) return <Typography> loading please wait ..</Typography>;
  return (
    isSuccess && (
      <Box height={"85vh"}>
        <Editor key={data.content} mode="edit" />
      </Box>
    )
  );
}

export default EditNote;
