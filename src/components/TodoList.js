import React from "react";

import styled from "styled-components";
import style from "/assets/styles";

import TodoItemContainer from "/containers/TodoItemContainer";

const StyledContainer = {
  div: styled.div`
    background-color: white;
    box-shadow: 0 0 4px #ced4da;
  `,
  NoTodo: styled.div`
    padding: 1rem;
    text-align: center;
  `
};

const TodoList = props => {
  const { todos, className } = props;
  const todosElement = todos.size > 0
    ? todos.map(todo => <TodoItemContainer key={todo.get("id")} todo={todo} />)
    : <StyledContainer.NoTodo>Todo가 없습니다.</StyledContainer.NoTodo>;
  return (
    <StyledContainer.div className={className}>
      {todosElement}
    </StyledContainer.div>
  );
};

export default TodoList;