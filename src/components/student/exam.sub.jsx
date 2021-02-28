import React from "react";

/**
 * clg_id
 * CLG1"
 * ranch_id
 * MECH"
 * ubject
 * WT"
 * eadline_of_reg
 * 26/02/2021"
 * estration_link
 * www.google.com"
 * xam_date
 * 26/02/2021"
 * xam_link
 * www.facebook.com"
 * */

function ExamSub({ exam, sub, deadline, register_link, exam_link }) {
  return (
    <div className='card upcomingExam' key={0}>
      <div className='card-body content'>
        <div>
          <h3 className='card-title'>{exam.title}</h3>
          <p className='card-subtitle text-muted'>
            {exam.date.toDateString()} {exam.date.toLocaleTimeString()}
          </p>
        </div>
        <a href={exam.link} className='btn btn-primary'>
          Exam Link
        </a>
      </div>
    </div>
  );
}

export default ExamSub;
