import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';

const PromoCodeGeneration = () => {
  const [promoCode, setPromoCode] = useState('');
  const [generated, setGenerated] = useState(false);

  const generatePromoCode = () => {
    // Logic to generate promo code
    const newPromoCode = 'PROMO' + Date.now().toString().substr(-6); // Example generation logic
    setPromoCode(newPromoCode);
    setGenerated(true);
  };

  return (
    <Box sx={{ maxWidth: 300, textAlign: 'center' }}>
      <h2>Generate Promo Code</h2>
      <Button 
        variant="contained" 
        color="primary"
        onClick={generatePromoCode}
        sx={{ mb: 2 }}
      >
        Generate
      </Button>
      {generated && (
        <Alert severity="success">
          Generated Promo Code: <strong>{promoCode}</strong>
        </Alert>
      )}
    </Box>
  );
};

export default PromoCodeGeneration;
