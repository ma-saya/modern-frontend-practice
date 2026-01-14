import { useState } from 'react';
import type{ QuizItem } from './types';

const QUIZ_DATA: QuizItem[] = [
  {
    question: "Reactで状態を管理するHooksは？",
    options: ["useState", "useEffect", "useContext", "useReducer"],
    correctAnswer: "useState"
  },
  {
    question: "TypeScriptで型を定義するキーワードは？",
    options: ["type", "interface", "class", "enum"],
    correctAnswer: "interface"
  }
];

export default function App() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handlerAnswer = (choice: string) => {
    if (choice === QUIZ_DATA[currentIdx].correctAnswer) setScore(score + 1);

    const next = currentIdx + 1;
    if (next < QUIZ_DATA.length) {
      setCurrentIdx(next);
    } else {
      setIsFinished(true);
    }
  };

  if (isFinished) {
    return <h1>スコア: {score} / {QUIZ_DATA.length}</h1>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Q{currentIdx + 1}: {QUIZ_DATA[currentIdx].question}</h2>
      {QUIZ_DATA[currentIdx].options.map(opt => (
        <button key={opt} onClick={() => handlerAnswer(opt)} style={{ display: "block", margin: "10px 0" }}>
          {opt}
        </button>
      ))}
    </div>
  );
}