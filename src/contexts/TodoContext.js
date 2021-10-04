import React, { createContext, useEffect, useReducer } from "react";
import { todoReducer } from "../reducers/TodoReducer";
import { GET_TODOS, SET_TODOS } from "../reducers/types";

export const todosContext = createContext();

const TodoContextProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  //useEffect
  useEffect(() => {
    dispatch({ type: GET_TODOS, payload: null });
  }, []);

  useEffect(() => {
    dispatch({ type: SET_TODOS, payload: { todos } });
  }, [todos]);

  const todosContextData = {
    todos,
    dispatch,
  };

  return (
    <todosContext.Provider value={todosContextData}>
      {children}
    </todosContext.Provider>
  );
};

export default TodoContextProvider;
