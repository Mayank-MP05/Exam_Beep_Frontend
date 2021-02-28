import React, { useState, useEffect } from "react";
import "./../../styles/StudentForm.css";
import { updatePRNandCLGidData } from "./../../helpers/user";
import { getExamHelper } from "./../../helpers/calender";
export default function StudentForm({ user, setuser }) {
  const [userD, setuserD] = useState({
    prn_no: "",
    clg_id: "",
  });
  const [success, setsuccess] = useState(false);
  const [error, seterror] = useState(false);
  const [errorBody, seterrorBody] = useState({});

  const handleChange = (e) => {
    setuserD({ ...userD, [e.target.name]: e.target.value });
    //console.log(user);
  };

  const sucessAlert = () => (
    <div className='alert alert-success'>
      Database Linking Done .... Fetching Exams and Results ....
    </div>
  );

  const errorAlert = () => (
    <div className='alert alert-danger'>
      {errorBody.message
        ? errorBody.message
        : "Something Went Wrong Please Try Again !"}
    </div>
  );

  const onSubmit = () => {
    getExamHelper(
      { clg_id: userD.clg_id, prn_no: userD.prn_no },
      (d) => {
        console.log(d);
      },
      () => {}
    );
    updatePRNandCLGidData(
      { email: user.email, prn_no: userD.prn_no, clg_id: userD.clg_id },
      (d) => {
        setsuccess(true);
        console.log(d.data);
        setuser(d.data);
      },
      () => {
        seterror(true);
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

  return (
    <>
      {success && sucessAlert()}
      {error && errorAlert()}
      <div className='StudentForm'>
        <div className='universityStudent'>
          <div className='form-group'>
            <label>PRN No.</label>
            <input
              type='text'
              className='form-control'
              placeholder='Enter your PRN'
              name='prn_no'
              value={userD.prn_no}
              onChange={handleChange}
            />
          </div>
          <div className='form-group'>
            <label>University Code</label>
            <input
              type='text'
              className='form-control'
              placeholder='Enter university code'
              name='clg_id'
              value={userD.clg_id}
              onChange={handleChange}
            />
          </div>
          <div className='button'>
            <button className='btn btn-primary w-75' onClick={onSubmit}>
              Enroll
            </button>
          </div>
        </div>
        <div className='nonUniversityStudent'>
          <div>
            <h4>OR</h4>
          </div>
          <div className='button'>
            <button className='btn btn-primary w-75'>
              Participate as individual
            </button>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </>
  );
}
