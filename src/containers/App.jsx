import React, { useState } from "react";

import AddTodo from "/components/AddTodo";
import TodoListContainer from "/containers/TodoListContainer";
import DeleteAllTodo from "../components/DeleteAllTodo/DeleteAllTodo";

const App = () => {
  return (
    <div>
      <AddTodo />
      <TodoListContainer />
      <DeleteAllTodo />
    </div>
  )
};

export default App;