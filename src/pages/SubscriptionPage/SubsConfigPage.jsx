import React, { useRef, useEffect } from "react";
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import SubsConfig from "../../components/Subscription/SubsConfig";
import TokenManagement from "../../components/Subscription/TokenManagement";
import { useGetAllFeatureQuery } from "../../redux/api/featureManagementApi";
import MainLayout from "../../layout/MainLayout";

const SubsConfigPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const { data: features, isLoading, isError } = useGetAllFeatureQuery();

  // Create a ref for each feature and one for the TokenManagement section
  const featureRefs = useRef([]);

  // Predefine the mappings or import them if they are defined elsewhere
  const slotsLabelMapping = {
    "Video Call": "Number of slots",
    "Property Listing": "Number of properties",
    "API Subscription": "Number of API calls",
    "Analytics & Reporting": "Number of reports",
  };
  const freeLabelMapping = {
    "Video Call": "Free Slots",
    "Property Listing": "Free Property listings",
    "API Subscription": "Free API calls",
    "Analytics & Reporting": "Free Reports",
  };

  useEffect(() => {
    // Set or reset refs for features and TokenManagement
    featureRefs.current = features ? features.map(() => React.createRef()) : [];
    featureRefs.current.push(React.createRef()); // Ref for TokenManagement
  }, [features]);

  const scrollToRef = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (isLoading) {
    return <Box sx={{ padding: isMobile ? 2 : 4 }}>Loading...</Box>;
  }

  if (isError) {
    return <Box sx={{ padding: isMobile ? 2 : 4 }}>Error loading features</Box>;
  }

  return (
    <MainLayout>
      <Grid
        container
        spacing={2}
        sx={{ padding: theme.spacing(3), backgroundColor: "#FAFBFC" }}
      >
        {/* Side navigation for scrolling to sections */}
        <Grid item xs={12} sm={4} md={3} lg={2}>
          <Box
            sx={{
              margin: "auto",
              marginTop:'5vmin',
              marginBottom: theme.spacing(3),
              backgroundColor: "white",
              boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.5)",
              height: "fit-content",
              position: "sticky",
              width: isMobile ? "90vw" : "auto", // Full width on mobile, auto on other devices
              overflow: "auto",
              border:'0.1vmin solid #737791',
              borderRadius:'0.2vmin',
              position: isMobile ? 'static' :'fixed'
            }}
          >
            {features?.map((feature, index) => (
              <Typography
                key={feature.id}
                onClick={() => scrollToRef(featureRefs.current[index])}
                sx={{
                  fontSize: "2vmin",
                  color: "#737791",
                  padding: "1vw",
                  width: "100%",
                  borderBottom: "0.1vmin solid #737791",
                  "&:hover": {
                    cursor: "pointer",
                    borderLeft: "0.5vmin solid #00C800",
                  },
                }}
              >
                {feature.name}
              </Typography>
            ))}
            <Typography
              onClick={() => scrollToRef(featureRefs.current[features?.length])}
              sx={{
                fontSize: "2vmin",
                color: "#737791",
                padding: "1vw",
                width:'100%',
                "&:hover": {
                  cursor: "pointer",
                  borderLeft:'0.5vmin solid #00C800'
                },
              }}
            >
              USEE Coin Management
            </Typography>
          </Box>
        </Grid>

        {/* Main content */}
        <Grid item xs={12} sm={8} md={9} lg={10}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              backgroundColor: "#FAFBFC",
              padding: theme.spacing(2),
              paddingRight: isTablet ? theme.spacing(3) : theme.spacing(2), // Extra padding for tablet and above
            }}
          >
            {features?.map((feature, index) => (
              <Box
                key={feature.id}
                ref={featureRefs.current[index]}
                sx={{ marginBottom: theme.spacing(4) }}
              >
                <SubsConfig
                  featureName={feature.name}
                  featureId={feature.id}
                  slotsLabel={
                    slotsLabelMapping[feature.name] || "Number of slots"
                  }
                  freeLabel={freeLabelMapping[feature.name] || "Free Slots"}
                />
              </Box>
            ))}
            <Box
              ref={featureRefs.current[features?.length]}
              sx={{ marginBottom: theme.spacing(4) }}
            >
              <TokenManagement />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default SubsConfigPage;
