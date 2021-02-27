import React from "react";

import Calender from "./../components/student/Calender";
import StudenForm from "./../components/student/StudentForm";
import UpcomingNotif from "./../components/student/UpcomingNotif";

function StudentDashboard() {
  return (
    <div>
      <StudenForm />
      <Calender />
      <UpcomingNotif />
    </div>
  );
}

export default StudentDashboard;
