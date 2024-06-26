import React, { FormEvent, useState } from "react";
import { TodoListItem } from "./todo.types";
import { getLocalStorageItem, setLocalStorageItem } from "./utils";
import "./styles.css";

function TodoForm() {
  const [task, setTask] = useState("");
  const [error, setError] = useState(false);

  const handleSubmitTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!task) {
      setError(true);
    } else {
      const newTodo: TodoListItem = { id: Date.now(), task, status: false };
      const todos = getLocalStorageItem<TodoListItem[]>("todoList");
      setLocalStorageItem("todoList", [...todos, newTodo]);
      setTask("");
      setError(false);
      window.dispatchEvent(new Event("storage"));
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmitTodo}>
        <div>
          <input
            type="text"
            name="task"
            placeholder="Add a new task*"
            value={task}
            className="inputText"
            onChange={(e) => setTask(e.target.value)}
          />
          {error && <p className="errorMessage">Please enter a task name</p>}
        </div>
        <div>
          <input type="submit" value="Submit" className="submitButton" />
        </div>
      </form>
    </div>
  );
}

export default TodoForm;
