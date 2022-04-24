import { useState } from "react";
import Form from "./Form";

export default function Todo({ todos, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  function submitUpdate(value) {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  }

  if (edit.id) {
    return <Form edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div className="todo--container" key={todo.id}>
      <div className="todo--list">
        <div className="todo--item" key={index}>
          <div>{todo.text}</div>
          <div className="btn--container">
            <button
              onClick={() => setEdit({ id: todo.id, value: todo.text })}
              type="button"
              className="edit--btn"
            >
              Edit
            </button>
            <button
              onClick={() => removeTodo(todo.id)}
              type="button"
              className="delete--btn"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  ));
}
