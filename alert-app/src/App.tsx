import { useState } from "react";

export default function App() {
  const [message, setMessage] = useState<string>("");
  const [inputtext, setInputtext] = useState<string>("");

  const showAlert = () => {
    setMessage(inputtext);
    setInputtext("");
  };
  const clearAlert = () => {
    setMessage("");
  };

  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h1>Alert Application</h1>
      <input
        type="text"
        value={inputtext}
        placeholder="なにか入力してください"
        onChange={(e) => setInputtext(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            showAlert();
          }
        }}
        style={{ padding: "10px", marginRight: "10px" }}
      />
      <button onClick={showAlert}>アラートを表示</button>
      {message !== "" && (
        <div style={{ marginTop: "20px", background: "#eee", padding: "10px" }}>
          <p>入力された文字: {message}</p>
          <button onClick={clearAlert}>閉じる</button>
        </div>
      )}
    </div>
  );
}
