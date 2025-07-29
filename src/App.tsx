import { Box } from "@mui/material";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import DashBoard from "./pages/DashBoard";
import AllNotes from "./pages/AllNotes";
import NewNote from "./pages/NewNote";
import Trash from "./pages/Trash";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import PrivateRoutes from "./components/PrivateRoutes";
import EditProfile from "./pages/EditProfile";
import EditNote from "./pages/EditNote";
import LandingPage from "./pages/LandingPage";
import LandingNavBar from "./components/LandingNavBar";
import BookMarks from "./pages/BookMarks";
import ResetPassword from "./pages/ResetPassword";

function App() {
  return (
    <Box p={0}>
      <Routes>
        <Route element={<LandingNavBar />}>
          <Route path="/" index element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
        <Route path="/DashBoard" element={<PrivateRoutes />}>
          <Route element={<DashBoard />}>
            <Route index element={<AllNotes />} />
            <Route path="EditNote/:noteId" element={<EditNote />} />
            <Route path="NewNote" element={<NewNote />} />
            <Route path="Bookmark" element={<BookMarks />} />
            <Route path="Trash" element={<Trash />} />
            <Route path="Profile" element={<EditProfile />} />
            <Route path="Password" element={<ResetPassword />} />
          </Route>
        </Route>
      </Routes>
    </Box>
  );
}

export default App;
