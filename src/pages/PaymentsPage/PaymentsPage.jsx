import React, { useRef } from "react";
import { Grid, Box } from "@mui/material";
import PaymentRequest from '../../components/Payments/PaymentsRequest';
import PaymentRefund from "../../components/Payments/PaymentRefund";
import PromoCodeGeneration from "../../components/Payments/PromoCodeGeneration";
import MainLayout from "../../layout/MainLayout";

const PaymentPage = () => {
  const refs = {
    paymentRequest: useRef(null),
    paymentRefund: useRef(null),
    promoCodeGeneration: useRef(null),
  };

  const sections = [
    {
      id: "paymentRequest",
      label: "Payment Request",
      component: <PaymentRequest />,
    },
    {
      id: "paymentRefund",
      label: "Payment Refund",
      component: <PaymentRefund />,
    },
    {
      id: "promoCodeGeneration",
      label: "Promo Code Generation",
      component: <PromoCodeGeneration />,
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
              maxWidth: "100%", // Ensuring it doesn't exceed the available space
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

export default PaymentPage;
