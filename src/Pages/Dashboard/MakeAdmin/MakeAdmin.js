import { Alert, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import useAuth from "../../../hooks/useAuth";
import useAxios from "../../../hooks/useAxios";
const MakeAdmin = () => {
  const { register, handleSubmit, reset } = useForm();
  const { admin } = useAxios();
  const [success, setSuccess] = useState(false);
  const { token } = useAuth();
  const onSubmit = (data) => {
    //send to server
    admin
      .put("/users", data, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.data.modifiedCount) {
          setSuccess(true);
          reset();
        }
      });
  };
  useEffect(() => {
    // when the component is mounted, the alert is displayed for 3 seconds
    setTimeout(() => {
      setSuccess(false);
    }, 1000);
  }, []);
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
