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
import { Alert } from "@mui/material";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
const ManageAllOrders = () => {
  const [orders, setOrders] = useState([]);
  const [statusAlert, setStatusAlert] = useState(false);
  const [deleteAlert, setDeleteAlert] = useState(false);

  useEffect(() => {
    fetch(`https://lit-dawn-11195.herokuapp.com/allorders`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  //delete
  const handleDelete = (id) => {
    const url = `https://lit-dawn-11195.herokuapp.com/orders/${id}`;
    const proceed = window.confirm(
      "are you sure ? you want to delete the order"
    );
    if (proceed) {
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            setDeleteAlert(true);
            const remaining = orders.filter((order) => order._id !== id);
            setOrders(remaining);
          }
        });
    }
  };
  //status update
  const handleStatusUpdate = (id) => {
    const matchedId = orders.filter((order) => order._id === id);

    const [data] = matchedId;
    const newData = data;
    console.log(newData);

    const url = `https://lit-dawn-11195.herokuapp.com/allorders/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          setStatusAlert(true);
          console.log(data);
          newData.status = "shipping";
        }
      });
  };
  //alert dissappear
  useEffect(() => {
    // when the component is mounted, the alert is displayed for 3 seconds
    setTimeout(() => {
      setStatusAlert(false);
      setDeleteAlert(false);
    }, 3000);
  }, []);
  return (
    <div>
      <h4>Manage All Order</h4>
      {deleteAlert && <Alert severity="success">Deleted successfully</Alert>}
      {statusAlert && (
        <Alert severity="success">status updated successfully</Alert>
      )}
      <Row>
        <Col xs={12}>
          <TableContainer component={Paper}>
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
                    <TableCell
                      align="right"
                      onClick={() => handleStatusUpdate(order._id)}
                    >
                      <CheckBoxIcon color="success" />
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
        </Col>
      </Row>
      <div>total orders:{orders?.length}</div>
    </div>
  );
};

export default ManageAllOrders;
