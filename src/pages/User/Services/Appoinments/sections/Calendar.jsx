import '../Appoinments.css'

export default function Calendar() {
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
        <div class="semana">
          <div class="dia"></div>
          <div class="dia">2</div>
          <div class="dia">3</div>
          <div class="dia">4</div>
          <div class="dia">5</div>
          <div class="dia">6</div>
          <div class="dia"></div>
        </div>

        <div class="semana">
          <div class="dia"></div>
          <div class="dia">9</div>
          <div class="dia destaque-amarelo">10</div>
          <div class="dia">11</div>
          <div class="dia">12</div>
          <div class="dia">13</div>
          <div class="dia"></div>
        </div>

        <div class="semana">
          <div class="dia"></div>
          <div class="dia">16</div>
          <div class="dia">17</div>
          <div class="dia">18</div>
          <div class="dia">19</div>
          <div class="dia">20</div>
          <div class="dia"></div>
        </div>

        <div class="semana">
          <div class="dia"></div>
          <div class="dia">23</div>
          <div class="dia">24</div>
          <div class="dia destaque-rosa">25</div>
          <div class="dia">26</div>
          <div class="dia">27</div>
          <div class="dia"></div>
        </div>

        <div class="semana">
          <div class="dia"></div>
          <div class="dia">30</div>
          <div class="dia">31</div>
          <div class="dia inativo">1</div>
          <div class="dia inativo">2</div>
          <div class="dia inativo">3</div>
          <div class="dia inativo">4</div>
        </div>
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