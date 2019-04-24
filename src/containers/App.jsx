import React from "react";

import AddTodoContainer from "/containers/AddTodoContainer";
import TodoListContainer from "/containers/TodoListContainer";
import RemoveAllTodoContainer from "/containers/RemoveAllTodoContainer";

const App = () => {
  const styleWrapper = {
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw"
  };

  return (
    <div style={styleWrapper}>
      <AddTodoContainer />
      <TodoListContainer />
      <RemoveAllTodoContainer />
    </div>
  )
};

export default App;