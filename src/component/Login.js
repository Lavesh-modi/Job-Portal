import React from "react";
// import { Link, useNavigate } from " react-router-dom";
// import { BrowserRouter as Router } from "react-router-dom";

import { Link } from "react-router-dom";
import Data from "./Data.json";
import Dashboard from "./Dashboard";
import { Button } from "bootstrap";
export default function Login() {
  // console.log(Data)

  const handlesubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log("Email id :" + email, "\n", "Password :" + password);
    if (Data.Email === email && Data.Password === password) {
      console.log("sucessful");
      window.location.href = "/dashboard"
    } else {
      console.log("incorrect email & password");
    }
  };

  // const navigate = u();
  return (
    <div className="box">
      <form onSubmit={handlesubmit}>
        <h2>Login</h2>
        {/* <!-- Email input --> */}
        <div className="form-outline mb-4">
          <input
            type="email"
            id="form2Example1"
            className="form-control"
            name="email"
          />
          <label
            className="form-label"
            for="form2Example1"
            placeholder="Email id"
          >
            Email address
          </label>
        </div>

        {/* <!-- Password input --> */}
        <div className="form-outline mb-4">
          <input
            type="password"
            id="form2Example2"
            className="form-control"
            name="password"
          />
          <label
            className="form-label"
            for="form2Example2"
            placeholder="password"
          >
            Password
          </label>
        </div>

        {/* <!-- 2 column grid layout for inline styling --> */}
        <div className="row mb-4">
          <div className="col d-flex justify-content-center">
            {/* <!-- Checkbox --> */}
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="form2Example31"
                checked
              />
              <label className="form-check-label" for="form2Example31">
                {" "}
                Remember me{" "}
              </label>
            </div>
          </div>

          <div className="col">
            {/* <!-- Simple link --> */}
            <a href="#!">Forgot password?</a>
          </div>
        </div>

      
         {/* <Link to="/dashboard">
          <button type="button" className="btn btn-primary">
            Sign In
          </button>
        </Link>  */}

        <button type="submit" className="btn btn-primary">
          Sign In
        </button>

        {/* <!-- Register buttons --> */}
        <div className="text-center">
          <p>
            Not a member? <a href="#!">Register</a>
          </p>
          <p>or sign up with:</p>
          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-facebook-f"></i>
          </button>

          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-google"></i>
          </button>

          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-twitter"></i>
          </button>

          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-github"></i>
          </button>
        </div>
      </form>
    </div>
  );
}
