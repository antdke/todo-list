import React from "react";
import TodoForm from "./components/TodoForm";
import "./App.css";
import injectSheet, { ThemeProvider } from "react-jss";

// color of background color
const colorPrimary = "#86ddfa";
document.body.style.backgroundColor = colorPrimary;

const theme = {
  colorSecondary: "#bfedfc",
  textColor: "#black"
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
