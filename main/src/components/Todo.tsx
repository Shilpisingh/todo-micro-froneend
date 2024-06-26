import React from "react";
const TodoList = React.lazy(() => import("todo_list/TodoList"));
const TodoForm = React.lazy(() => import("todo_form/TodoForm"));

function Todo() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <TodoForm />
      <TodoList />
    </React.Suspense>
  );
}

export default Todo;
