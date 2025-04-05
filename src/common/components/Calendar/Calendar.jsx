import { useState } from 'react';
import './Calendar.css';

export default function Calendar() {
  const [showDrawer, setShowDrawer] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);

  const appointments = {
    5: {
      type: 'Visita domiciliar',
      details: 'Visita domiciliar ',
      user:'João',
      dr:'Dra. Maria',
      hour: 14,
      color: 'var(--color-blue)'
    },
    13: {
      type: 'Atendimento psicológico',
      user:'João',
      dr:'Dra. Maria',
      hour: 14,
      details: 'Atendimento psicológico',
      color: 'var(--color-yellow)'
    },
    26: {
      type: 'Cadunico',
      user:'João',
      dr:'Dra. Maria',
      hour: 14,
      details: 'Atualização cadastral ', 
      color: 'var(--color-pink)'
    }
  };

  const dates = [26, 5, 13];

  // Função para lidar com clique em uma data
  const handleDayClick = (day) => {
    if (dates.includes(day)) {
      setSelectedDay(day);
      setShowDrawer(true);
      // Adiciona classe ao body para prevenir rolagem quando drawer estiver aberto
      document.body.classList.add('drawer-open');
    }
  };

  // Função para fechar o drawer
  const closeDrawer = () => {
    setShowDrawer(false);
    // Remove classe do body quando drawer for fechado
    document.body.classList.remove('drawer-open');
  };

  return (
    <>
      <section className='calendar'>

        <div className="main">
          <div className="cabecalho">
            <div>DOM</div>
            <div>SEG</div>
            <div>TER</div>
            <div>QUA</div>
            <div>QUI</div>
            <div>SEX</div>
            <div>SAB</div>
          </div>
          <div className="semanas">
            {Array.from({ length: 5 }, (_, i) => (
              <div key={i} className="semana">
                {Array.from({ length: 7 }, (_, j) => {
                  const day = i * 7 + j + 1;
                  const color = dates.includes(day)
                    ? {
                        26: 'var(--color-pink)',
                        5: 'var(--color-blue)',
                        13: 'var(--color-yellow)',
                      }[day]
                    : '';
                  return (
                    <div
                      key={j}
                      className={`dia ${color ? `destaque-${color.replace('var(--color-', '').replace(')', '')}` : ''}`}
                      style={{ backgroundColor: color }}
                      onClick={() => handleDayClick(day)}
                    >
                      {(j === 0 || j === 6) ? '' : day}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
        <div className="legenda">
          <div className="legenda__item">
            <div style={{ backgroundColor: 'var(--color-pink)' }} className="legenda__item__color"></div>
            <p>Cadunico</p>
          </div>
          <div className="legenda__item">
            <div style={{ backgroundColor: 'var(--color-blue)' }} className="legenda__item__color"></div>
            <p>Visita domiciliar</p>
          </div>
          <div className="legenda__item">
            <div style={{ backgroundColor: 'var(--color-yellow)' }} className="legenda__item__color"></div>
            <p>Atendimento psicologico</p>
          </div>
        </div>
      </section>

      
      <div className={`drawer-overlay ${showDrawer ? 'active' : ''}`} onClick={closeDrawer}></div>

      {/* Drawer para exibir detalhes do agendamento */}
      <div className={`appointment-drawer ${showDrawer ? 'open' : ''}`}>
        <div className="drawer-handle"></div>
        <div className="drawer-content">
          <div className="drawer-header">
            <h2>Detalhes do Agendamento</h2>
            <button className="close-button" onClick={closeDrawer}>×</button>
          </div>
          {selectedDay && appointments[selectedDay] && (
            <div className="appointment-details">
              <div className="appointment-type" style={{ backgroundColor: appointments[selectedDay].color }}>
                {appointments[selectedDay].type}
              </div>
              <div className="appointment-date">
                <strong>Data:</strong> Dia {selectedDay}
              </div>
              <div className="appointment-info">
                <p>{appointments[selectedDay].details}</p>
              </div>
              <div className="appointment-info">
                <p>Agendado por : {appointments[selectedDay].user}</p>
              </div>
              <div className="appointment-info">
                <p>Dr. : {appointments[selectedDay].dr}</p>
              </div>
              <div className="appointment-info">
                <p>Horário: {appointments[selectedDay].hour}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}