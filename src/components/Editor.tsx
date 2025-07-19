import { Paper, Stack, TextField } from "@mui/material";
import type { CreateNote } from "../types";
import MDEditor, { codeEdit, codePreview } from "@uiw/react-md-editor";

type Props = {
  value: CreateNote;
  onChange: (note: CreateNote) => void;
};
function Editor({ value, onChange }: Props) {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: inputValue, name } = e.target;
    onChange({ ...value, [name]: inputValue });
  };
  return (
    <Paper sx={{ padding: 1, borderRadius: 2, height: "100%" }} elevation={5}>
      <Stack spacing={2} height={"100%"}>
        <Stack direction={{ xs: "column", md: "row" }} spacing={1}>
          <TextField
            error={value.synopsis.length === 0}
            onChange={handleOnChange}
            label="title"
            name="title"
            size="small"
            fullWidth
            required
          />
          <TextField
            error={value.synopsis.length === 0}
            onChange={handleOnChange}
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
            preview="edit"
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
