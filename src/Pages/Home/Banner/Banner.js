import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import banner from "../../../Images/banner.jpg";
import { Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import DriveEtaIcon from "@mui/icons-material/DriveEta";
const carBanner = {
  background: `linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5) ), url(${banner}) no-repeat`,
  height: "700px",
};
const Banner = () => {
  const { user, logOut } = useAuth();
  return (
    <Box style={carBanner} sx={{ flexGrow: 1 }}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          className="bg-transparent text-white shadow-none"
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            ></IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              className="fs-3"
            >
              <DriveEtaIcon fontSize="large" /> AutoMan
            </Typography>
            <Link className="text-white text-decoration-none" to="/login">
              <Button color="inherit" className="fs-6">
                Login
              </Button>
            </Link>
            {user.email && (
              <Button color="inherit" className="fs-6" onClick={logOut}>
                LogOut
              </Button>
            )}
            {user.displayName && (
              <span>
                <AccountCircleIcon /> {user.displayName}
              </span>
            )}
          </Toolbar>
        </AppBar>
      </Box>
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
              Explore
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;
