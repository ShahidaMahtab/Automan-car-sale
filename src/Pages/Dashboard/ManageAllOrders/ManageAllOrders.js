import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import { Alert, getInputAdornmentUtilityClass } from "@mui/material";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

import "./ManageAllOrders.css";
import useAxios from "../../../hooks/useAxios";
const ManageAllOrders = () => {
  const { client, admin } = useAxios();
  const [orders, setOrders] = useState([]);
  const [statusAlert, setStatusAlert] = useState(false);
  const [status, setStatus] = useState(false);
  const [deleteAlert, setDeleteAlert] = useState(false);

  useEffect(() => {
    admin.get(`allorders`).then((response) => {
      setOrders(response.data);
      setStatus(false);
    });
  }, [status]);
  //delete
  const handleDelete = (id) => {
    const proceed = window.confirm(
      "are you sure, you want to cancel your order?"
    );
    if (proceed) {
      client.delete(`orders/${id}`).then((response) => {
        if (response.data.deletedCount > 0) {
          alert("order deleted successfully");
          const remaining = orders.filter((order) => order._id !== id);
          setOrders(remaining);
          setDeleteAlert(true);
        }
      });
    }
  };
  //status update
  const handleStatusUpdate = (id) => {
    admin.put(`allorders/${id}`).then((response) => {
      if (response.data.modifiedCount > 0) {
        setStatusAlert(true);
        setStatus(true);
      }
    });
  };

  //alert dissappear
  useEffect(() => {
    setTimeout(() => {
      setStatusAlert(false);
      setDeleteAlert(false);
    }, 1000);
  }, []);
  return (
    <div className="orderTable">
      <Row>
        <Col xs={12} lg={12}>
          <h4>Manage All Order</h4>
          {deleteAlert && (
            <Alert severity="success">Deleted successfully</Alert>
          )}
          {statusAlert && (
            <Alert severity="success">status updated successfully</Alert>
          )}

          <TableContainer component={Paper} className="">
            <Table aria-label="appointment table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="right">Email</TableCell>
                  <TableCell align="right">Order Date</TableCell>
                  <TableCell align="right">Car Model</TableCell>
                  <TableCell align="right">Address</TableCell>
                  <TableCell align="right">Phone</TableCell>
                  <TableCell align="right">Status</TableCell>
                  <TableCell align="right">Shipping</TableCell>

                  <TableCell align="right">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders?.map((order) => (
                  <TableRow
                    key={order._id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {order.name}
                    </TableCell>
                    <TableCell align="right">{order.email}</TableCell>
                    <TableCell align="right">{order.date}</TableCell>
                    <TableCell align="right">{order.model}</TableCell>
                    <TableCell align="right">{order.address}</TableCell>
                    <TableCell align="right">{order.phone}</TableCell>
                    <TableCell align="right">{order.status}</TableCell>
                    <TableCell align="right">
                      <CheckBoxIcon
                        onClick={() => handleStatusUpdate(order._id)}
                        color="success"
                      />
                    </TableCell>

                    <TableCell
                      align="right"
                      onClick={() => handleDelete(order._id)}
                    >
                      <DeleteIcon sx={{ color: "red" }} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <div>total orders:{orders?.length}</div>
        </Col>
      </Row>
    </div>
  );
};

export default ManageAllOrders;
