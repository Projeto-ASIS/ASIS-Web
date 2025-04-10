import '../AuthLayout.css'

import { useNavigate } from 'react-router-dom'
import { useMask } from '@react-input/mask'
import useForm from "@/common/hooks/useForm"

import Logo from '../../../assets/LogoASISCentralizada.png'
import { ChevronLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

import Button from '@/common/components/Button'
import Input from '@/common/components/Input'

import * as BackendService from "@/common/services/BackendService"
import convertDateToISO from '@/common/utils/convertDateToISO'
import formatCPF from "@/common/utils/formatCPF"

const INITIAL_FORMDATA = {
  name: "",
  cpf: "",
  email: "",
  birthDayDate: "",
  password: "",
  passwordConfirm: "",
}

export default function Signup() {
  const { formData, setFormData, handleChange } = useForm({
    initialFormData: INITIAL_FORMDATA
  })

  const birthDateDayRef = useMask({
    mask: "dd/mm/yyyy",
    replacement: { d: /\d/, m: /\d/, y: /\d/ },
    separate: true
  })

  const cpfRef = useMask({
    mask: "___.___.___-__",
    replacement: { _: /\d/ }
  })

  const navigate = useNavigate()

  async function handleOnSubmit(e) {
    e.preventDefault()

    try {
      const newUser = {
        name: formData.name,
        email: formData.email,
        cpf: formatCPF(cpfRef.current.value),
        birthDayDate: convertDateToISO(birthDateDayRef.current.value),
        password: formData.password,
        passwordConfirm: formData.passwordConfirm
      }

      const isSuccess = await BackendService.setUser(newUser)
      console.log("newUser", newUser)

      if (isSuccess) {
        navigate("/sign-in")
      }

    } catch (error) {
      console.error(error)
    }
  }

  function handleOnBirthDateDayChange(e) {
    setFormData({ ...formData, [e.target.id]: formattedBirthDateDay })
  }

  console.log("Signup rendered")

  return (
    <div className="UserData">
      <Link to={{ pathname: "/" }}><ChevronLeft className='back' size={36} color='var(--color-blue-80)' /></Link>

      <div className="form__title">
        <h1 className='text-blue-80'>
          comece agora
          <br />no ASIS</h1>
        <p className='text-blue-40 text-semibold text__form'>Tenha autonomia para acessar, solicitar e acompanhar o que você precisa, de forma simples e segura.</p>
      </div>
      <form onSubmit={handleOnSubmit}>
        <div className="flex-fields">
          <Input onChange={handleChange} value={formData.name} type="text" id="name" placeholder='Nome Completo' />
          <div className="fields">
            <Input ref={cpfRef} onChange={handleChange} id="cpf" value={formData.cpf} placeholder='CPF' />
            <Input ref={birthDateDayRef} onChange={handleOnBirthDateDayChange} id="birthDayDate" type="text" placeholder='Data de Nascimento' />
          </div>
          <Input onChange={handleChange} value={formData.email} id="email" type="email" placeholder='Email' />
          <div className="fields">
            <Input onChange={handleChange} id="password" value={formData.password} type="password" placeholder='Senha' />
            <Input onChange={handleChange} id="passwordConfirm" value={formData.passwordConfirm} type="password" placeholder='Confirme a Senha' />
          </div>
        </div>

        <div className="btns__register">
          <Button type="default">Cadastrar-se</Button>
          <Button type="stroked" ><a href="sign-in" style={{ color: 'var(--color-blue)' }}>Já possuo uma conta</a></Button>
        </div>
      </form>
    </div>
  )
}