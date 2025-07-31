import { type Editor } from "@tiptap/react";
import { FloatingMenu as FloatingMenuTiptap } from "@tiptap/react/menus";
import GenWithAiBtn from "./GenWithAiBtn";
function FloatingMenu({ editor }: { editor: Editor }) {
  return (
    <FloatingMenuTiptap
      options={{ placement: "bottom-start" }}
      className="floating-menu"
      editor={editor}
    >
      <GenWithAiBtn />
    </FloatingMenuTiptap>
  );
}

export default FloatingMenu;
