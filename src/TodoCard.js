import "./TodoCard.css";
import { TodoItem } from "./TodoItem";
import { Header } from "./header";
import plus from "./images/plus.png";
import { useState } from "react";
import empty from "./images/emptycircle.png";
import checked from "./images/akar-icons_circle-1.png";

// let taskList = [];

export function TodoCard() {
  // const [active, setActive] = useState(true);
  let active = true;
  const [taskList, setTaskList] = useState([]);

  function showInput() {
    const userInput = document.getElementById("input");

    setTaskList([...taskList, { task: userInput.value, check: active }]);

    userInput.value = "";
  }

  return (
    <div className="todo-card">
      <Header />
      <div className="input-box">
        <input id="input" placeholder="Note"></input>
        <button onClick={showInput}>
          <img src={plus} alt="add"></img>
        </button>
      </div>
      {taskList
        ? taskList.map((elem, index) => (
            <TodoItem
              key={index}
              content={elem.task}
              src={elem.check ? empty : checked}
              handler={() => {
                const updatedTaskList = [...taskList];
                updatedTaskList[index].check = !elem.check;
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
