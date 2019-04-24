import React from "react";

import styled from "styled-components";
import style from "/assets/styles";

const StyledContainer = {
  div: styled.div`
    display: flex;
    justify-content: center;
  `,
  button: styled.button`
    padding: 0.3rem 0.5rem;

    border: 0;
    border-radius: 0.3rem;
    background-color: ${style.color.red};
    color: ${style.color.white};
    transition: background-color 0.4s;

    &:hover {
      background-color: ${style.color.redDark};
      cursor: pointer;
    }
  `
};

const RemoveAllTodo = props => {
  const { TodoActions, className } = props;
  const handleRemoveAll = () => {
    TodoActions.removeAllTodos();
  };
  return (
    <StyledContainer.div className={className}>
      <StyledContainer.button onClick={handleRemoveAll}>
        모두 삭제
      </StyledContainer.button>
    </StyledContainer.div>
  );
};

export default RemoveAllTodo;