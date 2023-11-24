import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signInUser } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from.pathname || "/";

  const handleLogin = (data) => {
    console.log(data);
    signInUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        navigate(from, { replace: true });
        toast.success("Successfully User Login!");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="m-top">
      <form onSubmit={handleSubmit(handleLogin)} className="box shadow-lg">
        <h3 className="mb-4 darke-text">Login</h3>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            {...register("email", { required: "Email Address is required" })}
            type="email"
            className="form-control"
          />
          {errors.email && (
            <p className="text-danger">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            {...register("password", { required: true })}
            type="password"
            className="form-control"
          />
        </div>
        <p>Forget Password?</p>

        <input type="submit" className="primare-btn w-100" value="SignIn" />
        <p className="my-3">
          New to the SQUARE Shop?{" "}
          <Link className="primare-text fw-medium" to="/signup">
            Create New Account
          </Link>
        </p>

        <button className="google-btn">CONTINUE WITH GOOGLE</button>
      </form>
    </div>
  );
};

export default Login;
