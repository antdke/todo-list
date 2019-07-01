/**
 * This component possesses an input object that
 * allows the user to input a todo task and submit it
 * as a string prop to a TodoItems component which then maps
 * those items into a list.
 */

import React from "react";

const AddTodo = () => {
  return (
    <div>
      <h1>AddTodo</h1>
      <form>
        <input />
        <button style={{ display: "none" }}>Add Task</button>
      </form>
    </div>
  );
};

export default AddTodo;
