import React, { useRef } from "react";
import { Grid, Box } from "@mui/material";
import AccountDetails from '../../../components/profile/account-details/AccountDetails';
import ChangePassword from "../../../components/profile/change-password/ChangePassword";
import MainLayout from "../../../layout/MainLayout";
import TimeZone from "../../../components/profile/timezone/TimeZone";

const ProfilePage = () => {
  const refs = {
    accountDetails: useRef(null),
    timeZone: useRef(null),
    changePassword: useRef(null),
  };

  const sections = [
    {
      id: "accountDetails",
      label: "Account Details",
      component: <AccountDetails />,
    },
    { id: "timeZone", label: "Timezone", component: <TimeZone /> },
    {
      id: "changePassword",
      label: "Change Password",
      component: <ChangePassword />,
    },
  ];

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <MainLayout>
      <Grid container spacing={3} sx={{ padding: "4vh 0", backgroundColor: "#FAFBFC" }}>
        <Grid item xs={12} md={3} sx={{width: "25%"}}>
          <Box
            sx={{ 
              margin:'0 3vw',
              width:{xxl:'15vw', xl:'15vw', md: '15vw', sm:'90vw'},
              backgroundColor: "white", 
              boxShadow: "0 0 2px rgba(0, 0, 0, 0.5)", 
              height: "fit-content", 
            }}
          >
            {sections.map((section) => (
              <Box 
                key={section.id} 
                onClick={() => scrollToRef(refs[section.id])} 
                sx={{
                  fontSize: "2vmin", 
                  color: "#737791", 
                  padding: "1vw",
                  paddingLeft:'3vw', 
                  borderBottom: "0.1vmin solid rgba(0, 0, 0, 0.5)", 
                  '&:hover': { borderLeft: "0.5vmin solid #00C800", color: "#00C800", cursor: "pointer" }
                }}
              >
                {section.label}
              </Box>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} md={9}>
          <Box 
            sx={{ 
              display: "flex", 
              flexDirection: "column", 
              width: "100%",
              maxWidth: "100%", // Added max width to ensure it doesn't exceed the available space
              overflowX: "hidden", // Hide any horizontal overflow
              backgroundColor: "#FAFBFC",
              paddingRight: '1vw'
            }}
          >
            {sections.map((section) => (
              <Box key={section.id} ref={refs[section.id]}>
                {section.component}
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default ProfilePage;
