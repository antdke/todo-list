import React from "react";
import TodoForm from "./components/TodoForm";
import "./App.css";
import { ThemeProvider } from "react-jss";

// color of background color
const colorPrimary = "#86ddfa";
document.body.style.backgroundColor = colorPrimary;

const theme = {
  inputBarColor: "#bfedfc",
  textColor: "#black",
  todoItemColor: "#86a3fa",
  todoItemImportantColor: "#fa86a3"
};

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <TodoForm />
      </div>
    </ThemeProvider>
  );
};

export default App;
