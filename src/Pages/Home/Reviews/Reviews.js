import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Title from "../../Shared/Title/Title";
import Review from "../Review/Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <Container className="mt-5 mb-5">
      <Title
        firstPart={"Client"}
        secondPart={"Reviews"}
        smallText={"find out what client says about us"}
      ></Title>
      <Row xs={1} md={2} lg={3} className="g-4 p-4 my-2">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </Row>
    </Container>
  );
};

export default Reviews;
