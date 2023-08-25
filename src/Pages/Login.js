import React from "react";
import { useState } from "react";
import jwt_decode from "jwt-decode";
// import { useEffect } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
// import { Link, useNavigate } from " react-router-dom";
// import { BrowserRouter as Router } from "react-router-dom";

// import { Link } from "react-router-dom";
import Data from "../component/Data.json";
// import Dashboard from "./Dashboard";
// import { Button } from "bootstrap";
export default function Login() {
  // const history = useHistory();
  const navigate = useNavigate();

  // console.log(Data)

  const [email, setEmail] = useState("");
  const [emailExists, setEmailExists] = useState(false);

  const handlesubmit = async (e) => {
    e.preventDefault();
    const enteredEmail = e.target.email.value;
    const enteredPassword = e.target.password.value;

    // const handlesubmit = (e) => {
    //   e.preventDefault();
    //   const email = e.target.email.value;

    //   const password = e.target.password.value;
    // const requestData = {
    //   email : email,
    //   password:password

    // }

    // console.log("Email id :" + email, "\n", "Password :" + password);
    // console.log(email);
    // if (Data.Email === email && Data.Password === password) {
    //   console.log("sucessful");

    //   localStorage.setItem("email", email);
    //   localStorage.setItem("password", password);
    //   let user = JSON.parse(localStorage.getItem('email','password'))
    //   console.log(user)

    // } else {
    //   console.log("incorrect email & password");
    // }
    // localStorage.clear();
    // sessionStorage.clear();

    // Axios.post("http://localhost:5000/api/v1/createLogin", {email})
    //   .then((response) => {
    //     // Handle the response here if needed
    //     console.log("Response:", response.data);

    //   })
    //   .catch((error) => {
    //     // Handle errors here
    //     console.error("Error:", error);
    //   });
    // const checkEmail = async () => {
    //   try {
    //     const response = await Axios.post('http://localhost:5000/api/v1/createLogin', { email });
    //     setEmailExists(response.data.exists)
    //     console.log("<<<<<<<<<<",response.data.exists);
    //   } catch (error) {
    //     console.error('Error checking email:', error);
    //   }
    try {
      var headers = new Headers();
      headers.append("Content-Type", "application/json");
      headers.append("Accept", "application/json");

      // const response = await fetch("http://localhost:5000/api/v1/createLogin", {
      //   method: "POST",
      //   mode: "same-origin",
      //   redirect: "follow",
      //   credentials: "include", // Don't forget to specify this if you need cookies
      //   headers: headers,
      //   body: JSON.stringify({
      //     email: enteredEmail,
      //     password: enteredPassword,
      //   }),
      // });

      // const navigate = useNavigate();

      const response = await Axios.post(
        "http://localhost:5000/api/v1/createLogin",
        {
          email: enteredEmail,
          password: enteredPassword,
        }
      );

      if (response.data.exists) {
        console.log("Login successful!");
        // Perform any necessary actions upon successful login
        setEmailExists(true);

        var token =
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGRmMGVkYzg1NGVmYTVlOGViY2U0NjUiLCJlbWFpbCI6ImxhdmVzaGVkdUBnbWFpbC5jb20iLCJpYXQiOjE2OTI3ODUzOTcsImV4cCI6MTY5Mjc4ODk5N30.O-PHtBpbp1xtwzrmY6IyJ-NPyQl0D91XVVLMfZ-LG3s";
        var decoded = jwt_decode(token)
        // response.cookie("jwt cookie ", email, {
        //   httpOnly: false, // Cookie cannot be accessed via JavaScript
        //   maxAge: 3600000,
        // });;

        console.log(decoded);

        var email = decoded.email;

// Set the email as a cookie
// document.cookie = `email=${encodeURIComponent(email)}; expires=${new Date(decoded.exp * 1000)}; path=/`;
document.cookie = `email=${email}; expires=${new Date(decoded.exp * 1000)}; path=/`;

console.log("Email saved as a cookie:", email);

        

        




        // Navigate to the dashboard
        navigate("/dashboard");
        // window.location.href = "/dashboard";
      } else {
        console.log("Incorrect email & password");
        // Handle incorrect login
      }
    } catch (error) {
      console.error("Error checking email:", error);
    }
  };

  // window.location.href = "/dashboard";

  return (
    <div className="box">
      <div className="row ">
        <div className="coloumn">
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
                    value={email}
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
            <a href="/Company">
              <button type="submit" className="btn btn-primary">
                Sign In
              </button>
            </a>

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
      </div>
    </div>
  );
}
