import { useState } from "react";

export default function App() {
  const [count, setCount] = useState<number>(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Counter App</h1>
      <p style={{ fontSize: "40px" }}>{count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
