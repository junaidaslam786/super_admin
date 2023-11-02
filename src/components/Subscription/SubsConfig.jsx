// import React from "react";
// import { Box, Typography, Button, TextField } from "@mui/material";
// const SubsConfig = ({ featureName }) => {
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         width: "100%",
//         alignItems: "center",
//         paddingTop: "10vmin",
//         paddingBottom: "5vmin",
//       }}
//     >
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "space-between",
//           width: "90%",
//           height: "40vmin",
//           padding: "3vmin",
//           boxShadow: "0px 0px 2px black",
//           borderRadius: "2vmin",
//           backgroundColor: "white",
//           transition: "0.3s ease",
//           "&:hover": {
//             boxShadow: "0px 0px 5px black",
//           },
//         }}
//       >
//         <Typography
//           sx={{
//             fontSize: "4vmin",
//             fontWeight: "600",
//           }}
//         >
//           {featureName}
//         </Typography>
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "row",
//             alignItems: "center",
//             justifyContent: "space-between",
//           }}
//         >
//           <TextField
//             label="Tokens"
//             type="number"
//             fullWidth
//             sx={{
//               marginRight: "1vmin",
//               color: "#00C800",
//             }}
//             InputLabelProps={{
//               style: {
//                 color: "#00C800",
//               },
//             }}
//           />
//           <TextField
//             label="Slots"
//             type="number"
//             fullWidth
//             sx={{
//               marginRight: "1vmin",
//               color: "#00C800",
//             }}
//             InputLabelProps={{
//               style: {
//                 color: "#00C800",
//               },
//             }}
//           />
//           <TextField
//             label="Validity"
//             type="number"
//             fullWidth
//             sx={{
//               color: "#00C800",
//             }}
//             InputLabelProps={{
//               style: {
//                 color: "#00C800",
//               },
//             }}
//           />
//         </Box>
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "row",
//             alignItems: "center",
//           }}
//         >
//           <Button
//             sx={{
//               color: "#00C800",
//               border: "0.1vmin solid #00C800",
//               width: "15vmin",
//               marginRight: "2vmin",
//               "&:hover": {
//                 color: "white",
//                 backgroundColor: "#00C800",
//               },
//             }}
//           >
//             Save
//           </Button>
//           <Button
//             sx={{
//               color: "red",
//               border: "0.1vmin solid red",
//               width: "15vmin",
//               "&:hover": {
//                 color: "white",
//                 backgroundColor: "red",
//               },
//             }}
//           >
//             Discard
//           </Button>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default SubsConfig;
import React, { useState } from "react";
import { Box, Typography, Button, TextField, Snackbar } from "@mui/material";

const SubsConfig = ({ featureName }) => {
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSave = () => {
    // Logic to save the configuration can be added here
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
        paddingTop: "10vmin",
        paddingBottom: "5vmin",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "90%",
          height: "40vmin",
          padding: "3vmin",
          boxShadow: "0px 0px 2px black",
          borderRadius: "2vmin",
          backgroundColor: "white",
          transition: "0.3s ease",
          "&:hover": {
            boxShadow: "0px 0px 5px black",
          },
        }}
      >
        <Typography
          sx={{
            fontSize: "4vmin",
            fontWeight: "600",
          }}
        >
          {featureName}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TextField
            label="Tokens"
            type="number"
            fullWidth
            sx={{
              marginRight: "1vmin",
              color: "#00C800",
            }}
            InputLabelProps={{
              style: {
                color: "#00C800",
              },
            }}
          />
          <TextField
            label="Slots"
            type="number"
            fullWidth
            sx={{
              marginRight: "1vmin",
              color: "#00C800",
            }}
            InputLabelProps={{
              style: {
                color: "#00C800",
              },
            }}
          />
          <TextField
            label="Validity"
            type="number"
            fullWidth
            sx={{
              color: "#00C800",
            }}
            InputLabelProps={{
              style: {
                color: "#00C800",
              },
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Button
            onClick={handleSave}
            sx={{
              color: "#00C800",
              border: "0.1vmin solid #00C800",
              width: "15vmin",
              marginRight: "2vmin",
              "&:hover": {
                color: "white",
                backgroundColor: "#00C800",
              },
            }}
          >
            Save
          </Button>
          <Button
            sx={{
              color: "red",
              border: "0.1vmin solid red",
              width: "15vmin",
              "&:hover": {
                color: "white",
                backgroundColor: "red",
              },
            }}
          >
            Discard
          </Button>
        </Box>
      </Box>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message="Configurations are saved successfully"
        action={
          <Button color="inherit" size="small" onClick={handleCloseSnackbar}>
            Close
          </Button>
        }
      />
    </Box>
  );
};

export default SubsConfig;
