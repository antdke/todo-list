/**
 * This component possesses an input object that
 * allows the user to input a todo task and submit it
 * as a string prop to a TodoItems component which then maps
 * those items into a list.
 */

import React, { useState } from "react";
import TodoItems from "./TodoItems";

const AddTodo = () => {
  const [task, setTask] = useState("");

  return (
    <div>
      <h1>AddTodo</h1>
      <form>
        <input
          type="text"
          placeholder="Add Task..."
          onChange={event => setTask(event.target.value)}
        />
        <button style={{ display: "none" }} onClick={() => setTask(task)}>
          Add Task
        </button>
      </form>
      <h3>{task}</h3>
      <TodoItems task={task} />
    </div>
  );
};

export default AddTodo;
