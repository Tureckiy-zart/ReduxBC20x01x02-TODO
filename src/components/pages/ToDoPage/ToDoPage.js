import React from "react";
import { connect } from "react-redux";
import ToDoActions from "../../radux/ToDo/ToDoActions";

const ToDoPage = ({ listTodo, deleteToDO }) => {
  // console.log("props", props);
  return (
    <main>
      <h2>ToDoPage</h2>
      <ul>
        {listTodo.map((item) => (
          // console.log('item', item)
          <li key={item.id}>
            <h3>{item.text}</h3>
            <button type="button" onClick={() => deleteToDO(item.id)}>
              Delete ToDo
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
};
const mapStateToProps = (state) => ({ listTodo: state.toDo.todo });
const mapDispatchToProps = (dispatch) => ({
  deleteToDO: (id) => dispatch(ToDoActions.deleteToDo(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ToDoPage);
