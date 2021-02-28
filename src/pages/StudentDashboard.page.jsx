import React, { useState } from "react";
import ExamSub from "../components/student/exam.sub";
import ResultSub from "../components/student/result.sub";

import Calender from "./../components/student/Calender";
import StudentForm from "./../components/student/StudentForm";
import UpcomingNotif from "./../components/student/UpcomingNotif";

function StudentDashboard({ user, setuser }) {
  const [ExamData, setExamData] = useState([]);

  return (
    <div>
      <StudentForm user={user} setuser={setuser} setExamData={setExamData} />
      <Calender user={user} />
      {/* <UpcomingNotif user={user} /> */}
      {/* <ExamSub />
      <ResultSub /> */}
    </div>
  );
}

export default StudentDashboard;
