import React, { useState, Fragment, useEffect } from "react";
import { FBlogin } from "../helpers/user";
import { Link, Redirect, useLocation } from "react-router-dom";
import StudentGraphic from "../assets/img/StudentGraphic.svg";
import "../styles/login.page.css";

export default function LoginV({ setuser: setuserprop, setloggedin }) {
  const [user, setuser] = useState({
    email: "",
    password: "",
  });
  const [success, setsuccess] = useState(false);
  const [error, seterror] = useState(false);
  const [errorBody, seterrorBody] = useState({});
  let loc = useLocation();
  const handleChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
    //console.log(user);
  };

  const sucessAlert = () => (
    <div className="alert alert-success">
      Authentication Complete ! Logged In Sucessful
    </div>
  );

  const errorAlert = () => (
    <div className="alert alert-danger">
      {errorBody.message
        ? errorBody.message
        : "Something Went Wrong Please Try Again !"}
    </div>
  );

  const onSubmit = () => {
    FBlogin(
      { email: user.email, password: user.password },
      (user) => {
        //console.log("User Logged In");
        setsuccess(true);
        setuserprop(user);
        setloggedin(true);
      },
      (error) => {
        seterror(true);
        seterrorBody(error);
        //console.log(error);
      }
    );
  };

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

  useEffect(() => {}, [loc.pathname]);

  return (
    <>
      {!success ? (
        <Fragment>
          {success && sucessAlert()}
          {error && errorAlert()}
          <div className="Login">
            <div className="StudentGraphic">
              <img src={StudentGraphic} alt="Student Graphic" />
            </div>
            <div className="LoginFormContainer">
              <div className="LoginForm">
                <h4 className="text-center">Login to ExamBeep</h4>
                <div className="form-group">
                  <label>Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="button">
                  <button className="btn btn-primary w-75" onClick={onSubmit}>
                    Log In
                  </button>
                </div>
                <p className="m-auto p-2">
                  Don't have an account?{" "}
                  <Link to="/signup">Create one here</Link>
                </p>
              </div>
            </div>
          </div>
        </Fragment>
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
}
