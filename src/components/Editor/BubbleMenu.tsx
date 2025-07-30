import { FormatBold, FormatItalic, StrikethroughS } from "@mui/icons-material";
import { useEditorState, type Editor } from "@tiptap/react";
import { BubbleMenu as BubbleMenuReact } from "@tiptap/react/menus";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
function BubbleMenu({ editor }: { editor: Editor }) {
  const editorState = useEditorState({
    editor,
    selector(ctx) {
      return {
        isBulletList: ctx.editor.isActive("bulletList") ?? false,
        isOrderedList: ctx.editor.isActive("orderedList") ?? false,
        isBlockquote: ctx.editor.isActive("blockquote") ?? false,
      };
    },
  });
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

        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editorState.isBlockquote ? "is-active" : ""}
        >
          <FormatQuoteIcon />
        </button>
      </div>
    </BubbleMenuReact>
  );
}

export default BubbleMenu;
