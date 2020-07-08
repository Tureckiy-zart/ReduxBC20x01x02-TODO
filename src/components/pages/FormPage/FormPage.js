import React, { Component } from "react";
import { connect } from "react-redux";
import ToDoActions from "../../radux/ToDo/ToDoActions";

class FormPage extends Component {
  state = {};
  handlrSubmit = (e) => {
    e.preventDefault();
    const { addTodo } = this.props;
    addTodo(this.state.value);
  };
  handlrChange = ({ target: { value } }) => {
    this.setState({ value });
  };
  render() {
    return (
      <form onSubmit={this.handlrSubmit}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handlrChange}
        />
        <button type="submit">OK</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addTodo: (text) => dispatch(ToDoActions.addItem(text)),
});

export default connect(null, mapDispatchToProps)(FormPage);
