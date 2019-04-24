import React from "react";

import TodoItemContainer from "/containers/TodoItemContainer";

const TodoList = props => {
  const { todos } = props;
  const todosElement = todos.map(todo => <TodoItemContainer key={todo.get("id")} todo={todo} />);
  return (
    <ul>
      {todosElement}
    </ul>
  );
};

export default TodoList;