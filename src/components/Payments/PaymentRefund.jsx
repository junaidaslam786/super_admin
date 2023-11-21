import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';

const PaymentRefund = () => {
  const [transactionId, setTransactionId] = useState('');
  const [refundStatus, setRefundStatus] = useState('');

  const handleRefund = async () => {
    // Logic to process the refund based on transactionId
    try {
      // Assuming a refund processing function exists
      // await processRefund(transactionId);
      setRefundStatus('Refund processed successfully for transaction ID: ' + transactionId);
    } catch (error) {
      setRefundStatus('Failed to process refund: ' + error.message);
    }
  };

  return (
    <Box sx={{ maxWidth: 300 }}>
      <h2>Process Refund</h2>
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
        sx={{ mt: 2 }}
      >
        Refund
      </Button>
      {refundStatus && <Alert severity="info" sx={{ mt: 2 }}>{refundStatus}</Alert>}
    </Box>
  );
};

export default PaymentRefund;
