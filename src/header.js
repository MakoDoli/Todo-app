import flowers from "./images/Rectangle2.png";

export function Header() {
  const date = new Date();
  const day = date.getDate();

  const time = function getCurrentLocalTimeAmPm() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    let formattedHours = hours % 12;
    formattedHours = formattedHours === 0 ? 12 : formattedHours;
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const amPm = hours < 12 ? "AM" : "PM";
    return `${formattedHours}:${formattedMinutes} ${amPm}`;
  };

  const weekday = date.toLocaleString("default", { weekday: "short" });

  return (
    <header className="header">
      <img src={flowers} alt="flowers"></img>
      <p className="date">
        {weekday} {day}
      </p>
      <p className="time">{time()}</p>
    </header>
  );
}
