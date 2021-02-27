import React from "react";
import CollegeDashboard from "./CollegeDashboard.page";
import StudentDashboard from "./StudentDashboard.page";
function Dashboard({ user }) {
  return user.isCollege ? <CollegeDashboard /> : <StudentDashboard />;
}

export default Dashboard;
