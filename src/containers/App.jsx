import React from "react";

import AddTodoContainer from "/containers/AddTodoContainer";
import TodoListContainer from "/containers/TodoListContainer";
import RemoveAllTodoContainer from "/containers/RemoveAllTodoContainer";

const App = () => {
  return (
    <div>
      <AddTodoContainer />
      <TodoListContainer />
      <RemoveAllTodoContainer />
    </div>
  )
};

export default App;