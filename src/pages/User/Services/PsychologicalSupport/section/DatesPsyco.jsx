import SaveFields from '@/common/components/SaveFields/SaveFields';
import '../PsycologicalSupport.css'

import * as BackendService from "@/common/services/BackendService"
import Button from '@/common/components/Button';
import Input from '@/common/components/Input';

import { useState, useRef, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import Breadcrumb from '@/common/components/Breadcrumb/Breadcrumb';

import { useMask } from '@react-input/mask';
import useForm from '@/common/hooks/useForm';
import formatCPF from '@/common/utils/formatCPF';

const INITIAL_FORMDATA = {
  nomeMae: "",
  endereco: "",
  cadunico: "",
  cpf: "",
  dataNascimento: "",
}


export default function DatesPsyco() {
  const { formData, handleChange } = useForm({ initialFormData: INITIAL_FORMDATA })
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedStaff, setSelectedStaff] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const cpfRef = useMask({
    mask: "___.___.___-__",
    replacement: { _: /\d/ }
  })

  const weekDays = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'];

  const generateCalendarDays = () => {
    const days = [];
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }

    return days;
  }

  async function handleOnConfirmAppointment(e) {
    try {
      const req = {
        cpf: formatCPF(cpfRef.current.value),
        nomeMae: formData.nomeMae,
        endereco: formData.endereco,
        dataNascimento: formData.dataNascimento,
        cadunico: formData.cadunico
      }
      const userToken = localStorage.getItem("user-package")
      const userIdDecodedd = jwtDecode(userToken)

      const res = await BackendService.setAppointment(userIdDecodedd, req)

    } catch (error) {
      console.error(error)
    }
  }

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

  function handleDateSelect(day) {
    setSelectedDate(day);
  }

  function handleTimeSelect(time) {
    setSelectedTime(time);
  };

  function handleStaffSelect(staff) {
    setSelectedStaff(staff);
    setIsDropdownOpen(false);
  }

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
      <section className="calendar-container">
        <Breadcrumb.Root>
          <Breadcrumb.Path />
        </Breadcrumb.Root>
        <h1 className='text-blue-80 title pyschological-support__title'>
          agendamento de atendimento
          <br />
          psicologico
        </h1>
        <h3 className='text-blue-80'>MINHAS INFORMAÇÕES</h3>
        <forms className="calendar__user-forms">
          <Input required id="cpf" ref={cpfRef} placeholder="CPF" />
          <Input required id="nomeMae" onChange={handleChange} placeholder="Nome da Mãe" />
          <Input required id="dataDeNascimento" onChange={handleChange} placeholder="Data de nascimento" />
          <Input required id="tipoDoAtendimento" onChange={handleChange} placeholder="Tipo de atendimento" />
          <Input id="numeroDoCadunico" onChange={handleChange} placeholder="Número do NIS" />
          <Input id="nis" onChange={handleChange} placeholder="Número do CADÚnico" />
          <Input id="enderecoCompleto" onChange={handleChange} placeholder="Endereço Completo" />
          <Input id="atendimentoEspecial" onChange={handleChange} placeholder="Atendimento Especial" />
        </forms>
        <h3 className='text-blue-80 '>ESCOLHA UMA DATA DE ATENDIMNTO</h3>
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

          {/* <div className="time-section">
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
          </div> */}

          {/* <div className="option-section" ref={dropdownRef}>
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
          </div> */}

        </div>

        {(selectedDate && selectedTime && selectedStaff) && (
          <div className="confirmation">
            <p>Agendamento: Dia {selectedDate}, às {selectedTime}, com {selectedStaff.name}</p>
            <Button onClick={handleOnConfirmAppointment} className="confirm-button">Confirmar Agendamento</Button>
          </div>
        )}
      </section>

      <SaveFields text="Seus dados foram registrados com sucesso e serão protegidos de acordo com a LGPD, garantindo segurança e privacidade no seu atendimento." />
    </>


  );

}