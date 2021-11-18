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
import useAxios from "../../../hooks/useAxios";
const ManageServices = () => {
  const { client } = useAxios();
  const [services, setServices] = useState();
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    client.get("/services").then((response) => {
      setServices(response.data);
    });
  }, []);
  const handleDelete = (id) => {
    const proceed = window.confirm(
      "are you sure, you want to delete the service?"
    );
    if (proceed) {
      client.delete(`services/${id}`).then((response) => {
        if (response.data.deletedCount > 0) {
          const remaining = services.filter((order) => order._id !== id);
          setServices(remaining);
          alert("deleted successfully");
        }
      });
    }
  };
  return (
    <div>
      <h4>Manage Services</h4>
      {success && <Alert severity="success">Deleted successfully</Alert>}
      <Row>
        <Col xs={12} lg={12}>
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
