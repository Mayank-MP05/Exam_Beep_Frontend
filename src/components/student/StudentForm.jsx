import React from "react";
import "../../styles/StudentForm.css";

export default function StudentForm() {
  return (
    <div className="StudentForm">
      <div className="universityStudent">
        <div className="form-group">
          <label>PRN</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your PRN"
            name="PRN"
          />
        </div>
        <div className="form-group">
          <label>University Code</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter university code"
            name="uCode"
          />
        </div>
        <div className="button">
          <button className="btn btn-primary w-75">Enroll</button>
        </div>
      </div>
      <div className="nonUniversityStudent">
        <div>
          <h4>OR</h4>
        </div>
        <div className="button">
          <button className="btn btn-primary w-75">
            Participate as individual
          </button>
        </div>
      </div>
    </div>
  );
}
