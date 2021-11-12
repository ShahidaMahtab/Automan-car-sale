import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
const Footer = () => {
  return (
    <div style={{ background: "#000c19" }}>
      <Container className="pt-5">
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <Box sx={{ textAlign: "left" }}>
              <Typography
                variant="h6"
                display="block"
                gutterBottom
                color="white"
                sx={{ fontWeight: "bold", mb: 2 }}
              >
                SHOWROOM
              </Typography>
              <Typography
                variant="body2"
                display="block"
                gutterBottom
                color="white"
              >
                Bangladesh, Sylhet-2100, uposhohar
              </Typography>
              <Typography
                variant="body2"
                display="block"
                gutterBottom
                color="white"
              >
                +1 800 789 0000
              </Typography>
              <Typography
                variant="body2"
                display="block"
                gutterBottom
                color="white"
              >
                automan@gmail.com
              </Typography>
              <Typography
                variant="body2"
                display="block"
                gutterBottom
                color="white"
              >
                Mon – Fri : 09am to 06pm
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box sx={{ textAlign: "left" }}>
              <Typography
                variant="h6"
                display="block"
                gutterBottom
                color="white"
                sx={{ fontWeight: "bold", mb: 2 }}
              >
                QUICK LINKS
              </Typography>
              <Typography
                variant="body2"
                display="block"
                gutterBottom
                color="white"
              >
                Blog
              </Typography>
              <Typography
                variant="body2"
                display="block"
                gutterBottom
                color="white"
              >
                FAQs
              </Typography>
              <Typography
                variant="body2"
                display="block"
                gutterBottom
                color="white"
              >
                Payment
              </Typography>
              <Typography
                variant="body2"
                display="block"
                gutterBottom
                color="white"
              >
                Shipment
              </Typography>
              <Typography
                variant="body2"
                display="block"
                gutterBottom
                color="white"
              >
                Where is my order?
              </Typography>
              <Typography
                variant="body2"
                display="block"
                gutterBottom
                color="white"
              >
                Return Policy
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box sx={{ textAlign: "left" }}>
              <Typography
                variant="h6"
                display="block"
                gutterBottom
                color="white"
                sx={{ fontWeight: "bold", mb: 2 }}
              >
                STYLE ADVISOR
              </Typography>

              <Typography
                variant="body2"
                display="block"
                gutterBottom
                color="white"
              >
                My account
              </Typography>
              <Typography
                variant="body2"
                display="block"
                gutterBottom
                color="white"
              >
                Information
              </Typography>
              <Typography
                variant="body2"
                display="block"
                gutterBottom
                color="white"
              >
                Addresses
              </Typography>
              <Typography
                variant="body2"
                display="block"
                gutterBottom
                color="white"
              >
                Discount
              </Typography>
              <Typography
                variant="body2"
                display="block"
                gutterBottom
                color="white"
              >
                Orders History
              </Typography>
              <Typography
                variant="body2"
                display="block"
                gutterBottom
                color="white"
              >
                Additional Information
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box sx={{ textAlign: "left" }}>
              <Typography
                variant="h6"
                display="block"
                gutterBottom
                color="white"
                sx={{ fontWeight: "bold", mb: 2 }}
              >
                INFORMATION
              </Typography>
              <Typography
                variant="body2"
                display="block"
                gutterBottom
                color="white"
              >
                Site Map
              </Typography>
              <Typography
                variant="body2"
                display="block"
                gutterBottom
                color="white"
              >
                Search Terms
              </Typography>
              <Typography
                variant="body2"
                display="block"
                gutterBottom
                color="white"
              >
                Advanced Search
              </Typography>
              <Typography
                variant="body2"
                display="block"
                gutterBottom
                color="white"
              >
                About Us
              </Typography>
              <Typography
                variant="body2"
                display="block"
                gutterBottom
                color="white"
              >
                Contact Us
              </Typography>
              <Typography
                variant="body2"
                display="block"
                gutterBottom
                color="white"
              >
                Suppliers
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography color="white" display="inline">
              <FacebookRoundedIcon fontSize="large" />
            </Typography>
            <Typography
              color="white"
              display="inline"
              style={{ marginLeft: "10px" }}
            >
              <GoogleIcon fontSize="large" />
            </Typography>
            <Typography
              color="white"
              display="inline"
              style={{ marginLeft: "10px" }}
            >
              <TwitterIcon fontSize="large" />
            </Typography>
            <p className="text-left text-lg-center mx-auto text-white">
              Copyright&copy; 2021 AUTOMAN. All right reserved
            </p>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
