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
    padding: "50px"
  }
});

const TodoItem = ({ todo, deleteTodo, classes }: any) => {
  return (
    <div className={classes.todoItem}>
      <button onClick={() => deleteTodo(todo)}> X </button>
      {" " + todo}
    </div>
  );
};

export default injectSheet(styles)(TodoItem);
