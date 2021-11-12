import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
const DataTable = ({ rows, details }) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        {rows ? (
          <>
            <TableHead>
              <TableRow>
                <TableCell style={{ borderBottom: "none" }} colSpan={2}>
                  <Typography
                    variant="h5"
                    gutterBottom
                    component="div"
                    sx={{
                      fontWeight: "medium",
                      color: "white",
                      bgcolor: "#011936",
                      p: 1,
                      textAlign: "center",
                      borderRadius: "0.6rem",
                    }}
                  >
                    Specification
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.firstCol}>
                  <TableCell
                    component="th"
                    scope="row"
                    style={{ borderBottom: "none" }}
                  >
                    {row.firstCol}
                  </TableCell>
                  <TableCell align="left" style={{ borderBottom: "none" }}>
                    : {row.firstValue}
                  </TableCell>
                  <TableCell align="left" style={{ borderBottom: "none" }}>
                    {row.secondCol}
                  </TableCell>
                  <TableCell align="left" style={{ borderBottom: "none" }}>
                    : {row.secondValue}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </>
        ) : (
          <TableBody>
            {details.map((row) => (
              <TableRow key={row.firstCol}>
                <TableCell
                  component="th"
                  scope="row"
                  style={{ borderBottom: "none" }}
                >
                  {row.firstCol}
                </TableCell>
                <TableCell align="left" style={{ borderBottom: "none" }}>
                  : {row.firstValue}
                </TableCell>
                <TableCell align="left" style={{ borderBottom: "none" }}>
                  {row.secondCol}
                </TableCell>
                <TableCell align="left" style={{ borderBottom: "none" }}>
                  : {row.secondValue}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        )}
      </Table>
    </TableContainer>
  );
};

export default DataTable;
