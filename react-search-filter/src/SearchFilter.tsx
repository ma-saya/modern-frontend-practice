import { useState } from 'react';

const items = [
  "東京都", "神奈川県", "千葉県", "埼玉県", "茨城県", "栃木県", "群馬県",
  "大阪府", "京都府", "兵庫県", "奈良県", "和歌山県", "滋賀県",
  "北海道", "沖縄県", "愛知県", "福岡県"
];

export const SearchFilter = () => {
  const [query, setQuery] = useState("");

  const filteredItems = items.filter((item) => {
    return item.includes(query);
  });

  return (
    <div style={containerStyle}>
      <h2 style={{ textAlign: "center" }}>都道府県検索フィルター</h2>
      <input
        type="text"
        placeholder="検索"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={inputStyle}
      />
      <ul style={listStyle}>
        {filteredItems.map((item) => (
          <li key={item} style={itemStyle}>
            {item}
          </li>
        ))}
        {filteredItems.length === 0 && (
          <p style={{ textAlign: "center", color: "red" }}>見つかりません...</p>
        )}
      </ul>
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
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  fontSize: "16px",
  marginBottom: "20px",
  borderRadius: "5px",
  border: "1px solid #ddd",
  boxSizing: "border-box" as const,
}

const listStyle = {
  listStyle: "none",
  padding: 0,
};

const itemStyle = {
  padding: "10px",
  borderBottom: "1px solid #eee",
  fontSize: "18px",
};