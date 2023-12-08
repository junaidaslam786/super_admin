import React from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "../middleware/ProtectedRoutes";

// Importing required components for the routes
import LoginPage from "../pages/login/LoginPage";
import Dashboard from "../pages/dashboard/Dashboard";
import ProfilePage from "../pages/profile/profile-page/profilePage";
import AllUsersPage from "../pages/user-management/AllUsersPage";
import AllCustomersPage from "../pages/user-management/AllCustomersPage";
import AllTradersPage from "../pages/user-management/AllTradersPage";
import AddPropertyPage from "../pages/property/AddPropertyPage";
import CreateUserPage from "../pages/user/CreateUserPage";
import PropertyListPage from "../pages/property/PropertyListPage";
import NewsPage from "../pages/NewsPage/NewsPage";
import PaymentsPage from "../pages/PaymentsPage/PaymentsPage";
import SubscriptionPage from "../pages/SubscriptionPage/SubscriptionPage";
import SubsConfigPage from "../pages/SubscriptionPage/SubsConfigPage";
import SubsDetailsPage from "../pages/SubscriptionPage/SubsDetailsPage";
import TradersViewPage from "../pages/user-management/TradersViewPage";
import ServicesPage from "../pages/SubscriptionPage/ServicesPage";
import TokenManagementPage from "../pages/SubscriptionPage/TokenManagementPage";
import AnalyticsPage from "../pages/analytics/AnalyticsPage";
import ReportsPage from "../pages/analytics/ReportsPage";
import AllAdminsPage from "../pages/user-management/AllAdminsPage";
import TradersApprovalsPage from "../pages/user-management/TradersApprovalsPage";
import AddCommunityPage from "../pages/community/AddCommunityPage";
import AllCommunityListPage from "../pages/community/AllCommunityListPage";
import AllCommunityPostsPage from "../pages/community/AllCommunityPostsPage";
// Add other required imports here ...

const RoutesContent = () => {
  return (
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
      <Route path="/all-admins" element={<ProtectedRoute />}>
        <Route index element={<AllAdminsPage />} />
      </Route>
      <Route path="/trader" element={<ProtectedRoute />}>
        <Route index element={<TradersViewPage />} />
      </Route>
      {/* <Route path="/trader-approvals" element={<ProtectedRoute />}>
        <Route index element={<TradersApprovalsPage />} />
      </Route> */}
      <Route path="/create-user" element={<ProtectedRoute />}>
        <Route index element={<CreateUserPage />} />
      </Route>
      <Route path="/add-property" element={<ProtectedRoute />}>
        <Route index element={<AddPropertyPage />} />
      </Route>
      <Route path="/property-list" element={<ProtectedRoute />}>
        <Route index element={<PropertyListPage />} />
      </Route>
      <Route path="/news" element={<ProtectedRoute />}>
        <Route index element={<NewsPage />} />
      </Route>
      <Route path="/payments" element={<ProtectedRoute />}>
        <Route index element={<PaymentsPage />} />
      </Route>
      <Route path="/subscription" element={<ProtectedRoute />}>
        <Route index element={<SubscriptionPage />} />
      </Route>
      <Route path="/configuration" element={<ProtectedRoute />}>
        <Route index element={<SubsConfigPage />} />
      </Route>
      <Route path="/subscription-details/:id" element={<ProtectedRoute />}>
        <Route index element={<SubsDetailsPage />} />
      </Route>
      <Route path="/services" element={<ProtectedRoute />}>
        <Route index element={<ServicesPage />} />
      </Route>
      <Route path="/token-management" element={<ProtectedRoute />}>
        <Route index element={<TokenManagementPage />} />
      </Route>
      <Route path="/add-community" element={<ProtectedRoute />}>
        <Route index element={<AddCommunityPage />} />
      </Route>
      <Route path="/add-community/:communityId" element={<ProtectedRoute />}>
        <Route index element={<AddCommunityPage />} />
      </Route>
      <Route path="/list-community" element={<ProtectedRoute />}>
        <Route index element={<AllCommunityListPage />} />
      </Route>
      <Route path="/community-posts/:id" element={<ProtectedRoute />}>
        <Route index element={<AllCommunityPostsPage />} />
      </Route>
      <Route path="/analytics" element={<AnalyticsPage />} />
      <Route path="/reports" element={<ReportsPage />} />
    </Routes>
  );
};

export default RoutesContent;
