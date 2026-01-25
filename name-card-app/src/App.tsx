import { useState } from 'react';

export default function App() {
  const [name, setName ] = useState<string>('');

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>リアルタイム名刺</h1>
      <input 
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="ここに名前を入力してください"
        style={{ width: "300px", padding: "10px", fontSize: "16px" }}
      />
      <div style={{
        border: '1px solid #000',
        borderRadius: '8px',
        padding: '20px',
        marginTop: '20px',
        width: '320px',
        margin: "30px auto",
        backgroundColor: '#f9f9f9',
      }}>
        <p>こんにちは！</p>
        <h2 style={{ color: 'blue' }}>{name === "" ? "ゲスト" : name }さん</h2>
        <p>今日も頑張りましょう！</p>
      </div>
    </div>
  )
}