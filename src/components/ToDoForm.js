import { useState } from "react";
import { nanoid } from "nanoid";

export default function ToDoForm(props) {
  const [title, setTitle] = useState("");

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newToDo = {
      title: title,
      listed: false,
      id: nanoid()
    };
    props.addToDo(newToDo);
    setTitle("");
  }
  return (
    <div className="edit">
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            onChange={handleTitleChange}
            value={title}
            placeholder={"Add new task..."}
          />
          <button type="submit">Add</button>
        </label>
      </form>
    </div>
  );
}
