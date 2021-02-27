import React, { useState, useEffect, Fragment } from "react";
import { FBsignup } from "../helpers/user";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import CollegeGraphic from "../assets/img/CollegeGraphic.png";
import "../styles/signup.page.css";

export default function SignupC({ setdp, setuser: setuserprop, setloggedin }) {
  const [user, setuser] = useState({
    email: "",
    fullName: "",
    pass1: "",
    pass2: "",
  });
  const [success, setsuccess] = useState(false);
  const [error, seterror] = useState(false);
  const [errorbody, seterrorbody] = useState({});

  const handleChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
    //console.log(user);
  };
  const sucessAlert = () => (
    <div className="alert alert-success">
      Account Creation Sucessful ! redirecting to Dashboard
    </div>
  );

  const errorAlert = () => (
    <div className="alert alert-danger">
      {errorbody.message
        ? errorbody.message
        : "Something Went Wrong Please Try Again !"}
    </div>
  );
  //To Stop displaying the popup after 3 sec
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        seterror(false);
      }, 3000);
    }
  }, [error]);
  //To Stop displaying the popup after 3 sec
  useEffect(() => {
    if (success) {
      setTimeout(() => {
        setsuccess(false);
      }, 3000);
    }
  }, [success]);

  const onSubmit = () => {
    if (user.pass1 !== user.pass2) {
      seterrorbody({
        message: "Passwords do not match",
      });
      seterror(true);
    } else {
      let dp = Math.floor(Math.random() * 9);
      FBsignup(
        {
          randomProfile: dp,
          email: user.email,
          password: user.pass1,
          fullName: user.fullName,
        },
        (user, dp) => {
          setsuccess(true);
          setuserprop(user);

          setdp(dp);
          console.log(user);
          setloggedin(true);
        },
        (err) => {
          seterror(true);
          seterrorbody(err);
        }
      );
    }
  };
  return (
    <Fragment>
      {success && sucessAlert()}
      {error && errorAlert()}
      <div className="SignUp">
        <div className="SignUpFormContainer">
          <div className="SignUpForm">
            <h4>ExamBeep Registration Form</h4>
            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={user.email}
                onChange={handleChange}
                placeholder="ex. johndoe@email.com"
              />
            </div>
            <div className="form-group">
              <label>College Name</label>
              <input
                type="text"
                name="fullName"
                value={user.fullName}
                onChange={handleChange}
                className="form-control"
                placeholder="ex. College of Engineering, Pune."
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="pass1"
                value={user.pass1}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter Password"
              />
            </div>
            <div className="form-group">
              <label>Password Confirmation</label>
              <input
                type="password"
                name="pass2"
                value={user.pass2}
                onChange={handleChange}
                className="form-control"
                placeholder="Confirm Password"
              />
            </div>
            <div className="button">
              <button className="btn btn-primary w-75" onClick={onSubmit}>
                Sign up
              </button>
            </div>
            <p className="m-auto p-2">
              Already have an account? <Link to="/login">Log in here</Link>
            </p>
          </div>
        </div>
        <div className="StudentGraphic">
          <img src={CollegeGraphic} width="400px" alt="College Graphic" />
        </div>
      </div>
    </Fragment>
  );
}
