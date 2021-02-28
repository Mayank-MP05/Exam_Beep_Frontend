import axios from "axios";
const apiUrl = `http://localhost:5000/api`;
//Function to Login the Exsisting user
export const getExamHelper = ({ clg_id, prn_no }, successFn, errorFn) => {
  axios
    .post(`${apiUrl}/getUserCollegeProfile`, { clg_id, prn_no })
    .then((d) => {
      console.log(d.data);
      axios
        .post(`${apiUrl}/getExams`, { clg_id, branch_id: d.data.branch_id })
        .then((d) => {
          if (d.data.err !== undefined) {
            errorFn(d.data);
          } else {
            successFn(d.data);
            console.log(d.data);
          }
        })
        .catch((err) => errorFn(err));
    })
    .catch((err) => errorFn(err));
};
