
import Logo from '../../../assets/LogoASISCentralizada.png'
import Button from '@/common/components/Button'
import '../AuthLayout.css'
import { Link } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'
import Input from '@/common/components/Input'
// import { LucideCircleChevronLeft } from 'lucide-react'

export default function Signin() {
  console.log("Signup rendered")
  return (
    <div className="UserData">
        <Link to={{pathname:"/"}}><ChevronLeft className='back' size={60}/></Link> 
      
      <div className="form__title">
      <img style={{ width: '70px', height: '70px' }} src={Logo} alt="" />
        <h1 className='text-blue'>Faça seu Login!</h1>
        <p className='text-blue-20 text__form'>Acesse sua conta e tenha autonomia para solicitar e acompanhar a assistência que você precisa.</p>
      </div>
      <form action="">
        <div className="flex-fields">
          <Input type="cpf" placeholder='CPF' />
          <Input type="password" placeholder='SENHA' />
        </div>
        {/* Utiliza o component Input dentro de common. */}
        
        <a href='forgot-pass' className='text-blue-20'>Esqueci minha senha</a>
        <div className="btns__register">
          <Button type="default">Confirmar Login</Button>
          <Button type="stroked" ><a href="sign-up" style={{ color: 'var(--color-blue)' }}>Criar uma conta</a></Button>
        </div>
      </form>
    </div>
  )
}