import React, { useState } from "react";

import AddTodo from "/components/AddTodo";
import TodoList from "/components/TodoList";
import DeleteAllTodo from "../components/DeleteAllTodo/DeleteAllTodo";

const App = () => {
  const [todos, setTodos] = useState([
    {
      title: "hello",
      completed: false
    },
    {
      title: "world",
      completed: true
    }
  ]);

  return (
    <div>
      <AddTodo />
      <TodoList todos={todos} />
      <DeleteAllTodo />
    </div>
  )
};

export default App;