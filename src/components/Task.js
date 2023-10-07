export default function ToDoList(props) {
  const toDo = props.toDo;

  function handleDelete() {
    props.remove(toDo);
  }

  function handleStatusChange() {
    props.toggleToDo(toDo);
  }
  return (
    <li className="todo">
      <div className="todo-details">
        <p>
          <span>
            <input
              type="checkbox"
              onChange={handleStatusChange}
              value={toDo.listed}
            />
            {toDo.listed === true ? <del>{toDo.title}</del> : toDo.title}
          </span>
        </p>
      </div>
      <div>
        <button className="btn" onClick={handleDelete}>
          Remove
        </button>
      </div>
    </li>
  );
}
