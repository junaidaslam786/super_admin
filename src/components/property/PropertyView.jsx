import React from "react";
import { Box, Typography, Divider, Link } from "@mui/material";
import Image3 from "../../assets/street-789626.jpg";
import Image1 from "../../assets/pexels-burst-374811.jpg";
import Image2 from "../../assets/pexels-aleksandar-pasaric-4512439.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Icon from "../../assets/location_on_FILL0_wght400_GRAD0_opsz24.svg";

const PropertyView = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
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
            display: "flex",
            flexDirection: "column",
            width: "25%",
            margin: "2vmin",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                width: "98%",
                height: "40vmin",
                overflow: "hidden",
                border: "0.5vmin solid #00C800",
                borderRadius: "1vmin",
                boxShadow: "0px 0px 4px #00C800",
              }}
            >
              <img
                src={Image3}
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                width: "100%",
                height: "10vmin",
                marginTop: "2vmin",
                overflow: "hidden",
              }}
            >
              <img
                src={Image3}
                style={{
                  width: "100%",
                  height: "100%",
                  border: "1px solid white",
                }}
              />
              <img
                src={Image1}
                style={{
                  width: "100%",
                  height: "100%",
                  border: "1px solid white",
                }}
              />
              <img
                src={Image2}
                style={{
                  width: "100%",
                  height: "100%",
                  border: "1px solid white",
                }}
              />
              <img
                src={Image3}
                style={{
                  width: "100%",
                  height: "100%",
                  border: "1px solid white",
                }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "98%",
              border: "0.5vmin solid #00C800",
              borderRadius: "1vmin",
              marginTop: "5vmin",
              backgroundColor: "#FAFBFC",
              boxShadow: "0px 0px 5px #00C800",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                margin: "2vmin 2vmin 1vmin 2vmin",
              }}
            >
              <Typography
                sx={{
                  fontSize: "2.2vmin",
                  fontWeight: "600",
                  color: "#00C800",
                }}
              >
                Created By:
              </Typography>
              <Typography
                sx={{
                  fontSize: "2.2vmin",
                  fontWeight: "500",
                  color: "#737791",
                }}
              >
                Talha Anjum
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                margin: "1vmin 2vmin 1vmin 2vmin",
              }}
            >
              <Typography
                sx={{
                  fontSize: "2.2vmin",
                  fontWeight: "600",
                  color: "#00C800",
                }}
              >
                Sold Date:
              </Typography>
              <Typography
                sx={{
                  fontSize: "2.2vmin",
                  fontWeight: "500",
                  color: "#737791",
                }}
              >
                Long Time Ago
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                margin: "1vmin 2vmin 1vmin 2vmin",
              }}
            >
              <Typography
                sx={{
                  fontSize: "2.2vmin",
                  fontWeight: "600",
                  color: "#00C800",
                }}
              >
                Sold Time:
              </Typography>
              <Typography
                sx={{
                  fontSize: "2.2vmin",
                  fontWeight: "500",
                  color: "#737791",
                }}
              >
                Once Upon a Time
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                margin: "1vmin 2vmin 1vmin 2vmin",
              }}
            >
              <Typography
                sx={{
                  fontSize: "2.2vmin",
                  fontWeight: "600",
                  color: "#00C800",
                }}
              >
                Updated Time:
              </Typography>
              <Typography
                sx={{
                  fontSize: "2.2vmin",
                  fontWeight: "500",
                  color: "#737791",
                }}
              >
                71:72
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                margin: "1vmin 2vmin 2vmin 2vmin",
              }}
            >
              <Typography
                sx={{
                  fontSize: "2.2vmin",
                  fontWeight: "600",
                  color: "#00C800",
                }}
              >
                Address:
              </Typography>
              <Box
              sx={{display:'flex', flexDirection:'row', alignItems:'center'}}
              >
                <Typography
                  sx={{
                    fontSize: "2.2vmin",
                    fontWeight: "500",
                    color: "#737791",
                  }}
                >
                  Chungi No. 07, Kamoke
                </Typography>
                <Box sx={{ "&:hover": { cursor: "pointer" } }}>
                  <img src={Icon} alt="" />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "70%",
            marginTop: "2vmin",
          }}
        >
          <Box
            sx={{
              width: "100%",
              overflow: "hidden",
              height: "50vmin",
              marginBottom: "2vmin",
            }}
          >
            <Carousel
              infiniteLoop={true}
              autoPlay={true}
              interval={3000}
              transitionTime={500}
            >
              <Box>
                <img
                  src={Image3}
                  alt="Image 1"
                  style={{ width: "100%", height: "50vmin" }}
                />
              </Box>
              <Box>
                <img
                  src={Image1}
                  alt="Image 2"
                  style={{ width: "100%", height: "50vmin" }}
                />
              </Box>
              <Box>
                <img
                  src={Image2}
                  alt="Image 3"
                  style={{ width: "100%", height: "50vmin" }}
                />
              </Box>
            </Carousel>
          </Box>
          <Box
            sx={{
              marginBottom: "2vmin",
            }}
          >
            <Link
              underline="none"
              sx={{
                color: "#737791",
                fontSize: "2.5vmin",
                fontWeight: "500",
                textAlign: "center",
                "&:hover": { cursor: "pointer" },
              }}
            >
              https://add.VR.Tour.Url.com
            </Link>
          </Box>
          <Divider sx={{ backgroundColor: "#00C800" }} />
          <Box sx={{ margin: "2vmin", width: "100%" }}>
            <Typography
              sx={{
                color: "#00C800",
                fontSize: "3vmin",
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              Pull Up On You Like Agency
            </Typography>
          </Box>
          <Divider sx={{ backgroundColor: "#00C800" }} />
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                margin: "2vmin 0",
                width: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  color: "#00C800",
                  fontSize: "3vmin",
                  fontWeight: "600",
                }}
              >
                No. of Beds:
              </Typography>
              <Typography
                sx={{
                  color: "#737791",
                  fontSize: "3vmin",
                  fontWeight: "500",
                  marginLeft: "1vmin",
                }}
              >
                420
              </Typography>
            </Box>
            <Box
              sx={{
                margin: "2vmin 0",
                width: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  color: "#00C800",
                  fontSize: "3vmin",
                  fontWeight: "600",
                }}
              >
                Area:
              </Typography>
              <Typography
                sx={{
                  color: "#737791",
                  fontSize: "3vmin",
                  fontWeight: "500",
                  marginLeft: "1vmin",
                }}
              >
                302 (meter square)
              </Typography>
            </Box>
            <Box
              sx={{
                margin: "2vmin 0",
                width: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  color: "#00C800",
                  fontSize: "3vmin",
                  fontWeight: "600",
                }}
              >
                Price:{" "}
              </Typography>
              <Typography
                sx={{
                  color: "#737791",
                  fontSize: "3vmin",
                  fontWeight: "500",
                  marginLeft: "1vmin",
                }}
              >
                69$
              </Typography>
            </Box>
          </Box>
          <Divider sx={{ backgroundColor: "#00C800" }} />
          <Box sx={{ margin: "2vmin", width: "100%" }}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                margin: "1vmin 2vmin",
              }}
            >
              <Typography
                sx={{
                  color: "#00C800",
                  fontSize: "3vmin",
                  fontWeight: "600",
                }}
              >
                Talha Anjum
              </Typography>
              <Typography
                sx={{
                  color: "#737791",
                  fontSize: "3vmin",
                  fontWeight: "500",
                  marginRight: "10vmin",
                }}
              >
                +1234567890
              </Typography>
            </Box>
            <Box sx={{ width: "100%", margin: "1vmin 2vmin" }}>
              <Link
              underline="none"
                sx={{
                  color: "#00C800",
                  fontSize: "2.5vmin",
                  fontWeight: "500",
                  marginRight: "10vmin",
                  "&:hover": { cursor: "pointer" },
                }}
              >
                talhaanjum@gmail.com
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: "98%",
          margin: "2vmin",
          display: "flex",
          flexDirection: "column",
          boxShadow: "0px 0px 5px black",
          padding: "3vmin",
        }}
      >
        <Typography
          sx={{
            fontSize: "3vmin",
            color: "#00C800",
            fontWeight: "600",
          }}
        >
          Description:
        </Typography>
        <Typography
          sx={{
            fontSize: "2vmin",
            color: "#737791",
            lineHeight: "2",
            margin: "2vmin 0",
          }}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta cum
          aut voluptates maiores vero illum necessitatibus unde saepe corporis
          quo quas nostrum obcaecati odit quae nulla, error quidem labore,
          dolor, velit pariatur at nemo consectetur ipsum illo. Sequi
          reprehenderit rerum voluptates nulla unde enim officia dolorem cumque
          dolores sint, cum quos, molestiae ducimus, commodi eaque soluta
          asperiores obcaecati tempore impedit aut laudantium nesciunt!
          Voluptate atque magni pariatur odit quo repudiandae excepturi aliquam
          officiis. Corrupti commodi, repudiandae quo accusamus tempore aperiam
          accusantium, repellat tenetur dolorem quae architecto hic at provident
          nihil, quidem excepturi cupiditate libero molestiae voluptates magnam
          dolore minus cum nulla nesciunt! Nesciunt repellendus voluptatum
          ratione magnam sed. Adipisci maxime, at sit quia, animi alias nulla
          atque in ex, exercitationem perferendis repellendus iure itaque
          quaerat dolores sequi dolor placeat! Adipisci quas, rerum aperiam
          quibusdam nobis error tenetur sint iure non eum dolorem et repellat.
          Ipsum labore sapiente ab, doloremque magnam distinctio quibusdam
          aperiam alias. Maxime quos ullam enim rerum numquam ad vitae cumque?
          Molestias assumenda eaque fuga molestiae nesciunt veniam, quisquam
          possimus corrupti qui numquam quo asperiores magni reprehenderit in
          voluptatum quia earum velit mollitia.
        </Typography>
      </Box>
    </Box>
  );
};

export default PropertyView;
