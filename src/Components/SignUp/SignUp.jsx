import React, { useContext } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthProvider";
import toast from "react-hot-toast";

const SignUp = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignUp = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        toast.success("Successfully created!");
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {})
          .catch((err) => console.log(err));
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="m-top">
      <form onSubmit={handleSubmit(handleSignUp)} className="box shadow-lg">
        <h3 className="mb-4 darke-text">SignUp</h3>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            {...register("name", { required: "Name is Required" })}
            type="text"
            className="form-control"
          />
          {errors.name && <p className="text-danger">{errors.name.message}</p>}
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            {...register("email", { required: true })}
            type="email"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            {...register("password", {
              required: "Password is Required",
              minLength: {
                value: 6,
                message: "Password must be six characters",
              },
            })}
            type="password"
            className="form-control"
          />
          {errors.password && (
            <p className="text-danger mt-2">{errors.password.message} </p>
          )}
        </div>

        <input type="submit" className="primare-btn w-100" value="SignUp" />
        <p className="my-3">
          Already have an account?{" "}
          <Link className="primare-text fw-medium" to="/login">
            {" "}
            Please Login
          </Link>{" "}
        </p>

        <button className="google-btn">CONTINUE WITH GOOGLE</button>
      </form>
    </div>
  );
};

export default SignUp;
