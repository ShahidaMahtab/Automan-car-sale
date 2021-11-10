import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import DriveEtaIcon from "@mui/icons-material/DriveEta";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const Navigation = () => {
  const { user, logOut } = useAuth();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="bg-dark text-white">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <DriveEtaIcon fontSize="large" /> AutoMan
          </Typography>
          <Link className="text-white text-decoration-none" to="/home">
            <Button color="inherit">Home</Button>
          </Link>
          <Link className="text-white text-decoration-none" to="/login">
            <Button color="inherit">Login</Button>
          </Link>
          {user.email && (
            <Button color="inherit" onClick={logOut}>
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
  );
};

export default Navigation;
