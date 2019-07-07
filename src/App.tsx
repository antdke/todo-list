import React from "react";
import TodoForm from "./components/TodoForm";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <TodoForm />
      </header>
    </div>
  );
};

export default App;
