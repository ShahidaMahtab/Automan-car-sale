import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Navigation from "../../Shared/Navigation/Navigation";

const Register = () => {
  const { registerUser, error } = useAuth();
  const history = useHistory();
  // form validation rules
  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),

    email: Yup.string().required("Email is required"),
    name: Yup.string().required("UserName is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm(formOptions);
  const onSubmit = (data) => {
    const { password, email, name } = data;

    registerUser(email, password, name, history);
    reset();
  };
  return (
    <section>
      <Navigation></Navigation>
      <Container className="mx-auto my-5 pt-5 d-flex justify-content-center align-item-center">
        <div className="h-100">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="border border-1 border-white p-4 shadow"
          >
            <h4>Create An Account</h4>

            <div className="mb-3">
              <label className="form-label">UserName</label>
              <input
                type="text"
                {...register("name", { required: true })}
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
              />
              <span className="invalid-feedback">{errors.name?.message}</span>
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                {...register("email", { required: true })}
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
              />
              <span className="invalid-feedback">{errors.email?.message}</span>
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                {...register("password", { required: true })}
                className={`form-control ${
                  errors.password ? "is-invalid" : ""
                }`}
              />
              <span className="invalid-feedback">
                {errors.password?.message}
              </span>
            </div>
            <span className="d-block text-danger">{error}</span>
            <input
              type="submit"
              value="Register"
              className="btn-primary text-white btn"
            />
            <p>
              Already registered?<Link to="/login">Sign In</Link>
            </p>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default Register;
