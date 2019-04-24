import React from "react";

import styled from "styled-components";
import style from "/assets/styles";

import AddTodoContainer from "/containers/AddTodoContainer";
import TodoListContainer from "/containers/TodoListContainer";
import RemoveAllTodoContainer from "/containers/RemoveAllTodoContainer";

const mainComponent = component => {
  return styled(component)`
    margin-top: 4rem;
    width: 20rem;
  `;
};

const StyledContainer = {
  div: styled.div`
    width: 100vw;
    left: 0;
    display: flex;
    align-items: center;
    flex-flow: column wrap;
    padding: 16rem 0 20rem;
    background-color: ${style.color.white}
  `,
  AddTodoContainer: mainComponent(AddTodoContainer),
  TodoListContainer: mainComponent(TodoListContainer),
  RemoveAllTodoContainer: mainComponent(RemoveAllTodoContainer)
}

const App = () => {
  return (
    <StyledContainer.div>
      <StyledContainer.AddTodoContainer />
      <StyledContainer.TodoListContainer />
      <StyledContainer.RemoveAllTodoContainer />
    </StyledContainer.div>
  )
};

export default App;