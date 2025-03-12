import SaveFields from '@/common/components/SaveFields/SaveFields';
import '../Homevisit.css'
import { useState, useRef, useEffect } from 'react';
export default function DatesHomevisit() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedStaff, setSelectedStaff] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Dias da semana
  const weekDays = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'];

  // Geração de dias do mês atual
  const generateCalendarDays = () => {
    const days = [];
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    // Adicionar dias do mês
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }

    return days;
  };

  // Horários disponíveis
  const availableTimes = [
    ['07:30', '08:00', '08:30', '09:00'],
    ['09:30', '10:00', '10:30', '11:00'],
    ['11:30', '12:00', '12:30', '13:00'],
  ];

  // Lista de funcionários
  const staffMembers = [
    { id: 1, name: 'Dr. Paulo Silva', specialty: 'Clínico Geral' },
    { id: 2, name: 'Dra. Maria Santos', specialty: 'Cardiologista' },
    { id: 3, name: 'Dr. Carlos Oliveira', specialty: 'Geriatra' },
    { id: 4, name: 'Enf. Ana Luiza', specialty: 'Enfermeira' },
    { id: 5, name: 'Ft. Ricardo Souza', specialty: 'Fisioterapeuta' },
    { id: 6, name: 'Nt. Juliana Costa', specialty: 'Nutricionista' }
  ];

  const handleDateSelect = (day) => {
    setSelectedDate(day);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleStaffSelect = (staff) => {
    setSelectedStaff(staff);
    setIsDropdownOpen(false);
  };

  // Fechar dropdown quando clicar fora dele
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <section className='title'>
        <h1 className='text-blue title'>agendamento de visita Domiciliar</h1>
      </section>

      <section className="calendar-container">
        <div className="date-selection">
          <label htmlFor="date-picker">Escolha uma Data</label>
          <input type="date" id="date-picker" />
        </div>

        <div className="selection-container">
          <div className="calendar-section">
            <div className="weekdays">
              {weekDays.map((day, index) => (
                <div key={index} className="weekday">{day}</div>
              ))}
            </div>

            <div className="calendar-days">
              {generateCalendarDays().map((day) => (
                <div
                  key={day}
                  className={`day ${selectedDate === day ? 'selected' : ''}`}
                  onClick={() => handleDateSelect(day)}
                >
                  {day}
                </div>
              ))}
            </div>
          </div>

          <div className="time-section">
            <h3>Horários Disponíveis</h3>
            <div className="time-slots">
              {availableTimes.map((row, rowIndex) => (
                <div key={rowIndex} className="time-row">
                  {row.map((time) => (
                    <div
                      key={time}
                      className={`time-slot ${selectedTime === time ? 'selected' : ''}`}
                      onClick={() => handleTimeSelect(time)}
                    >
                      {time}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="option-section" ref={dropdownRef}>
            <h3>Funcionários Disponíveis</h3>
            <div className="dropdown-container">
              <div
                className="dropdown-header"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span>{selectedStaff ? selectedStaff.name : 'Escolha um funcionário'}</span>
                <button className="dropdown-button">▼</button>
              </div>

              {isDropdownOpen && (
                <div className="dropdown-list">
                  {staffMembers.map((staff) => (
                    <div
                      key={staff.id}
                      className="dropdown-item"
                      onClick={() => handleStaffSelect(staff)}
                    >
                      <span className="staff-name">{staff.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {(selectedDate && selectedTime && selectedStaff) && (
          <div className="confirmation">
            <p>Agendamento: Dia {selectedDate}, às {selectedTime}, com {selectedStaff.name}</p>
            <button className="confirm-button">Confirmar Agendamento</button>
          </div>
        )}
      </section>

      <SaveFields text="Seus dados foram registrados com sucesso e serão protegidos de acordo com a LGPD, garantindo segurança e privacidade no seu atendimento." />
    </>


  );

}