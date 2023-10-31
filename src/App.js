import 'devextreme/dist/css/dx.light.css';
import { Box } from "@mui/material";

import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./middleware/ProtectedRoutes";

import RoutesContent from '../src/routes/path'

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <Box>
      <ToastContainer />
      <RoutesContent />
    </Box>
  );
}

export default App;
