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
    width: "250px",
    display: "flex",
    margin: "0 10px",
    borderRadius: "6px",
    height: "20px",
    whiteSpace: "nowrap",
    //overflow: "hidden",
    backgroundColor: theme.todoItemColor
  }
});

const TodoItem = ({ todo, deleteTodo, classes }: any) => {
  return (
    <div
      style={{
        justifyContent: "center",
        display: "flex",
        flexFlow: "row wrap",
        margin: "20px auto"
      }}
    >
      <section className={classes.todoItem}>{" " + todo}</section>
      <button onClick={() => deleteTodo(todo)}> X </button>
    </div>
  );
};

export default injectSheet(styles)(TodoItem);
