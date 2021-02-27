import axios from "axios";
const apiUrl = `http://localhost:5000/api`;

export const collegeGet = ({ clg_id }, activeTab, successFn, errorFn) => {
  if (activeTab == 1) {
    collegeGetStudents({ clg_id }, successFn, errorFn);
  } else if (activeTab == 2) {
    collegeGetExams({ clg_id }, successFn, errorFn);
  } else {
    collegeGetResults({ clg_id }, successFn, errorFn);
  }
};

//Function to fetching Students Data
export const collegeGetStudents = ({ clg_id }, successFn, errorFn) => {
  axios
    .post(`${apiUrl}/collegeGetStudents`, { clg_id })
    .then((d) => {
      if (d.data.err !== undefined) {
        errorFn(d.data);
      } else {
        successFn(d.data);
        console.log(d.data);
      }
    })
    .catch((err) => errorFn(err));
};

export const collegeGetExams = ({ clg_id }, successFn, errorFn) => {
  axios
    .post(`${apiUrl}/collegeGetExams`, { clg_id })
    .then((d) => {
      if (d.data.err !== undefined) {
        errorFn(d.data);
      } else {
        successFn(d.data);
        console.log(d.data);
      }
    })
    .catch((err) => errorFn(err));
};
export const collegeGetResults = ({ clg_id }, successFn, errorFn) => {
  axios
    .post(`${apiUrl}/collegeGetResults`, { clg_id })
    .then((d) => {
      if (d.data.err !== undefined) {
        errorFn(d.data);
      } else {
        successFn(d.data);
        console.log(d.data);
      }
    })
    .catch((err) => errorFn(err));
};
