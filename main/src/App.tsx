import React from "react";
import ReactDOM from "react-dom/client";
import Todo from "./components/Todo";
import "./index.css";

const App = () => (
  <div className="container">
    <h1>Todo List</h1>
    <Todo />
  </div>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
