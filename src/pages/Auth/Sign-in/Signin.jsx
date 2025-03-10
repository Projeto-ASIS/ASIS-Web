import shape from '../../../assets/shapeauth.png'
import Logo from '../../../assets/LogoASISCentralizada.png'
import Button from '@/common/components/Button'
import './Signin.css'
import { LucideCircleChevronLeft } from 'lucide-react'

export default function Signin() {
  return (
    <main className='main'>
      <div className="brand">
        <img src={shape} alt="" />
        <img className="sign-in__logo" src={Logo} alt="" />
      </div>
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
          <a className='text-blue-20'>Esqueci minha senha</a>
          <div className="btns__register">
            <Button type="default">Confirmar Login</Button>
            <Button type="stroked" ><a href="signup" style={{ color: 'var(--color-blue)' }}>Criar uma conta</a></Button>
          </div>
        </form>
      </div>
    </main>

  )
}