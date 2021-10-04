import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { todosContext } from "../contexts/TodoContext";
import { DELETE_TODOS } from "../reducers/types";

const TodoItem = ({ todo }) => {
  const { dispatch } = useContext(todosContext);
  const { theme } = useContext(ThemeContext);
  const { isLightTheme, light, dark } = theme;
  const style = isLightTheme ? light : dark;
  return (
    <li
      style={style}
      onClick={() => {
        dispatch({ type: DELETE_TODOS, payload: { id: todo.id } });
      }}
    >
      {todo.title}
    </li>
  );
};
export default TodoItem;
