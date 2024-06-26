import React, { useEffect, useState } from "react";
import { Filter, TodoListItem } from "./todo.types";
import { getLocalStorageItem, setLocalStorageItem } from "./utils";
import "./styles.css";

function TodoList() {
  const [todoList, setTodoList] = useState<TodoListItem[]>(() =>
    getLocalStorageItem<TodoListItem[]>("todoList")
  );
  const [filter, setFilter] = useState<Filter>("all");

  useEffect(() => {
    const syncTodos = () => {
      const savedTodos = getLocalStorageItem<TodoListItem[]>("todoList");
      setTodoList(savedTodos);
    };

    window.addEventListener("storage", syncTodos);
    return () => window.removeEventListener("storage", syncTodos);
  }, []);

  useEffect(() => {
    setLocalStorageItem("todoList", todoList);
  }, [todoList]);

  const handleChange = (checked: boolean, id: number) => {
    const data = [...todoList].map((todo) =>
      todo.id === id ? { ...todo, status: checked } : todo
    );
    setTodoList(data);
  };

  const handleOptionChange = (value: Filter) => {
    setFilter(value);
  };

  const filteredTodos = todoList.filter((todo) => {
    if (filter === "completed") return todo.status;
    if (filter === "active") return !todo.status;
    return true;
  });

  return (
    <>
      <div>
        <select
          className="select"
          onChange={(e) => handleOptionChange(e.target.value as Filter)}
        >
          <option value="">All</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      {filteredTodos.length ? (
        filteredTodos.map((todo) => (
          <div key={todo.id} className="wrapper">
            <div key={todo.id} className="innerWrapper">
              <input
                type="checkbox"
                className="checkbox"
                checked={!!todo.status}
                onChange={(e) => handleChange(e.target.checked, todo.id)}
              />
              <span
                className="label"
                style={{ textDecoration: !!todo.status ? "line-through" : "" }}
              >
                {todo.task}
              </span>
            </div>
          </div>
        ))
      ) : (
        <p>No Task Found</p>
      )}
    </>
  );
}

export default TodoList;
