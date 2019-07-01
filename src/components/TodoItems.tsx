/**
 * This components takes in a string prop from AddTodo.
 * The prop gets typechecked then its mapped out into
 * a list with a checkbox.
 */

import React from "react";

type TodoProps = {
  task: string;
};

const TodoItems: React.FC<TodoProps> = ({ task }) => {
  return (
    <div>
      <h1>TodoItems</h1>
    </div>
  );
};

export default TodoItems;
