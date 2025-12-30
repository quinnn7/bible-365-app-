"use client";
import { useState, useEffect } from "react";

export default function BibleApp() {
  const [day, setDay] = useState(1);
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("completed") || "[]");
    setCompleted(saved);
  }, []);

  const markComplete = () => {
    const updated = [...new Set([...completed, day])];
    setCompleted(updated);
    localStorage.setItem("completed", JSON.stringify(updated));
  };

  return (
    <main style={{ padding: 20, fontFamily: "serif" }}>
      <h1>Day {day}</h1>
      <p><strong>Old Testament:</strong> Genesis</p>
      <p><strong>New Testament:</strong> Matthew</p>

      <button onClick={() => setDay(d => Math.max(1, d - 1))}>◀ Prev</button>
      <button onClick={markComplete}>✔ Complete</button>
      <button onClick={() => setDay(d => d + 1)}>Next ▶</button>

      <p>{completed.length} / 365 completed</p>
    </main>
  );
}
