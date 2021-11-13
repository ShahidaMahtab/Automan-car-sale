import { Alert, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
const MakeAdmin = () => {
  const { register, handleSubmit, reset } = useForm();
  const [success, setSuccess] = useState(false);
  const onSubmit = (data) => {
    //send to server
    fetch("http://localhost:5000/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setSuccess(true);
          // console.log(data);
          reset();
        }
      });
  };
  return (
    <div>
      <h2 className="text-center my-5">Make Admin</h2>
      <div className="d-flex justify-content-center align-items-center">
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1 },
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex-column d-flex pt-2 px-5 pb-5 border rounded">
            <TextField
              required
              id="standard-basic"
              label="Email"
              type="email"
              defaultValue=""
              variant="standard"
              {...register("email")}
            />
            <Button type="submit" variant="contained">
              Make Admin
            </Button>
          </div>
          {success && <Alert severity="success">Made Admin successfully</Alert>}
        </Box>
      </div>
    </div>
  );
};

export default MakeAdmin;
