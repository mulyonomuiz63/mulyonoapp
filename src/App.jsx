import React from "react";
import "./App.css";
import Navbar from "./containers/Navbar";
import TodoList from "./containers/TodoList";
function App() {
  return (
    <div className="">
      <Navbar />
      <TodoList />
    </div>
  );
}

export default App;
