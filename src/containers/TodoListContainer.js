import { connect } from "react-redux";

import TodoList from "/components/TodoList";

export default connect(
  state => ({
    todos: state.todo
  }),
  null
)(TodoList);