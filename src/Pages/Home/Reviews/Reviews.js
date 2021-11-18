import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import useAxios from "../../../hooks/useAxios";
import Title from "../../Shared/Title/Title";
import Review from "../Review/Review";

const Reviews = () => {
  const { client } = useAxios();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    client
      .get(`/reviews`)
      .then((response) => {
        setReviews(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <Container className="my-5">
      <Title
        firstPart={"Client"}
        secondPart={"Reviews"}
        smallText={"find out what client says about us"}
      ></Title>
      <Row xs={1} md={2} lg={3} className="g-4">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </Row>
    </Container>
  );
};

export default Reviews;
