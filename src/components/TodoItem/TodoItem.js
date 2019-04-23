import React from "react";

import classnames from "classnames/bind"
import styles from "./TodoItem.scss";

const cx = classnames.bind(styles);

const TodoItem = props => {
  const todo = props.todo.toJS();
  return (
    <li>
      {todo.title}
      <span>&times;</span>
    </li>
  );
};

export default TodoItem;