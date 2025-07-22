import { Paper, IconButton, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
function SearchNote() {
  return (
    <Paper elevation={0} sx={{ display: "flex", width: 300 }}>
      <IconButton>
        <SearchIcon sx={{ fontSize: { xs: "small", sm: "medium" } }} />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="search notes"
        inputProps={{ "aria-label": "search notes" }}
      />
    </Paper>
  );
}

export default SearchNote;
