import Task from "./Task";
import ToDoForm from "./ToDoForm";
import { useState } from "react";

export default function ToDo() {
  const [toDos, setToDos] = useState([]);

  function addToDo(tasks) {
    const updatedToDo = [...toDos, tasks];

    setToDos(updatedToDo);
  }

  function removeToDo(list) {
    const updatedTodo = toDos.filter(function (tasks) {
      return tasks.id !== list.id;
    });

    setToDos(updatedTodo);
  }

  function toggleToDo(list) {
    const updatedToDo = toDos.map(function (toDo) {
      if (toDo.id === list.id) {
        toDo.listed = !toDo.listed;
        return toDo;
      } else {
        return toDo;
      }
    });
    setToDos(updatedToDo);
  }

  return (
    <div>
      <ul>
        {toDos.map((toDo) => (
          <Task
            key={toDo.id}
            toDo={toDo}
            remove={removeToDo}
            toggleToDo={toggleToDo}
          />
        ))}
      </ul>
      <ToDoForm addToDo={addToDo} />
    </div>
  );
}
