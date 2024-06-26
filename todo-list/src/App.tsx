import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import TodoList from "./components/TodoList";

const App = () => (
  <div className="container">
    <div>Name: todo-list</div>
    <TodoList />
  </div>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
