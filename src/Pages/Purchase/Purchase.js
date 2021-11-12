import React from "react";
import { Typography } from "@mui/material";
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

const Purchase = () => {
  const { servicesId } = useParams();

  //table datas
  function createData(firstCol, firstValue, secondCol, secondValue) {
    return {
      firstCol,
      firstValue,
      secondCol,
      secondValue,
    };
  }
  const rows = [
    createData("Condition", "used", "Mileage", "85,000"),
    createData("Year", " 2015", "Engine", "v63,01"),
    createData("Fuel", "Diesel", "Transmission", "Automatic"),
    createData("Color", "white", "Doors", "5"),
  ];
  const details = [
    createData("Condition", "used", "Make", "Mercedes"),
    createData("Model", "Sprinter", "Year", "2015"),
    createData("Fuel", "Diesel", "Color", "white"),
    createData("BodyStyle", "SUV", "Transmission", "Automatic"),
    createData("Doors", "5", "Engine", "v63,01"),
    createData("Powers", "179 kW (240 hp)"),
  ];
  //react hook form
  //useform
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <section style={{ background: "#EEF4FC" }}>
      <Navigation />
      <Container className="my-5">
        <Row>
          <Col xs={12} lg={6}>
            <Card className="border border-1 border-white p-1 shadow-sm">
              <Card.Img variant="top" src="https://i.ibb.co/zh65rsR/car1.jpg" />
              <Card.Body>
                <Rating name="read-only" value={5} />
                <Card.Text>
                  Mercedes-Benz M-Class is a SUVIt is available in 4 variants, 1
                  engine option. Other key specifications of the M-Class include
                  a Kerb Weight of 2175 kg and Bootspace of 690 litres. The
                  M-Class is available in 3 colours. The mileage of M-Class is
                  15.26 kmpl.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} lg={6}>
            <Typography
              variant="h3"
              gutterBottom
              component="div"
              sx={{ fontWeight: "500" }}
            >
              Mercedes-Benz M-Class
            </Typography>
            <Typography variant="h5" gutterBottom component="div">
              $44,000
            </Typography>
            <DataTable rows={rows} />
          </Col>
        </Row>
        {/* tabs */}
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
                    Mercedes-Benz M-Class is a SUVIt is available in 4 variants,
                    1 engine option. Other key specifications of the M-Class
                    include a Kerb Weight of 2175 kg and Bootspace of 690
                    litres. The M-Class is available in 3 colours. The mileage
                    of M-Class is 15.26 kmpl. Mercedes-Benz M-Class is a SUVIt
                    is available in 4 variants, 1 engine option. Other key
                    specifications of the M-Class include a Kerb Weight of 2175
                    kg and Bootspace of 690 litres. The M-Class is available in
                    3 colours. The mileage of M-Class is 15.26 kmpl.
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
                  className="flex-column d-flex p-2"
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
                    // defaultValue={user?.displayName}
                    variant="filled"
                    style={{ background: "#fff" }}
                    {...register("name")}
                  />
                  <TextField
                    required
                    id="filled-required"
                    label="Email"
                    // defaultValue={user.email}
                    variant="filled"
                    style={{ background: "#fff" }}
                    {...register("email")}
                  />

                  <TextField
                    required
                    id="filled-required"
                    label="Address"
                    placeholder="address"
                    variant="filled"
                    style={{ background: "#fff" }}
                    {...register("address")}
                  />
                  <TextField
                    required
                    id="filled-required"
                    label="Phone"
                    type="number"
                    variant="filled"
                    style={{ background: "#fff" }}
                    {...register("phone")}
                  />
                  <TextField
                    id="filled-required"
                    label="price"
                    disabled
                    defaultValue="$44,000"
                    variant="filled"
                    style={{ background: "#fff" }}
                    {...register("price")}
                  />
                  <TextField
                    id="filled-required"
                    label="car"
                    disabled
                    defaultValue="Mercedes-Benz M-Class"
                    variant="filled"
                    style={{ background: "#fff" }}
                    {...register("car")}
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
