import { Paper, Stack, TextField } from "@mui/material";
import type { CreateNote } from "../types";
import MDEditor, { codeEdit, codePreview } from "@uiw/react-md-editor";
import { useRef, useState } from "react";

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
    <Paper sx={{ padding: 1, borderRadius: 2 }} elevation={5}>
      <Stack spacing={2}>
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
        <div data-color-mode="light">
          <MDEditor
            textareaProps={{
              placeholder: "Please enter Markdown text",
            }}
            preview="edit"
            hideToolbar={false}
            visibleDragbar={false}
            autoFocusEnd={true}
            height={"30rem"}
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
