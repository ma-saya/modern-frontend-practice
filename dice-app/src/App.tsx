import { useState } from 'react';

export default function App() {
  const [dice, setDice] = useState<number>(1);

  const diceImages: string[] = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"]

  const rollDice = () => {
    const randomNum = Math.floor(Math.random() * 6) + 1;
    setDice(randomNum);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>サイコロアプリ</h1>
      <div style={{ fontSize: '100px', margin: '20px' }}>
        {diceImages[dice - 1]}
      </div>
      <button onClick={rollDice} style={{ padding: '10px 20px', fontSize: '16px' }}>
        サイコロを振る
      </button>
    </div>
  );
}