import React, { useEffect, useState } from "react";
import { Alert, Typography } from "@mui/material";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import Button from "@mui/material/Button";
import { Card, Col, Container, Row, Tabs, Tab } from "react-bootstrap";
import { useParams } from "react-router";
import Navigation from "../Shared/Navigation/Navigation";
import Footer from "../Shared/Footer/Footer";
import Rating from "@mui/material/Rating";
import TextField from "@mui/material/TextField";

import Box from "@mui/material/Box";

import { useForm } from "react-hook-form";
import DataTable from "../Shared/DataTable/DataTable";
import useAuth from "../../hooks/useAuth";

const Purchase = () => {
  const { servicesId } = useParams();
  const { user } = useAuth();
  const [service, setService] = useState({});
  const [orderAlert, setOrderAlert] = useState(false);
  useEffect(() => {
    const url = `http://localhost:5000/services/${servicesId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setService(data);
      });
  }, [servicesId]);
  //Date
  const date = new Date();

  //table datas
  function createData(firstCol, firstValue, secondCol, secondValue) {
    return {
      firstCol,
      firstValue,
      secondCol,
      secondValue,
    };
  }
  const {
    img,
    desc1,
    price,
    type,
    name,
    rate,
    desc2,
    desc3,
    year,
    engine,
    transmission,
    fuel,
    mileage,
    color,
  } = service;
  const rows = [
    createData("Condition", `${type}`, "Mileage", `${mileage}`),
    createData("Year", " 2015", "Engine", `${engine}`),
    createData("Fuel", `${fuel}`, "Transmission", `${transmission}`),
    createData("Color", `${color}`, "Doors", "5"),
  ];
  const details = [
    createData("Condition", `${type}`, "Make", "Mercedes"),
    createData("Model", "Sprinter", "Year", `${year}`),
    createData("Fuel", `${fuel}`, "Color", `${color}`),
    createData("BodyStyle", "SUV", "Transmission", `${transmission}`),
    createData("Doors", "5", "Engine", `${engine}`),
    createData("Powers", "179 kW (240 hp)"),
  ];
  //react hook form
  //useform
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    //send to server

    fetch("http://localhost:5000/purchase", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setOrderAlert(true);
          reset();
        }
      });
  };

  //alert dissappear
  useEffect(() => {
    // when the component is mounted, the alert is displayed for 3 seconds
    setTimeout(() => {
      setOrderAlert(false);
    }, 2000);
  }, []);
  return (
    <section style={{ background: "#EEF4FC" }}>
      <Navigation />
      <Container className="my-5">
        <Row>
          <Col xs={12} lg={6}>
            <Card className="border border-1 border-white p-1 shadow-sm">
              <Card.Img variant="top" src={img} />
              <Card.Body>
                <Rating name="read-only" value={parseInt(rate)} />
                <Card.Text>{desc1}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} lg={6}>
            {orderAlert && <Alert severity="success">Order successfully</Alert>}
            <Typography
              variant="h3"
              gutterBottom
              component="div"
              sx={{ fontWeight: "500" }}
            >
              {name}
            </Typography>
            <Typography variant="h5" gutterBottom component="div">
              {price}
            </Typography>
            <DataTable rows={rows} />
          </Col>
        </Row>
        <Row className="mt-5">
          <Col xs={12} lg={6}>
            <Box sx={{ width: "100%" }}>
              <Tabs
                defaultActiveKey="VEHICLE DETAILS"
                id="uncontrolled-tab-example"
                className="mb-3"
              >
                <Tab eventKey="VEHICLE DESCRIPTION" title="VEHICLE DESCRIPTION">
                  <Typography variant="body2">
                    {desc2}
                    <br />
                    <br />
                    {desc3}
                  </Typography>
                </Tab>
                <Tab eventKey="VEHICLE DETAILS" title="VEHICLE DETAILS">
                  <DataTable details={details} />
                </Tab>
                <Tab eventKey="FEATURES" title="FEATURES">
                  <Box>
                    <Row>
                      <Col lg={6}>
                        <Typography
                          variant="body2"
                          gutterBottom
                          component="div"
                        >
                          ABS :{" "}
                          <span className="ms-5">
                            <CheckCircleRoundedIcon color="success" />
                          </span>
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          AntiLock Braking System:{" "}
                          <span>
                            <CheckCircleRoundedIcon color="success" />
                          </span>
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          Bluetooth :{" "}
                          <span className="ms-5">
                            <CheckCircleRoundedIcon color="success" />
                          </span>
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          Power Steering:
                          <span className="ms-5">
                            <CheckCircleRoundedIcon color="success" />
                          </span>
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          Central locking :{" "}
                          <span className="ms-5">
                            <CheckCircleRoundedIcon color="success" />
                          </span>
                        </Typography>
                      </Col>
                      <Col lg={6}>
                        <Typography variant="body2" gutterBottom>
                          Air Conditioner :
                          <span className="ms-5">
                            <CheckCircleRoundedIcon color="success" />
                          </span>
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          Auxiliary heating :
                          <span className="ms-5">
                            <CheckCircleRoundedIcon color="success" />
                          </span>
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          CD player :
                          <span className="ms-5">
                            <CheckCircleRoundedIcon color="success" />
                          </span>
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          Leather Seats :
                          <span className="ms-5">
                            <CheckCircleRoundedIcon color="success" />
                          </span>
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          Power Windows :
                          <span className="ms-5">
                            <CheckCircleRoundedIcon color="success" />
                          </span>
                        </Typography>
                      </Col>
                    </Row>
                  </Box>
                </Tab>
              </Tabs>
            </Box>
          </Col>
          <Col xs={12} lg={6}>
            <div className="d-flex justify-content-center align-items-center ">
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div
                  className="flex-column d-flex pt-2 px-3 pb-3 border rounded"
                  style={{ background: "#011936" }}
                >
                  <TextField
                    required
                    type="hidden"
                    defaultValue="pending"
                    {...register("status")}
                  />
                  <TextField
                    required
                    id="filled-required"
                    label="Name"
                    defaultValue={user?.displayName}
                    variant="filled"
                    style={{ background: "#ffff" }}
                    {...register("name")}
                  />
                  <TextField
                    required
                    id="filled-required"
                    label="Email"
                    defaultValue={user?.email}
                    variant="filled"
                    style={{ background: "#ffff" }}
                    {...register("email")}
                  />

                  <TextField
                    required
                    id="filled-required"
                    label="Address"
                    placeholder="address"
                    variant="filled"
                    style={{ background: "#ffff" }}
                    {...register("address")}
                  />
                  <TextField
                    required
                    id="filled-required"
                    label="Phone"
                    type="number"
                    variant="filled"
                    style={{ background: "#ffff" }}
                    {...register("phone")}
                  />
                  <TextField
                    required
                    id="filled-required"
                    label="Model"
                    type="text"
                    variant="filled"
                    style={{ background: "#ffff" }}
                    {...register("model")}
                  />
                  <TextField
                    required
                    type="hidden"
                    defaultValue={date.toLocaleDateString()}
                    {...register("date")}
                  />

                  <Button type="submit" variant="contained">
                    order now
                  </Button>
                </div>
              </Box>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </section>
  );
};

export default Purchase;
