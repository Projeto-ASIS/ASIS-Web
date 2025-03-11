import '../AuthLayout.css'

import Logo from '../../../assets/LogoASISCentralizada.png'
import Button from '@/common/components/Button'
import { ChevronLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import Input from '@/common/components/Input'

export default function Signup() {
  console.log("Signup rendered")
  return (
    <div className="UserData">
      <Link to={{ pathname: "/" }}><ChevronLeft className='back' size={60} /></Link>

      <div className="form__title">
        <img style={{ width: '70px', height: '70px' }} src={Logo} alt="" />
        <h1 className='text-blue'>comece agora no ASIS</h1>
        <p className='text-blue-20'>tenha autonomia para acessar, solicitar e acompanhar o que você precisa, de forma simples e segura.</p>
      </div>
      <form action="">
        <div className="flex-fields">
          <Input type="text" id="name" placeholder='Nome Completo' />
          <div className="fields">
            <Input placeholder='CPF' />
            <Input type="password" placeholder='Data de Nascimento' />
          </div>
          <Input id="email" type="email" placeholder='Email' />
          <div className="fields">
            <Input type="password" placeholder='Senha' />
            <Input type="password" placeholder='confirme a Senha' />
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