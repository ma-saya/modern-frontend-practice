import { useState } from 'react';

export default function App() {
  const [message, setMessage] = useState<string>('ボタン押してね');

  const messages: string[] = [
    "今日も最高の1日になるよ！",
    "一歩ずつ進めば大丈夫。",
    "休憩も立派な仕事のうちです。",
    "プログラミング、どんどん上達してるね！",
    "明日の自分に期待しよう。"
  ];

  const showRandomMessage = () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    setMessage(messages[randomIndex]);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
      <h1>ランダムメッセージアプリ</h1>
      <div style={{
        padding: '20px',
        fontSize: '24px',
        color: '#333',
        minHeight: '100px'
      }}>
        {message}
      </div>
      <button
        onClick={showRandomMessage}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          backgroundColor: '#007BFF',
          color: '#FFF',
          border: 'none',
          borderRadius: '5px'
        }}>
        メッセージを受け取る
      </button>
    </div>
  );
}