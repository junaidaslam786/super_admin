import { Box } from "@mui/material";

import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./middleware/ProtectedRoutes";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import LoginPage from "./pages/login/LoginPage";
import Dashboard from "./pages/dashboard/Dashboard";
import ProfilePage from "./pages/profile/profile-page/profilePage";
import AllUsersPage from "./pages/user-management/AllUsersPage";
import AllCustomersPage from "./pages/user-management/AllCustomersPage";
import AllTradersPage from "./pages/user-management/AllTradersPage";
import AddPropertyPage from "./pages/property/AddPropertyPage";
import CreateUserPage from "./pages/user/CreateUserPage";

function App() {
  return (
    <Box>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<ProtectedRoute />}>
          <Route index element={<Dashboard />} />
        </Route>
        <Route path="/profile" element={<ProtectedRoute />}>
          <Route index element={<ProfilePage />} />
        </Route>
        <Route path="/all-users" element={<ProtectedRoute />}>
          <Route index element={<AllUsersPage />} />
        </Route>
        <Route path="/all-customers" element={<ProtectedRoute />}>
          <Route index element={<AllCustomersPage />} />
        </Route>
        <Route path="/all-traders" element={<ProtectedRoute />}>
          <Route index element={<AllTradersPage />} />
        </Route>
        <Route path="/add-property" element={<ProtectedRoute />}>
          <Route index element={<AddPropertyPage />} />
        </Route>
        <Route path="/create-user" element={<ProtectedRoute />}>
          <Route index element={<CreateUserPage />} />
        </Route>
        {/* <Route path="/all-users" element={<AllUsersPage />} />
        <Route path="/all-customers" element={<AllCustomersPage />} />
        <Route path="/all-traders" element={<AllTradersPage />} /> */}
      </Routes>
    </Box>
  );
}

export default App;
