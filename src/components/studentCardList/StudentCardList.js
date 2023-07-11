import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../searchBar/SearchBar.js";
import StudentCard from "../studentCard/StudentCard.js";

import "./StudentCardList.scss";

const StudentCardList = () => {
  // set hook for student data
  const [students, setStudents] = useState([]);
  const [allStudents, setAllStudents] = useState([]);
  // fetch data from https://api.hatchways.io/assessment/students

  useEffect(() => {
    axios
      .get("https://api.hatchways.io/assessment/students")
      .then(({ data }) => {
        setStudents(data.students);
        setAllStudents(data.students);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="studentCardList">
      <SearchBar setStudents={setStudents} students={students} allStudents = {allStudents} />
      {students.length > 0 &&
        students.map((e) => <StudentCard id={e.id} student={e} />)}
    </div>
  );
};

export default StudentCardList;
