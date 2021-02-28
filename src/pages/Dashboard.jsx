import React from "react";
import CollegeDashboard from "./CollegeDashboard.page";
import StudentDashboard from "./StudentDashboard.page";
function Dashboard({ user, setuser }) {
  return user.isCollege ? (
    <CollegeDashboard user={user} setuser={setuser} />
  ) : (
    <StudentDashboard user={user} setuser={setuser} />
  );
}

export default Dashboard;
