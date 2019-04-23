import React from "react";

import classnames from "classnames/bind"
import styles from "./TodoList.scss";

const cx = classnames.bind(styles);

import TodoItem from "/components/TodoItem";

const TodoList = props => {
  const { todos } = props;
  const todosElement = todos.map((todo, i) => <TodoItem key={i} todo={todo} />);
  return (
    <ul>
      {todosElement}
    </ul>
  );
};

export default TodoList;