import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import Button from "@mui/material/Button";
const AddReview = () => {
  //useform->react hook form
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    //send to server

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("reviews added successfully");
          reset();
        }
      });
  };
  return (
    <div>
      <h2 className="text-center">Add A Review</h2>
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
              label="Name"
              variant="standard"
              {...register("name")}
            />
            <TextField
              required
              id="standard-basic"
              label="Image"
              placeholder="image"
              variant="standard"
              {...register("image")}
            />
            <TextField
              required
              id="standard-basic"
              label="Rating"
              InputProps={{ inputProps: { min: "1", max: "5", step: "1" } }}
              type="number"
              variant="standard"
              {...register("rating")}
            />

            <TextField
              required
              id="standard-basic"
              multiline
              rows={4}
              label="Comment"
              type="text"
              variant="standard"
              {...register("review")}
            />
            <Button type="submit" variant="contained">
              Add Review
            </Button>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default AddReview;
