import { Container, Typography } from "@mui/material";
import React from "react";
import { Col, Row } from "react-bootstrap";
import about from "../../../Images/about.png";
import Navigation from "../../Shared/Navigation/Navigation";
import Title from "../../Shared/Title/Title";
const About = ({ nav }) => {
  return (
    <section>
      {!nav || <Navigation></Navigation>}
      <Container>
        <Title
          firstPart={"About"}
          secondPart={"us?"}
          smallText={"we sell both old and new cars."}
        ></Title>
        <Row className="g-5 d-flex justify-content-center align-items-center pb-5 px-5">
          <Col xs={12} lg={6}>
            <Typography
              variant="h5"
              gutterBottom
              component="div"
              className="fw-bold"
            >
              WELCOME TO THE AUTOMAN
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              className="text-wrap"
              color="GrayText"
            >
              Before we get ahead of ourselves, we want to welcome you to
              Automan. While nothing can replace thing on-the-lot experience. We
              appreciate you taking the time today to visit our web site. <br />
              <br />
              Our goal is to give you an interactive tour of our new and used
              inventory, as well as allow you to conveniently get a quote,
              schedule a service appointment, or apply for financing. The search
              for a luxury car is filled with high expectations. Undoubtedly,
              that has a lot to do with the vehicles you are considering, but at
              Automan, we think you should also have pretty high expectations
              for your dealership.
            </Typography>
            <div className="mt-5 d-flex">
              <button
                className="btn px-4 py-2 text-white"
                style={{ background: "#011936" }}
              >
                Learn More
              </button>
            </div>
          </Col>
          <Col xs={12} lg={6}>
            <img src={about} alt="" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
