// page.js
import { useState, useEffect } from 'react';
import { days } from './data/days'; // Adjust path if needed
import Day from './day';

export default function HomePage() {
  // Load bookmarked day from localStorage or default to 1
  const [currentDay, setCurrentDay] = useState(() => {
    const saved = localStorage.getItem('bookmarkedDay');
    return saved ? parseInt(saved) : 1;
  });

  // Save bookmarked day whenever it changes
  useEffect(() => {
    localStorage.setItem('bookmarkedDay', currentDay);
  }, [currentDay]);

  const nextDay = () => {
    if (currentDay < 365) setCurrentDay(currentDay + 1);
  };

  const prevDay = () => {
    if (currentDay > 1) setCurrentDay(currentDay - 1);
  };

  const jumpToDay = (day) => {
    if (day >= 1 && day <= 365) setCurrentDay(day);
    else alert('Please enter a day between 1 and 365.');
  };

  const bookmarkDay = () => {
    alert(`Day ${currentDay} bookmarked!`);
  };

  const dayData = days.find(d => d.day === currentDay);

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '1rem' }}>
      <h1>Day {currentDay}</h1>

      {/* Render the day's content */}
      <Day data={dayData} />

      {/* Navigation */}
      <div style={{ display: 'flex', justifyContent: 'space-between', margin: '1rem 0' }}>
        <button onClick={prevDay} disabled={currentDay === 1}>Previous</button>
        <button onClick={nextDay} disabled={currentDay === 365}>Next</button>
      </div>

      {/* Bookmark */}
      <button onClick={bookmarkDay} style={{ marginBottom: '1rem' }}>Bookmark This Day</button>

      {/* Jump to Day */}
      <div>
        <input
          type="number"
          min="1"
          max="365"
          placeholder="Enter day 1-365"
          id="dayInput"
          style={{ width: '100px', marginRight: '0.5rem' }}
        />
        <button onClick={() => {
          const day = parseInt(document.getElementById('dayInput').value);
          jumpToDay(day);
        }}>Go</button>
      </div>
    </div>
  );
}
