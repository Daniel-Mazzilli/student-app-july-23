import { useState, useEffect } from "react";
import "./SearchBar.scss";

export default function SearchBar({ setStudents, students, allStudents }) {
  const [searchBarInput, setSearchBarInput] = useState("");

  useEffect(() => {
    setStudents(allStudents);

    if (searchBarInput !== "") {
      setStudents(
        allStudents.filter(
          ({ firstName, lastName }) =>
            firstName.toLowerCase().includes(searchBarInput.toLowerCase()) ||
            lastName.toLowerCase().includes(searchBarInput.toLowerCase())
        )
      );
    }
  }, [searchBarInput]);

  const changeInput = (event) => {
    setSearchBarInput(event.target.value);
  };

  return (
    <div className="searchBar">
      <input
        type="text"
        placeholder="Search by name"
        value={searchBarInput}
        onChange={changeInput}
      />
    </div>
  );
}
