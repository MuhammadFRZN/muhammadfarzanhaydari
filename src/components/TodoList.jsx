import { useState } from "react";
import Form from "./Form";
import Todo from "./Todo";

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  }

  function updateTodo(todoId, newValue) {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  }

  function removeTodo(id) {
    const removeArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removeArr);
  }

  function clearTodos() {
    setTodos([]);
  }

  return (
    <div>
      <Form onSubmit={addTodo} />
      <Todo todos={todos} removeTodo={removeTodo} updateTodo={updateTodo} />
      <button className="clear--btn" onClick={clearTodos}>
        Clear items
      </button>
    </div>
  );
}
