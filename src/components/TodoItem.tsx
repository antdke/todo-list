/**
 * This components takes in a string prop and
 * deleteTodo function from TodoForm.
 */

import React from "react";

const TodoItem = ({ todo, deleteTodo }: any) => {
  return (
    <div>
      <button onClick={() => deleteTodo(todo)}> X </button>
      {" " + todo}
    </div>
  );
};

export default TodoItem;
