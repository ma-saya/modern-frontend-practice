import { useState, useEffect } from "react";
import { TaskManager } from "./components/TaskManager";
import { FocusTimer } from "./components/FocusTimer";


export default function App() {
  return (
    <div>
      <TaskManager />
      <FocusTimer />
    </div>
  )
}