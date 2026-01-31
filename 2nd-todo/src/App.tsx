import { useState } from "react";

export default function App() {
  const [todo, setTodo] = useState<string[]>([]);
  const [text, setText] = useState<string>("");

  const addTodo = () => {
    if (text === "") return;
    setTodo([...todo, text]);
    setText("");
  };

  const deleteTodo = (index: number) => {
    const newTodo = todo.filter((_, i) => i !== index);
    setTodo(newTodo);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>2nd TODO</h1>
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="入力"
          style={{ padding: "10px", fontSize: "16px", width: "200px" }}
        />
        <button onClick={addTodo} style={{ padding: "10px 20px", fontSize: "16px", marginLeft: "10px" }}>追加</button>
      </div>
      <ul style={{ padding: 0, listStyle: "none" }}>
        {todo.map((todo, index) => (
          <li key={index} style={{border: "1px solid #ddd", 
              padding: "10px", 
              marginBottom: "10px",
              display: "flex", 
              justifyContent: "space-between",
            alignItems: "center"
          }}
          >
            <span>{todo}</span>
            <button onClick={() => deleteTodo(index)} style={{ padding: "5px 10px", fontSize: "14px" }}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
