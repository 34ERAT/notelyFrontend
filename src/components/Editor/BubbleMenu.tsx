import { FormatBold, FormatItalic, StrikethroughS } from "@mui/icons-material";
import type { Editor } from "@tiptap/react";
import { BubbleMenu as BubbleMenuReact } from "@tiptap/react/menus";
function BubbleMenu({ editor }: { editor: Editor }) {
  return (
    <BubbleMenuReact
      pluginKey={"bubblemenu"}
      options={{ autoPlacement: true, offset: 8 }}
      editor={editor}
    >
      <div className="bubble-menu">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive("bold") ? "is-active" : ""}
        >
          <FormatBold />
        </button>

        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive("italic") ? "is-active" : ""}
        >
          <FormatItalic />
        </button>

        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={editor.isActive("strike") ? "is-active" : ""}
        >
          <StrikethroughS />
        </button>
      </div>
    </BubbleMenuReact>
  );
}

export default BubbleMenu;
