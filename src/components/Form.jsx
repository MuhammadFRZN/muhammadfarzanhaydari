import { useEffect, useRef, useState } from "react";

export default function Form(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef("");

  useEffect(() => {
    inputRef.current.focus();
  });

  function handleSubmit(event) {
    event.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  }

  function handleChange(event) {
    setInput(event.target.value);
  }

  return (
    <form className="todo--form" onSubmit={handleSubmit}>
      <div className="form--control">
        {props.edit ? (
          <>
            <input
              type="text"
              placeholder="example: study for exam"
              name="text"
              value={input}
              onChange={handleChange}
              ref={inputRef}
            />
            <button type="submit" className="submit--btn">
              Add
            </button>
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="example: study for exam"
              name="text"
              value={input}
              onChange={handleChange}
              ref={inputRef}
            />
            <button type="submit" className="submit--btn">
              Add
            </button>
          </>
        )}
      </div>
    </form>
  );
}
