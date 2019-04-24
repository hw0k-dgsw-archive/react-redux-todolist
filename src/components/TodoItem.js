import React from "react";

import styled from "styled-components";
import style from "/assets/styles";

const StyledContainer = {
  div: styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid #f1f3f5;
    &:last-child {
      border-bottom: none;
    }
  `,
  span: styled.span`
    ${props => props.completed && `
    text-decoration: line-through;
    `}
    &:hover {
      cursor: pointer;
    }
  `
};

const TodoItem = props => {
  const { todo, TodoActions } = props;

  const handleToggle = () => {
    TodoActions.toggleTodo(todo.get("id"));
  };

  const handleRemove = () => {
    TodoActions.removeTodo(todo.get("id"));
  };

  return (
    <StyledContainer.div>
      <StyledContainer.span onClick={handleToggle} completed={todo.get("completed") ? true : false}>{todo.get("title")}</StyledContainer.span>
      <StyledContainer.span onClick={handleRemove}>&times;</StyledContainer.span>
    </StyledContainer.div>
  );
};

export default TodoItem;