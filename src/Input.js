import plus from "./images/plus.png";
export const userInput = document.querySelector("input");
export function Input() {
  function showInput() {
    console.log(userInput.value);
    userInput.value = "";
  }
  return (
    <div className="input-box">
      <input placeholder="Note"></input>
      <button onClick={() => showInput()}>
        <img src={plus} alt="add"></img>
      </button>
    </div>
  );
}
