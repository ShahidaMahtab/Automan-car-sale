import React, { useEffect, useState } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
const MyOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const email = user.email;
  useEffect(() => {
    if (email) {
      fetch(`https://lit-dawn-11195.herokuapp.com/orders?email=${email}`)
        .then((res) => res.json())
        .then((data) => setOrders(data));
    } else {
      <Spinner animation="border" variant="success" className="p-5 my-5" />;
    }
  }, [email]);
  const handleDelete = (id) => {
    const url = `https://lit-dawn-11195.herokuapp.com/orders/${id}`;
    const proceed = window.confirm(
      "are you sure ? you want to delete your order"
    );
    if (proceed) {
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remaining = orders.filter((order) => order._id !== id);
            setOrders(remaining);
          }
        });
    }
  };
  return (
    <section>
      <h2>Available Orders : {orders?.length}</h2>
      <Row>
        <Col xs={6} lg={12}>
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
                      onClick={() => handleDelete(order._id)}
                    >
                      <DeleteIcon />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Col>
      </Row>
    </section>
  );
};

export default MyOrders;
