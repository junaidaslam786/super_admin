import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Grid,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
} from "@mui/material";
import moment from "moment";

const DetailModal = ({ selectedAppointment, propertyData, onClose }) => {
  if (!selectedAppointment) return null;

  return (
    <Dialog
      open={Boolean(selectedAppointment)}
      onClose={onClose}
      maxWidth="md"
      fullWidth
    >
      <DialogTitle>Appointment Details</DialogTitle>
      <DialogContent dividers>
        <Grid container spacing={2}>
          {/* Customer Information */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6">Customer Information</Typography>
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar src={selectedAppointment.customerUser?.profileImage} />
                </ListItemAvatar>
                <ListItemText
                  primary={`${selectedAppointment.customerUser?.firstName ?? ''} ${selectedAppointment.customerUser?.lastName ?? ''}`}
                  secondary={selectedAppointment.customerUser?.email ?? ''}
                />
              </ListItem>
            </List>
          </Grid>

          {/* Agent Information */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6">Agent Information</Typography>
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar
                    src={selectedAppointment.allotedAgentUser?.profileImage}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={`${selectedAppointment.allotedAgentUser?.firstName ?? ''} ${selectedAppointment.allotedAgentUser?.lastName ?? ''}`}
                  secondary={selectedAppointment.allotedAgentUser?.email ?? ''}
                />
              </ListItem>
            </List>
          </Grid>

          {/* Appointment Details */}
          <Grid item xs={12}>
            <Typography variant="h6">Appointment Details</Typography>
            <Typography variant="body1">
              Date: {moment(selectedAppointment.appointmentDate).format("LL")}
            </Typography>
            <Typography variant="body1">
              Time Slot: {selectedAppointment.agentTimeSlot.textShow}
            </Typography>
            <Typography variant="body1">
              Status: {selectedAppointment.status}
            </Typography>
            {/* Additional details can be added here */}
          </Grid>

          {/* Products and Notes */}
          <Grid item xs={12}>
            <Typography variant="h6">Property Details</Typography>
            <Typography variant="body1">
              Title: {propertyData?.title}
            </Typography>
            <Typography variant="body1">
              Description: {propertyData?.description}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Notes</Typography>
            {/* Map through notes */}
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default DetailModal;
