import { EditorProvider } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import "./TipTap.scss";
import { useRef } from "react";
import { toHtml } from "../utils";
const extensions = [StarterKit];
type Props = {
  content: string;
  onChange: (data: string) => void;
};
function TipTap({ content, onChange }: Props) {
  const hasInitialized = useRef(false);
  return (
    <EditorProvider
      extensions={extensions}
      content={toHtml(content)}
      onUpdate={({ editor }) => {
        hasInitialized.current = true;
        onChange(editor.getHTML());
      }}
      immediatelyRender={true}
      shouldRerenderOnTransaction={true}
    ></EditorProvider>
  );
}

export default TipTap;
