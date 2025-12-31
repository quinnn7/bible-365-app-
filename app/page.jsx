"use client";

import { useState, useEffect } from "react";
import { days } from "../data/days";

export default function Page() {
  // Load bookmarked day from localStorage or default to 1
  const [currentDay, setCurrentDay] = useState(() => {
    const saved = localStorage.getItem("bookmarkedDay");
    return saved ? parseInt(saved) : 1;
  });

  // Save current day to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("bookmarkedDay", currentDay);
  }, [currentDay]);

  const day = days.find(d => d.day === currentDay);

  const nextDay = () => {
    if (currentDay < 365) setCurrentDay(currentDay + 1);
  };

  const prevDay = () => {
    if (currentDay > 1) setCurrentDay(currentDay - 1);
  };

  const bookmarkDay = () => {
    alert(`Day ${currentDay} bookmarked!`);
  };

  const jumpToDay = (inputDay) => {
    if (inputDay >= 1 && inputDay <= 365) {
      setCurrentDay(inputDay);
    } else {
      alert("Please enter a day between 1 and 365.");
    }
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

      {/* Navigation */}
      <div style={{ marginTop: 20 }}>
        <button onClick={prevDay} disabled={currentDay === 1}>Previous</button>
        <button onClick={nextDay} disabled={currentDay === 365} style={{ marginLeft: 10 }}>Next</button>
      </div>

      {/* Bookmark */}
      <div style={{ marginTop: 20 }}>
        <button onClick={bookmarkDay}>Bookmark This Day</button>
      </div>

      {/* Jump to Day */}
      <div style={{ marginTop: 20 }}>
        <input
          type="number"
          min="1"
          max="365"
          placeholder="Enter day 1-365"
          id="dayInput"
          style={{ width: 100, marginRight: 10 }}
        />
        <button
          onClick={() => {
            const inputDay = parseInt(document.getElementById("dayInput").value);
            jumpToDay(inputDay);
          }}
        >
          Go
        </button>
      </div>
    </div>
  );
}
