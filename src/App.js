import "devextreme/dist/css/dx.light.css";
import { Box } from "@mui/material";

import RoutesContent from "../src/routes/path";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "react-query";
// import { AuthProvider } from "./components/login/AuthProvider";

const queryClient = new QueryClient();

function App() {
  return (
    <Box>
      <QueryClientProvider client={queryClient}>
        <ToastContainer />
        <RoutesContent />
      </QueryClientProvider>
    </Box>
  );
}

export default App;
