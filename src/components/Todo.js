import React, { useContext } from "react";

import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import { todosContext } from "../contexts/TodoContext";
import { AuthContext } from "../contexts/AuthContext";

const Todo = () => {
  const { todos } = useContext(todosContext);

  const { isAuth } = useContext(AuthContext);
  return (
    <>
      <TodoForm />
      <div className="todo-list">
        {isAuth ? (
          <ul>
            {todos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </ul>
        ) : (
          <p style={{ textAlign: "center" }}>Vui lòng đăng nhập</p>
        )}
      </div>
    </>
  );
};

export default Todo;
