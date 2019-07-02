/**
 * This components takes in a string prop from AddTodo.
 * The prop gets typechecked then its mapped out into
 * a list with a checkbox.
 */

import React from "react";
import TodoItem from "./TodoItem";

type TodoProps = {
  task: string;
};

const taskList: string[] = [];

const TodoItems: React.FC<TodoProps> = ({ task }) => {
  //const taskList: string[] = [];
  const taskListMapped = taskList.map((task, index) => {
    return <TodoItem task={task} />;
  });
  return (
    <div>
      <ul>{taskListMapped}</ul>
    </div>
  );
};

export default TodoItems;
