import React from "react";

import classnames from "classnames/bind"
import styles from "./TodoItem.scss";

const cx = classnames.bind(styles);

const TodoItem = props => {
  const { todo, TodoActions } = props;

  const handleToggle = () => {
    TodoActions.toggleTodo(todo.get("id"));
  };

  const handleDelete = () => {
    TodoActions.removeTodo(todo.get("id"));
  };

  return (
    <li>
      <span onClick={handleToggle} className={cx({completed: todo.get("completed")})}>{todo.get("title")}</span>
      <span onClick={handleDelete}>&times;</span>
    </li>
  );
};

export default TodoItem;