
import Logo from '../../../assets/LogoASISCentralizada.png'
import Button from '@/common/components/Button'
import '../AuthLayout.css'
// import { LucideCircleChevronLeft } from 'lucide-react'

export default function Signin() {
  console.log("Signup rendered")
  return (
    <div className="UserData">
      <img style={{ width: '70px', height: '70px' }} src={Logo} alt="" />
      <div className="form__title">
        <h1 className='text-blue'>Faça seu Login!</h1>
        <p className='text-blue-20'>Acesse sua conta e tenha autonomia para solicitar e acompanhar a assistência que você precisa.</p>
      </div>
      <form action="">
        <input type="text" placeholder='Nome' />
        <input type="email" placeholder='Email' />
        <input type="password" placeholder='Senha' />
        <a href='forgot-pass' className='text-blue-20'>Esqueci minha senha</a>
        <div className="btns__register">
          <Button type="default">Confirmar Login</Button>
          <Button type="stroked" ><a href="sign-up" style={{ color: 'var(--color-blue)' }}>Criar uma conta</a></Button>
        </div>
      </form>
    </div>
  )
}