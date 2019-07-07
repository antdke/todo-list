import React from "react";
import TodoForm from "./components/TodoForm";
import "./App.css";
import injectSheet, { ThemeProvider } from "react-jss";

//const StyledComp = injectSheet(styles)(TodoForm)

const theme = {
  colorPrimary: "#d1f2fd",
  colorSecondary: "#d5f0f9"
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
