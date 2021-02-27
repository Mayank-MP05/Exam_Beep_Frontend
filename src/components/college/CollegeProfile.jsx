import React, { Fragment, useState, useEffect } from "react";
import { imgArr } from "./../../data/collegeimages";

import Spinner from "react-bootstrap/Spinner";

export default function CollegeProfile({ user: userprop }) {
  const [user, setuser] = useState({
    email: "",
    name: "",
    username: "",
    bio: "",
    profilePic: 0,
  });
  const [uid, setuid] = useState("");
  const [error, seterror] = useState(false);
  const [success, setsuccess] = useState(false);
  const [errorBody, seterrorBody] = useState({});

  const handleChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
    //console.log(user);
  };

  const sucessAlert = () => (
    <div className='alert alert-success'>
      Profile updated ! Loading will take time
    </div>
  );

  const errorAlert = () => (
    <div className='alert alert-danger'>
      {errorBody.message
        ? errorBody.message
        : "Something Went Wrong Please Try Again !"}
    </div>
  );

  const resetForm = () => {
    setuser(userprop);
  };

  const updateData = () => {
    let updatedX = { ...userprop, profilePic: parseInt(userprop.profilePic) };
    // updateUserData(
    //   updatedX,
    //   user,
    //   () => {
    //     setsuccess(true);
    //   },
    //   (err) => {
    //     seterrorBody(err);
    //     seterror(true);
    //   }
    // );
  };

  useEffect(() => {
    setuser(userprop);
  }, []);

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

  return (
    <Fragment>
      {success && sucessAlert()}
      {error && errorAlert()}
      {!user.email ? (
        <div className='w-100 d-flex justify-content-center'>
          <Spinner
            animation='border'
            role='status'
            style={{ width: "70px", height: "70px", margin: "auto" }}>
            <span className='sr-only'>Loading...</span>
          </Spinner>
        </div>
      ) : (
        <Fragment>
          <div className='row p-2'>
            {/* Profile pic Section */}
            <div className='col-md-4 d-flex flex-column'>
              <img
                src={imgArr[parseInt(user.profilePic)]}
                alt='Profile of the User'
                className='w-50 m-auto'
              />
              <div className='form-group'>
                <label>Selct the Profile Pic</label>
                <select
                  className='form-control'
                  value={user.profilePic}
                  name='profilePic'
                  onChange={handleChange}>
                  <option value='1'>Girl X</option>
                  <option value='2'>Girl Y</option>
                  <option value='3'>Girl Z</option>
                  <option value='4'>Boy D</option>
                  <option value='5'>Girl V</option>
                  <option value='6'>Boy E</option>
                  <option value='7'>Boy F</option>
                  <option value='8'>Boy J</option>
                  <option value='9'>Boy K</option>
                </select>
              </div>
            </div>
            {/* Card Details Section */}
            <div className='col-md-7'>
              <div className='form-group row'>
                <label className='col-sm-2 col-form-label'>Email</label>
                <div className='col-sm-10'>
                  <input
                    type='email'
                    disabled
                    className='form-control-plaintext'
                    value={user.email}
                  />
                </div>
              </div>
              <div className='form-group row'>
                <label className='col-sm-2 col-form-label'>
                  Name of the College{" "}
                </label>
                <div className='col-sm-10'>
                  <input
                    type='text'
                    className='form-control'
                    value={user.name}
                    name='name'
                    onChange={handleChange}
                    placeholder='K. J. Somaiya College of Engineering'
                  />
                </div>
              </div>

              <div className='form-group row'>
                <label className='col-sm-2 col-form-label'>Description </label>
                <div className='col-sm-10'>
                  <input
                    type='text'
                    className='form-control'
                    value={user.bio}
                    name='bio'
                    onChange={handleChange}
                    placeholder='The K. J. Somaiya College of Engineering was established in 1983 at Somaiya Vidyavihar, and affiliated with the Somaiya Vidyavihar University.'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='row text-center justify-content-center'>
            <button className='btn btn-danger m-1' onClick={resetForm}>
              Reset
            </button>
            <button className='btn btn-success m-1' onClick={updateData}>
              Save Changes
            </button>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
}
