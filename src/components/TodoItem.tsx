/**
 * This components takes in a string prop and
 * deleteTodo function from TodoForm.
 */

import React from "react";
import injectSheet from "react-jss";

// styles
const styles = (theme: any) => ({
  todoItem: {
    textAlign: "center",
    padding: "20px 40px",
    width: "100px",
    display: "flex",
    margin: "0 auto",
    backgroundColor: theme.todoItemColor
  }
});

const TodoItem = ({ todo, deleteTodo, classes }: any) => {
  return (
    <React.Fragment>
      <section className={classes.todoItem}>{" " + todo}</section>
      <button onClick={() => deleteTodo(todo)}> X </button>
    </React.Fragment>
  );
};

export default injectSheet(styles)(TodoItem);
