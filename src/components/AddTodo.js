import React, { useState } from "react";

import styled from "styled-components";
import style from "/assets/styles";

const StyledContainer = {
  div: styled.div`
    display: flex;
    padding: 0.8rem;
    border-bottom: 1px solid ${style.color.main}
  `,
  input: styled.input`
    flex: 1;
    border: 0;
    background-color: ${style.color.white};
    &:focus {
      outline: 0;
    }
  `,
  button: styled.button`
    margin-left: 0.6rem;
    padding: 0.3rem 0.5rem;

    border: 0;
    border-radius: 0.3rem;
    background-color: ${style.color.main};
    color: ${style.color.white};
    transition: background-color 0.4s;

    &:hover {
      background-color: ${style.color.mainDark};
      cursor: pointer;
    }
  `
};

const AddTodo = props => {
  const { className } = props;
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
    <StyledContainer.div className={className}>
      <StyledContainer.input type="text" onChange={handleChange} value={value} />
      <StyledContainer.button onClick={handleClick}>추가</StyledContainer.button>
    </StyledContainer.div>
  );
};

export default AddTodo;