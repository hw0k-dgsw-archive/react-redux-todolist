import React, { useState } from "react";

import classnames from "classnames/bind"
import styles from "./AddTodo.scss";

const cx = classnames.bind(styles);

const AddTodo = props => {
  const [value, setValue] = useState("");

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    if (value.trim() === "") {
      alert("값을 입력해주세요.");
      return;
    }
    props.TodoActions.addTodo(value);
    setValue("");
  };

  return (
    <React.Fragment>
      <input type="text" onChange={handleChange} value={value} />
      <button onClick={handleClick}>추가</button>
    </React.Fragment>
  );
};

export default AddTodo;