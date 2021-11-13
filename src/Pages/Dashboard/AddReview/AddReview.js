import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
const AddReview = () => {
  //useform->react hook form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    //send to server
    fetch("https://lit-dawn-11195.herokuapp.com/reviews", {
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
            <div>
              <TextField
                required
                id="standard-basic"
                label="Rating"
                type="number"
                variant="standard"
                {...register("rating", { min: 0, max: 5 })}
              />
              {errors.rating && (
                <span className="d-block text-danger ms-2">
                  rating must be a number between 0-5
                </span>
              )}
            </div>
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
