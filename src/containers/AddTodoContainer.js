import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as todoActions from "/modules/todo";

import AddTodo from "/components/AddTodo";

export default connect(
  null,
  dispatch => ({
    TodoActions: bindActionCreators(todoActions, dispatch)
  })
)(AddTodo);