'use client'; 

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import React Calendar's base styles
import './InnerCareCalendar.css'; // Import your custom styles


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
   </div>
 );
};


export default InnerCareCalendar;
