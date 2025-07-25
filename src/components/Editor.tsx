import { Box, Paper, Stack, TextField } from "@mui/material";
import type { CreateNote } from "../types";
import { isEmpty } from "../utils";
import TipTap from "./TipTap";

type Props = {
  value: CreateNote;
  onChange: (note: CreateNote) => void;
  preview: "edit" | "preview";
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
        <Box flex={1} width={"100%"} height={"100%"} overflow={"scroll"}>
          <TipTap
            content={value.content}
            onChange={(data) => onChange({ ...value, content: data || "" })}
          />
        </Box>
      </Stack>
    </Paper>
  );
}

export default Editor;
