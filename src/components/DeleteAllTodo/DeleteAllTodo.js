import React from "react";

import classnames from "classnames/bind"
import styles from "./DeleteAllTodo.scss";

const cx = classnames.bind(styles);

const DeleteAllTodo = props => {
  return (
    <button>
      모두 삭제
    </button>
  );
};

export default DeleteAllTodo;