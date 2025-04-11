import { useState, useMemo } from 'react';

import './Calendar.css';

import getDayInISOFormat from '@/common/utils/getDayInISOFormat';

function Info(props) {
  return (
    <article className='appointment-info'>
      {/* <div className="appointment-type" style={{ backgroundColor: appointments[selectedDay]?.color }}>
      </div> */}
      <div className="appointment-date">
        <strong>Nome do responsável: {props.nomeCompleto}</strong>
      </div>
      <div className="appointment-date">
        <strong>Data de Atendimento: {props.dataAtendimento}</strong>
      </div>
      <div className="appointment-date">
        <strong>Serviço: {props.servico}</strong>
      </div>
      <div className="appointment-date">
        <strong>statusAtendimento: {props.statusAtendimento}</strong>
      </div>
    </article>


  )
}

export default function Calendar({ appointments }) {
  const [showDrawer, setShowDrawer] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);

  const dayOfAppointments = useMemo(() => appointments.map(x => Number(getDayInISOFormat(x.dataAtendimento))), [appointments])
  const selectedAppointments = useMemo(() => appointments.filter(x => Number(getDayInISOFormat(x.dataAtendimento)) === selectedDay), [selectedDay])
  console.log("SelectedAppointments", selectedAppointments)

  const dates = [26, 5, 13];

  // Função para lidar com clique em uma data
  const handleDayClick = (day) => {
    console.log("handleDayClick fired")

    if (dayOfAppointments.includes(day)) {
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
                  const dayOfAppointments = appointments.map(x => Number(getDayInISOFormat(x.dataAtendimento)))
                  const isWeekend = j === 0 || j === 6
                  const day = i * 7 + j + 1;
                  const color = dayOfAppointments.includes(day) ? "var(--color-blue)" : "var(--color-neutral)"

                  return (
                    <div
                      key={j}
                      className={`dia ${color ? `destaque-${color.replace('var(--color-', '').replace(')', '')}` : ''}`}
                      style={{ backgroundColor: color }}
                      onClick={() => handleDayClick(day)}
                    >
                      {isWeekend ? '' : day}
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
          {/* {selectedDay && appointments[selectedDay] && ( */}
          {selectedDay && selectedAppointments.length !== 0 && (
            <div className="appointment-details">
              {selectedAppointments.map(x => <Info {...x} />)}
            </div>
          )}
        </div>
      </div>
    </>
  );
}