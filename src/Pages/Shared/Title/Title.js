import { Typography } from "@mui/material";
import React from "react";

const Title = ({ firstPart, secondPart, smallText }) => {
  return (
    <div className="my-5">
      <p className="text-center text-success fw-bold">
        <small>{smallText}</small>
      </p>
      <Typography
        variant="h4"
        gutterBottom
        component="div"
        className="text-center fs-1"
        style={{ fontWeight: "500" }}
      >
        {firstPart} <span style={{ color: "#011936" }}> {secondPart}</span>
      </Typography>
    </div>
  );
};

export default Title;
