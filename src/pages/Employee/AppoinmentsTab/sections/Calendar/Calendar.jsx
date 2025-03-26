import React from 'react';
import './Calendar.css';

function Calendar({ selectedDays, onDayClick }) {
  const days = [
    { day: 7, type: 'Visita Domiciliar', location: 'pontizinha', status: 'Finalizado' },
    { day: 18, type: 'cadunico', location: 'pontizinha', status: 'pendente' },
    { day: 23, type: 'Visita Domiciliar', location: 'pontizinha', status: 'Finalizado' }
  ];

  const isDaySelected = (day) => {
    return days.some(d => d.day === day);
  };

  const handleDayClick = (day) => {
    const selectedDay = days.find(d => d.day === day);
    if (selectedDay) {
      onDayClick(selectedDay);
    }
  };

  const renderCalendarDays = () => {
    const totalDays = 31;
    const firstDayOfMonth = new Date(2025, 1, 1).getDay(); // 0 = Sunday
    const days = [];

    // Add empty cells for days before the 1st
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="day" style={{ visibility: 'hidden' }}></div>);
    }

    // Add the actual days
    for (let i = 1; i <= totalDays; i++) {
      days.push(
        <div
          key={i}
          className={`day ${isDaySelected(i) ? 'selected-day' : ''}`}
          onClick={() => handleDayClick(i)}
        >
          {i}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="calendar__employee-container">
      <div className="calendar__employee-header">
        <span className="arrow">‹</span>
        <div className="calendar__employee-nav">
          <button className="nav-button">Segunda</button>
          <button className="nav-button">Fevereiro</button>
          <button className="nav-button">2025</button>
        </div>
        <span className="arrow">›</span>
      </div>

      <div className="weekdays">
        <div>DOM</div>
        <div>SEG</div>
        <div>TER</div>
        <div>QUA</div>
        <div>QUIN</div>
        <div>SEX</div>
        <div>SAB</div>
      </div>

      <div className="days">
        {renderCalendarDays()}
      </div>
    </div>
  );
}

export default Calendar;