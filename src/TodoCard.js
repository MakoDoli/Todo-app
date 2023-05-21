import "./TodoCard.css";
import { TodoItem } from "./TodoItem";
import { Header } from "./header";
import plus from "./images/plus.png";
import { useState, useEffect } from "react";
import empty from "./images/emptycircle.png";
import checked from "./images/akar-icons_circle-1.png";

export function TodoCard() {
  console.log(localStorage);

  const initialList = JSON.parse(localStorage.getItem("taskList"))
    ? JSON.parse(localStorage.getItem("taskList"))
    : [];
  const [taskList, setTaskList] = useState(initialList);
  const [newInput, setNewInput] = useState(null);
  const [placeholder, setPlaceholder] = useState("Note");
  const [lastAdded, setLastAdded] = useState(localStorage.getItem("lastAdded"));
  console.log(initialList);

  const elapsedTime = () => {
    if (lastAdded) {
      const timeDiff = new Date().getTime() - Number(lastAdded);
      console.log(timeDiff);
      const seconds = Math.floor(timeDiff / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);
      if (days > 0) {
        return `${days} days ago`;
      } else if (hours > 0) {
        return `${hours} hours ago`;
      } else if (minutes > 0) {
        return `${minutes} minutes ago`;
      } else {
        return `${seconds} seconds ago`;
      }
    }
    return "";
  };

  function showInput() {
    if (newInput) {
      setTaskList([{ task: newInput, active: false }, ...taskList]);
      setPlaceholder("Note");
    } else {
      setPlaceholder("Enter your note here");
    }
    setNewInput("");

    const currentTime = new Date().getTime();
    setLastAdded(currentTime);
    localStorage.setItem("lastAdded", currentTime.toString());
    localStorage.setItem("taskList", JSON.stringify(taskList));
    console.log(localStorage);
  }

  useEffect(() => {
    localStorage.setItem("lastAdded", lastAdded ? lastAdded.toString() : "");
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [lastAdded, taskList]);

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
              time={elapsedTime()}
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
