import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function FormAction() {
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;

  const [record, setRecord] = useState({
    username: "",
    emailid: "",
    mobileNumber: "",
    age: 0,
  });

  const { username, mobileNumber, emailid, age } = record;

  const handleChange = (e) => {
    setRecord({ ...record, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(record);
    if (username !== "" && mobileNumber !== "" && age !== 0 && emailid !== "") {
      if (id) {
        fetch(
          "https://62398c5863fdd477ac146911.mockapi.io/api/users/users/" + id,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(record),
          }
        )
          .then((value) => value.json())
          .then((response) => navigate("/"))
          .catch((err) => alert(err));
      } else {
        fetch("https://62398c5863fdd477ac146911.mockapi.io/api/users/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(record),
        })
          .then((value) => value.json())
          .then((response) => navigate("/"))
          .catch((err) => alert(err));
      }
    } else {
      alert("Enter all fields");
    }
  };

  useEffect(() => {
    if (id)
      fetch("https://62398c5863fdd477ac146911.mockapi.io/api/users/users/" + id)
        .then((data) => data.json())
        .then((response) => setRecord(response));
  }, [id]);
  return (
    <div>
      <h1>{id ? "Update" : "Create"} Record</h1>
      <input
        type="text"
        name="username"
        value={username}
        placeholder="Username"
        onChange={handleChange}
      />
      <input
        type="text"
        name="emailid"
        placeholder="Email Id"
        value={emailid}
        onChange={handleChange}
      />
      <input
        type="text"
        name="mobileNumber"
        value={mobileNumber}
        placeholder="Mobile Number"
        onChange={handleChange}
      />
      <input
        type="number"
        name="age"
        value={age}
        placeholder="Age"
        onChange={handleChange}
      />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}
