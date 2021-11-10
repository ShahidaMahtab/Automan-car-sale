import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import SearchIcon from "@mui/icons-material/Search";
const BannerForm = () => {
  return (
    <div
      className="pt-3"
      style={{ background: "#011936", marginTop: "-120px" }}
    >
      <Container className="p-5">
        <Form className="text-white">
          <Row>
            <Col xs={12} lg={3}>
              <Form.Select className="me-sm-2" id="inlineFormCustomSelect">
                <option value="0">Select Location</option>
                <option value="1">United Kingdom</option>
                <option value="2">America</option>
                <option value="3">Dubai</option>
              </Form.Select>
            </Col>
            <Col xs={12} lg={3}>
              <Form.Select className="me-sm-2" id="inlineFormCustomSelect">
                <option value="0">Select Brand</option>
                <option value="1">Audi</option>
                <option value="2">BMW</option>
                <option value="3">Nissan</option>
                <option value="4">Toyota</option>
              </Form.Select>
            </Col>
            <Col xs={12} lg={3}>
              <Form.Select className="me-sm-2" id="inlineFormCustomSelect">
                <option value="0">Select Model</option>
                <option value="1">series 1</option>
                <option value="2">series 2</option>
                <option value="3">series 3</option>
              </Form.Select>
            </Col>

            <Col xs={12} lg={3}>
              <Form.Select className="me-sm-2" id="inlineFormCustomSelect">
                <option value="0">Year of Model</option>
                <option value="1">2017</option>
                <option value="2">2018</option>
                <option value="3">2019</option>
                <option value="4">2020</option>
                <option value="5">2021</option>
              </Form.Select>
            </Col>
            <Col xs={12} lg={3}>
              <Form.Select className="me-sm-2 mt-3" id="inlineFormCustomSelect">
                <option value="0">Type of Car</option>
                <option value="1">New Car</option>
                <option value="2">Used Car</option>
              </Form.Select>
            </Col>
            <Col xs={12} lg={3}>
              <Form.Select className="me-sm-2 mt-3" id="inlineFormCustomSelect">
                <option value="0">Select Max Price</option>
                <option value="1">$5000</option>
                <option value="2">$10000</option>
                <option value="3">$11000</option>
                <option value="4">$12000</option>
                <option value="5">$15000</option>
              </Form.Select>
            </Col>
            <Col xs={12} lg={3}>
              <Button className="btn d-block mt-3 px-5">
                <SearchIcon />
                Search Car
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default BannerForm;
