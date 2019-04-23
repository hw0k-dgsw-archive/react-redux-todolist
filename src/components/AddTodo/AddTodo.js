import React, { useState } from "react";

import classnames from "classnames/bind"
import styles from "./AddTodo.scss";

const cx = classnames.bind(styles);

const AddTodo = props => {
  const [value, setValue] = useState("");
  const handleChange = e => {
    setValue(e.target.value);
  };

  return (
    <React.Fragment>
      <input type="text" onChange={handleChange} value={value} />
      <button>추가</button>
    </React.Fragment>
  );
};

export default AddTodo;