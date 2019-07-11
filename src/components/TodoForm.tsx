/**
 * This component possesses an input object that
 * allows the user to input a todo task and submit it
 * as a string prop to a TodoItems component which then maps
 * those items into a list.
 */

import React, { FormEvent } from "react";
import TodoItem from "./TodoItem";
import injectSheet from "react-jss";

//styles
const styles = (theme: any) => ({
  input: {
    width: "60%",
    height: "56px",
    borderRadius: "4px",
    fontSize: "16px",
    outline: "none",
    border: "none",
    paddingLeft: "15px",
    background: theme.inputBarColor,
    color: theme.textColor
  },
  taskCounter: {
    color: "red"
  }
});

type TodoFormState = {
  newTodo: string;
  todos: string[];
  taskCounter: number;
};

type TodoFormProps = {
  classes: any;
  theme: any;
};

class TodoForm extends React.Component<TodoFormProps, TodoFormState> {
  constructor(props: any) {
    super(props);

    this.state = {
      todos: [
        "Learn React",
        "Learn Ruby",
        "Change LinkedIn Bio to 'Full Stack' "
      ],
      newTodo: "",
      taskCounter: 0
    };
  }

  // TODO turn the counter red when user reaches 10/10 tasks

  // deletes todo items
  deleteTodo = (deletedTodo: string) => {
    const newTodos = this.state.todos.filter(todo => todo !== deletedTodo);
    this.setState({ todos: newTodos });
    this.setState({ taskCounter: this.state.taskCounter + 1 });
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
    const { classes, theme } = this.props;
    return (
      <div>
        <h1>TodoForm</h1>
        <h3 className={classes.taskCounter}>
          Tasks Done:{" " + this.state.taskCounter}/10
        </h3>
        <form onSubmit={this.handleSubmit}>
          <input
            className={classes.input}
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
          <TodoItem todo={todo} deleteTodo={this.deleteTodo} theme={theme} />
        ))}
      </div>
    );
  }
}

export default injectSheet(styles)(TodoForm);
