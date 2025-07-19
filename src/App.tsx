import { Box } from "@mui/material";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import DashBoard from "./pages/DashBoard";
import AllNotes from "./pages/AllNotes";
import NewNote from "./pages/NewNote";

function App() {
  return (
    <Box height={"100vh"}>
      <Routes>
        <Route path="/DashBoard" element={<DashBoard />}>
          <Route index element={<AllNotes />} />
          <Route path="EditNote" element={<div>Edit this note </div>} />
          <Route path="NewNote" element={<NewNote />} />
          <Route path="Bookmark" element={<div>Book marks </div>} />
          <Route path="Trash" element={<div>list off delete notes</div>} />
        </Route>
      </Routes>
    </Box>
  );
}

export default App;
