import { Box } from "@mui/material";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import DashBoard from "./pages/DashBoard";

function App() {
  return (
    <Box height={"100vh"}>
      <Routes>
        <Route path="/DashBoard" element={<DashBoard />}>
          <Route index element={<div> all notes</div>} />
          <Route path="EditNote" element={<div>Edit this note </div>} />
          <Route path="NewNote" element={<div>create a new note </div>} />
          <Route path="Bookmark" element={<div>Book marks </div>} />
          <Route path="Trash" element={<div>list off delete notes</div>} />
        </Route>
      </Routes>
    </Box>
  );
}

export default App;
