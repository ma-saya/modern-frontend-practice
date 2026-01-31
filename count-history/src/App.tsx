import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState<number>(0);
  const [history, setHistory] = useState<number[]>([]);

  const increment = () => setCount(count + 1);

  const decrement = () => setCount(count - 1);

  const saveCount = () => {
    setHistory([count, ...history]);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>カウント履歴</h1>
      <div style={{ fontSize: "50px", fontWeight: "bold", margin: "20px 0" }}>
        {count}
      </div>
      <div style={{ marginBottom: "20px" }}>
        <button onClick={decrement} style={{ padding: "10px 20px", fontSize: "16px"}}>-</button>
        <button onClick={increment} style={{ padding: "10px 20px", fontSize: "16px", marginLeft: "10px"}}>+</button>

        <button onClick={saveCount} style={{ padding: "10px 20px", fontSize: "16px", marginLeft: "10px"}}>保存</button>
      </div>
      <div style={{ width: "300px", margin: "0 auto", textAlign: "left" }}>
        <h3>保存された履歴</h3>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {history.map((item, index) => (
            <li key={index} style={{ borderBottom: "1px solid #eee", padding: "5px 0" }}>
              {index + 1}番目の記録: <strong>{item}</strong>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}