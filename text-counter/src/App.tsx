import { useState } from 'react';

export default function App() {
  const [text, setText] = useState<string>('');

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>文字数カウンター</h1>
      <textarea
      value={text}
      onChange={(e) => setText(e.target.value)}
        placeholder="ここにテキストを入力してください"
      style={{ width: "300px", height: "100px", padding: "10px", fontSize: "16px" }}
      />
      <div style={{ color: text.length > 20 ? 'red' : 'white', marginTop: '10px', fontSize: '18px' }}>
        文字数: {text.length} 文字
      </div>
      <button onClick={() => setText('')} >
        リセット
      </button>
    </div>
  )
}