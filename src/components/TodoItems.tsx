/**
 * This components takes in a string prop from AddTodo.
 * The prop gets typechecked then its mapped out into
 * a list with a checkbox.
 */

import React from "react";
import TodoItem from "./TodoItem";

// type TodoProps = {
//   task: string;
// };

//const taskList: string[] = [];

const TodoItems = ({ todo }: any) => {
  //const taskList: string[] = [];
  const todoList: any = todo.map((todo: any, index: any) => {
    return <TodoItem todo={todo} />;
  });
  return (
    <div>
      <ul>{todoList}</ul>
    </div>
  );
};

export default TodoItems;
