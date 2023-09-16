import React from "react";
import { Card, CardContent, Typography, Modal, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { styled } from "@mui/material/styles";

const StyledCard = styled(Card)(({ theme }) => ({
  minWidth: 275,
  maxWidth: 500,
  margin: "auto",
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.primary.contrastText,
  borderRadius: "15px",
  boxShadow: theme.shadows[5],
  fontFamily: "'Poppins', sans-serif",
}));

const PropertyModal = ({ open, onClose }) => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="user-details-modal"
      aria-describedby="modal-to-view-user-details"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        padding="24px"
        width={isXs ? "90vw" : "80vw"}
        maxWidth="600px"
        bgcolor="background.paper"
        borderRadius={2}
        boxShadow={3}
      >
        <StyledCard
          sx={{
            backgroundColor: "#00C800",
          }}
        >
          <CardContent
            sx={{
              backgroundColor: "#00C800",
            }}
          >
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontWeight: "600",
                fontSize: "1.5vmin",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              Property Title:{" "}
              <Typography
                sx={{
                  marginLeft: "1vw",
                  fontWeight: "500",
                  fontSize: "1.5vmin",
                }}
              >
                {" "}
                Bahria Town
              </Typography>
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontWeight: "600",
                fontSize: "1.5vmin",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              Agent Name:{" "}
              <Typography
                sx={{
                  marginLeft: "1vw",
                  fontWeight: "500",
                  fontSize: "1.5vmin",
                }}
              >
                {" "}
                Malik Ryaz
              </Typography>
            </Typography>
            <Typography
              variant="p"
              gutterBottom
              sx={{
                fontWeight: "600",
                fontSize: "1.5vmin",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              City:{" "}
              <Typography
                sx={{
                  marginLeft: "1vw",
                  fontWeight: "500",
                  fontSize: "1.5vmin",
                }}
              >
                {" "}
                Mai Di Chuggi
              </Typography>
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontWeight: "600",
                fontSize: "1.5vmin",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              Price:{" "}
              <Typography
                sx={{
                  marginLeft: "1vw",
                  fontWeight: "500",
                  fontSize: "1.5vmin",
                }}
              >
                {" "}
                19.98pkr
              </Typography>
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontWeight: "600",
                fontSize: "1.5vmin",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              Reason:{" "}
              <Typography
                sx={{
                  marginLeft: "1vw",
                  fontWeight: "500",
                  fontSize: "1.5vmin",
                }}
              >
                {" "}
                Ainwain
              </Typography>
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontWeight: "600",
                fontSize: "1.5vmin",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              Added on:{" "}
              <Typography
                sx={{
                  marginLeft: "1vw",
                  fontWeight: "500",
                  fontSize: "1.5vmin",
                }}
              >
                {" "}
                14 August 1947
              </Typography>
            </Typography>
          </CardContent>
        </StyledCard>
      </Box>
    </Modal>
  );
};

export default PropertyModal;
