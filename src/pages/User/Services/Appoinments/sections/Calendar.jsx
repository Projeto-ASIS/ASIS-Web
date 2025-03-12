import '../Appoinments.css'

export default function Calendar() {

  const dates = [26 , 5, 13]

  return <>
    <section className='calendar' >
      <div className="calendar__title">
        <div className="line"></div>
        <h1 className='text-pink'>Agendamentos</h1>
        <div className="line"></div>
      </div>
      <div className="main">
      <div class="cabecalho">
        <div>DOM</div>
        <div>SEG</div>
        <div>TER</div>
        <div>QUA</div>
        <div>QUI</div>
        <div>SEX</div>
        <div>SAB</div>
      </div>
      <div class="semanas">
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
                  className={`dia ${color ? `destaque-${color.replace('var(--color-', '').replace(')', '')}` : ''
                    }`}
                  style={{ backgroundColor: color }}
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
  </>

}
