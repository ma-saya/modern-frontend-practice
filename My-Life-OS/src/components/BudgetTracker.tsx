import { useState } from 'react';

type Item = {
  name: string;
  price: number; 
}

export const BudgetTracker = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  const addItem = () => {
    if (!name || price <= 0) return;
    setItems([...items, { name, price }]);
    setName("");
    setPrice(0);
  }
  const total = items.reduce((acc, item) => acc + item.price, 0);

  return (
    <div style={boxStyle}>
      <h2>収支管理</h2>
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="項目を入力" style={inputStyle} />
        <input type="number" value={price || ""} onChange={(e) => setPrice(Number(e.target.value))} placeholder="金額を入力" style={inputStyle} />
        <button onClick={addItem} style={btnStyle}>登録</button>
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {items.map((item, index) => (
          <li key={index} style={itemStyle}>
            <span>{item.name}</span>
            <span>¥{item.price.toLocaleString()}</span>
            <button onClick={() => setItems(items.filter((_, i) => i !== index))}>削除</button>
          </li>
        ))}
      </ul>
      <button onClick={() => setItems([])} style={{color: "red"}}>リセット</button>
      <div style={{ borderTop: "2px solid #000", marginTop: "10px", paddingTop: "10px", fontWeight: "bold", textAlign: "right" }}>
        合計: ¥{total.toLocaleString()}
      </div>
    </div>
  )
}
const boxStyle = { padding: "20px", background: "rgba(255,255,255,0.1)", borderRadius: "10px" };
const inputStyle = { padding: "8px", borderRadius: "5px", border: "1px solid #ccc", flex: 1 };
const btnStyle = { padding: "8px 16px", background:"#28a745", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" };
const itemStyle = { display: "flex", justifyContent: "space-between", padding: "10px", borderBottom: "1px solid #eee" };