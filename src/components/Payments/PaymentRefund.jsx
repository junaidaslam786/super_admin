import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Card,
  CardContent,
  Typography,
  Alert,
} from "@mui/material";

const PaymentRefund = () => {
  const [transactionId, setTransactionId] = useState("");
  const [refundStatus, setRefundStatus] = useState("");

  const handleRefund = async () => {
    // Dummy refund logic for illustration purposes
    try {
      // Replace the following with your actual refund logic
      // await processRefund(transactionId);
      setRefundStatus(
        "Refund processed successfully for transaction ID: " + transactionId
      );
    } catch (error) {
      setRefundStatus("Failed to process refund: " + error.message);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        padding: "1.5vh 0",
        // justifyContent: "center",
        // alignItems: "center",
        // padding: "20px",
      }}
    >
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Process Refund
          </Typography>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            sx={{ display: "flex", gap: 2 }}
          >
            <TextField
              label="Transaction ID"
              variant="outlined"
              value={transactionId}
              onChange={(e) => setTransactionId(e.target.value)}
              required
              fullWidth
            />
              <Button
                variant="contained"
                color="error"
                onClick={handleRefund}
                fullWidth
              >
                Refund
              </Button>
            {refundStatus && <Alert severity="info">{refundStatus}</Alert>}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default PaymentRefund;
