import { Typography } from "@mui/material";
import React from "react";

const Title = ({ firstPart, secondPart, smallText }) => {
  return (
    <div className="my-5">
      <p className="text-center text-success fw-bold">
        <small>{smallText}</small>
      </p>
      <Typography
        variant="h3"
        gutterBottom
        component="div"
        className="fw-bold text-center"
      >
        {firstPart} <span style={{ color: "#011936" }}> {secondPart}</span>
      </Typography>
    </div>
  );
};

export default Title;
