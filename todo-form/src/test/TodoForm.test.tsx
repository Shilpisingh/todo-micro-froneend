import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import TodoForm from "../components/TodoForm";

describe("Todo Form Component", () => {
  test("Initial load of ToDo form", () => {
    render(<TodoForm />);

    const inputElement = screen.getByPlaceholderText("Add a new task*");
    expect(inputElement).toBeInTheDocument();
    expect((inputElement as HTMLInputElement).value).toBe("");

    const buttonElement = screen.getByText("Submit");
    expect(buttonElement).toBeInTheDocument();
  });

  test("should displays error message on empty input submission", () => {
    const addTodoList = jest.fn();
    render(<TodoForm />);

    const buttonElement = screen.getByText("Submit");
    fireEvent.click(buttonElement);
    expect(addTodoList).not.toHaveBeenCalled();

    const messageElement = screen.getByText("Please enter a task name");
    expect(messageElement).toBeInTheDocument();
  });

  test("should submits the input value", () => {
    render(<TodoForm />);

    const inputElement = screen.getByPlaceholderText("Add a new task*");
    fireEvent.change(inputElement, { target: { value: "New Todo" } });

    const buttonElement = screen.getByText("Submit");
    fireEvent.click(buttonElement);

    expect(inputElement).toHaveValue("");
  });
});
