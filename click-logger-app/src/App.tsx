import { useState } from "react";

export default function App() {
  const [clicks, setClicks] = useState<number>(0);

  const handleClick = () => {
    setClicks(prev => prev + 1);
  };
  const handleReset = () => {
    setClicks(0);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Click Logger App</h1>
      <p style={{ color: clicks >= 10 ? "pink" : "blue" }}>
        クリック回数: {clicks}
      </p>
      <button onClick={handleClick} style={{ marginRight: "10px" }}>
        クリックしてね
      </button>
      <button onClick={handleReset}>リセット</button>
    </div>
  );
}
