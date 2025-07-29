import { useNoteStore } from "../store";
import { EditorContent, useEditor } from "@tiptap/react";
import "./TipTap.scss";
import StarterKit from "@tiptap/starter-kit";
import SaveNoteBtn from "./Editor/SaveNoteBtn";
import EditNoteBtn from "./Editor/EditNoteBtn";
import { Box } from "@mui/material";
import EditorToolbar from "./Editor/EditorToolbar";
import { useEffect } from "react";
const extensions = [StarterKit];
function Editor({ mode }: { mode: "edit" | "new" }) {
  const { note, setNote } = useNoteStore();
  const { initalContent } = useNoteStore();
  const editor = useEditor({
    extensions,
    content: "",
    onUpdate({ editor }) {
      setNote({ ...note, content: editor.getHTML() });
    },
    onCreate() {
      console.log(note);
    },
  });
  useEffect(() => {
    editor.commands.setContent(initalContent);
  }, [editor, initalContent]);
  return (
    <Box>
      <EditorToolbar />
      <EditorContent editor={editor} />
      {mode == "new" ? <SaveNoteBtn /> : <EditNoteBtn />}
    </Box>
  );
}

export default Editor;
