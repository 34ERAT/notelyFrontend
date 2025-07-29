import { Box, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import type { CreateNote } from "../types";
import Editor from "../components/Editor";
import axiosInstance from "../config/axiosInstance";
import { useParams } from "react-router-dom";
import { useEditorStore } from "../store";
import { toHtml } from "../utils";

type ModifiedNote = CreateNote & {
  content: string;
};
function EditNote() {
  const { noteId } = useParams();
  const { setNote } = useEditorStore();
  const { isSuccess, isLoading } = useQuery({
    queryKey: ["fetchNote"],
    queryFn: async () => {
      const { data } = await axiosInstance.get<ModifiedNote>(
        `/notes/${noteId}`,
      );
      if (isSuccess) {
        const { content, title, synopsis } = data;
        setNote({ content: await toHtml(content), title, synopsis });
      }
      return data;
    },
  });
  if (isLoading) return <Typography> loading please wait ..</Typography>;
  return (
    <Box height={"85vh"}>
      <Editor mode="edit" />
    </Box>
  );
}

export default EditNote;
