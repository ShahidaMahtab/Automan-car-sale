import React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";

import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import MyOrders from "../MyOrders/MyOrders";
import Pay from "../Pay/Pay";

import useAuth from "../../../hooks/useAuth";
import AddReview from "../AddReview/AddReview";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageServices from "../ManageServices/ManageServices";
import AddService from "../AddService/AddService";
import ManageAllOrders from "../ManageAllOrders/ManageAllOrders";
import Dashboardhome from "../Dashboardhome/Dashboardhome";
import AdminRoute from "../../Login/AdminRoute/AdminRoute";
import { Row } from "react-bootstrap";

const drawerWidth = 240;
const Dashboard = (props) => {
  const { user, logOut, admin } = useAuth();
  const { window } = props;

  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <div>
      <Toolbar />
      <div className="d-flex justify-content-center flex-column align-items-center">
        {admin && (
          <Box>
            <Link
              className="text-decoration-none d-block"
              to={`${url}/makeAdmin`}
            >
              <Button color="inherit">Make Admin</Button>
            </Link>
            <Link
              className="text-decoration-none d-block"
              to={`${url}/addServices`}
            >
              <Button color="inherit">Add Services</Button>
            </Link>
            <Link
              className="text-decoration-none d-block"
              to={`${url}/manageServices`}
            >
              <Button color="inherit">Manage Services</Button>
            </Link>
            <Link
              className="text-decoration-none d-block"
              to={`${url}/manageAllOrder`}
            >
              <Button color="inherit">Manage All Order</Button>
            </Link>
          </Box>
        )}

        {admin || (
          <Box>
            <Link
              className="text-decoration-none d-block"
              to={`${url}/myOrder`}
            >
              <Button color="inherit">MyOrder</Button>
            </Link>
            <Link
              className="text-decoration-none d-block"
              to={`${url}/addReviews`}
            >
              <Button color="inherit">Add Review</Button>
            </Link>
            <Link
              className="text-decoration-none d-block"
              to={`${url}/mypayment`}
            >
              <Button color="inherit">Payment</Button>
            </Link>
          </Box>
        )}
      </div>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: "flex" }} style={{ background: "#EEF4FC" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
          <Link
            className="text-white text-decoration-none d-block ms-auto"
            to="/"
          >
            <Button color="inherit">Home Page</Button>
          </Link>
          {user?.email && (
            <Button color="inherit" className="d-block" onClick={logOut}>
              LogOut
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
        style={{ background: "#EEF4FC" }}
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        style={{ background: "#EEF4FC" }}
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Box>
          <Switch>
            <Route exact path={`${path}`}>
              <Dashboardhome />
            </Route>
            <Route path={`${path}/myOrder`}>
              <MyOrders></MyOrders>
            </Route>
            <Route path={`${path}/addReviews`}>
              <AddReview />
            </Route>
            <Route path={`${path}/mypayment`}>
              <Pay />
            </Route>
            <AdminRoute path={`${path}/makeAdmin`}>
              <MakeAdmin />
            </AdminRoute>
            <AdminRoute path={`${path}/addServices`}>
              <AddService />
            </AdminRoute>
            <AdminRoute path={`${path}/manageServices`}>
              <ManageServices />
            </AdminRoute>
            <AdminRoute path={`${path}/manageAllOrder`}>
              <ManageAllOrders />
            </AdminRoute>
          </Switch>
        </Box>
      </Box>
    </Box>
  );
};
Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
