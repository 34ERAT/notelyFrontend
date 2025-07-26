import { useEditorStore } from "../store";
import { EditorProvider } from "@tiptap/react";
import "./TipTap.scss";
import StarterKit from "@tiptap/starter-kit";
import EditorToolbar from "./Editor/EditorToolbar";
import { toHtml } from "../utils";
import SaveNoteBtn from "./Editor/SaveNoteBtn";
import EditNoteBtn from "./Editor/EditNoteBtn";
const extensions = [StarterKit];
function Editor({ mode }: { mode: "edit" | "new" }) {
  const { note, setNote } = useEditorStore();
  return (
    <EditorProvider
      extensions={extensions}
      content={toHtml(note.content)}
      slotBefore={<EditorToolbar />}
      onUpdate={({ editor }) => {
        setNote({ ...note, content: editor.getHTML() });
      }}
      immediatelyRender={false}
    >
      {mode == "new" ? <SaveNoteBtn /> : <EditNoteBtn />}
    </EditorProvider>
  );
}

export default Editor;
