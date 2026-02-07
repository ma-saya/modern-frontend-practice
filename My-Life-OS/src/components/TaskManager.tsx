import { useState, useEffect } from "react";

type Task = {
    id: number;
    text: string;
    isDone: boolean;
    createdAt: number;
};

export const TaskManager = () => {
    const [tasks, setTasks] = useState<Task[]>(() => {
        const saved = localStorage.getItem("my-tasks");
        return saved ? JSON.parse(saved) : [];
    });
    const [inputValue, setInputValue] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [sortOrder, setSortOrder] = useState<"new" | "old">("new");

    useEffect(() => {
        localStorage.setItem("my-tasks", JSON.stringify(tasks))
    }, [tasks]);

    const addTask = () => {
        if (!inputValue) return;
        const newTask: Task = {
            id: Date.now(),
            text: inputValue,
            isDone: false,
            createdAt: Date.now(),
        };
        setTasks([newTask, ...tasks]);
        setInputValue("");
    };

    const toggleTask = (id: number) => {
        setTasks(tasks.map((t) => t.id === id ? { ...t, isDone: !t.isDone } : t))
    };

    const deleteTask = (id: number) => {
        setTasks(tasks.filter((t) => t.id !== id));
    };
    const filterdAndSortedTasks = tasks
    .filter((t) => t.text.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a,b) => {
        return sortOrder === "new" ? b.createdAt - a.createdAt : a.createdAt - b.createdAt;
    });
    return (
        <div style={boxStyle}>
            <h2>タスク管理</h2>
            <div style={{ display: "flex", gap: "10px", marginBottom: "20px"}}>
                <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="新しいタスクを追加"
                style={inputStyle}
                />
                <button onClick={addTask} style={btnStyle}>追加</button>
            </div>
            <div style={{ display: "flex", gap: "10px", marginBottom: "20px"}}>
                <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="検索"
                style={{ ...inputStyle, fontSize: "14px"}}
                />
                <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value as "new" | "old")}
                style={inputStyle}
                >
                    <option value="new">新しい順</option>
                    <option value="old">古い順</option>
                </select>
            </div>
            <ul style={{ listStyle: "none", padding: 0}}>
                {filterdAndSortedTasks.map((task) => (
                    <li key={task.id} style={itemStyle}>
                        <span 
                        onClick={() => toggleTask(task.id)}
                        style={{
                            textDecoration: task.isDone ? "line-through" : "none",
                            cursor: "pointer", flex: 1, color: task.isDone ? "#aaa" : "inherit"
                        }}
                        >
                            {task.isDone ? "✅ " : "⬜ "} {task.text}
                        </span>
                        <button onClick={() => deleteTask(task.id)} style={deleteBtnStyle}>削除</button>                    </li>
                ))}
            </ul>
        </div>
    )
}

const boxStyle = { padding: "20px", background: "rgba(255,255,255,0.1)", borderRadius: "10px" };
const inputStyle = { padding: "8px", borderRadius: "5px", border: "1px solid #ccc", flex: 1 };
const btnStyle = { padding: "8px 16px", background:"#007bff", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" };
const deleteBtnStyle = { marginLeft: "10px", background:"#ff4d4d", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" };
const itemStyle = { display: "flex", justifyContent: "space-between", padding: "10px", borderBottom: "1px solid #eee" };