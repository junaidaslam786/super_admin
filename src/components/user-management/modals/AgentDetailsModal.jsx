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

const AgentDetailsModal = ({ userData, open, onClose }) => {
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
              Company Name:{" "}
              <Typography
                sx={{
                  marginLeft: "1vw",
                  fontWeight: "500",
                  fontSize: "1.5vmin",
                }}
              >
                {" "}
                {userData?.companyName}
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
              Company Position:{" "}
              <Typography
                sx={{
                  marginLeft: "1vw",
                  fontWeight: "500",
                  fontSize: "1.5vmin",
                }}
              >
                {" "}
                {userData?.companyPosition}
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
              First Name:{" "}
              <Typography
                sx={{
                  marginLeft: "1vw",
                  fontWeight: "500",
                  fontSize: "1.5vmin",
                }}
              >
                {" "}
                {userData?.firstName}{" "}
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
              Last Name:{" "}
              <Typography
                sx={{
                  marginLeft: "1vw",
                  fontWeight: "500",
                  fontSize: "1.5vmin",
                }}
              >
                {" "}
                {userData?.lastName}
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
              Email:{" "}
              <Typography
                sx={{
                  marginLeft: "1vw",
                  fontWeight: "500",
                  fontSize: "1.5vmin",
                }}
              >
                {" "}
                {userData?.email}
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
              Phone Number:{" "}
              <Typography
                sx={{
                  marginLeft: "1vw",
                  fontWeight: "500",
                  fontSize: "1.5vmin",
                }}
              >
                {" "}
                {userData?.phoneNumber}
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
              Company Registration#:{" "}
              <Typography
                sx={{
                  marginLeft: "1vw",
                  fontWeight: "500",
                  fontSize: "1.5vmin",
                }}
              >
                {" "}
                {userData?.registrationNumber}
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
              Assigned Role:{" "}
              <Typography
                sx={{
                  marginLeft: "1vw",
                  fontWeight: "500",
                  fontSize: "1.5vmin",
                }}
              >
                {" "}
                {userData?.assignedRole}
              </Typography>
            </Typography>
          </CardContent>
        </StyledCard>
      </Box>
    </Modal>
  );
};

export default AgentDetailsModal;
