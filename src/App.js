import "devextreme/dist/css/dx.light.css";
import { Box } from "@mui/material";

import RoutesContent from "../src/routes/path";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { AuthProvider } from "./components/login/AuthProvider";

function App() {
  return (
    <Box>
      {/* <AuthProvider> */}
        <ToastContainer />
        <RoutesContent />
      {/* </AuthProvider> */}
    </Box>
  );
}

export default App;
