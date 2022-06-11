import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AllRecords() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const getData = () => {
    fetch("https://62398c5863fdd477ac146911.mockapi.io/api/users/users")
      .then((data) => data.json())
      .then((response) => setData(response));
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = (id) => {
    fetch("https://62398c5863fdd477ac146911.mockapi.io/api/users/users/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((value) => value.json())
      .then((response) => {
        console.log("delete completed");
        getData();
      });
  };

  return (
    <div>
      <button onClick={() => navigate("/actionItems")}>Create Record</button>
      {data.map((value, index) => {
        return (
          <ul>
            <li>Name : {value.username}</li>
            <li>Email ID : {value.emailid}</li>
            <li>Mobile Number : {value.mobileNumber}</li>
            <li>Age : {value.age}</li>
            <li>
              <button
                onClick={() => {
                  navigate("/actionItems/" + value.id + "/" + value.username);
                }}
              >
                Edit
              </button>
              <button onClick={() => handleDelete(value.id)}>Delete</button>
            </li>
          </ul>
        );
      })}
    </div>
  );
}
