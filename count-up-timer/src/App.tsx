import { useState, useEffect } from "react";

const CountUp = () => {
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
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20vh" }}>
      <h1>カウントアップタイマー</h1>
      <div style={{ fontSize: "48px", margin: "20px 0" }}>
        {time}
        <span style={{ fontSize: "30px" }}>秒</span>
      </div>
      <div>
        <button
          onClick={() => setIsRunning(true)}
          disabled={isRunning}
          style={{
            padding: "10px 20px",
            fontSize: "18px",
            marginRight: "10px",
          }}
        >
          スタート
        </button>
        <button
          onClick={() => setIsRunning(false)}
          disabled={!isRunning}
          style={{
            padding: "10px 20px",
            fontSize: "18px",
            marginRight: "10px",
          }}
        >
          ストップ
        </button>
        <button
          onClick={handleReset}
          style={{ padding: "10px 20px", fontSize: "18px" }}
        >
          リセット
        </button>
      </div>
    </div>
  );
};

const CountDown = () => {
  const [time, setTime] = useState<number>(0);
  const [inputTime, setInputTime] = useState<string>("");
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    let intervalId: any;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  const handleSet = () => {
    setTime(Number(inputTime));
    setIsRunning(false);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20vh" }}>
      <h2>カウントダウンタイマー</h2>
      <div style={{ fontSize: "48px", margin: "20px 0" }}>
        {time}秒
      </div>
      <div style={{ marginBottom: "10px" }}>
        <input
          type="number"
          value={inputTime}
          placeholder="秒数を入力"
          onChange={(e) => setInputTime(e.target.value)}
        />
        <button
          onClick={handleSet}
          style={{ padding: "5px 10px", marginLeft: "10px" }}
        >
          時間セット
        </button>
      </div>
      <button onClick={() => setIsRunning(true)} disabled={isRunning || time === 0}>開始</button>
      <button onClick={() => setIsRunning(false)} disabled={!isRunning}>停止</button>
      <button onClick={() => { setIsRunning(false);  setTime(0)}}>リセット</button>
    </div>
  );
};
export default function App() {
  const [activeTab, setActiveTab] = useState<"up" | "down">("up");

  return (
    <div style={{ textAlign: "center", marginTop: "5vh" }}>
      <h1>タイマーアプリ</h1>
      <div style={{ marginBottom: "20px" }}>
        <button
        onClick={() => setActiveTab("up")}
        style={{
            padding: "10px 20px",
          }}>
          カウントアップ
        </button>
        <button
        onClick={() => setActiveTab("down")}
        style={{
            padding: "10px 20px",
          }}>
          カウントダウン
        </button>
      </div>
      {activeTab === "up" ? <CountUp /> : <CountDown />}
    </div>
  )
}
