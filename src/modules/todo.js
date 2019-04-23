import { handleActions, createAction } from "redux-actions";
import { Map, List, getIn, setIn, updateIn } from "immutable";

const ADD_TODO = "todo/addTodo";
const REMOVE_TODO = "todo/removeTodo";
const SET_TODO_STATE = "todo/setTodoState";

export const addTodo = createAction(ADD_TODO);
export const removeTodo = createAction(REMOVE_TODO);
export const setTodoState = createAction(SET_TODO_STATE);

const initialState = Map({
  todos: List([
    Map({
      title: "hello",
      completed: false
    }),
    Map({
      title: "world",
      completed: true
    }),
    // Map({
    //   title: "aaa",
    //   completed: false
    // })
  ])
});

const reducer = handleActions({
  [ADD_TODO]: (state, action) => {
    return state;
  },
  [REMOVE_TODO]: (state, action) => {
    return state;
  },
  [SET_TODO_STATE]: (state, action) => {
    return state;
  }
}, initialState);

export default reducer;