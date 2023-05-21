import bin from "./images/Vector.png";
export function TodoItem(props) {
  return (
    <div className="todo-item">
      <div>
        <h2>{props.content}</h2>
        <p>{props.time}</p>
      </div>
      <div>
        <img
          className="checked"
          src={props.src}
          alt="check"
          onClick={props.handler}
        ></img>
        <img
          className="bin"
          src={bin}
          alt="delete"
          onClick={props.handleRemove}
        ></img>
      </div>
    </div>
  );
}
