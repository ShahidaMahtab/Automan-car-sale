import React from "react";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { img, desc1, price, type, name, rate, _id } = service;
  return (
    <div>
      <Card
        sx={{ maxWidth: 345 }}
        className="h-100 mx-auto shadow position-relative"
      >
        <CardMedia
          component="img"
          alt="car-img"
          height="140"
          image={img}
          className="img-fluid"
        />
        <Button
          className="d-block position-absolute top-0 start-0 ms-3 mt-2"
          variant="contained"
          sx={{ background: "#c62d2d" }}
        >
          {type}
        </Button>
        <CardContent className="mb-0">
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontWeight: "500" }}
          >
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {desc1?.slice(0, 150)}...
          </Typography>
          <Typography variant="h5" color="#011936">
            {price}...
          </Typography>
          <Rating name="read-only" value={parseInt(rate)} />

          <Link to={`/purchase/${_id}`} className="text-decoration-none">
            <Button
              size="medium"
              variant="contained"
              sx={{ background: "#011936" }}
              className="d-flex"
            >
              Buy Now
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default Service;
