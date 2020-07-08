import types from "./ToDoTypes";

const addItem = (text) => ({
  type: types.ADD_TODO,
  payload: {
    todo: { id: Date.now, text },
  },
});

export default { addItem };
