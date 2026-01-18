import { useState } from "react";

export default function App() {
  const [inputcolor, setInputcolor] = useState("");
  const [them, setThem] = useState({ backgroundColor: "white", color: "black" })

  const changecolor = () => {
    if (inputcolor.trim() === "") return;
    setThem({ ...them, backgroundColor: inputcolor})
    setInputcolor("");
  };

  const toDarkMode = () => {
    setThem({ backgroundColor: "black", color: "white" })
  }
  const toLightMode = () => {
    setThem({ backgroundColor: "white", color: "black"})
  }

  return (
    <div style={{ ...them, padding: "50px",  height: "100vh" }}>
      <h1>color changer</h1>
      <input
        type="text"
        value={inputcolor}
        onChange={(e) => setInputcolor(e.target.value)}
        placeholder="色を入力"
        onKeyDown={(e) => {
          if (e.key === 'Enter') changecolor();
        }}
      />
      <button onClick={changecolor} style={{ marginLeft: "30px" }}>
        色を変更
      </button>
      <button onClick={toDarkMode}>
        ナイトモード
      </button>
      <button onClick={toLightMode}>
        ライトモード
      </button>
    </div>
  );
}
