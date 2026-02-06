import { useState } from "react";

type Habit = {
  id: number;
  name: string;
  isChecked: boolean;
};

const initialHabits: Habit[] = [
  { id: 1, name: "読書", isChecked: false },
  { id: 2, name: "筋トレする", isChecked: false },
  { id: 3, name: "コードを書く", isChecked: false },
];

export const HabitTracker = () => {
  const [habits, setHabits] = useState(initialHabits);

  const togglehabit = (id: number) => {
    const updatedHabits = habits.map((habit) => {
      if (habit.id === id) {
        return { ...habit, isChecked: !habit.isChecked };
      }
      return habit;
    });
    setHabits(updatedHabits);
  };

  const completedCount = habits.filter((habit) => habit.isChecked).length;

  return (
    <div style={containerStyle}>
      <h2 style={{ textAlign: "center"}}>デイリー習慣チェック</h2>
      <p style={{ textAlign: "center", fontSize: "18px" }}>
        達成度: <b>{completedCount}</b> / {habits.length}
      </p>

      <div style={listStyle}>
        {habits.map((habit) => (
          <div
          key={habit.id}
            onClick={() => togglehabit(habit.id)}
            style={{
              ...itemStyle,
              backgroundColor: habit.isChecked ? "#d4edda" : "white",
              textDecoration: habit.isChecked ? "line-through" : "none",
              color: habit.isChecked ? "#155724" : "black",
            }}
          >
            <span style={{ marginRight: "10px", fontSize: "20px" }}>
              {habit.isChecked ? "✅" : "⬜"}
            </span>
            {habit.name}
            </div>
        ))}
      </div>
    </div>
  )
}
const containerStyle = {
  maxWidth: "400px", margin: "50px auto", padding: "20px",
  backgroundColor: "white", borderRadius: "10px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
};
const listStyle = { display: "flex", flexDirection: "column" as const, gap: "10px" };
const itemStyle = {
  padding: "15px", borderRadius: "8px", border: "1px solid #ddd",
  cursor: "pointer", display: "flex", alignItems: "center", fontSize: "18px",
  transition: "all 0.2s" 
};