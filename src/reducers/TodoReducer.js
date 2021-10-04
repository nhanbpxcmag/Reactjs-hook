import { ADD_TODOS, DELETE_TODOS, GET_TODOS, SET_TODOS } from "./types";
export const todoReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_TODOS:
      console.log("GET_TODOS");
      const todos = localStorage.getItem("todos");
      if (todos) state = JSON.parse(todos);
      return state;
    case SET_TODOS:
      console.log("SET_TODOS");
      localStorage.setItem("todos", JSON.stringify(payload.todos));
      return state;
    case ADD_TODOS:
      console.log("ADD_TODOS");
      return [...state, payload.todo];
    case DELETE_TODOS:
      console.log("DELETE_TODOS", payload.id);
      return state.filter((todo) => todo.id !== payload.id);
    default:
      return state;
  }
};
