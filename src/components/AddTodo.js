import React, { useState } from "react";

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
    <div>
      <input type="text" onChange={handleChange} value={value} />
      <button onClick={handleClick}>추가</button>
    </div>
  );
};

export default AddTodo;