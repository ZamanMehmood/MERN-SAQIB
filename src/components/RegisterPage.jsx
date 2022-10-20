import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./registerpage.scss";

const RegisterPage = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dateOfBirth, setdateOfBirth] = useState("");



  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handle submit", fullName, email, password, dateOfBirth);

    let pyaload = {
      fullName,
      email,
      password,
      gender: "Male",
      dateOfBirth: "3/2/2022",
    };

    const apiCall = await axios.post(
      "http://localhost:8081/users/register",
      pyaload
    );
    console.log("apiCall", apiCall);
  };

  return (
    <>
      <form className="main-container mt-5" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-6 ">
            <div className="m-2">
              <label>Email*</label>
              <input
                type="email"
                className="main-input"
                placeholder="Please Type your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="m-2">
              <label>Dummy Number</label>
              <input
                type="text"
                className="main-input"
                placeholder="Please enter"
              />
            </div>

            <div className="m-2"> 
              <label htmlFor="">Password*</label> <br />
              <i className="fa fa-eye-slash main-icon"></i>
              <input
                type="password"
                className="main-input"
                placeholder="Minimum 6 characters allowed"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="d-flex mt-4 ms-5">
              <span>Birthday</span>
              <div className="d-flex">
                <select
                  defaultValue={dateOfBirth}
                  onChange={(e) => setdateOfBirth(e.target.value)}
                >
                  <option>Month</option>
                  <option>1</option>
                  <option>1</option>
                  <option>1</option>
                </select>
                <select
                  defaultValue={dateOfBirth}
                  onChange={(e) => setdateOfBirth(e.target.value)}
                >
                  <option>Day</option>
                  <option>1</option>
                  <option>1</option>
                  <option>1</option>
                </select>
                <select
                  defaultValue={dateOfBirth}
                  onChange={(e) => setdateOfBirth(e.target.value)}
                >
                  <option>Year</option>
                  <option>1</option>
                  <option>1</option>
                  <option>1</option>
                </select>
              </div>
            </div>
          </div>
          {/* // second form   */}
          <div className="col-6  ">
            <div className="m-2">
              <label>Full Name*</label>
              <input
                type="text"
                className="main-input"
                placeholder="Enter your fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className="m-2">
              <input type="checkbox" />
              <span className="checkbox-text m-2">
                I'd like to receive exclusive offers and promotions via SMS
              </span>
            </div>
            <button type="submit" className="main-inputs text-light">
              SIGN UP
            </button>
            <p className="checkbox-text ">
              By clicking “SIGN UP”, I agree to Daraz's{" "}
              <span className="text-primary">Terms of Use</span> and{" "}
              <span className="text-primary">Privacy Policy</span>
            </p>
            <div>
              <p className="checkbox-text">Or, sign up with
            <Link to="/login" className="m-1">Login</Link>
              
              </p>
              <button type="button" className="SignUpwith-email-button  ">
                Sign up with email
              </button>

            </div>
            <div className="m-2">
              <i className="fa fa-facebook facebook-icon text-light"></i>
              <button className="btn btn-primary text-light facebook-field">
                Facebook
              </button>
              <i className="fa fa-google google-icon text-light"></i>
              <button className="btn btn-danger text-light google-field m-1">
                Google
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default RegisterPage;