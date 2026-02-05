import { useState } from "react";

type KakeiboItem = {
  name: string;
  price: number;
};

export const SimpleKakeibo = () => {
  const [items, setItems] = useState<KakeiboItem[]>([]);

  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const handleAdd = () => {
    if (text === "" || amount === 0) return;
    const newItem = { name: text, price: amount };
    setItems([...items, newItem]);

    setText("");
    setAmount(0);
  };
  const total = items.reduce((acc, item) => acc + item.price, 0);

  return (
    <div style={containerStyle}>
      <h2 style={{ textAlign: "center" }}>簡易家計簿</h2>

      <div style={{ marginBottom: "20px", display: "flex", gap: "10px" }}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="品目"
          style={inputStyle}
        />
        <input
          type="number"
          value={amount === 0 ? "" : amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          placeholder="金額"
          style={inputStyle}
        />
        <button onClick={handleAdd} style={buttonStyle}>
          追加
        </button>
      </div>
      <ul style={listStyle}>
        {items.map((item, index) => (
          <li key={index} style={itemStyle}>
            <span>{item.name}</span>
            <span>{item.price}円</span>
          </li>
        ))}
      </ul>
      <div style={totalStyle}>合計: {total}円</div>
    </div>
  );
};

const containerStyle = {
  maxWidth: "400px",
  margin: "50px auto",
  padding: "20px",
  backgroundColor: "white",
  borderRadius: "10px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
};
const inputStyle = {
  height: "40px",
  padding: "0 12px",
  fontSize: "16px",
  borderRadius: "5px",
  border: "1px solid #ddd",
  flex: "1 1 0",
  minWidth: "0",
  boxSizing: "border-box" as const,
};
const buttonStyle = {
  height: "40px",
  padding: "0 18px",
  backgroundColor: "#28a745",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: "bold",
  whiteSpace: "nowrap" as const,
};
const listStyle = { listStyle: "none", padding: 0, marginTop: "20px" };
const itemStyle = {
  display: "flex",
  justifyContent: "space-between",
  padding: "10px",
  borderBottom: "1px solid #eee",
  fontSize: "18px",
};
const totalStyle = {
  marginTop: "20px",
  paddingTop: "10px",
  borderTop: "2px solid #333",
  textAlign: "right" as const,
  fontSize: "24px",
  fontWeight: "bold",
};
