/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

export const UserList = ({ endPoint }) => {
  const [data, setUsers] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/${endPoint}`
      ); // Add your API endpoint or URL here
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [endPoint]);

  return (
    <>
      <ul>
        {endPoint == "users"
          ? data.map((item) => <li key={item.id}>{item.name}</li>)
          : data.map((item) => <li key={item.id}>{item.body}</li>)}
      </ul>
    </>
  );
};

/*
 <ul>
        {users.map((user) => (
          <li key={user.id}>
            Name:{user.name} , Email:{user.email}
          </li>
        ))}
      </ul>
*/
