import { useState } from 'react';

export default function App() {
  const [number, setNumber] = useState<number | null>(null);

  const generateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    setNumber(randomNumber);
  };

  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1>Random Number Generator</h1>
      <button onClick={generateRandomNumber} style={{ padding: '10px 20px', fontSize: '15px' }}>
        乱数を生成する
      </button>
      <p>{number !== null ? `生成された番号: ${number}` : 'まだ生成されていません'}</p>
    </div>
  )
}