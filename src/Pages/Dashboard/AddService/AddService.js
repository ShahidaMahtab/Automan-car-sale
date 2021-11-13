import { Alert, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
const AddService = () => {
  const { register, handleSubmit, reset } = useForm();
  const [success, setSuccess] = useState(false);
  const onSubmit = (data) => {
    // console.log(data);
    //send to server

    fetch("https://lit-dawn-11195.herokuapp.com/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setSuccess(true);
          reset();
        }
      });
  };
  //alert dissappear
  useEffect(() => {
    // when the component is mounted, the alert is displayed for 3 seconds
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  }, []);
  return (
    <div>
      <h4>Add Service</h4>
      {success && <Alert severity="success">service added successfully</Alert>}
      <div className="d-flex justify-content-center align-items-center">
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "50ch" },
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex-column d-flex pt-2 px-5 pb-3 border rounded">
            <TextField
              required
              id="standard-basic"
              label="type"
              placeholder="used/new"
              defaultValue="new"
              variant="standard"
              {...register("type")}
            />
            <TextField
              required
              id="standard-basic"
              label="Image"
              defaultValue="broken/img.jpg"
              variant="standard"
              {...register("img")}
            />
            <TextField
              required
              id="standard-basic"
              label="name"
              placeholder="car model"
              defaultValue="marcedes"
              variant="standard"
              {...register("name")}
            />
            <TextField
              id="standard-multiline-static"
              label="Description"
              multiline
              rows={4}
              placeholder="description"
              variant="standard"
              {...register("desc1")}
            />
            <TextField
              required
              id="standard-basic"
              label="price"
              type="number"
              variant="standard"
              {...register("price")}
            />
            <TextField
              required
              id="standard-basic"
              label="Rating"
              type="number"
              variant="standard"
              {...register("rate")}
            />

            <Button type="submit" variant="contained">
              Add Service
            </Button>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default AddService;
