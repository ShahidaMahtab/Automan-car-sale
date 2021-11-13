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
const ManageServices = () => {
  const [services, setServices] = useState();
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  const handleDelete = (id) => {
    const url = `http://localhost:5000/services/${id}`;
    const proceed = window.confirm(
      "are you sure ? you want to delete the service"
    );
    if (proceed) {
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            setSuccess(true);
            const remaining = services.filter((service) => service._id !== id);
            setServices(remaining);
          }
        });
    }
  };
  return (
    <div>
      <h4>Manage Services</h4>
      {success && <Alert severity="success">Deleted successfully</Alert>}
      <Row>
        <Col xs={12}>
          <TableContainer component={Paper}>
            <Table aria-label="appointment table">
              <TableHead>
                <TableRow>
                  <TableCell>Car Type</TableCell>
                  <TableCell align="right">Car Model</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Rate</TableCell>
                  <TableCell align="right">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {services?.map((service) => (
                  <TableRow
                    key={service._id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {service.type}
                    </TableCell>

                    <TableCell align="right">{service.name}</TableCell>
                    <TableCell align="right">{service.price}</TableCell>
                    <TableCell align="right">{service.rate}</TableCell>

                    <TableCell
                      align="right"
                      onClick={() => handleDelete(service._id)}
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
      <div>available services:{services?.length}</div>
    </div>
  );
};

export default ManageServices;
