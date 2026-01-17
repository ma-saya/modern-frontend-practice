import { useState } from "react";

export default function App() {
  const [isOn, setIsOn] = useState<boolean>(false);

  const toggle = () => setIsOn(!isOn);

  return (
    <div
      style={{
        padding: "50px",
        textAlign: "center",
        backgroundColor: isOn ? "#ffffe9" : "#f5f5f5",
        height: "100vh",
      }}
    >
      <h1>Toggle App</h1>
      <button
        onClick={toggle}
        style={{
          padding: "10px 20px",
          fontSize: "20px",
          backgroundColor: isOn ? "#ffeb3b" : "#9e9e9e",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        {isOn ? "OFF" : "ON"}
      </button>

      {isOn && (
        <p style={{ marginTop: "20px", color: "orange" }}>
          電気がついています！
        </p>
      )}
    </div>
  );
}
