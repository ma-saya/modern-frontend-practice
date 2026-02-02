import { useState, useEffect } from "react";

export default function App() {
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  useEffect(() => {
    let intervalId: any;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "20vh" }}>
      <h1>カウントアップタイマー</h1>
      <div style={{ fontSize: "48px", margin: "20px 0" }}>{time}<span style={{ fontSize: "30px"}}>秒</span></div>
      <div>
        <button onClick={() => setIsRunning(true)} disabled={isRunning} style={{ padding: "10px 20px", fontSize: "18px", marginRight: "10px" }}>
          スタート
        </button>
        <button onClick={() => setIsRunning(false)} disabled={!isRunning} style={{ padding: "10px 20px", fontSize: "18px", marginRight: "10px" }}>
          ストップ
        </button>
        <button onClick={handleReset} style={{ padding: "10px 20px", fontSize: "18px" }}>
          リセット
        </button>
      </div>
    </div>
  )
}
