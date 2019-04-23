import React from "react";

import classnames from "classnames/bind"
import styles from "./RemoveAllTodo.scss";

const cx = classnames.bind(styles);

const RemoveAllTodo = props => {
  const { TodoActions } = props;
  const handleRemoveAll = () => {
    TodoActions.removeAllTodos();
  };
  return (
    <button onClick={handleRemoveAll}>
      모두 삭제
    </button>
  );
};

export default RemoveAllTodo;