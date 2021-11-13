import React from "react";
import { Card, Col } from "react-bootstrap";
import Rating from "@mui/material/Rating";
import { Avatar } from "@mui/material";
const Review = (props) => {
  const { image, name, review, rating } = props.review;
  return (
    <Col>
      <Card className="rounded mx-auto shadow-none  h-100 bg-transparent">
        <Card.Body className="">
          <div className="d-flex justify-content-start align-items-center">
            <Avatar
              alt={name.slice(0, 1)}
              src={image}
              className="bg-secondary"
            />
            <Card.Title className="text-center fs-6 ms-2">{name}</Card.Title>
          </div>
          <Card.Text className="mt-3 text-secondary">{review}...</Card.Text>
          <Rating name="read-only" value={parseInt(rating)} />
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Review;
