import { Stack, TextField } from "@mui/material";
import { isEmpty } from "../../utils";
import { useNoteStore } from "../../store";

function EditorToolbar() {
  const { note, setNote } = useNoteStore();
  return (
    <Stack mb={2} direction={{ xs: "column", md: "row" }} spacing={1}>
      <TextField
        error={isEmpty(note.title)}
        value={note.title}
        onChange={({ target }) => {
          setNote({ ...note, title: target.value });
        }}
        label="title"
        name="title"
        size="small"
        fullWidth
        required
        slotProps={{ inputLabel: { shrink: !isEmpty(note.title) } }}
      />
      <TextField
        error={isEmpty(note.synopsis)}
        onChange={({ target }) => {
          setNote({ ...note, synopsis: target.value });
        }}
        value={note.synopsis}
        size="small"
        label="synopsis"
        name="synopsis"
        fullWidth
        required
      />
    </Stack>
  );
}

export default EditorToolbar;
