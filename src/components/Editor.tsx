import { useEditorStore } from "../store";
import { EditorContent, useEditor } from "@tiptap/react";
import "./TipTap.scss";
import StarterKit from "@tiptap/starter-kit";
import SaveNoteBtn from "./Editor/SaveNoteBtn";
import EditNoteBtn from "./Editor/EditNoteBtn";
import { Box } from "@mui/material";
import EditorToolbar from "./Editor/EditorToolbar";
const extensions = [StarterKit];
function Editor({ mode }: { mode: "edit" | "new" }) {
  const { note, setNote } = useEditorStore();
  const editor = useEditor({
    extensions,
    content: note.content || "<P>hello </P>",
    onUpdate({ editor }) {
      setNote({ ...note, content: editor.getHTML() });
    },
  });

  return (
    <Box>
      <EditorToolbar />
      <EditorContent editor={editor} />
      {mode == "new" ? <SaveNoteBtn /> : <EditNoteBtn />}
    </Box>
  );
}

export default Editor;
