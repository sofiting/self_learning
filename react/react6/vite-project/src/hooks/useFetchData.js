/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from "react";
import { useEffect, useState } from "react";
import { fetchData } from "../helper/fetchData";

export const useFetchData = (endPoint) => {
  const [data, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //useEffect no puede ser async, pero si hacer
  //una funcion fuera y la puede llamar dentro
  useEffect(() => {
    fetchData(endPoint).then((res) => {
      setUsers(res.data);
      setIsLoading(res.isLoading);
    });
  }, [endPoint]);

  return { data, isLoading };
};
