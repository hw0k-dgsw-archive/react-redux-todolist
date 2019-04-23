import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as todoActions from "/modules/todo";

import RemoveAllTodo from "/components/RemoveAllTodo";

export default connect(
  null,
  dispatch => ({
    TodoActions: bindActionCreators(todoActions, dispatch)
  })
)(RemoveAllTodo);