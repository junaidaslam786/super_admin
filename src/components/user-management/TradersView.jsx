import React from "react";
import { Box, Typography, Link, Divider } from "@mui/material";
import Zangi from "../../assets/Profile.svg";
import Cover from "../../assets/doc.webp";
import Partner from "../../assets/Profile.svg";

const TradersView = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        backgroundColor:'#FAFBFC',
        paddingTop:'2vmin'
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: "25%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={Zangi}
            style={{
              width: "60%",
              borderRadius: "50%",
              border: "0.5vmin solid #00C800",
              filter: "drop-shadow(0px 0px 4px black)",
            }}
          />
          <Box
            sx={{
              marginTop: "2vmin",
              padding: "1vh 1vw",
              borderRadius: "1vmin",
              backgroundColor: "rgb(0, 200, 0)",
            }}
          >
            <Typography
              sx={{
                fontSize: "3vmin",
                color: "white",
                fontWeight: "600",
              }}
            >
              Active
            </Typography>
          </Box>
        </Box>
        <Box sx={{ width: "74%" }}>
          <Box
            sx={{
              width: "100%",
              padding: "2vmin",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <img src={Partner} style={{ marginRight: "1vmin" }} />
            <Typography
              sx={{
                fontSize: "4vmin",
                fontWeight: "500",
                color: "#00C800",
              }}
            >
              Trader
            </Typography>
          </Box>
          <Divider sx={{ backgroundColor: "#00C800" }} />
          <Box
            sx={{
              width: "100%",
              padding: "2vmin",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: "3.5vmin",
                fontWeight: "500",
                color: "#737791",
              }}
            >
              Doe,
            </Typography>
            <Typography
              sx={{
                fontSize: "3.5vmin",
                fontWeight: "500",
                color: "#737791",
                marginLeft: "1vmin",
              }}
            >
              John
            </Typography>
          </Box>
          <Divider sx={{ backgroundColor: "#00C800" }} />
          <Box
            sx={{
              width: "100%",
              padding: "2vmin",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: "3.5vmin",
                  fontWeight: "500",
                  color: "#00C800",
                }}
              >
                Phone No:
              </Typography>
              <Typography
                sx={{
                  fontSize: "3vmin",
                  fontWeight: "500",
                  color: "#737791",
                  marginLeft: "1vmin",
                }}
              >
                +0123456789
              </Typography>
            </Box>
            <Typography
              sx={{
                fontSize: "3vmin",
                fontWeight: "500",
                color: "#737791",
                marginLeft: "1vmin",
              }}
            >
              abc@bsd.com
            </Typography>
          </Box>
          <Divider sx={{ backgroundColor: "#00C800" }} />
          <Box
            sx={{
              width: "100%",
              padding: "2vmin",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: "3.5vmin",
                fontWeight: "500",
                color: "#00C800",
              }}
            >
              Location:
            </Typography>
            <Typography
              sx={{
                fontSize: "3vmin",
                fontWeight: "500",
                color: "#737791",
                marginLeft: "1vmin",
              }}
            >
              Purani Haveli
            </Typography>
          </Box>
          <Divider sx={{ backgroundColor: "#00C800" }} />
        </Box>
      </Box>
      <Box
      sx={{
        width:'98%',
        margin:'0 1%'
      }}
      >
      <Box
            sx={{
              width: "100%",
              padding: "2vmin",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: "3.5vmin",
                fontWeight: "500",
                color: "#00C800",
              }}
            >
              Company Name:
            </Typography>
            <Typography
              sx={{
                fontSize: "3vmin",
                fontWeight: "500",
                color: "#737791",
                marginLeft: "1vmin",
              }}
            >
              Landa Bazaar
            </Typography>
          </Box>
          <Divider sx={{ backgroundColor: "#00C800" }} />
          <Box
            sx={{
              width: "100%",
              padding: "2vmin",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: "3.5vmin",
                fontWeight: "500",
                color: "#00C800",
              }}
            >
              Company Address:
            </Typography>
            <Typography
              sx={{
                fontSize: "3vmin",
                fontWeight: "500",
                color: "#737791",
                marginLeft: "1vmin",
              }}
            >
              Baaby da Ahaata
            </Typography>
          </Box>
          <Divider sx={{ backgroundColor: "#00C800" }} />
          <img src={Cover} style={{width:'100%'}}/>
          <Divider sx={{ backgroundColor: "#00C800" }} />
      </Box>
    </Box>
  );
};

export default TradersView;
