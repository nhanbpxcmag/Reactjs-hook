import React, { useState, useContext } from "react";
import { TextField, Box, Button } from "@mui/material";
import { todosContext } from "../contexts/TodoContext";
import { ADD_TODOS } from "../reducers/types";
import { v4 as uuidv4 } from "uuid";

const TodoForm = () => {
  const { dispatch } = useContext(todosContext);
  const [title, setTitle] = useState("");
  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const submitForm = (event) => {
    event.preventDefault();
    if (title !== "") {
      dispatch({
        type: ADD_TODOS,
        payload: {
          todo: {
            id: uuidv4(),
            title,
          },
        },
      });
      setTitle("");
    }
  };
  return (
    <Box sx={{ bgcolor: "#e0f7fa" }}>
      <form className="form" onSubmit={submitForm}>
        <TextField
          sx={{ mr: 1, width: "50ch" }}
          label="Công việc"
          size="small"
          onChange={onChangeTitle}
          value={title}
        />
        <Button type="submit" variant="contained">
          Thêm
        </Button>
      </form>
    </Box>
  );
};

export default TodoForm;
