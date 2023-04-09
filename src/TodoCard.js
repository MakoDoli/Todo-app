import "./TodoCard.css";
import { TodoItem } from "./TodoItem";
import { Header } from "./header";
import plus from "./images/plus.png";
import { useState } from "react";
import empty from "./images/emptycircle.png";
import checked from "./images/akar-icons_circle-1.png";

export function TodoCard() {
  const [taskList, setTaskList] = useState([]);
  const [newInput, setNewInput] = useState(null);
  const [placeholder, setPlaceholder] = useState("Note");

  function showInput() {
    if (newInput) {
      setTaskList([{ task: newInput, active: false }, ...taskList]);
      setPlaceholder("Note");
    } else {
      setPlaceholder("Enter your note here");
    }
    setNewInput("");
  }

  return (
    <div className="todo-card">
      <Header />
      <div className="input-box">
        <input
          id="input"
          placeholder={placeholder}
          value={newInput}
          onChange={(e) => setNewInput(e.target.value)}
        ></input>
        <button onClick={showInput}>
          <img src={plus} alt="add"></img>
        </button>
      </div>
      {taskList
        ? taskList.map((elem, index) => (
            <TodoItem
              key={index}
              content={elem.task}
              src={elem.active ? checked : empty}
              handler={() => {
                const updatedTaskList = [...taskList];
                updatedTaskList[index].active = !elem.active;
                setTaskList(updatedTaskList);
              }}
              handleRemove={() => {
                const updatedTaskList = [...taskList];
                updatedTaskList.splice(index, 1);

                setTaskList(updatedTaskList);
              }}
            />
          ))
        : null}
    </div>
  );
}
