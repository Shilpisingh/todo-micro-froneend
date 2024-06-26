import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import TodoList from "../components/TodoList";
import { TodoListItem } from "../components/todo.types";

describe("TodoList Component", () => {
  const initialTodos: TodoListItem[] = [
    { id: 1, task: "Test Task 1", status: false },
    { id: 2, task: "Test Task 2", status: true },
  ];

  beforeEach(() => {
    localStorage.setItem("todoList", JSON.stringify(initialTodos));
  });

  afterEach(() => {
    localStorage.clear();
  });

  test("should renders todos list from localStorage", () => {
    render(<TodoList />);
    expect(screen.getByText("Test Task 1")).toBeInTheDocument();
    expect(screen.getByText("Test Task 2")).toBeInTheDocument();
  });

  test("should handles toggling the completion status of Todo items", () => {
    render(<TodoList />);

    const checkbox = screen.getAllByRole("checkbox")[0];
    expect(checkbox).not.toBeChecked();

    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();

    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });
});
