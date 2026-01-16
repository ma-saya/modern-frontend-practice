import { useState } from "react";
import type { Todo } from "./types";

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim() === "") return;

    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text: inputValue,
      isCompleted: false,
    };

    setTodos([...todos, newTodo]);
    setInputValue("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>My ToDo List</h1>
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") addTodo();
          }}
          placeholder="タスクを入力..."
        />
        <button onClick={addTodo} style={{ marginLeft: "10px" }}>
          追加
        </button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{ marginBottom: "5px" }}>
            {todo.text}
          </li>
        ))}
      </ul>
      {todos.length === 0 && <p>タスクがありません</p>}
    </div>
  );
}
