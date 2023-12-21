import React, { useRef } from "react";
import { Grid, Box } from "@mui/material";
// import PaymentRequest from "../../components/Payments/PaymentsRequest";
import PaymentRefund from "../../components/Payments/PaymentRefund";
import PromoCodeGeneration from "../../components/Payments/PromoCodeGeneration";
import MainLayout from "../../layout/MainLayout";
import Payments from "../../components/Payments/Payments";

const PaymentPage = () => {
  const paymentsRef = useRef(null);
  // const paymentRequestRef = useRef(null);
  const paymentRefundRef = useRef(null);
  const promoCodeGenerationRef = useRef(null);

  const sections = [
    {
      id: "payments",
      label: "Payments",
      component: <Payments />,
      ref: paymentsRef,
    },
    // {
    //   id: "paymentRequest",
    //   label: "Payment Request",
    //   component: <PaymentRequest />,
    //   ref: paymentRequestRef,
    // },
    {
      id: "paymentRefund",
      label: "Payment Refund",
      component: <PaymentRefund />,
      ref: paymentRefundRef,
    },
    {
      id: "promoCodeGeneration",
      label: "Promo Code Generation",
      component: <PromoCodeGeneration />,
      ref: promoCodeGenerationRef,
    },
  ];

  const scrollToRef = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <MainLayout>
      <Grid
        container
        spacing={3}
        sx={{ padding: "4vh 0", backgroundColor: "#FAFBFC" }}
      >
        <Grid item xs={12} md={3} sx={{ width: "25%" }}>
          <Box
            sx={{
              margin: "0 3vw",
              width: { xxl: "15vw", xl: "15vw", md: "15vw", sm: "90vw" },
              backgroundColor: "white",
              boxShadow: "0 0 2px rgba(0, 0, 0, 0.5)",
              height: "fit-content",
            }}
          >
            {sections.map((section) => (
              <Box
                key={section.id}
                onClick={() => scrollToRef(section.ref)}
                sx={{
                  fontSize: "2vmin",
                  color: "#737791",
                  padding: "1vw",
                  paddingLeft: "3vw",
                  borderBottom: "0.1vmin solid rgba(0, 0, 0, 0.5)",
                  "&:hover": {
                    borderLeft: "0.5vmin solid #00C800",
                    color: "#00C800",
                    cursor: "pointer",
                  },
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
              paddingRight: "1vw",
            }}
          >
            {sections.map((section) => (
              <Box key={section.id} ref={section.ref}>
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
