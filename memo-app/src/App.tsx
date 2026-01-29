import { useState, useEffect } from 'react';

export default function App() {
  const [memos, setMemos] = useState<string[]>(() => {
    const savedMemos = localStorage.getItem("memos");
    if (savedMemos) {
      return JSON.parse(savedMemos);
    } else {
      return [];
    }
  });

  const [text, setText] = useState<string>("");

  useEffect(() => {
      localStorage.setItem("memos", JSON.stringify(memos));
  }, [memos]);
  
  const addMemo = () => {
    if (text.trim() === "") return;
    setMemos([...memos, text]);
    setText("");
  };

  const deleteMemo = (index: number) => {
    const newMemos = [...memos];
    newMemos.splice(index, 1);
    setMemos(newMemos);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>メモアプリ</h1>
      <input 
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="メモを入力"
      style={{ padding: "10px", width: "70%", fontSize: "16px"}}
      />
      <button
        onClick={addMemo} style={{ padding: "10px 20px", marginLeft: "10px", fontSize: "16px" }}>
        追加
      </button>
      <div style={{ marginTop: "30px", textAlign: "left" }}>
        {memos.length === 0  && <p style={{ textAlign: "center"}}>メモがありません</p>}

        {memos.map((memo, index) => (
          <div
          key={index}
          style={{borderBottom: "1px solid #ccc", 
              padding: "10px", 
              display: "flex", 
            justifyContent: "space-between"
          }}
          >
            <span>{memo}  
              <button onClick={() => deleteMemo(index)} style={{ background: "red", color: "white", border: "none" }}>
                削除
              </button>
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}