import { combineReducers } from "redux";
import ToDoReduser from "./ToDo/ToDoReduser";

const rootReduser = combineReducers({ toDo: ToDoReduser });

export default rootReduser;
