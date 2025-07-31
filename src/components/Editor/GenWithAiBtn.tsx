import { useMutation } from "@tanstack/react-query";

import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import axiosInstance from "../../config/axiosInstance";
import { useNoteStore } from "../../store";
import { hasEmpty } from "../../utils";
import { CircularProgress } from "@mui/material";
type NoteHeader = {
  synopsis: string;
  title: string;
};
function GenWithAiBtn() {
  const { note, setNote, setInitialContent } = useNoteStore();
  const { mutate, isPending } = useMutation({
    mutationKey: ["genNote"],
    mutationFn: async ({ synopsis, title }: NoteHeader) => {
      const { data } = await axiosInstance.post<{ content: string }>(
        "/notes/generate",
        { synopsis, title },
      );
      return data;
    },
    onSuccess(data) {
      const finalContent = note.content + " <br/>" + data.content;
      console.log(finalContent);
      setNote({ ...note, content: finalContent });
      setInitialContent(finalContent);
    },
  });
  return (
    <button
      className={isPending ? "loading" : ""}
      disabled={hasEmpty([note.title, note.synopsis]) || isPending}
      onClick={() => mutate({ title: note.title, synopsis: note.synopsis })}
    >
      {isPending ? (
        <CircularProgress
          size={16}
          thickness={5}
          style={{ color: "var(--purple)" }}
        />
      ) : (
        <AutoAwesomeIcon />
      )}
    </button>
  );
}

export default GenWithAiBtn;
