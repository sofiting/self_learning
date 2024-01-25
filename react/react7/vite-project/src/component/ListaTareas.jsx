/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const initialState = [
  {
    id: 1,
    tarea: "Explicar Reducer",
    finalizada: false,
  },
];
const nuevaTarea = {
  id: 1,
  tarea: "Explicar Reducer",
  finalizada: false,
};

const action = {
  type: "[TAREAS] Agregar Tarea",
  payload: nuevaTarea,
};

const tareaReducer = (state = initialState, action = {}) => {
  if (action.type === "[TAREAS] Agregar Tarea") {
    return [...state, action.payload];
  }
  return state; // Don't forget to return the state in case the action type is not matched.
};

console.log(tareaReducer(initialState, action));

export const ListaTareas = () => {
  return <div>ListaTareas</div>;
};
