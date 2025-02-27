import './Signup.css'
import Logo from '../../../assets/LogoASISCentralizada.png'
import Button from '@/common/components/Button'
export default function Signup() {
  return (
    <div className="UserData">
      <img style={{ width: '70px', height: '70px' }} src={Logo} alt="" />
      <div className="form__title">
        <h1 className='text-blue'>comece agora no ASIS</h1>
        <p className='text-blue-20'>tenha autonomia para acessar, solicitar e acompanhar o que você precisa, de forma simples e segura.</p>
      </div>
      <form action="">
        <input type="text" placeholder='Nome' />
        <input type="email" placeholder='Email' />
        <input type="password" placeholder='Senha' />
        <div className="btns__register">
          <Button type="default">Cadastrar-se</Button>
          <Button type="stroked" ><a href="signin" style={{ color: 'var(--color-blue)' }}>Já possuo uma conta</a></Button>
        </div>
      </form>
    </div>
  )
}