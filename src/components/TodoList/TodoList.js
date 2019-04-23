import React from "react";

import classnames from "classnames/bind"
import styles from "./TodoList.scss";

const cx = classnames.bind(styles);

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