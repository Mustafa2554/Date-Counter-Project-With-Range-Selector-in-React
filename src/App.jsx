import { useState } from "react";
import "./App.css";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());

  // Count increase
  const increaseCount = () => {
    setCount((currentCount) => currentCount + 1);

    setDate((currentDate) => {
      const newDate = new Date(currentDate);

      newDate.setDate(newDate.getDate() + step);

      return newDate;
    });
  };

  // Count decrease
  const decreaseCount = () => {
    if (count === 0) {
      return;
    }

    setCount((currentCount) => currentCount - 1);

    setDate((currentDate) => {
      const newDate = new Date(currentDate);

      newDate.setDate(newDate.getDate() - step);

      return newDate;
    });
  };

  // Day name
  const dayName = date.toLocaleDateString("en-US", {
    weekday: "long",
  });

  // Formatted date
  const formattedDate = date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div>
      <h1>Date Counter</h1>

      {/* Step Slider */}
      <div className="rangeContainer">
        <input
          type="range"
          id="range"
          min="1"
          max="7"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />

        <span>Step: {step}</span>
      </div>

      {/* Count */}
      <div>
        <button onClick={decreaseCount}>-</button>

        <span>Count: {count}</span>

        <button onClick={increaseCount}>+</button>
      </div>

      {/* Date */}
      <div>
        <h2>{dayName}</h2>
        <h3>{formattedDate}</h3>
      </div>
    </div>
  );
}

export default App;
