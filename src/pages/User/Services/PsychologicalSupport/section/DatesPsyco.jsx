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
// import useMask from '@react-input/mask';
import formatCPF from '@/common/utils/formatCPF';
import useFetch from '@/common/hooks/useFetch';
import getUserToken from '@/common/utils/getUserToken';

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
  const serviceDayRef = useMask({
    mask: "dd/mm/yyyy",
    replacement: { d: /\d/, m: /\d/, y: /\d/ },
    separate: true
  })
  const { data: serviceUnits } = useFetch({
    fnKey: "servicesUnits",
    fnMethod: async () => {
      try {
        const token = getUserToken()
        const serviceUnits = await BackendService.getServiceUnits(token)

        return serviceUnits.data
      } catch (error) {
        return null
      }
    }

  })
  const { data: services } = useFetch({
    fnKey: "servicesUnits",
    fnMethod: async () => {
      try {
        const token = getUserToken()
        const serviceUnits = await BackendService.getServiceUnits(token)

        return serviceUnits.data
      } catch (error) {
        return null
      }
    }
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

  function handleDateSelect(day) {
    setSelectedDate(day);
  }

  async function handleOnSubmit(e) {
    e.preventDefault()

    try {
      console.log("handleOnSubmit foi")
      const token = getUserToken()
      const userId = jwtDecode(token).sub
      console.log(services[0])
      console.log(serviceUnits[0])

      const user = await BackendService.getLoginByToken(userId)

      const newAppointment = {
        CPF: user.cpf,
        nomeMae: formData.nomeMae,
        dataNascimento: user.dataNascimento,
        nis: user.nis,
        telefone1: user.telefone1,
        telefone2: user.telefone2,
        servicoId: services[0],
        unidadeId: serviceUnits[0],
      }

      await BackendService.setAppointment(userId, newAppointment)

      return true
    } catch (error) {
      console.error(error)
      return false
    }
  }

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
      <form onSubmit={handleOnSubmit} className="psycological-support">
        <Breadcrumb.Root>
          <Breadcrumb.Path path="/home" >Inicio</Breadcrumb.Path>
          <Breadcrumb.Path path="/user" >Usuario</Breadcrumb.Path>
          <Breadcrumb.Path path="/user/Services/PsychologicalSupport" isActive >Atendimento Psicologico</Breadcrumb.Path>
        </Breadcrumb.Root>
        <h1 className='text-blue-80 title pyschological-support__title'>
          agendamento de atendimento
          <br />
          psicologico
        </h1>
        <h3 className='text-blue-80'>MINHAS INFORMAÇÕES</h3>
        <form onSubmit={handleOnSubmit} className="calendar__user-forms">
          <Input required id="cpf" ref={cpfRef} placeholder="CPF" />
          <Input required id="nomeMae" onChange={handleChange} placeholder="Nome da Mãe" />
          <Input required id="dataDeNascimento" onChange={handleChange} placeholder="Data de Nascimento" />
          <Input required id="tipoDoAtendimento" onChange={handleChange} placeholder="Tipo de atendimento" />
          <Input id="numeroDoCadunico" onChange={handleChange} placeholder="Número do NIS" />
          <Input id="nis" onChange={handleChange} placeholder="Número do CADÚnico" />
          {/* <Input id="enderecoCompleto" onChange={handleChange} placeholder="Endereço Completo" /> */}
          <Input id="atendimentoEspecial" onChange={handleChange} placeholder="Atendimento Especial" />
          <Input id="dataAtendimento" onChange={handleChange} placeholder="Dia do Atendimento" ref={serviceDayRef} />
        </form>
        <h3 className='text-blue-80 '>ESCOLHA UMA DATA</h3>
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
        </div>

        {(selectedDate && selectedTime && selectedStaff) && (
          <div className="confirmation">
            <p>Agendamento: Dia {selectedDate}, às {selectedTime}, com {selectedStaff.name}</p>
            <Button onClick={handleOnConfirmAppointment} className="confirm-button">Confirmar Agendamento</Button>
          </div>
        )}
        <SaveFields text="Seus dados foram registrados com sucesso e serão protegidos de acordo com a LGPD, garantindo segurança e privacidade no seu atendimento." />
      </form>

    </>


  );

}