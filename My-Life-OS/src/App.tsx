import { useState, useEffect } from "react";
import { TaskManager } from "./components/TaskManager";
import { FocusTimer } from "./components/FocusTimer";
import { BudgetTracker } from "./components/BudgetTracker";


export default function App() {
  return (
    <div>
      <TaskManager />
      <FocusTimer />
      <BudgetTracker />
    </div>
  )
}