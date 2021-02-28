import React from "react";

import Calender from "./../components/student/Calender";
import StudentForm from "./../components/student/StudentForm";
import UpcomingNotif from "./../components/student/UpcomingNotif";

function StudentDashboard({ user }) {
  return (
    <div>
      <StudentForm user={user} />
      <Calender user={user} />
      {/* <UpcomingNotif user={user} /> */}
    </div>
  );
}

export default StudentDashboard;
