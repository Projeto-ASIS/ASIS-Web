import Button from '@/common/components/Button'

import './Hero.css'
import { useUser } from '@/common/contexts/UserProvider'
import getUserToken from '@/common/utils/getUserToken'
import { useNavigate } from 'react-router-dom'

export default function Hero() {
  const navigate = useNavigate()

  function handleOnClickSignUp() {
    const token = getUserToken()

    if (!token) {
      navigate("/sign-up")
    } else {
      navigate("/user")
    }

  }

  function handleOnClickSignIn() {
    const token = getUserToken()

    if (!token) {
      navigate("/sign-in")
    } else {
      navigate("/user")
    }

  }

  return (
    <div data-section-id="INÍCIO" data-section-redirect="#hero" className="hero" id='hero'>
      <section className='hero__content'>
        <h1 className="Hero__title">Facilitando o <span className='text-pink'>Acesso</span> aos seus direitos</h1>
        <h4 className='text-white'>Nós nos comprometemos em ajudá-lo a acessar <br></br>seus direitos de forma fácil e eficiente! </h4>
        <div className="btns__hero">
          <a><Button onClick={handleOnClickSignUp} type='default'>Cadastrar-se</Button></a>
          <a><Button onClick={handleOnClickSignIn} type='stroked' >Fazer login</Button></a>
        </div>
      </section>
    </div>
  )
}