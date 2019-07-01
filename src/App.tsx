import React from "react";
import AddTodo from "./components/AddTodo";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <AddTodo />
      </header>
    </div>
  );
};

export default App;
