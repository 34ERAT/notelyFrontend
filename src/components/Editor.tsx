import { Paper, Stack, TextField } from "@mui/material";
import type { CreateNote } from "../types";
import MDEditor, { codeEdit, codePreview } from "@uiw/react-md-editor";
import { isEmpty } from "../utils";

type Props = {
  value: CreateNote;
  onChange: (note: CreateNote) => void;
  preview: "edit" | "preview";
};
function Editor({ preview, value, onChange }: Props) {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: inputValue, name } = e.target;
    onChange({ ...value, [name]: inputValue });
  };
  return (
    <Paper sx={{ padding: 1, borderRadius: 2, height: "100%" }} elevation={5}>
      <Stack spacing={2} height={"100%"}>
        <Stack direction={{ xs: "column", md: "row" }} spacing={1}>
          <TextField
            error={isEmpty(value.title)}
            value={value.title}
            onChange={handleOnChange}
            label="title"
            name="title"
            size="small"
            fullWidth
            required
            slotProps={{ inputLabel: { shrink: !isEmpty(value.title) } }}
          />
          <TextField
            error={isEmpty(value.synopsis)}
            onChange={handleOnChange}
            value={value.synopsis}
            size="small"
            label="synopsis"
            name="synopsis"
            fullWidth
            required
          />
        </Stack>
        <div style={{ height: "100%" }} data-color-mode="light">
          <MDEditor
            textareaProps={{
              placeholder: "Please enter Markdown text",
            }}
            preview={preview}
            height={"100%"}
            hideToolbar={false}
            visibleDragbar={false}
            autoFocusEnd={true}
            overflow={true}
            value={value.content}
            extraCommands={[codeEdit, codePreview]}
            onChange={(data) => onChange({ ...value, content: data || "" })}
          />
        </div>
      </Stack>
    </Paper>
  );
}

export default Editor;
