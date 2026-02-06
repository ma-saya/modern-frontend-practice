import { useState, useEffect } from "react";

export const DateDIsplay = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();

  const days = ["日", "月", "火", "水", "木", "金", "土"];
  const dayName = days[now.getDay()];

  const hours = now.getHours().toString().padStart(2, "0");
  const min = now.getMinutes().toString().padStart(2, "0");
  const sec = now.getSeconds().toString().padStart(2, "0");

  return (
    <div style={containerStyle}>
      <h2 style={{ margin: 0, fontSize: "20px", color: "#666" }}>Today</h2>

      <div style={dateStyle}>
        {year}年 {month}月 {date}日<span style={dayStyle}>({dayName})</span>
      </div>

      <div style={timeStyle}>
        {hours}:{min}:{sec}
      </div>
    </div>
  );
};

const containerStyle = {
  maxWidth: "400px",
  margin: "50px auto",
  padding: "30px",
  backgroundColor: "white",
  borderRadius: "15px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
  textAlign: "center" as const,
  fontFamily: "monospace",
};

const dateStyle = {
  fontSize: "24px",
  fontWeight: "bold",
  margin: "10px 0",
  color: "#333",
};

const dayStyle = {
  color: "#007bff",
};

const timeStyle = {
  fontSize: "64px",
  fontWeight: "bold",
  color: "#333",
  letterSpacing: "4px",
  lineHeight: 1,
};
