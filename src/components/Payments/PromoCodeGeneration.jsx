import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Alert,
} from "@mui/material";
import {
  useCreateCouponByAmountMutation,
  useCreateCouponByPercentMutation,
  useListAllCouponsQuery,
} from "../../redux/api/paymnetsApi"; // Import RTK Query hooks
import { toast } from "react-toastify";
import { tr } from "date-fns/locale";

const PromoCodeGeneration = () => {
  const [couponCodeAmount, setCouponCodeAmount] = useState("");
  const [couponCodePercent, setCouponCodePercent] = useState("");
  const [amount, setAmount] = useState("");
  const [percentage, setPercentage] = useState("");
  const [createCouponAmount] = useCreateCouponByAmountMutation();
  const [createCouponPercent] = useCreateCouponByPercentMutation();
  const { data: coupons, refetch: refetchCoupons } = useListAllCouponsQuery();

  const handleCreateAmountCoupon = async () => {
    try {
      await createCouponAmount({
        couponId: couponCodeAmount,
        amountOff: amount,
      });
      refetchCoupons(); // Refetch list of coupons
      setAmount("");
      setCouponCodeAmount("");
    } catch (err) {
      toast.error(err?.data?.message || 'Failed to create coupon');
    }
  };

  const handleCreatePercentCoupon = async () => {
    try {
      await createCouponPercent({
        couponId: couponCodePercent,
        percentOff: percentage,
      });
      refetchCoupons(); // Refetch list of coupons
      setPercentage("");
      setCouponCodePercent("");
    } catch (err) {
      toast.error(err?.data?.message || 'Failed to create coupon');
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Create Coupon by Amount
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <TextField
              label="Coupon Code"
              value={couponCodeAmount}
              onChange={(e) => setCouponCodeAmount(e.target.value)}
            />
            <TextField
              label="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <Button variant="contained" onClick={handleCreateAmountCoupon}>
              Create
            </Button>
          </Box>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Create Coupon by Percentage
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <TextField
              label="Coupon Code"
              value={couponCodePercent}
              onChange={(e) => setCouponCodePercent(e.target.value)}
            />
            <TextField
              label="Percentage"
              value={percentage}
              onChange={(e) => setPercentage(e.target.value)}
            />
            <Button variant="contained" onClick={handleCreatePercentCoupon}>
              Create
            </Button>
          </Box>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            All Coupons
          </Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Coupon ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Amount Off</TableCell>
                <TableCell>Percent Off</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {coupons?.coupons.data.map((coupon) => (
                <TableRow key={coupon.id}>
                  <TableCell>{coupon.id}</TableCell>
                  <TableCell>{coupon.name}</TableCell>
                  <TableCell>{coupon.amount_off}</TableCell>
                  <TableCell>{coupon.percent_off}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </Box>
  );
};

export default PromoCodeGeneration;
