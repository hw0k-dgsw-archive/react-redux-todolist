import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as todoActions from "/modules/todo";

import TodoItem from "/components/TodoItem";

export default connect(
  null,
  dispatch => ({
    TodoActions: bindActionCreators(todoActions, dispatch)
  })
)(TodoItem);