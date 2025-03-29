import React, { useState } from 'react';
import Calendar from '../AppoinmentsTab/sections/Calendar/Calendar';
import Summary from '../AppoinmentsTab/sections/Summary/Summary';
import './AppoinmentsTab.css';

function AppoinmentsTab() {
  const [appointments, setAppointments] = useState([
    { day: 7, type: 'Visita Domiciliar', location: 'pontizinha', status: 'Finalizado',color:'appoinments-dot-blue' },
    { day: 18, type: 'cadunico', location: 'pontizinha', status: 'pendente',color: 'appoinments-dot-pink' },
    { day: 23, type: 'Atendimento psicologico', location: 'pontizinha', status: 'Finalizado', color: 'appoinments-dot-yellow' }
  ]);

  const handleDayClick = (appointment) => {
    if (!appointments.some(a => a.day === appointment.day)) {
      setAppointments([...appointments, appointment]);
    }
  };

  return (
    <div className="appoinments-container">
      <div className="app-header">
        <h1 className='text-blue'>Agendamentos</h1>
      </div>
      <main className="calendar-summary">
        <Calendar selectedDays={appointments} onDayClick={handleDayClick} />
        <Summary appointments={appointments} />
      </main>
    </div>
  );
}

export default AppoinmentsTab;