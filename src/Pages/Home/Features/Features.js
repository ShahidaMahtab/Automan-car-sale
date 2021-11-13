import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Title from "../../Shared/Title/Title";
import Feature from "../Feature/Feature";

const Features = () => {
  const [features, setFeatures] = useState([]);
  useEffect(() => {
    fetch("https://lit-dawn-11195.herokuapp.com/features")
      .then((res) => res.json())
      .then((data) => setFeatures(data));
  }, []);
  return (
    <Container>
      <Title
        firstPart={"why choose"}
        secondPart={"us?"}
        smallText={"why choosing us is the best best decision"}
      ></Title>
      <Row xs={1} md={2} lg={3} className="mx-auto g-4">
        {features.map((feature) => (
          <Feature key={feature._id} feature={feature}></Feature>
        ))}
      </Row>
    </Container>
  );
};

export default Features;
