import { useState } from "react";

export default function App() {
  const [val, setVal] = useState<string>("");
  const num = Number(val);

  const isNumber = val !== "" && !isNaN(num);
  const isEven = val !== "" && num % 2 === 0;

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>奇数偶数判定アプリ</h1>
      <input
        type="text"
        inputMode="numeric"
        value={val}
        onChange={(e) => setVal(e.target.value)}
        style={{ fontSize: "16px", padding: "8px", width: "200px" }}
      />
      <div style={{ marginTop: "20px", fontSize: "18px" }}>
        {!isNumber ? (
          <span style={{ color: "red" }}>数字を入力してください</span>
        ) : (
          <span style={{ color: "green" }}>{isEven ? "偶数" : "奇数"}</span>
        )}
      </div>
      <p>入力した文字: {val}</p>
    </div>
  );
}
