import React, { useState } from 'react';
import Calendar from '../AppoinmentsTab/sections/Calendar/Calendar';
import Summary from '../AppoinmentsTab/sections/Summary/Summary';
import './AppoinmentsTab.css';

function AppoinmentsTab() {
  const [appointments, setAppointments] = useState([
    { day: 7, type: 'Visita Domiciliar', location: 'pontizinha', status: 'Finalizado' },
    { day: 18, type: 'cadunico', location: 'pontizinha', status: 'pendente' },
    { day: 23, type: 'Visita Domiciliar', location: 'pontizinha', status: 'Finalizado' }
  ]);

  const handleDayClick = (appointment) => {
    if (!appointments.some(a => a.day === appointment.day)) {
      setAppointments([...appointments, appointment]);
    }
  };

  return (
    <div className="appoinments-container">
      <div className="app-header">
        <h1 className='text-blue'>Seus agendamentos</h1>
      </div>
      <main className="calendar-summary">
        <Calendar selectedDays={appointments} onDayClick={handleDayClick} />
        <Summary appointments={appointments} />
      </main>
    </div>
  );
}

export default AppoinmentsTab;