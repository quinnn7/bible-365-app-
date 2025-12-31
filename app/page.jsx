"use client";

import { useState } from "react";
import { days } from "../data/days";

export default function Page() {
  const [currentDay, setCurrentDay] = useState(1);
  const day = days.find(d => d.day === currentDay);

  const nextDay = () => {
    if (currentDay < 365) setCurrentDay(currentDay + 1);
  };

  const prevDay = () => {
    if (currentDay > 1) setCurrentDay(currentDay - 1);
  };

  return (
    <div style={{ padding: 20, fontFamily: "serif" }}>
      <h1>Day {day.day}</h1>
      <p><strong>Old Testament:</strong> {day.oldTestament}</p>
      <p><strong>New Testament:</strong> {day.newTestament}</p>
      <h3>Reflection</h3>
      <p>{day.reflection}</p>
      <h3>Journaling Prompt</h3>
      <p>{day.prompt}</p>

      <div style={{ marginTop: 20 }}>
        <button onClick={prevDay} disabled={currentDay === 1}>Previous</button>
        <button onClick={nextDay} disabled={currentDay === 365} style={{ marginLeft: 10 }}>Next</button>
      </div>
    </div>
  );
}
