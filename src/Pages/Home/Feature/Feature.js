import React from "react";
import { Col } from "react-bootstrap";

const Feature = ({ feature }) => {
  const { title, desc, img } = feature;
  return (
    <Col>
      <div className="d-flex">
        <div>
          <img src={img} alt="" />
        </div>
        <div className="ms-3 text-wrap">
          <h5 className="text-wrap">{title}</h5>
          <p className="text-wrap text-secondary">{desc}</p>
        </div>
      </div>
    </Col>
  );
};

export default Feature;
