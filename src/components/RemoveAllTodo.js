import React from "react";

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