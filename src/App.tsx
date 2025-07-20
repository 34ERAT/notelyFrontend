import { Box, Typography } from "@mui/material";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import DashBoard from "./pages/DashBoard";
import AllNotes from "./pages/AllNotes";
import NewNote from "./pages/NewNote";
import Trash from "./pages/Trash";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import PrivateRoutes from "./components/PrivateRoutes";

function App() {
  return (
    <Box height={"100vh"}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/DashBoard" element={<PrivateRoutes />}>
          <Route element={<DashBoard />}>
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
        </Route>
      </Routes>
    </Box>
  );
}

export default App;
