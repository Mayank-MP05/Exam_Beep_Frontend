import React, { Fragment, useState, useEffect } from "react";
import { imgArr } from "./../data/userimages";

import Spinner from "react-bootstrap/Spinner";

import CollegeProfile from "../components/college/CollegeProfile";
import StudentProfile from "../components/student/StudentProfile";

export default function ProfileV({ user }) {
  return user.isCollege ? (
    <CollegeProfile user={user} />
  ) : (
    <StudentProfile user={user} />
  );
}
