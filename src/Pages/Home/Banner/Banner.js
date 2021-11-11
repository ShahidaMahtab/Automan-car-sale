import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import banner from "../../../Images/banner.jpg";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Navigation from "../../Shared/Navigation/Navigation";

const carBanner = {
  background: `linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5) ), url(${banner}) no-repeat`,
  height: "700px",
};
const Banner = ({ banner }) => {
  return (
    <Box style={carBanner} sx={{ flexGrow: 1 }}>
      <Navigation banner={banner} />
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Box>
            <Typography
              variant="h2"
              className="text-wrap mt-5 d-flex justify-content-center align-items-center"
              style={{ color: "white", fontWeight: "800" }}
            >
              Find The Right <br /> Car For You
            </Typography>
            <Typography
              variant="body2"
              className="text-center text-white fs-3 text-wrap"
              sx={{ my: 5 }}
            >
              we have more than thousand car for you to choose, order today!!
            </Typography>

            <Button
              variant="contained"
              style={{ background: "#011936" }}
              className="fs-5 mx-auto d-block fw-bold"
            >
              Read More
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;
