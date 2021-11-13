import React from "react";
import useService from "../../../hooks/useService";
import { Container } from "@mui/material";
import Title from "../../Shared/Title/Title";
import { Row } from "react-bootstrap";
import Service from "../Service/Service";
import Navigation from "../../Shared/Navigation/Navigation";
import Footer from "../../Shared/Footer/Footer";

const Explore = () => {
  const [services] = useService();
  return (
    <section style={{ background: "#EEF4FC" }}>
      <Navigation />
      <Container className="mb-5 pb-5">
        <Title
          firstPart={"Our"}
          secondPart={"Services"}
          smallText={"find the best car for you"}
        ></Title>
        <div className="container-fluid">
          <Row xs={1} md={2} lg={3} className="mx-auto g-4">
            {services.map((service) => (
              <Service key={service._id} service={service}></Service>
            ))}
          </Row>
        </div>
      </Container>
      <Footer />
    </section>
  );
};

export default Explore;
