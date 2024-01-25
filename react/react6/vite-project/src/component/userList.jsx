/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useFetchData } from "../hooks/useFetchData";

export const UserList = ({ endPoint }) => {
  const { data, isLoading } = useFetchData(endPoint);
  return (
    <>
      <ul>
        {isLoading ? (
          <p>Cargando.....</p>
        ) : endPoint == "users" ? (
          data.map((item) => <li key={item.id}>{item.name}</li>)
        ) : (
          data.map((item) => <li key={item.id}>{item.body}</li>)
        )}
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
