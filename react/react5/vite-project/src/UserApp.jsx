/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { UserList } from "./component/userList";

export const UserApp = () => {
  const [endPoint, setEndPoint] = useState("users");

  const handleFetch = () => {
    setEndPoint("comments");
  };
  /*
  useEffect(() => {
    fetchUser();
  }, []);
  */

  return (
    <>
      <h1>Lista de Usuarios:</h1>
      <UserList endPoint={endPoint}></UserList>
      <button onClick={handleFetch}>Get data</button>
    </>
  );
};
