import { useState } from "react";
import axios from "axios";
import StudentCard from "../studentCard/StudentCard.js";

import "./StudentCardList.scss";

const StudentCardList = () => {
  // set hook for student data
  const [students, setStudents] = useState([]);
  // fetch data from https://api.hatchways.io/assessment/students
  axios
    .get("https://api.hatchways.io/assessment/students")
    .then(({ data }) => setStudents(data.students))
    .catch((err) => console.log(err));
  // update hook with data

  return (
    <div className="studentCardList">
      {students.length && students.map((e) => <StudentCard id={e.id} student = {e} />)}
    </div>
  );
};

export default StudentCardList;
