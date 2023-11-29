import React from "react";
import {
  Box,
  Typography,
  Button,
  Divider,
  List,
  ListItem,
} from "@mui/material";
import Image from "../../assets/omg.png";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(email, name, service, tokens, block) {
  return { email, name, service, tokens, block };
}

const rows = [
  createData(
    "basheer@gmail.com",
    "Basheer",
    "Video Call",
    24,
    <Button sx={{ color: "#00C800" }}>Block</Button>
  ),
  createData(
    "gujjar@gmail.com",
    "Gujjar",
    "Video Call",
    29,
    <Button sx={{ color: "#00C800" }}>Block</Button>
  ),
  createData(
    "kaalu@gmail.com",
    "Kaalu",
    "Video Call",
    56,
    <Button sx={{ color: "#00C800" }}>Block</Button>
  ),
  createData(
    "chamkeela@gmail.com",
    "Chamkeela",
    "Video Call",
    77,
    <Button sx={{ color: "#00C800" }}>Block</Button>
  ),
  createData(
    "jadu@gmail.com",
    "Jadu",
    "Video Call",
    89,
    <Button sx={{ color: "#00C800" }}>Block</Button>
  ),
];

const SubsDetails = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#FAFBFC",
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          width: "100%",
          marginTop: "5vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* <img
          src={Image}
          style={{ width: "60vmin", height: "30vmin", borderRadius: "2vmin" }}
        /> */}
        <Typography
          sx={{
            marginTop: "3vmin",
            fontWeight: "600",
            fontSize: "6vmin",
          }}
        >
          Feature Title
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
          marginTop: "5vmin",
        }}
      >
        <Box
          sx={{
            border: "0.1vmin solid #00C800",
            borderRadius: "1vmin",
            width: "35vmin",
            height: "8vmin",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            backgroundColor: "white",
          }}
        >
          <Typography
            sx={{
              color: "#191B2A",
              fontWeight: "600",
              fontsize: "3.5vmin",
            }}
          >
            Total active users:
          </Typography>
          <Typography
            sx={{
              color: "#00C800",
              fontWeight: "600",
              fontSize: "2.5vmin",
            }}
          >
            224
          </Typography>
        </Box>
        <Box
          sx={{
            border: "0.1vmin solid #00C800",
            borderRadius: "1vmin",
            width: "35vmin",
            height: "8vmin",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            backgroundColor: "white",
          }}
        >
          <Typography
            sx={{
              color: "#191B2A",
              fontWeight: "600",
              fontsize: "3.5vmin",
            }}
          >
            Upcoming Renewals:
          </Typography>
          <Typography
            sx={{
              color: "#00C800",
              fontWeight: "600",
              fontSize: "2.5vmin",
            }}
          >
            224
          </Typography>
        </Box>
        <Box
          sx={{
            border: "0.1vmin solid #00C800",
            borderRadius: "1vmin",
            width: "35vmin",
            height: "8vmin",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            backgroundColor: "white",
          }}
        >
          <Typography
            sx={{
              color: "#191B2A",
              fontWeight: "600",
              fontsize: "3.5vmin",
            }}
          >
            Expired Subscription:
          </Typography>
          <Typography
            sx={{
              color: "#00C800",
              fontWeight: "600",
              fontSize: "2.5vmin",
            }}
          >
            224
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
          marginTop: "5vmin",
        }}
      >
        <Box
          sx={{
            border: "0.1vmin solid #00C800",
            borderRadius: "1vmin",
            width: "35vmin",
            height: "8vmin",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            backgroundColor: "white",
          }}
        >
          <Typography
            sx={{
              color: "#191B2A",
              fontWeight: "600",
              fontsize: "3.5vmin",
            }}
          >
            Non Users:
          </Typography>
          <Typography
            sx={{
              color: "#00C800",
              fontWeight: "600",
              fontSize: "2.5vmin",
            }}
          >
            224
          </Typography>
        </Box>
        <Box
          sx={{
            border: "0.1vmin solid #00C800",
            borderRadius: "1vmin",
            width: "35vmin",
            height: "8vmin",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            backgroundColor: "white",
          }}
        >
          <Typography
            sx={{
              color: "#191B2A",
              fontWeight: "600",
              fontsize: "3.5vmin",
            }}
          >
            Blocked Subscriptions:
          </Typography>
          <Typography
            sx={{
              color: "#00C800",
              fontWeight: "600",
              fontSize: "2.5vmin",
            }}
          >
            224
          </Typography>
        </Box>
        <Box
          sx={{
            border: "0.1vmin solid #00C800",
            borderRadius: "1vmin",
            width: "35vmin",
            height: "8vmin",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            backgroundColor: "white",
          }}
        >
          <Typography
            sx={{
              color: "#191B2A",
              fontWeight: "600",
              fontsize: "3.5vmin",
            }}
          >
            Revenue Generated:
          </Typography>
          <Typography
            sx={{
              color: "#00C800",
              fontWeight: "600",
              fontSize: "2.5vmin",
            }}
          >
            $22000
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
          marginTop: "5vmin",
        }}
      >
        <Box
          sx={{
            border: "0.1vmin solid #00C800",
            borderRadius: "1vmin",
            width: "40vmin",
            height: "8vmin",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            backgroundColor: "white",
          }}
        >
          <Button
            variant="outlined"
            sx={{
              color: "#00C800",
              width: "40vmin",
              height: "8vmin",
              borderColor: "#00C800",
              "&:hover": {
                borderColor: "#00C800",
                color: "white",
                backgroundColor: "#00C800",
              },
            }}
          >
            Block Subscription
          </Button>
        </Box>
        <Box
          sx={{
            border: "0.1vmin solid #00C800",
            borderRadius: "1vmin",
            width: "40vmin",
            height: "8vmin",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            backgroundColor: "white",
          }}
        >
          <Button
            variant="outlined"
            sx={{
              color: "#00C800",
              width: "40vmin",
              height: "8vmin",
              borderColor: "#00C800",
              "&:hover": {
                borderColor: "#00C800",
                color: "white",
                backgroundColor: "#00C800",
              },
            }}
          >
            Delete Subscription
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginTop: "10vmin",
          width: "100%",
        }}
      >
        <Typography
          sx={{
            fontSize: "5vmin",
            fontWeight: "600",
            marginLeft: "8vmin",
          }}
        >
          Details:
        </Typography>
        <Box
          sx={{
            border: "0.2vmin solid #00C800",
            width: "90%",
            margin: "0 5%",
            marginTop: "5vmin",
            height: "auto",
            padding: "5vmin",
            backgroundColor: "white",
            borderRadius: "2vmin",
            display: "flex",
            flexDirection: "column",
            boxShadow: "0px 0px 2px black",
            transition: "0.4s linear ease",
            "&:hover": {
              boxShadow: "0px 0px 5px black",
            },
          }}
        >
          <Typography>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, ex.
            Repudiandae similique alias veritatis iusto, architecto assumenda
            quaerat dolorem omnis, eius minus, harum doloremque eos libero quam
            quidem? Magnam ipsa doloribus esse eveniet reiciendis sequi, aliquam
            cumque enim suscipit quaerat!
          </Typography>
          <Button
            variant="outlined"
            sx={{
              color: "#00C800",
              width: "20vmin",
              height: "8vmin",
              marginTop: "5vmin",
              borderColor: "#00C800",
              "&:hover": {
                borderColor: "#00C800",
                color: "white",
                backgroundColor: "#00C800",
              },
            }}
          >
            Edit
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          width: "98%",
          marginTop: "10vmin",
          marginBottom: "10vmin",
          overflow: "hidden",
          borderRadius: "1vmin",
          boxShadow: "0px 0px 2px black",
          transition: "0.4s linear ease",
          "&:hover": {
            boxShadow: "0px 0px 5px black",
          },
        }}
      >
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Email</TableCell>
                <TableCell align="right">name</TableCell>
                <TableCell align="right">service</TableCell>
                <TableCell align="right">Tokens</TableCell>
                <TableCell align="right">Block</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.email}
                  </TableCell>
                  <TableCell align="right">{row.name}</TableCell>
                  <TableCell align="right">{row.service}</TableCell>
                  <TableCell align="right">{row.tokens}</TableCell>
                  <TableCell align="right">{row.block}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default SubsDetails;
