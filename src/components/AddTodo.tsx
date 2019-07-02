/**
 * This component possesses an input object that
 * allows the user to input a todo task and submit it
 * as a string prop to a TodoItems component which then maps
 * those items into a list.
 */

import React, { useState } from "react";
import TodoItems from "./TodoItems";
//import TodoItems from "./TodoItems";

const AddTodo = () => {
  const [todo, setTodo] = useState("" as any);

  function handleSubmit(todoValue: string) {
    setTodo([...todo, todoValue]);
  }

  return (
    <div>
      <h1>AddTodo</h1>
      <form
        onSubmit={event => {
          event.preventDefault();
          handleSubmit(todo);
        }}
      >
        <input
          type="text"
          placeholder="Add Task..."
          onChange={event => setTodo(event.target.value)}
          //value={todo}
        />
        <button type="submit" style={{ display: "none" }}>
          Add Task
        </button>
      </form>
      <h3>{todo}</h3>
      <ul>{TodoItems}</ul>
    </div>
  );
};

export default AddTodo;
