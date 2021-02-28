import React, { useState, useEffect } from "react";

/**
 * STUDENT TABLE
 * age: "20"
    branch: "CSE"
    clg_id: "CLG1"
    name: "User One"
    prn_no: "1"


 */

function TableRender({ tableData, label }) {
  const [header, setheader] = useState([]);
  useEffect(() => {
    if (label == "students") {
      setheader(["clg_id", "prn_no", "name", "branch_id", "age"]);
    } else if (label == "exams") {
      setheader([
        "clg_id",
        "branch_id",
        "subject",
        "deadline_of_reg",
        "restration_link",
        "exam_date",
        "exam_link",
      ]);
    } else {
      setheader([
        "clg_id",
        "branch_id",
        "subject",
        "date_of_declaration",
        "result_link",
      ]);
    }
  }, []);

  return (
    <div className='p-2'>
      <table className='table'>
        <thead className='thead-dark'>
          <tr>
            {header.map((el, index) => (
              <th scope='col' key={index}>
                {el}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((singleArr, i) => (
            <tr key={i}>
              {Object.entries(singleArr).map((element, j) =>
                j == 0 ? "" : <td key={j}>{element[1]}</td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableRender;
