import React from "react";

import AddTodoContainer from "/containers/AddTodoContainer";
import TodoListContainer from "/containers/TodoListContainer";
import DeleteAllTodo from "../components/DeleteAllTodo/DeleteAllTodo";

const App = () => {
  return (
    <div>
      <AddTodoContainer />
      <TodoListContainer />
      <DeleteAllTodo />
    </div>
  )
};

export default App;