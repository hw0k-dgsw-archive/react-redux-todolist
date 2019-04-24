import React from "react";

const TodoItem = props => {
  const { todo, TodoActions } = props;

  const handleToggle = () => {
    TodoActions.toggleTodo(todo.get("id"));
  };

  const handleRemove = () => {
    TodoActions.removeTodo(todo.get("id"));
  };

  return (
    <li>
      <span onClick={handleToggle} className={cx({completed: todo.get("completed")})}>{todo.get("title")}</span>
      <span onClick={handleRemove}>&times;</span>
    </li>
  );
};

export default TodoItem;