/**
 * This component possesses an input object that
 * allows the user to input a todo task and submit it
 * as a string prop to a TodoItems component which then maps
 * those items into a list.
 */

import React, { FormEvent } from "react";

type MyState = {
  newTodo: string;
  todos: string[];
};

class AddTodo extends React.Component<{}, MyState> {
  constructor(props: any) {
    super(props);

    this.state = {
      todos: [],
      newTodo: ""
    };
  }

  // deletes todo items
  deleteTodo = (deletedTodo: string) => {
    const newTodos = this.state.todos.filter(todo => todo !== deletedTodo);
    this.setState({ todos: newTodos });
  };

  handleChange = (event: any) => {
    this.setState({ newTodo: event.target.value });
  };

  handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    var newTodos = [this.state.newTodo];
    if (this.state.newTodo !== "") {
      newTodos = [this.state.newTodo, ...this.state.todos];
      this.setState({ todos: newTodos, newTodo: "" });
    }
    newTodos = [];
  };

  render() {
    return (
      <div>
        <h1>AddTodo</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Add Task..."
            onChange={this.handleChange}
            value={this.state.newTodo}
          />
          <button type="submit" style={{ display: "none" }}>
            Add Task
          </button>
        </form>
        {this.state.todos.map(todo => (
          <div>
            <button onClick={() => this.deleteTodo(todo)}> X </button>
            {" " + todo}
          </div>
        ))}
      </div>
    );
  }
}

export default AddTodo;
