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
