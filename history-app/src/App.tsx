import { useState } from 'react';

type log = {
  id: string;
  time: string;
  text: string;
}

export default function App() {
  const [history, setHistory] = useState<log[]>([]);

  const addLog = () => {
    const now = new Date();
    const timeString = now.toLocaleTimeString();

    const newLog: log = {
      id: crypto.randomUUID(),
      time: timeString,
      text: "ボタンが押されました",
    };
    setHistory([newLog, ...history])
  };

  const clearHistory = () => {
    setHistory([]);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>操作ログ記録</h1>

      <div style={{ marginBottom: "20px" }}>
        <button onClick={addLog} style={{ padding: "10px 20px", fontSize: "16px"}}>今を記録する</button>
        <button onClick={clearHistory} style={{ padding: "10px 20px", fontSize: "16px", marginLeft: "10px"}}>履歴をクリア</button>
      </div>
      <div style={{ maxHeight: "300px", overflowY: "auto", border: "1px solid #ccc", padding: "10px", width: "400px", margin: "0 auto" }}></div>
      <h3>履歴({history.length}件)</h3>
      {history.length === 0 && <p style={{ color: "#888" }}>履歴がありません</p>}
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {history.map((Log) => (
          <li key={Log.id} style={{ borderBottom: "1px solid #eee", padding: "5px 0" }}>
            <span style={{ color: "#555", marginRight: "10px" }}>{Log.time}</span>
            <span>{Log.text}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}