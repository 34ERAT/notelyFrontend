import { useEditorState, type Editor } from "@tiptap/react";
import { FloatingMenu as FloatingMenuTiptap } from "@tiptap/react/menus";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
function FloatingMenu({ editor }: { editor: Editor }) {
  const editorState = useEditorState({
    editor,
    selector(ctx) {
      return {
        isBulletList: ctx.editor.isActive("bulletList") ?? false,
        isOrderedList: ctx.editor.isActive("orderedList") ?? false,
      };
    },
  });
  return (
    <FloatingMenuTiptap className="floating-menu" editor={editor}>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editorState.isBulletList ? "is-active" : ""}
      >
        <FormatListBulletedIcon fontSize="small" />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editorState.isOrderedList ? "is-active" : ""}
      >
        <FormatListNumberedIcon fontSize="small" />
      </button>
    </FloatingMenuTiptap>
  );
}

export default FloatingMenu;
