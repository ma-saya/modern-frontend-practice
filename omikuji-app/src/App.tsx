import { useState } from 'react';
import type { OmikujiResult } from './omikuji';

export default function App() {
  const [omikuji, setOmikuji] = useState<OmikujiResult | null>(null);

  const omikujiList: OmikujiResult[] = [
    { fortune: "大吉", color: "#c62020", message: "最高の1日！何をやってもうまくいきます。" },
    { fortune: "中吉", color: "#ff944d", message: "良い運勢です。新しいことに挑戦してみては？" },
    { fortune: "小吉", color: "#ffdb4d", message: "穏やかな1日。足元を固めると吉。" },
    { fortune: "凶", color: "#4d94ff", message: "慎重に過ごしましょう。忘れ物に注意。" }
  ];

  const drawOmikuji = () => {
    const randomIndex = Math.floor(Math.random() * omikujiList.length);
    setOmikuji(omikujiList[randomIndex]);
  }
  return (
    <div style={{textAlign: 'center', marginTop: '50px'}}>
      <h1>おみくじアプリ</h1>

      {omikuji ? (
        <div style={{border: `5px solid ${omikuji.color}`, borderRadius: '15px'}}>
          <h2 style={{color: omikuji.color, fontSize: '40px' }}>
            {omikuji.fortune}
          </h2>
          <p>{omikuji.message}  </p>
          <button onClick={() => setOmikuji(null)}>もう一度占う</button>
        </div>
      ) : (
        <div>
          <p>おみくじを引いてください</p>
          <button onClick={drawOmikuji}>おみくじを引く</button>
        </div>
      )}
    </div>
  );
}