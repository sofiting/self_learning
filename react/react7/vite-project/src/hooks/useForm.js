/* eslint-disable no-unused-vars */
import { useState } from "react";

export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);

  const { username, email, password } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
const resetForm = () => {
  setFormState(initialForm);
};
  return {
    formState,
      onInputChange,
    resetForm
  };
};
