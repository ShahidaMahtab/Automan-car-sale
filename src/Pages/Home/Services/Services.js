import React from "react";
import { Container } from "@mui/material";
import Title from "../../Shared/Title/Title";
import { Row } from "react-bootstrap";
import Service from "../Service/Service";
import useService from "../../../hooks/useService";
const Services = () => {
  const [services] = useService();

  return (
    <Container className="mb-5 py-5">
      <Title
        firstPart={"Our"}
        secondPart={"Services"}
        smallText={"find the best car for you"}
      ></Title>
      <div className="container-fluid">
        <Row xs={1} md={2} lg={3} className="mx-auto g-4">
          {services.slice(0, 6).map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default Services;
