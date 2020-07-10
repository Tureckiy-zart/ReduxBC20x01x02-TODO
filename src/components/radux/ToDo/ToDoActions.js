import types from "./ToDoTypes";

const addItem = (text) => ({
  type: types.ADD_TODO,
  payload: {
    todo: { id: Date.now(), text },
  },
});
const deleteToDo = (itemDelete) => ({
  type: types.DELETE_TODO,
  payload: {
    todo: { id: itemDelete },
  },
});

export default { addItem, deleteToDo };
