import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import DriveEtaIcon from "@mui/icons-material/DriveEta";

import { Nav, Navbar } from "react-bootstrap";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";

const Navigation = ({ banner }) => {
  const { user, logOut } = useAuth();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{ background: "#011936" }}
        className={banner && "bg-transparent shadow-none"}
      >
        <Navbar collapseOnSelect expand="lg" className=" py-3 px-5">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <DriveEtaIcon fontSize="large" />
            AUTOMAN
          </Typography>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className="" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Link
                className="text-white text-decoration-none d-block"
                to="/home"
              >
                <Button color="inherit">Home</Button>
              </Link>
              <Link
                className="text-white text-decoration-none d-block"
                to="/about"
              >
                <Button color="inherit">about</Button>
              </Link>
              <Link
                className="text-white text-decoration-none d-block"
                to="/explore"
              >
                <Button color="inherit">explore</Button>
              </Link>

              <Link
                className="text-white text-decoration-none d-block"
                to="/login"
              >
                <Button color="inherit">Login</Button>
              </Link>
              {user.email && (
                <Button color="inherit" className="d-block" onClick={logOut}>
                  LogOut
                </Button>
              )}
              {user.displayName && (
                <Chip
                  variant="outlined"
                  style={{ background: "transparent", color: "white" }}
                  avatar={
                    <Avatar>
                      {user?.displayName.slice(0, 1).toUpperCase()}
                    </Avatar>
                  }
                  label={user.displayName}
                />
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
