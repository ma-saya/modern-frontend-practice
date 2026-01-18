import { useState } from "react";

export default function App() {
  const [answer, setAnswer] = useState<string | null>(null);

  const askFortune = () => {
    Math.floor(Math.random() * 2) === 0 ? setAnswer("Yes") : setAnswer("No");
  };
  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1>Yes or No Fortune Teller</h1>
      <button onClick={askFortune} style={{ padding: '10px 20px', fontSize: '15px' }}>
        Yes or No を占う
      </button>
      <p style={{
        color: answer === "Yes" ? "blue" : answer === "No" ? "red" : "black",
        fontSize: "20px",
        fontWeight: "bold"
      }}>{answer !== null ? `あなたは${answer}です` : 'まだ占っていません'}</p>
    </div>
  )
}
