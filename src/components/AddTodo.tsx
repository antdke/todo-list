/**
 * This component possesses an input object that
 * allows the user to input a todo task and submit it
 * as a string prop to a TodoItems component which then maps
 * those items into a list.
 */

import React, { FormEvent } from "react";
import TodoItems from "./TodoItems";
//import TodoItems from "./TodoItems";

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

  handleChange = (event: any) => {
    this.setState({ newTodo: event.target.value });
  };

  handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const newTodos = [this.state.newTodo, ...this.state.todos];
    this.setState({ todos: newTodos, newTodo: "" });
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
            //value={todo}
          />
          <button type="submit" style={{ display: "none" }}>
            Add Task
          </button>
        </form>
        {this.state.todos.map(todo => (
          <div>
            <button> X </button>
            {" " + todo}
          </div>
        ))}
      </div>
    );
  }
}

export default AddTodo;
