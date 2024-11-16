'use client';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import React Calendar's base styles
import './InnerCareCalendar.css'; // Import your custom styles

const moods = [
  { name: 'Sleepy', color: '#A8B9D1' }, // Pastel Light Steel Blue
  { name: 'Exhausted', color: '#D16A6A' }, // Pastel Dark Red
  { name: 'Sad', color: '#7A9FD6' }, // Pastel Royal Blue
  { name: 'Untalkative', color: '#A6B6B6' }, // Pastel Slate Gray
  { name: 'Happy', color: '#FFD47D' }, // Pastel Gold
  { name: 'Excited', color: '#FF8E7D' }, // Pastel Tomato
  { name: 'Motivated', color: '#A4E69A' }, // Pastel Lime Green
];


const InnerCareCalendar = () => {
  const [date, setDate] = useState(new Date());

  // Handle the date selection
  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
  };

  return (
    <div className="calendar-container">
      {/* Header */}
      <h1 className="calendar-header">InnerCare Calendar Tracker</h1>
      <h2 className="calendar-subheader">November 2024</h2>

      {/* Calendar Component */}
      <div className="calendar-wrapper">
        {/* Arrows above the calendar */}
        <button
          className="calendar-arrow"
          onClick={() => setDate(new Date(date.setMonth(date.getMonth() - 1)))}
        >
          &#8592;
        </button>
        
        <Calendar value={date} onChange={handleDateChange} />
        
        <button
          className="calendar-arrow"
          onClick={() => setDate(new Date(date.setMonth(date.getMonth() + 1)))}
        >
          &#8594;
        </button>
      </div>

      {/* Mood Legend */}
      <div className="mood-legend">
        <h3>Mood Legend</h3>
        <div className="moods">
          {moods.map((mood, index) => (
            <div key={index} className="mood-item">
              <span
                className="mood-circle"
                style={{ backgroundColor: mood.color }}
              ></span>
              {mood.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InnerCareCalendar;
