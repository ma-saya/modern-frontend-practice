import { useState } from 'react';

export default function App() {
  const Question = "react programming";

  const [text, setText] = useState<string>("");

  const isFinished = text === Question;
  const isCorrectSofar = Question.startsWith(text);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>タイピング練習</h1>

      <div style={{ fontSize: '32px', marginBottom: '20px', letterSpacing: '5px' }}>
        {Question}
      </div>
      <input
      type="text"
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="ここに入力してください"
        style={{ fontSize: '24px', padding: '10px', width: '300px' }} />
      
      <div style={{ marginTop: '20px', fontSize: '20px', fontWeight: 'bold' }}>
        {isFinished && (
          <div style={{ color: 'green' }}>おめでとうございます！正解です！</div>
        )}

        {!isCorrectSofar && (
          <div style={{ color: 'red'}}>タイプミスがあります。</div>
        )}
      </div>

      <button onClick={() => setText("")} style={{ marginTop: '20px' }}>
        リセット
      </button>
    </div>
  )
}