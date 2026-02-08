import { useState, useEffect } from "react";
import { TaskManager } from "./components/TaskManager";
import { FocusTimer } from "./components/FocusTimer";
import { BudgetTracker } from "./components/BudgetTracker";
import "./App.css";


export default function App() {
  const [activeTab, setActiveTab] = useState<"task" | "timer" | "money">("task");
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    return (localStorage.getItem("app-theme") as "light" | "dark") || "light";
  });

  useEffect(() => {
    localStorage.setItem("app-theme", theme);
  }, [theme]);

  const themeStyles = {
    light: { background: "#f0f0f0", text: "#000", card: "white" },
    dark: { background: "#121212", text: "#fff", card: "gray" },
  };
  const currentTheme = themeStyles[theme];

  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: currentTheme.background,
      color: currentTheme.text,
      fontFamily: "sans-serif",
      transition: "all 0.3s",
    }}>
      <header style={{ padding: "20px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #ddd" }}>
        <h1 style={{ margin: 0}}>My Life OS</h1>
        <button 
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          style={{ background: "none", border: "1px solid currentColor", padding: "5px 10px", borderRadius: "20px", cursor: "pointer", color: "inherit" }}>
          {theme === "light" ? "ダークモード" : "ライトモード"}
        </button>
      </header>
      <div style={{ display: "flex", gap: "10px", padding: "20px", borderBottom: "1px solid #ddd" }}>
        <TabButton label="タスク管理" isActive={activeTab === "task"} onClick={() => setActiveTab("task")} theme={theme} />
        <TabButton label="集中タイマー" isActive={activeTab === "timer"} onClick={() => setActiveTab("timer")} theme={theme} />
        <TabButton label="収支管理" isActive={activeTab === "money"} onClick={() => setActiveTab("money")} theme={theme} />
      </div>
      <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
        <div style={{
          background: currentTheme.card,
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          padding: "20px",
        }}>
          {activeTab === "task" && <TaskManager />}
          {activeTab === "timer" && <FocusTimer />}
          {activeTab === "money" && <BudgetTracker />}
        </div>
      </div>
    </div>
  )
}

const TabButton = ({ label, isActive, onClick, theme }: any) => (
  <button
    onClick={onClick}
    style={{
      padding: "10px 20px",
      fontSize: "16px",
      border: "none",
      borderRadius: "30px",
      cursor: "pointer",
      backgroundColor: isActive ? "#007bff" : (theme === "dark" ? "#444" : "#e0e0e0"),
      color: isActive ? "white" : (theme === "dark" ? "#ccc" : "black"),
      fontWeight: "bold",
      transition: "all 0.2s"
    }}
  >
    {label}
  </button>
)