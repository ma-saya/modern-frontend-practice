import { useState } from 'react';

type Todo = {
  text: string;
  isDone: boolean;
};

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState<string>("");

  const addTodo = () => {
    if (text.trim() === "") return;
    const newTodo: Todo = { text: text, isDone: false };
    setTodos([...todos, newTodo]);
    setText("");
  }

  const toggleTodo = (index: number) => {
    const newTodos = todos.map((todos, i) => {
      if (i === index) {
        return { ...todos, isDone: !todos.isDone };
      } else {
        return todos;
      }
    })
    setTodos(newTodos);
  }

  const deleteTodo = (indexToDelete: number) => {
    const newTodos = todos.filter((_, i) => i !== indexToDelete);
    setTodos(newTodos);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>シンプルTODO</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="新しいTODOを入力"
        />
      <button onClick={addTodo}>追加</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index} style={{ marginBottom: "10px", backgroundColor: todo.isDone ? "#f0f0f0" : "white", padding: "5px", borderRadius: "5px" }}>
            <span
            onClick={() => toggleTodo(index)}
              style={{
                cursor: "pointer",
                textDecoration: todo.isDone ? "line-through" : "none",
                color: todo.isDone ? "gray" : "black"
              }}
            >
            {todo.isDone ? "☑" : "☐"} {todo.text}
            </span>
            <button onClick={() => deleteTodo(index)} style={{ marginLeft: "10px" }}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  )

}