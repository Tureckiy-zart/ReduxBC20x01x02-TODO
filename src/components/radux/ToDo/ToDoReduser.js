import { combineReducers } from "redux";
import types from "./ToDoTypes";

const obj = {
  id: 1,
  text: "To do Zero",
};
const toDoReduser = (state = [obj], actions) => {
  switch (actions.type) {
    case types.ADD_TODO:
      return [...state, actions.payload.todo];

    case types.DELETE_TODO:
      return state.filter((item) => item.id !== actions.payload.todo.id);
    default:
      return state;
  }
};

export default combineReducers({ todo: toDoReduser });
