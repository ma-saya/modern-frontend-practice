import { useState } from 'react';

const students = [
  "Charlie", "Alice", "Bob", "David", "Frank", "Eve", "Helen", "George", "Isaac"
]

export const SortFilter = () => {
  const [query, setQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | null>(null);

  const filteredList = students.filter((name) => {
    return name.toLowerCase().includes(query.toLowerCase());
  });

  const sortedList = [...filteredList].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.localeCompare(b);
    }
    if (sortOrder === "desc") {
      return b.localeCompare(a);
    }
    return 0;
  });

  return (
    <div style={containerStyle}>
      <h2 style={{textAlign: "center"}}>並び替え付き名簿</h2>
      <input
      type="text"
      placeholder="名前を検索 "
      value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={inputStyle}
      />
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <button onClick={() => setSortOrder("asc")} style={getButtonStyle(sortOrder === "asc")}>
          昇順
        </button>
        <button onClick={() => setSortOrder("desc")} style={getButtonStyle(sortOrder === "desc")}>
          降順
        </button>
        <button onClick={() => setSortOrder(null)} style={getButtonStyle(sortOrder === null)}>
          元の順序
        </button>
      </div>
      <ul style={listStyle}>
        {sortedList.map((name) => (
          <li key={name} style={itemStyle}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  )
}

const containerStyle = {
  maxWidth: "400px", margin: "50px auto", padding: "20px",
  backgroundColor: "white", borderRadius: "10px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
};
const inputStyle = {
  width: "100%", padding: "10px", marginBottom: "10px", fontSize: "16px",
  boxSizing: "border-box" as const, borderRadius: "5px", border: "1px solid #ddd"
};
const listStyle = { listStyle: "none", padding: 0 };
const itemStyle = { padding: "10px", borderBottom: "1px solid #eee", fontSize: "18px" };

// ボタンの色を現在の状態に合わせて変える関数
const getButtonStyle = (isActive: boolean) => ({
  padding: "8px 12px", margin: "0 5px", cursor: "pointer",
  backgroundColor: isActive ? "#007bff" : "#e0e0e0", // アクティブなら青、それ以外はグレー
  color: isActive ? "white" : "black",
  border: "none", borderRadius: "5px", fontSize: "14px"
});