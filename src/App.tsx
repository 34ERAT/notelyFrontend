import { Box, Typography } from "@mui/material";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import DashBoard from "./pages/DashBoard";
import AllNotes from "./pages/AllNotes";
import NewNote from "./pages/NewNote";
import Trash from "./pages/Trash";

function App() {
  return (
    <Box height={"100vh"}>
      <Routes>
        <Route path="/DashBoard" element={<DashBoard />}>
          <Route index element={<AllNotes />} />
          <Route path="EditNote" element={<div>Edit this note </div>} />
          <Route path="NewNote" element={<NewNote />} />
          <Route
            path="Bookmark"
            element={
              <Typography textAlign={"center"} variant="h2">
                comming soon .....
              </Typography>
            }
          />
          <Route path="Trash" element={<Trash />} />
        </Route>
      </Routes>
    </Box>
  );
}

export default App;
