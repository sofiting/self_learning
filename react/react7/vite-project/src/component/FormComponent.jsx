/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useForm } from "../hooks/useForm.js";
import { useRef } from "react";

export const FormComponent = () => {
  //useRef -> cuando actualiza web focus se queda en un sitio
  const focusRef = useRef();
  const inicialForm = {
    username: "",
    email: "",
    password: "",
  };

  // Call the useForm hook
  const { formState, onInputChange, resetForm } = useForm(inicialForm);

  const { username, email, password } = formState;

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
    resetForm();
  };

  useEffect(() => {
    focusRef.current.focus();
  }, []);

  return (
    <form onSubmit={onSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputNmae" className="form-label">
          Username
        </label>
        <input
          ref={focusRef}
          type="text"
          className="form-control"
          name="username"
          placeholder="Enter your username"
          value={username}
          onChange={onInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={onInputChange}
        />
        <div id="emailHelp" className="form-text">
          We&apos;ll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          name="password"
          placeholder="Enter your password"
          value={password}
          onChange={onInputChange}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
