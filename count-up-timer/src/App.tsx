import { useState, useEffect } from "react";

const CountUp = () => {
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  useEffect(() => {
    let intervalId: any;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 10);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  const formatTime = () => {
    const min = Math.floor(time / 6000);
    const sec = Math.floor((time % 6000) / 100)
    const ms = time % 100;

    return `${min}:${sec.toString().padStart(2, "0")}.${ms.toString().padStart(2, "0")}`;
  }

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20vh" }}>
      <h1>カウントアップタイマー</h1>
      <div style={timeStyle}>
        {formatTime()}
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
const Pomodoro = () => {
  const [time, setTime] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState<"work" | "break">("work");

  useEffect(() => {
    let intervalId: any;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((t) => {
          if (t <= 1) { setIsRunning(false); return 0;}
          return t - 1;
        });
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  const switchMode =  (newMode: "work" | "break") => {
    setMode(newMode);
    setIsRunning(false);
    setTime(newMode === "work" ? 25 * 60 : 5 * 60);
  };

  const formatTime = () => {
    const m = Math.floor(time / 60);
    const s = time % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div style={{ ...boxStyle, backgroundColor: mode === "work" ? "#f28b82" : "#aecbfa" }}>
      <h2>ポモドーロタイマー</h2>
      <div style={{ marginBottom: "15px" }}>
        <button onClick={() => switchMode("work")} style={{ fontWeight: mode === "work" ? "bold" : "normal" }}>集中25分</button>
        <button onClick={() => switchMode("break")} style={{ marginLeft: "10px", fontWeight: mode === "break" ? "bold" : "normal"}}>休憩5分</button>
      </div>
      <div style={timeStyle}>{formatTime()}</div>
      <button onClick={() => setIsRunning(true)} disabled={isRunning || time === 0}>開始</button>
      <button onClick={() => setIsRunning(false)} disabled={!isRunning} style={{ margin: "0 10px"}}>停止</button>
      <button onClick={() => { setIsRunning(false); switchMode(mode); }}>リセット</button>
    </div>
  );
};
export default function App() {
  const [activeTab, setActiveTab] = useState<"up" | "down" | "pomodoro">("up");

  return (
    <div style={{ textAlign: "center", marginTop: "5vh" }}>
      <h1>タイマーアプリ</h1>
      <div style={{ marginBottom: "20px" }}>
        <button
        onClick={() => setActiveTab("up")}
        style={activeTab === "up" ? activeTabStyle : tabStyle}>
          カウントアップ
        </button>
        <button
        onClick={() => setActiveTab("down")}
        style={activeTab === "down" ? activeTabStyle : tabStyle}>
          カウントダウン
        </button>
        <button 
        onClick={() => setActiveTab("pomodoro")} 
        style={activeTab === "pomodoro" ? activeTabStyle : tabStyle}>
          ポモドーロ
          </button>
      </div>
      {activeTab === "up" && <CountUp />}
      {activeTab === "down" && <CountDown />}
      {activeTab === "pomodoro" && <Pomodoro />}
    </div>
  )
}

const boxStyle = { padding: "30px", border: "1px solid #ddd", borderRadius: "10px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)"};
const timeStyle = { fontSize: "60px", fontWeight: "bold", margin: "20px 0" };
const tabStyle = { padding: " 10px 20px", border: "none", backgroundColor: "#e0e0e0", marginLeft: "10px" };
const activeTabStyle = { ...tabStyle, backgroundColor: "#007bff", color: "white"};